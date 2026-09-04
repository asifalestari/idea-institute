'use client'

import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import CTABanner from '@/components/sections/CTABanner'
import { useLanguage } from '@/context/LanguageContext'

const vocationalTracks = [
  {
    title: 'Hospitality & Culinary Arts',
    desc: 'International hotel management, food preparation, guest service standards, and HACCP food safety certification.',
    duration: '6 – 12 Months',
    career: 'Hotel Management, Chef, F&B Supervisor',
    badgeBg: 'bg-orange-50 text-[#F4A019]',
    borderColor: 'border-amber-200/90',
    hoverBorder: 'hover:border-[#F4A019]',
    img: '/images/hero-vocational.jpg',
  },
  {
    title: 'Information Technology & Software',
    desc: 'Web development, IT support, cloud basics, networking, and international technical certification preparation.',
    duration: '6 – 12 Months',
    career: 'Junior Developer, IT Support Specialist',
    badgeBg: 'bg-blue-50 text-[#002798]',
    borderColor: 'border-blue-200/90',
    hoverBorder: 'hover:border-[#002798]',
    img: '/images/hero-about.jpg',
  },
  {
    title: 'Business Administration & Digital Operations',
    desc: 'Modern workplace management, office software mastery, project coordination, and international business communication.',
    duration: '6 Months',
    career: 'Operations Assistant, Executive Admin',
    badgeBg: 'bg-red-50 text-[#DC1E13]',
    borderColor: 'border-red-200/90',
    hoverBorder: 'hover:border-[#DC1E13]',
    img: '/images/about-consultation.jpg',
  },
]

export default function VocationalCoursePage() {
  const { t } = useLanguage()

  const pathwaySteps = [
    {
      step: t.vocationalPage.step1Title,
      desc: t.vocationalPage.step1Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      step: t.vocationalPage.step2Title,
      desc: t.vocationalPage.step2Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    {
      step: t.vocationalPage.step3Title,
      desc: t.vocationalPage.step3Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      step: t.vocationalPage.step4Title,
      desc: t.vocationalPage.step4Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION ── */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={80}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-orange-50 text-xs font-extrabold uppercase tracking-widest text-[#F4A019]">
                  {t.vocationalPage.badge}
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-[#F4A019] tracking-tight leading-tight mt-2">
                  {t.vocationalPage.heroTitle}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                  {t.vocationalPage.heroSubtitle}
                </p>
              </Reveal>

              {/* Checklist */}
              <Reveal delay={240}>
                <ul className="space-y-3 pt-2">
                  {[
                    t.vocationalPage.check1,
                    t.vocationalPage.check2,
                    t.vocationalPage.check3,
                    t.vocationalPage.check4,
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-[#F4A019] text-white flex items-center justify-center text-xs shrink-0 shadow-sm">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Buttons */}
              <Reveal delay={320}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#tracks"
                    className="px-8 py-4 rounded-2xl text-xs font-bold text-white bg-[#F4A019] hover:bg-[#d98c12] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    {t.vocationalPage.tracksTitle}
                  </a>
                  <a
                    href="https://wa.me/6281297654332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-2xl text-xs font-bold text-[#002798] bg-white border border-[#002798] hover:bg-blue-50 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow transition-all duration-200"
                  >
                    {t.common.talkToUs}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Layered Editorial Collage */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={200} direction="left" className="relative w-full max-w-md">
                <div className="relative">
                  {/* Main Large Photo */}
                  <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                    <Image
                      src="/images/hero-vocational.jpg"
                      alt="IDEA Vocational Students Workshop"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#F4A019] text-gray-950 text-[10px] font-black uppercase tracking-wider mb-1 shadow-sm">
                          Practical Lab
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                          Hands-on Technical Training
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Metric Badge Top Left */}
                  <div className="absolute -top-4 -left-4 bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-subtle-float z-20">
                    <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#F4A019] flex items-center justify-center text-base font-bold shrink-0">
                      🛠️
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900 leading-tight">Industry Ready</p>
                      <p className="text-[10px] text-gray-500">Certified Curriculum</p>
                    </div>
                  </div>

                  {/* Floating Global Opportunities Pill */}
                  <div className="absolute -bottom-4 -right-3 bg-[#002798] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
                    <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-sm font-bold shrink-0">
                      💼
                    </div>
                    <div>
                      <p className="text-xs font-black leading-tight">Career Placement</p>
                      <p className="text-[10px] text-blue-200">Global Internship</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. THREE VOCATIONAL TRACKS (HIGH-IMPACT CARDS WITH VISIBLE BORDERS & PHOTOS) ── */}
      <section id="tracks" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                {t.vocationalPage.badge}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798]">
                {t.vocationalPage.tracksTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {vocationalTracks.map((track, idx) => (
              <Reveal key={track.title} delay={idx * 80}>
                <div
                  className={`group bg-white rounded-3xl border ${track.borderColor} ${track.hoverBorder} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full`}
                >
                  {/* Track Photo on Top */}
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={track.img}
                      alt={track.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-xl text-xs font-bold ${track.badgeBg} shadow-sm backdrop-blur-md bg-white/95`}>
                        {track.duration}
                      </span>
                    </div>
                  </div>

                  {/* Track Info */}
                  <div className="p-6 sm:p-7 space-y-4 flex flex-col justify-between grow">
                    <div className="space-y-2">
                      <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-[#002798] transition-colors">
                        {track.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#F4A019] flex items-center gap-1.5">
                        <span>🎯</span>
                        <span>{track.career}</span>
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                        {track.desc}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-gray-100">
                      <a
                        href="https://wa.me/6281297654332"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-sm hover:shadow group-hover:bg-[#F4A019] group-hover:text-gray-900 transition-all duration-200"
                      >
                        <span>{t.common.consultFree}</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FOUR-STEP PATHWAY (WITH VISIBLE 1PX BORDER) ── */}
      <section className="py-20 bg-[#FFFDF9] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                HOW IT WORKS
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {t.vocationalPage.stepTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pathwaySteps.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 80}>
                <div className="bg-white rounded-3xl p-6 border border-orange-100/90 shadow-sm hover:border-[#F4A019] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-3 h-full group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F4A019] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F4A019] group-hover:text-white transition-all shadow-sm">
                    {s.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900 leading-snug">{s.step}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CTA BANNER ── */}
      <CTABanner
        eyebrow={t.home.ctaEyebrow}
        headline={t.home.ctaHeadline}
        subtext={t.home.ctaSubtext}
      />
    </div>
  )
}
