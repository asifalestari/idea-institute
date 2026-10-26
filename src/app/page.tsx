'use client'

// src/app/page.tsx
// Halaman Utama IDEA Institut — Interactive Language Course & Vocational Course Cards

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'

export default function HomePage() {
  const { language } = useLanguage()
  const router = useRouter()

  // State untuk pilihan bahasa dan destinasi negara
  const [selectedLanguage, setSelectedLanguage] = useState<'english' | 'german' | 'spanish' | 'french' | 'chinese' | 'japanese'>('english')
  const [selectedCountry, setSelectedCountry] = useState<'australia' | 'jerman' | 'oecd'>('australia')

  // Dictionary Teks Multi-Bahasa
  const content = {
    id: {
      eyebrow: 'PILIH JALUR ANDA',
      mainTitle: 'Temukan Program yang Tepat untuk Anda',
      subtitle: 'Pilih salah satu dari 3 program utama di bawah ini untuk melihat detail pilihan bahasa, destinasi negara, dan formulir pendaftaran langsung.',

      // Card 1: Language Course
      langTitle: 'Language Course',
      langDesc: 'Kuasai bahasa internasional pilihan Anda dengan metode interaktif, pengajar bersertifikat, dan standar CEFR resmi.',
      langLink: 'Lihat Kursus Bahasa',

      // Card 2: Vocational Course
      vocTitle: 'Vocational Course',
      vocDesc: 'Bangun keterampilan praktis dan kejuruan siap pakai untuk industri global dengan sertifikasi internasional.',
      vocLink: 'Lihat Pelatihan Kejuruan',

      // Card 3: Study & Work Program
      studyTitle: 'Study & Work Program',
      studyDesc: 'Kuliah di luar negeri sambil mendapatkan pengalaman kerja berbayar di Jerman, Australia, dan negara OECD.',
      studyLink: 'Lihat Program Study & Work →',
    },
    en: {
      eyebrow: 'CHOOSE YOUR PATH',
      mainTitle: 'Find the Right Program for You',
      subtitle: 'Select one of the 3 main programs below to explore language choices, country destinations, and direct registration forms.',

      // Card 1: Language Course
      langTitle: 'Language Course',
      langDesc: 'Master international languages with interactive methods, certified tutors, and official CEFR standards.',
      langLink: 'View Language Course',

      // Card 2: Vocational Course
      vocTitle: 'Vocational Course',
      vocDesc: 'Build practical and vocational skills ready for real industries with global certification.',
      vocLink: 'View Vocational Training',

      // Card 3: Study & Work Program
      studyTitle: 'Study & Work Program',
      studyDesc: 'Study abroad while gaining paid work experience in Germany, Australia, and OECD nations.',
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

  const getLanguageUrl = () => {
    return `/language-course/${selectedLanguage}`
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

  const languageOptions = [
    { id: 'english', label: 'English' },
    { id: 'german', label: 'German' },
    { id: 'spanish', label: 'Spanish' },
    { id: 'french', label: 'French' },
    { id: 'chinese', label: 'Chinese' },
    { id: 'japanese', label: 'Japanese' },
  ]

  return (
    <div className="min-h-screen bg-gray-50/50 pt-28 pb-20 flex flex-col justify-center font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-10 py-4 animate-fade-in">

        {/* Header Section */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 text-[#002798] text-[11px] font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#002798] animate-pulse" />
            IDEA INSTITUT • PORTAL RESMI
          </span>
          <p className="text-xs font-black uppercase tracking-widest text-[#DC1E13]">
            {text.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {text.mainTitle}
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
            {text.subtitle}
          </p>
        </div>

        {/* 3 Main Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">

          {/* ── CARD 1: LANGUAGE COURSE (INTERACTIVE LANGUAGE SELECTION) ── */}
          <div className="bg-[#F8F9FE] border border-blue-100/80 rounded-[20px] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div className="space-y-4">
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

              <div className="px-6 space-y-2.5">
                <h3 className="text-xl font-extrabold text-[#002798]">
                  {text.langTitle}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {text.langDesc}
                </p>

                {/* Pilihan Bahasa Interaktif */}
                <div className="pt-1 space-y-1.5">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Pilih Bahasa:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {languageOptions.map((lang) => (
                      <button
                        key={lang.id}
                        type="button"
                        onClick={() => setSelectedLanguage(lang.id as any)}
                        className={`px-2.5 py-1 rounded-lg text-[10px] font-bold transition-all ${selectedLanguage === lang.id
                            ? 'bg-[#002798] text-white shadow-sm'
                            : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-200'
                          }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Garis Pembatas + Tombol */}
            <div className="p-6 pt-4">
              <div className="border-t border-blue-100/80 mb-4" />
              <Link
                href={getLanguageUrl()}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-[#002798] hover:gap-2.5 transition-all"
              >
                <span>{text.langLink} → ({selectedLanguage.toUpperCase()})</span>
              </Link>
            </div>
          </div>

          {/* ── CARD 2: VOCATIONAL COURSE ── */}
          <div className="bg-[#FCFBF4] border border-amber-100/80 rounded-[20px] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div className="space-y-4">
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

              <div className="px-6 space-y-2.5">
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
                <span>{text.vocLink} → ({selectedCountry.toUpperCase()})</span>
              </Link>
            </div>
          </div>

          {/* ── CARD 3: STUDY & WORK PROGRAM ── */}
          <div className="bg-[#FDF6F6] border border-red-100/80 rounded-[20px] overflow-hidden flex flex-col justify-between hover:shadow-xl transition-all duration-300">
            <div className="space-y-4">
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

              <div className="px-6 space-y-2.5">
                <h3 className="text-xl font-extrabold text-[#DC1E13]">
                  {text.studyTitle}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {text.studyDesc}
                </p>
              </div>
            </div>

            {/* Garis Pembatas + Tombol */}
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
    </div>
  )
}