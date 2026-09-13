'use client'

// src/app/page.tsx
// Halaman Utama Gate-Form IDEA Institut — Fixed Internal Routes for Study & Work

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

export default function HomePage() {
  const { language } = useLanguage()
  const router = useRouter()

  const [unlocked, setUnlocked] = useState(false)
  const [userProfile, setUserProfile] = useState<{ fullName: string; email: string } | null>(null)

  // Form State
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)

  // Selected Country untuk Vocational Education Training
  const [selectedCountry, setSelectedCountry] = useState<'australia' | 'jerman' | 'oecd'>('australia')

  // Dictionary Teks Multi-Bahasa
  const content = {
    id: {
      gateTitle: 'Buka Akses Informasi 3 Program Utama',
      gateSubtitle:
        'Sebelum dapat mengakses menu program, silakan isi nama lengkap dan email Anda di bawah ini untuk verifikasi dan panduan langsung dari tim konsultan kami.',
      nameLabel: 'NAMA LENGKAP',
      namePlaceholder: 'Masukkan nama lengkap Anda',
      emailLabel: 'ALAMAT EMAIL AKTIF',
      emailPlaceholder: 'nama@email.com',
      submitBtn: 'Buka Akses 3 Program Sekarang',
      submittingBtn: 'Membuka Akses...',
      secureNotice: 'Data Anda aman. Notifikasi otomatis diteruskan ke admin konselor kami.',
      lockedPreview: 'Menu yang akan terbuka setelah mengisi form:',

      unlockedStatus: 'Akses Terbuka untuk:',
      unlockedSub: 'Silakan pilih salah satu dari 3 program utama di bawah ini untuk menuju portal informasi resmi.',
      resetBtn: 'Ganti Identitas / Reset',

      eyebrow: 'PILIH JALUR ANDA',
      mainTitle: 'Temukan Program yang Tepat untuk Anda',

      // Card 1
      langTitle: 'Language Course',
      langDesc:
        'Kuasai bahasa internasional dengan metode interaktif, pengajar bersertifikat, dan standar CEFR resmi.',
      langLink: 'Lihat Kursus Bahasa →',

      // Card 2
      vocTitle: 'Vocational Course',
      vocDesc:
        'Bangun keterampilan praktis dan kejuruan yang siap pakai untuk industri nyata serta sertifikasi global.',
      vocLink: 'Lihat Pelatihan Kejuruan →',

      // Card 3
      studyTitle: 'Study & Work Program',
      studyDesc:
        'Kuliah di luar negeri sambil mendapatkan pengalaman kerja berbayar di Jerman, Australia, dan negara OECD.',
      studyLink: 'Lihat Program Study & Work →',
    },
    en: {
      gateTitle: 'Unlock Access to 3 Core Programs',
      gateSubtitle:
        'Before accessing our program menu, please provide your full name and email for verification and personalized guidance from our consultants.',
      nameLabel: 'FULL NAME',
      namePlaceholder: 'Enter your full name',
      emailLabel: 'ACTIVE EMAIL ADDRESS',
      emailPlaceholder: 'name@email.com',
      submitBtn: 'Unlock 3 Programs Now',
      submittingBtn: 'Unlocking Access...',
      secureNotice: 'Your data is secure. Automated notifications are sent to our counselors.',
      lockedPreview: 'Programs unlocked after submitting form:',

      unlockedStatus: 'Access Unlocked for:',
      unlockedSub: 'Please select one of the 3 main programs below to visit the official portal.',
      resetBtn: 'Change Identity / Reset',

      eyebrow: 'CHOOSE YOUR PATH',
      mainTitle: 'Find the Right Program for You',

      // Card 1
      langTitle: 'Language Course',
      langDesc:
        'Master international languages with interactive methods, certified tutors, and official CEFR standards.',
      langLink: 'View Language Courses →',

      // Card 2
      vocTitle: 'Vocational Course',
      vocDesc:
        'Build practical and vocational skills ready for real industries with global certification.',
      vocLink: 'View Vocational Training →',

      // Card 3
      studyTitle: 'Study & Work Program',
      studyDesc:
        'Study abroad while gaining paid work experience in Germany, Australia, and OECD nations.',
      studyLink: 'View Study & Work Program →',
    },
  }

  const text = content[language === 'en' ? 'en' : 'id']

  // Multi-Image Array pendukung CMS
  const programImages = {
    language: ['/images/hero-language-course.jpg'],
    vocational: ['/images/hero-vocational.jpg'],
    studyWork: ['/images/hero-study-work.jpg'],
  }

  useEffect(() => {
    try {
      const stored = localStorage.getItem('idea_portal_user')
      if (stored) {
        const parsed = JSON.parse(stored)
        if (parsed.fullName && parsed.email) {
          setUserProfile(parsed)
          setUnlocked(true)
        }
      }
    } catch { }
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setFormError(null)

    if (!fullName.trim()) {
      setFormError('Silakan masukkan nama lengkap Anda.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim() || !emailRegex.test(email)) {
      setFormError('Silakan masukkan format alamat email yang valid.')
      return
    }

    setSubmitting(true)

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName: fullName.trim(),
          email: email.trim().toLowerCase(),
          programInterest: 'Portal 3 Program (Gated Access)',
          consentGiven: true,
          sourcePage: '/',
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        const profile = { fullName: fullName.trim(), email: email.trim().toLowerCase() }
        setUserProfile(profile)
        setUnlocked(true)
        try {
          localStorage.setItem('idea_portal_user', JSON.stringify(profile))
          window.dispatchEvent(new Event('storage'))
        } catch { }
      } else {
        setFormError(data.message || data.errors?.email || 'Terjadi kesalahan saat memproses data.')
      }
    } catch {
      setFormError('Gagal terhubung ke server. Silakan coba lagi.')
    } finally {
      setSubmitting(false)
    }
  }

  function handleReset() {
    try {
      localStorage.removeItem('idea_portal_user')
      window.dispatchEvent(new Event('storage'))
    } catch { }
    setUnlocked(false)
    setUserProfile(null)
  }

  const getVocationalUrl = () => {
    switch (selectedCountry) {
      case 'jerman':
        return '/vocational-course/jerman'
      case 'oecd':
        return '/vocational-course/oecd'
      case 'australia':
      default:
        return '/vocational-course/australia'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50/50 pt-28 pb-20 flex flex-col justify-center font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {!unlocked ? (
          /* ── GATE FORM ── */
          <div className="max-w-xl mx-auto py-6">
            <div className="bg-white rounded-[20px] border border-gray-100 shadow-xl p-8 sm:p-10 space-y-7">
              <div className="text-center space-y-3">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#002798] text-[11px] font-black uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-[#002798] animate-pulse" />
                  IDEA INSTITUT • PORTAL RESMI
                </span>
                <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-snug">
                  {text.gateTitle}
                </h1>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md mx-auto">
                  {text.gateSubtitle}
                </p>
              </div>

              {formError && (
                <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                  <span>⚠️</span>
                  <span>{formError}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {text.nameLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={text.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#002798] focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {text.emailLabel} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={text.emailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#002798] focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#002798] hover:bg-[#001a6e] transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {submitting ? text.submittingBtn : `${text.submitBtn} →`}
                  </button>
                </div>

                <div className="text-center pt-2">
                  <p className="text-[11px] text-gray-500 flex items-center justify-center gap-1.5">
                    <span>🔒</span>
                    <span>{text.secureNotice}</span>
                  </p>
                </div>
              </form>

              <div className="pt-4 border-t border-gray-100 text-center">
                <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
                  {text.lockedPreview}
                </p>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  <span className="py-1 px-2 rounded-lg bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-500">
                    🔒 Language Course
                  </span>
                  <span className="py-1 px-2 rounded-lg bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-500">
                    🔒 Vocational Course
                  </span>
                  <span className="py-1 px-2 rounded-lg bg-gray-50 border border-gray-200 text-[10px] font-bold text-gray-500">
                    🔒 Study & Work
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ── UNLOCKED CARDS (RADIUS 20PX & CLEAN DIVIDER) ── */
          <div className="space-y-10 py-4 animate-fade-in">
            {/* Status Akses Unlocked */}
            <div className="bg-blue-50/60 border border-blue-100 p-4 sm:p-5 rounded-[20px] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-center sm:text-left">
                <div className="w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0 text-xs">
                  ✓
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-gray-900">
                    {text.unlockedStatus} <span className="text-[#002798]">{userProfile?.fullName}</span>{' '}
                    <span className="text-gray-500 font-normal">({userProfile?.email})</span>
                  </p>
                  <p className="text-[11px] text-gray-600 mt-0.5">{text.unlockedSub}</p>
                </div>
              </div>

              <button
                onClick={handleReset}
                className="px-3 py-1.5 rounded-xl text-[11px] font-bold text-gray-600 hover:text-gray-900 bg-white border border-gray-200 hover:bg-gray-50 transition-all shrink-0"
              >
                {text.resetBtn}
              </button>
            </div>

            {/* Header Section */}
            <div className="text-center space-y-2">
              <p className="text-xs font-black uppercase tracking-widest text-[#DC1E13]">
                {text.eyebrow}
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                {text.mainTitle}
              </h2>
            </div>

            {/* 3 Main Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

              {/* ── CARD 1: LANGUAGE COURSE (EXTERNAL LINK FIXED) ── */}
              <div className="bg-[#F8F9FE] border border-blue-100/80 rounded-[20px] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div className="space-y-5">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={programImages.language[0]}
                      alt="Language Course"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-[#002798] text-[10px] font-black uppercase tracking-wider shadow-md">
                        <span className="w-2 h-2 rounded-full bg-[#002798]" />
                        LANGUAGE COURSE
                      </span>
                    </div>
                  </div>

                  <div className="px-6 space-y-2">
                    <h3 className="text-xl font-extrabold text-[#002798]">
                      {text.langTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {text.langDesc}
                    </p>
                  </div>
                </div>

                {/* Garis Pembatas + Tombol Eksternal ke IALC */}
                <div className="p-6 pt-4">
                  <div className="border-t border-blue-100/80 mb-4" />
                  <a
                    href="https://www.ialc.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002798] hover:gap-2.5 transition-all cursor-pointer"
                  >
                    <span>{text.langLink}</span>
                  </a>
                </div>
              </div>
              {/* ── CARD 2: VOCATIONAL COURSE ── */}
              <div className="bg-[#FCFBF4] border border-amber-100/80 rounded-[20px] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div className="space-y-5">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={programImages.vocational[0]}
                      alt="Vocational Course"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-[#D97706] text-[10px] font-black uppercase tracking-wider shadow-md">
                        <span className="w-2 h-2 rounded-full bg-[#D97706]" />
                        VOCATIONAL COURSE
                      </span>
                    </div>
                  </div>

                  <div className="px-6 space-y-3">
                    <h3 className="text-xl font-extrabold text-[#D97706]">
                      {text.vocTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {text.vocDesc}
                    </p>

                    <div className="pt-1 space-y-1.5">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                        Pilih Destinasi Negara:
                      </p>
                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => setSelectedCountry('australia')}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${selectedCountry === 'australia'
                            ? 'bg-[#D97706] text-white'
                            : 'bg-white text-gray-600 border border-gray-200'
                            }`}
                        >
                          🇦🇺 Australia
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedCountry('jerman')}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${selectedCountry === 'jerman'
                            ? 'bg-[#D97706] text-white'
                            : 'bg-white text-gray-600 border border-gray-200'
                            }`}
                        >
                          🇩🇪 Jerman
                        </button>
                        <button
                          type="button"
                          onClick={() => setSelectedCountry('oecd')}
                          className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${selectedCountry === 'oecd'
                            ? 'bg-[#D97706] text-white'
                            : 'bg-white text-gray-600 border border-gray-200'
                            }`}
                        >
                          🌐 OECD
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Garis Pembatas + Tombol */}
                <div className="p-6 pt-4">
                  <div className="border-t border-amber-200/60 mb-4" />
                  <Link
                    href={getVocationalUrl()}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#D97706] hover:gap-2.5 transition-all"
                  >
                    <span>{text.vocLink} ({selectedCountry.toUpperCase()})</span>
                  </Link>
                </div>
              </div>

              {/* ── CARD 3: STUDY & WORK PROGRAM (FIXED ROUTING TO /study-work) ── */}
              <div className="bg-[#FDF6F6] border border-red-100/80 rounded-[20px] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                <div className="space-y-5">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={programImages.studyWork[0]}
                      alt="Study & Work Program"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/95 text-[#DC1E13] text-[10px] font-black uppercase tracking-wider shadow-md">
                        <span className="w-2 h-2 rounded-full bg-[#DC1E13]" />
                        STUDY & WORK
                      </span>
                    </div>
                  </div>

                  <div className="px-6 space-y-2">
                    <h3 className="text-xl font-extrabold text-[#DC1E13]">
                      {text.studyTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {text.studyDesc}
                    </p>
                  </div>
                </div>

                {/* Garis Pembatas + Tombol Rute Internal Next.js */}
                <div className="p-6 pt-4">
                  <div className="border-t border-red-100/80 mb-4" />
                  <Link
                    href="/study-work"
                    onClick={(e) => {
                      e.preventDefault()
                      router.push('/study-work')
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#DC1E13] hover:gap-2.5 transition-all cursor-pointer"
                  >
                    <span>{text.studyLink}</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>
    </div>
  )
}