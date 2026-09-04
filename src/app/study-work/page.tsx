'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import CTABanner from '@/components/sections/CTABanner'
import { useLanguage } from '@/context/LanguageContext'

const destinations = [
  {
    slug: 'germany',
    title: 'Germany',
    tagline: 'Europe’s Economic Engine',
    desc: 'World-class tuition-free university options, dual study-work systems, and 18-month post-study job seeker visa.',
    color: '#DC1E13',
    bgColor: '#FFF0F0',
    borderColor: 'border-red-200/90',
    hoverBorder: 'hover:border-[#DC1E13]',
    badgeBg: 'bg-red-50 text-[#DC1E13]',
    img: '/images/lang-german.jpg',
    features: ['Tuition-Free / Low Cost', '18-Month Work Visa', 'Dual Vocational (Ausbildung)'],
  },
  {
    slug: 'australia',
    title: 'Australia',
    tagline: 'Global Lifestyle & Top Universities',
    desc: 'High-quality education, flexible student working hours, high minimum wage, and generous post-study work rights.',
    color: '#002798',
    bgColor: '#EEF4FF',
    borderColor: 'border-blue-200/90',
    hoverBorder: 'hover:border-[#002798]',
    badgeBg: 'bg-blue-50 text-[#002798]',
    img: '/images/hero-study-work.jpg',
    features: ['Flexible Work Rights', 'Post-Study Work Visas', 'Top 100 World Universities'],
  },
  {
    slug: 'other-oecd',
    title: 'Other OECD Destinations',
    tagline: 'Worldwide Horizons',
    desc: 'Explore customized pathways in Japan, UK, and leading OECD nations with our certified educational network.',
    color: '#F4A019',
    bgColor: '#FFF8EE',
    borderColor: 'border-amber-200/90',
    hoverBorder: 'hover:border-[#F4A019]',
    badgeBg: 'bg-amber-50 text-[#F4A019]',
    img: '/images/hero-about.jpg',
    features: ['Customized Visa Matching', 'Transfer Credits', 'Global Partner Network'],
  },
]

export default function StudyWorkPage() {
  const { t } = useLanguage()

  const pathwaySteps = [
    {
      step: '1. Destination Match',
      desc: 'Select your target country & institution',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      step: '2. Language & Prep',
      desc: 'Intensive prep & document review',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      step: '3. Study & Certify',
      desc: 'Acquire accredited qualifications',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      step: '4. Work & Intern',
      desc: 'Paid jobs & industrial internships',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      step: '5. Career Growth',
      desc: 'Post-study work rights & future',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
    },
  ]

  const supportFeatures = [
    {
      title: t.studyWorkPage.support1Title,
      desc: t.studyWorkPage.support1Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: t.studyWorkPage.support2Title,
      desc: t.studyWorkPage.support2Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: t.studyWorkPage.support3Title,
      desc: t.studyWorkPage.support3Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: t.studyWorkPage.support4Title,
      desc: t.studyWorkPage.support4Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION ── */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-[#FFF9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={80}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-red-50 text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                  {t.studyWorkPage.badge}
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-[#DC1E13] tracking-tight leading-tight mt-2">
                  {t.studyWorkPage.heroTitle}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                  {t.studyWorkPage.heroSubtitle}
                </p>
              </Reveal>

              {/* Checklist */}
              <Reveal delay={240}>
                <ul className="space-y-3 pt-2">
                  {[
                    t.studyWorkPage.check1,
                    t.studyWorkPage.check2,
                    t.studyWorkPage.check3,
                    t.studyWorkPage.check4,
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-[#DC1E13] text-white flex items-center justify-center text-xs shrink-0 shadow-sm">
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
                    href="#pathway"
                    className="px-8 py-4 rounded-2xl text-xs font-bold text-white bg-[#DC1E13] hover:bg-[#b81710] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    {t.common.explorePrograms}
                  </a>
                  <a
                    href="https://wa.me/6281297654332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-2xl text-xs font-bold text-[#002798] bg-white border border-[#002798] hover:bg-blue-50 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow transition-all duration-200"
                  >
                    {t.common.scheduleAdvisor}
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
                      src="/images/hero-study-work.jpg"
                      alt="Study and Work in Sydney Australia"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#DC1E13] text-white text-[10px] font-black uppercase tracking-wider mb-1 shadow-sm">
                          Global Destination
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                          Germany, Australia &amp; OECD Countries
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Metric Badge Top Left */}
                  <div className="absolute -top-4 -left-4 bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-subtle-float z-20">
                    <div className="w-9 h-9 rounded-xl bg-red-50 text-[#DC1E13] flex items-center justify-center text-base font-bold shrink-0">
                      🌏
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900 leading-tight">Dual Study &amp; Work</p>
                      <p className="text-[10px] text-gray-500">Paid Internship Rights</p>
                    </div>
                  </div>

                  {/* Floating Global Opportunities Pill */}
                  <div className="absolute -bottom-4 -right-3 bg-[#002798] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
                    <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-sm font-bold shrink-0">
                      💶
                    </div>
                    <div>
                      <p className="text-xs font-black leading-tight">Post-Study Visa</p>
                      <p className="text-[10px] text-blue-200">18-Month Work Rights</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. PROGRAM PATHWAY (5 STEP CARDS WITH 1PX BORDER) ── */}
      <section id="pathway" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                {t.studyWorkPage.pathwayEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798]">
                {t.studyWorkPage.pathwayTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {pathwaySteps.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 60}>
                <div className="bg-white rounded-3xl p-6 border border-blue-100/90 shadow-sm hover:border-[#002798] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-3 h-full group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002798] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#002798] group-hover:text-white transition-all shadow-sm">
                    {s.icon}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900 leading-snug">{s.step}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. POPULAR DESTINATIONS (HIGH-IMPACT CARDS WITH 1PX BORDER) ── */}
      <section className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center sm:text-left mb-12">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13] mb-2">
                {t.studyWorkPage.destEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798]">
                {t.studyWorkPage.destTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((dest, idx) => (
              <Reveal key={dest.title} delay={idx * 80}>
                <div
                  className={`group bg-white rounded-3xl border ${dest.borderColor} ${dest.hoverBorder} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full`}
                >
                  {/* Destination Photo on Top */}
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={dest.img}
                      alt={dest.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-xl text-xs font-black uppercase tracking-wider ${dest.badgeBg} shadow-sm backdrop-blur-md`}>
                        {dest.title}
                      </span>
                    </div>
                  </div>

                  {/* Destination Info & Features */}
                  <div className="p-6 sm:p-7 space-y-4 flex flex-col justify-between grow">
                    <div className="space-y-2">
                      <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-[#002798] transition-colors">
                        {dest.title}
                      </h3>
                      <p className="text-xs font-semibold text-gray-500">
                        {dest.tagline}
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                        {dest.desc}
                      </p>
                    </div>

                    {/* Features Checklist */}
                    <div className="pt-2 border-t border-gray-100 space-y-2">
                      {dest.features.map((f, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                          <span className="text-[#002798] font-bold">✓</span>
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 grid grid-cols-2 gap-2">
                      <Link
                        href={`/study-work/${dest.slug}`}
                        className="inline-flex items-center justify-center gap-1 px-4 py-3 rounded-2xl text-xs font-bold text-[#002798] bg-blue-50 hover:bg-blue-100 transition-all duration-200"
                      >
                        <span>{t.common.learnMore}</span>
                        <span>&rarr;</span>
                      </Link>
                      <a
                        href="#contact-info"
                        className="inline-flex items-center justify-center gap-1 px-4 py-3 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#DC1E13] shadow-sm transition-all duration-200"
                      >
                        <span>{t.common.consultFree}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FOUR SUPPORT FEATURES (WITH 1PX BORDER) ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportFeatures.map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-3xl p-6 border border-orange-100/90 shadow-sm hover:border-[#F4A019] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-3 h-full group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F4A019] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#F4A019] group-hover:text-white transition-all shadow-sm">
                    {f.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900">{f.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA BANNER ── */}
      <CTABanner
        eyebrow={t.home.ctaEyebrow}
        headline={t.home.ctaHeadline}
        subtext={t.home.ctaSubtext}
      />
    </div>
  )
}
