'use client'

// src/app/study-work/page.tsx
// Study & Work Page — Clean Pure White Theme (No Outer Borders), Dynamic Sub-Descriptions & Sleek Slide Gallery

import { useState } from 'react'
import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import CTABanner from '@/components/sections/CTABanner'
import { useLanguage } from '@/context/LanguageContext'

export default function StudyWorkPage() {
  const { language } = useLanguage()

  // ── KONFIGURASI KONTEN CMS FLEXIBLE ──
  const cmsConfig = {
    // 1. KONTROL & TEKS KEUNGGULAN UTAMA
    showAdvantages: true,
    advantagesSubtitle:
      language === 'en'
        ? 'Comprehensive legal support, subsidised education, and strategic global career placement tailored for your future.'
        : 'Dukungan legalitas resmi, efisiensi biaya pendidikan, dan strategi penempatan karir global jangka panjang untuk masa depan Anda.',

    advantages: [
      {
        icon: '⚖️',
        title: language === 'en' ? 'Legal Work Rights' : 'Izin Kerja Resmi Legal',
        desc: language === 'en' ? 'Official part-time work & paid industrial internships.' : 'Izin Part-time Work & Magang Industri Berbayar dengan gaji standar resmi.',
      },
      {
        icon: '💰',
        title: language === 'en' ? 'Affordable Living' : 'Subsidi & Biaya Terjangkau',
        desc: language === 'en' ? 'Tuition fee subsidies & affordable living in Germany, AU & OECD.' : 'Kuliah bebas SPP / terjangkau serta biaya hidup yang dapat tertutup dari gaji.',
      },
      {
        icon: '🎓',
        title: language === 'en' ? 'Accredited Curriculum' : 'Kurikulum Terakreditasi',
        desc: language === 'en' ? 'Hands-on practical training aligned with global frameworks.' : 'Pelatihan vokasi praktis yang diakui kerangka kualifikasi internasional.',
      },
      {
        icon: '🚀',
        title: language === 'en' ? 'Post-Study Career' : 'Peluang Karir Global',
        desc: language === 'en' ? 'Post-study work visas up to 18 months and full job placement.' : 'Akses Post-Study Work Visa hingga 18 bulan dan penempatan karir jangka panjang.',
      },
    ],

    // 2. KONTROL & TEKS PRESENTASI SLIDE ALUR
    slidesSubtitle:
      language === 'en'
        ? 'Step-by-step visual presentation from preparation, language bridging, to university enrollment and work pathways.'
        : 'Presentasi alur langkah visual terstruktur mulai dari persiapan bahasa, sertifikasi keahlian, hingga perkuliahan dan magang.',

    slides: [
      {
        id: 1,
        src: '/images/hero-study-work.jpg',
        title: language === 'en' ? 'Global Pathway Overview' : 'Gambaran Umum Alur Global',
        caption: language === 'en' ? 'Study & Work in Germany, Australia, and OECD Nations' : 'Studi Sambil Kerja di Jerman, Australia, dan Negara OECD',
      },
      {
        id: 2,
        src: '/images/hero-vocational.jpg',
        title: language === 'en' ? 'Step 1: Preparation & Bridging' : 'Langkah 1: Persiapan & Bridging Program',
        caption: language === 'en' ? 'Intensive Language Training & Vocational Certification' : 'Pelatihan Bahasa Intensif & Sertifikasi Keahlian Terapan',
      },
      {
        id: 3,
        src: '/images/about-consultation.jpg',
        title: language === 'en' ? 'Step 2: Dual Study & Paid Work' : 'Langkah 2: Dual Study & Magang Berbayar',
        caption: language === 'en' ? 'Ausbildung in Germany or Part-Time Work in Australia' : 'Sistem Dual/Ausbildung Jerman atau Part-Time Work Australia',
      },
      {
        id: 4,
        src: '/images/hero-language-course.jpg',
        title: language === 'en' ? 'Step 3: Post-Study Career Rights' : 'Langkah 3: Karir & Post-Study Work',
        caption: language === 'en' ? 'Up to 18-month job seeker visa & permanent placement' : 'Visa pencari kerja hingga 18 bulan & penempatan karir',
      },
    ],
  }

  const [activeSlideIdx, setActiveSlideIdx] = useState(0)

  return (
    <div className="bg-white font-sans overflow-x-hidden">
      {/* ── 1. HERO SECTION ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-[#FDF6F6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#DC1E13] text-[11px] font-black uppercase tracking-wider border border-red-200/80">
              LEAPING CONCEPT • STUDY &amp; WORK PROGRAM
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-normal leading-tight">
              Panduan Studi Sambil Kerja <br />
              <span className="text-[#DC1E13]">Australia, Jerman &amp; OECD</span>
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl mx-auto">
              Program terpadu persiapan bahasa, pelatihan vokasi terapan, hingga penempatan kerja resmi di luar negeri.
            </p>
          </div>
        </div>
      </section>

      {/* ── 2. KEUNGGULAN UTAMA (BACKGROUND PUTIH BERSIH TANPA BORDER OUTER) ── */}
      {cmsConfig.showAdvantages && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

            {/* Header Section dengan Sub-deskripsi CMS Ready */}
            <Reveal>
              <div className="text-center space-y-3">
                <span className="inline-block px-4 py-1 rounded-full bg-red-50 text-[#DC1E13] text-[10px] font-black uppercase tracking-wider border border-red-200/80">
                  PROGRAM ADVANTAGES
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-normal">
                  Keunggulan Utama Program Studi Sambil Kerja
                </h2>

                {/* Sub-deskripsi (Hanya tampil jika diisi di CMS) */}
                {cmsConfig.advantagesSubtitle && (
                  <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed pt-1">
                    {cmsConfig.advantagesSubtitle}
                  </p>
                )}
              </div>
            </Reveal>

            {/* Grid 4 Card Keunggulan Elegan */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {cmsConfig.advantages.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 60}>
                  <div className="bg-[#FAF9F9] border border-red-100/80 rounded-[20px] p-6 hover:border-[#DC1E13] hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full space-y-3">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-white border border-red-100 flex items-center justify-center text-xl shadow-2xs">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-extrabold text-gray-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. PRESENTASI SLIDE GALLERY (BACKGROUND PUTIH BERSIH TANPA BORDER OUTER) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          {/* Header Section dengan Sub-deskripsi CMS Ready */}
          <Reveal>
            <div className="text-center space-y-3">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-[#DC1E13] text-[11px] font-black uppercase tracking-wider border border-red-200/80">
                PRESENTASI ALUR PROGRAM
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-normal">
                Bagan &amp; Slide Alur Studi
              </h2>

              {/* Sub-deskripsi (Hanya tampil jika diisi di CMS) */}
              {cmsConfig.slidesSubtitle && (
                <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed pt-1">
                  {cmsConfig.slidesSubtitle}
                </p>
              )}
            </div>
          </Reveal>

          {/* Grid Split 8-4 Menyamping Tanpa Border Outer Raksasa */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Display Gambar Utama (Kolom Kiri - 8/12) */}
            <div className="lg:col-span-8 space-y-4">
              <div className="relative w-full h-80 sm:h-[460px] rounded-[24px] overflow-hidden bg-gray-50 shadow-sm border border-gray-200/80 group">
                <Image
                  src={cmsConfig.slides[activeSlideIdx].src}
                  alt={cmsConfig.slides[activeSlideIdx].title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Navigasi Panah Cepat */}
                <button
                  onClick={() => setActiveSlideIdx((prev) => (prev > 0 ? prev - 1 : cmsConfig.slides.length - 1))}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#DC1E13] transition-all shadow-md"
                >
                  ‹
                </button>
                <button
                  onClick={() => setActiveSlideIdx((prev) => (prev < cmsConfig.slides.length - 1 ? prev + 1 : 0))}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#DC1E13] transition-all shadow-md"
                >
                  ›
                </button>
              </div>

              {/* Info Caption Slide Aktif */}
              <div className="flex items-center justify-between px-2 pt-1">
                <div>
                  <h3 className="text-sm font-extrabold text-gray-900">
                    {cmsConfig.slides[activeSlideIdx].title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {cmsConfig.slides[activeSlideIdx].caption}
                  </p>
                </div>
                <span className="text-xs font-black text-[#DC1E13] bg-red-50 px-3.5 py-1 rounded-full border border-red-200">
                  Slide {activeSlideIdx + 1} / {cmsConfig.slides.length}
                </span>
              </div>
            </div>

            {/* Panel Navigasi Thumbnail Kanan (Kolom Kanan - 4/12) */}
            <div className="lg:col-span-4 space-y-3">
              <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-1">
                Daftar Slide ({cmsConfig.slides.length}):
              </p>

              {/* Panel Scrollable Kanan (Dukungan >3 Gambar) */}
              <div className="max-h-[460px] overflow-y-auto space-y-3 pr-1">
                {cmsConfig.slides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setActiveSlideIdx(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 ${activeSlideIdx === idx
                      ? 'bg-white border-[#DC1E13] shadow-md ring-2 ring-red-100'
                      : 'bg-gray-50/80 border-gray-200/70 hover:bg-white hover:border-red-200'
                      }`}
                  >
                    <div className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${activeSlideIdx === idx ? 'bg-[#DC1E13] text-white' : 'bg-gray-200 text-gray-600'
                      }`}>
                      {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="text-xs font-extrabold text-gray-900 leading-tight truncate">
                        {slide.title}
                      </h4>
                      <p className="text-[11px] text-gray-500 truncate mt-0.5">
                        {slide.caption}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}