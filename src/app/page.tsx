'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import CTABanner from '@/components/sections/CTABanner'
import { useLanguage } from '@/context/LanguageContext'

// Institutional & Certification Partner Network
const partners = [
  { name: 'IELTS / British Council', desc: 'Prep Network', icon: '🇬🇧' },
  { name: 'Goethe-Zertifikat', desc: 'Exam Alignment', icon: '🇩🇪' },
  { name: 'German Dual-Study', desc: 'Ausbildung Partner', icon: '🇪🇺' },
  { name: 'Australian TAFE & Colleges', desc: 'Pathway Direct', icon: '🇦🇺' },
  { name: 'JLPT Japan Standard', desc: 'Testing Curricula', icon: '🇯🇵' },
  { name: 'HSK Chinese Standard', desc: 'Mandarin Framework', icon: '🇨🇳' },
]

export default function HomePage() {
  const { t } = useLanguage()
  const [activeStory, setActiveStory] = useState(0)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  // 4 Consolidated Trust Pillars (Integrated into About Section)
  const trustPillars = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      title: t.home.why1Title,
      desc: t.home.why1Desc,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t.home.why2Title,
      desc: t.home.why2Desc,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: t.home.why3Title,
      desc: t.home.why3Desc,
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: t.home.why4Title,
      desc: t.home.why4Desc,
    },
  ]

  // Testimonials (Success Stories)
  const successStories = [
    {
      quote:
        t.home.storiesEyebrow === 'KISAH SUKSES SISWA'
          ? 'IDEA Institut membantu saya meraih beasiswa studi di Jerman. Pendampingan dari awal kelas hingga visa sangat luar biasa!'
          : 'IDEA Institute helped me achieve my dream to study in Germany. The visa and academic support was amazing!',
      name: 'Dewi Lestari',
      role: t.home.storiesEyebrow === 'KISAH SUKSES SISWA' ? 'Studi S2 di Jerman' : 'Studied in Germany',
      flag: '🇩🇪',
    },
    {
      quote:
        t.home.storiesEyebrow === 'KISAH SUKSES SISWA'
          ? 'Melalui Study & Work Program di Australia, saya meraih pengalaman kerja berbayar dan peningkatan karir yang sangat pesat.'
          : 'Through the Study & Work Program in Australia, I gained valuable international work experience and accelerated my career.',
      name: 'Rizky Pratama',
      role: t.home.storiesEyebrow === 'KISAH SUKSES SISWA' ? 'Bekerja di Sydney' : 'Working in Sydney',
      flag: '🇦🇺',
    },
    {
      quote:
        t.home.storiesEyebrow === 'KISAH SUKSES SISWA'
          ? 'Kursus kejuruan memberi saya keahlian praktis yang langsung siap dipakai di industri modern.'
          : 'The vocational course gave me hands-on practical skills that prepared me for real-world industries.',
      name: 'Siti Aisyah',
      role: t.home.storiesEyebrow === 'KISAH SUKSES SISWA' ? 'Alumni Kejuruan' : 'Vocational Graduate',
      flag: '🇮🇩',
    },
  ]

  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16 lg:pt-32 lg:pb-20 min-h-[calc(100vh-80px)] flex items-center">
        {/* Decorative background vectors */}
        <div className="absolute top-12 right-1/4 w-32 h-32 rounded-full border-2 border-dashed border-amber-200/60 pointer-events-none -z-0 opacity-70" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-[#002798]/10 via-[#002798]/5 to-transparent rounded-tl-[100px] pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content Column (Span 6) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Pill Eyebrow */}
              <Reveal delay={40} direction="down">
                <p className="text-xs font-extrabold tracking-widest text-[#002798] uppercase flex items-center gap-2">
                  <span>{t.home.heroEyebrow.learn}</span>
                  <span className="text-[#DC1E13]">•</span>
                  <span>{t.home.heroEyebrow.train}</span>
                  <span className="text-[#DC1E13]">•</span>
                  <span className="text-[#DC1E13]">{t.home.heroEyebrow.goFurther}</span>
                </p>
              </Reveal>

              {/* 3-Color Main Headline */}
              <Reveal delay={120}>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.08]">
                  <span className="text-[#002798] block">{t.home.heroTitle1}</span>
                  <span className="text-[#F4A019] block">{t.home.heroTitle2}</span>
                  <span className="text-[#DC1E13] block">{t.home.heroTitle3}</span>
                </h1>
              </Reveal>

              {/* Subtitle */}
              <Reveal delay={200}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                  {t.home.heroSubtitle}
                </p>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={280}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#choose-path"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>{t.common.explorePrograms}</span>
                    <span>&rarr;</span>
                  </a>

                  <a
                    href="https://wa.me/6281297654332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-xs font-bold text-gray-700 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-0.5 active:translate-y-0 shadow-sm transition-all duration-200"
                  >
                    <span>{t.common.talkToUs}</span>
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </a>
                </div>
              </Reveal>

              {/* Social Proof Avatars */}
              <Reveal delay={360}>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    <div className="w-10 h-10 rounded-full border border-white bg-[#002798] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      A
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white bg-[#DC1E13] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      D
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white bg-[#F4A019] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      R
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white bg-gray-800 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      S
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-snug">
                      {t.common.trustedBy}
                    </p>
                    <p className="text-[11px] text-gray-500">
                      {t.common.fromIndo}
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Multi-Card Collage (Exact Layout Matching Reference) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <Reveal delay={240} direction="left" className="relative w-full max-w-[540px]">
                {/* Airplane flight path dotted curve SVG */}
                <div className="absolute -top-10 -left-6 w-full h-full pointer-events-none z-10">
                  <svg className="w-full h-48 text-[#002798]/30" fill="none" viewBox="0 0 400 150">
                    <path
                      d="M 10 120 C 60 20, 200 10, 360 40"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                    {/* Airplane Icon */}
                    <g transform="translate(95, 38) rotate(-15)">
                      <path
                        d="M10 2L13 9L20 11L13 14L10 21L7 14L0 11L7 9Z"
                        fill="#002798"
                        opacity="0.8"
                      />
                    </g>
                  </svg>
                </div>

                {/* Main 2-Column Photo Collage */}
                <div className="grid grid-cols-12 gap-3.5 sm:gap-4 relative z-10 items-end">

                  {/* Left Main Card: Students (Span 7) */}
                  <div className="col-span-7 relative">
                    <div className="relative h-72 sm:h-92 rounded-3xl overflow-hidden shadow-2xl border border-white/80 group bg-gray-100">
                      <Image
                        src="/images/hero-language-course.jpg"
                        alt="IDEA Students Studying Together"
                        fill
                        priority
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>

                    {/* Floating Orange Card: 10+ Programs (Overlapping Left) */}
                    <div className="absolute -bottom-4 -left-4 sm:-left-6 bg-[#F4A019] text-white p-4 sm:p-5 rounded-3xl shadow-2xl z-30 animate-subtle-float w-36 sm:w-44 border border-white/60">
                      <p className="text-2xl sm:text-3xl font-black leading-none">10+</p>
                      <p className="text-xs sm:text-sm font-bold mt-1 leading-tight">{t.home.heroBadgePrograms}</p>
                      <p className="text-[10px] text-white/90 mt-1 leading-snug">{t.home.heroBadgeSub}</p>
                    </div>

                    {/* Striped decorative stamp bottom left */}
                    <div className="absolute -bottom-8 -left-8 w-16 h-16 rounded-full opacity-60 pointer-events-none -z-10 bg-[radial-gradient(#002798_1.5px,transparent_1.5px)] [background-size:6px_6px]" />
                  </div>

                  {/* Right Column Stack: Sydney + Europe + Vocational (Span 5) */}
                  <div className="col-span-5 flex flex-col gap-3 relative">

                    {/* 1. Top Card: Sydney Harbor */}
                    <div className="relative h-28 sm:h-36 rounded-2xl overflow-hidden shadow-lg border border-white/80 group bg-gray-100">
                      <Image
                        src="/images/hero-study-work.jpg"
                        alt="Sydney Destination"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* 2. Middle Card: European Castle / Germany */}
                    <div className="relative h-24 sm:h-32 rounded-2xl overflow-hidden shadow-md border border-white/80 group bg-gray-100">
                      <Image
                        src="/images/lang-german.jpg"
                        alt="European Heritage"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Red Accent Dot */}
                      <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#DC1E13] border border-white shadow-sm flex items-center justify-center text-[9px] text-white font-bold">
                        ★
                      </div>
                    </div>

                    {/* 3. Bottom Card: Vocational Lab */}
                    <div className="relative h-28 sm:h-36 rounded-2xl overflow-hidden shadow-lg border border-white/80 group bg-gray-100">
                      <Image
                        src="/images/hero-vocational.jpg"
                        alt="Vocational Workshop"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {/* Amber Accent Dot */}
                      <div className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#F4A019] border border-white shadow-sm flex items-center justify-center text-[9px] text-white font-bold">
                        ★
                      </div>
                    </div>

                  </div>

                </div>

                {/* Floating Navy Card: Global Opportunities (Center-Bottom overlap) */}
                <div className="absolute -bottom-5 left-1/4 sm:left-1/3 bg-[#002798] text-white px-4 py-3 rounded-2xl sm:rounded-3xl shadow-2xl z-40 flex items-center gap-3 border border-white/60">
                  <div>
                    <p className="text-xs sm:text-sm font-bold leading-tight">{t.home.heroBadgeGlobal}</p>
                    <p className="text-[10px] text-blue-200 mt-0.5">{t.home.heroBadgeStart}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-sm shrink-0">
                    🌐
                  </div>
                </div>

              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. COMPACT PARTNER LOGO STRIP (ANIMATED TRUST BAR) ── */}
      <section className="py-6 bg-[#F9FAFC] border-y border-gray-100 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-3">
          <div className="text-center">
            <span className="text-[10px] font-extrabold tracking-widest text-gray-500 uppercase">
              {t.home.partnersTag}
            </span>
          </div>
        </div>

        {/* Continuous Animated Marquee Ticker */}
        <div className="relative w-full overflow-hidden">
          {/* Left & Right Gradient Fade Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F9FAFC] via-[#F9FAFC]/80 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F9FAFC] via-[#F9FAFC]/80 to-transparent z-10 pointer-events-none" />

          {/* Marquee Track (Double loop for seamless 100% infinite scroll) */}
          <div className="animate-marquee flex items-center gap-4 sm:gap-6 py-1">
            {[...partners, ...partners, ...partners].map((p, idx) => (
              <div
                key={`${p.name}-${idx}`}
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white border border-gray-200/80 shadow-2xs hover:border-blue-300 hover:shadow-sm transition-all duration-200 shrink-0 cursor-default"
              >
                <span className="text-base shrink-0">{p.icon}</span>
                <span className="text-xs font-bold text-gray-800 whitespace-nowrap">{p.name}</span>
                <span className="text-[10px] text-gray-400 font-medium">({p.desc})</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CHOOSE YOUR PATH (3 CORE PILLARS) ── */}
      <section id="choose-path" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                {t.home.pathEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                {t.home.pathTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1: Language Course */}
            <Reveal delay={80}>
              <div className="group bg-[#F4F7FF] rounded-3xl border border-blue-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src="/images/hero-language-course.jpg"
                    alt="Language Course"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[#002798] text-xs font-black uppercase tracking-wider shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#002798]" />
                      Language Course
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col justify-between grow">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#002798]">{t.home.pathLangTitle}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {t.home.pathLangDesc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-blue-100">
                    <Link
                      href="/language-course"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#002798] group-hover:gap-3 transition-all"
                    >
                      <span>{t.home.pathLangCta}</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 2: Vocational Course */}
            <Reveal delay={160}>
              <div className="group bg-[#FFFDF5] rounded-3xl border border-amber-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src="/images/hero-vocational.jpg"
                    alt="Vocational Course"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[#F4A019] text-xs font-black uppercase tracking-wider shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#F4A019]" />
                      Vocational Course
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col justify-between grow">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#F4A019]">{t.home.pathVocTitle}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {t.home.pathVocDesc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-amber-100">
                    <Link
                      href="/vocational-course"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#F4A019] group-hover:gap-3 transition-all"
                    >
                      <span>{t.home.pathVocCta}</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Card 3: Study & Work Program */}
            <Reveal delay={240}>
              <div className="group bg-[#FFF7F7] rounded-3xl border border-red-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gray-100 shrink-0">
                  <Image
                    src="/images/hero-study-work.jpg"
                    alt="Study & Work Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/95 backdrop-blur-md text-[#DC1E13] text-xs font-black uppercase tracking-wider shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-[#DC1E13]" />
                      Study &amp; Work
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-4 flex flex-col justify-between grow">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#DC1E13]">{t.home.pathSwTitle}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {t.home.pathSwDesc}
                    </p>
                  </div>
                  <div className="pt-2 border-t border-red-100">
                    <Link
                      href="/study-work"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#DC1E13] group-hover:gap-3 transition-all"
                    >
                      <span>{t.home.pathSwCta}</span>
                      <span>&rarr;</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. METRIC STRIP BANNER (ROYAL NAVY) ── */}
      <section className="py-12 bg-[#002798] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
            <Reveal delay={80} className="pt-4 md:pt-0">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-2xl mb-1">🏅</span>
                <p className="text-3xl font-black">{t.home.metric1Val}</p>
                <p className="text-xs text-blue-200 font-medium">{t.home.metric1Label}</p>
              </div>
            </Reveal>

            <Reveal delay={160} className="pt-4 md:pt-0 md:pl-4">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-2xl mb-1">👥</span>
                <p className="text-3xl font-black">{t.home.metric2Val}</p>
                <p className="text-xs text-blue-200 font-medium">{t.home.metric2Label}</p>
              </div>
            </Reveal>

            <Reveal delay={240} className="pt-4 md:pt-0 md:pl-4">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-2xl mb-1">🏛️</span>
                <p className="text-3xl font-black">{t.home.metric3Val}</p>
                <p className="text-xs text-blue-200 font-medium">{t.home.metric3Label}</p>
              </div>
            </Reveal>

            <Reveal delay={320} className="pt-4 md:pt-0 md:pl-4">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-2xl mb-1">🌐</span>
                <p className="text-3xl font-black">{t.home.metric4Val}</p>
                <p className="text-xs text-blue-200 font-medium">{t.home.metric4Label}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. A BIT ABOUT US & WHY IDEA (CONSOLIDATED CREDIBILITY SECTION) ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-red-50 text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                  {t.home.aboutEyebrow}
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002798] tracking-tight leading-tight mt-3">
                  {t.home.aboutTitle}
                </h2>
              </Reveal>

              <Reveal delay={120}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {t.home.aboutDesc}
                </p>
              </Reveal>

              {/* 4 Integrated Trust Pillars */}
              <Reveal delay={200}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {trustPillars.map((p) => (
                    <div
                      key={p.title}
                      className="p-4 rounded-2xl bg-[#FAFBFF] border border-blue-100 shadow-2xs space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-[#002798]">
                        <div className="w-7 h-7 rounded-lg bg-blue-100/80 flex items-center justify-center">
                          {p.icon}
                        </div>
                        <h4 className="text-xs font-bold text-gray-900">{p.title}</h4>
                      </div>
                      <p className="text-[11px] text-gray-500 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </Reveal>

              {/* Link to About Page */}
              <Reveal delay={280}>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>{t.home.aboutCta}</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Photo Column: Layered Multi-Card Composition */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <Reveal delay={200} direction="left" className="relative w-full max-w-lg">
                <div className="grid grid-cols-12 gap-4 relative items-center">

                  {/* Primary Large Photo */}
                  <div className="col-span-8 relative h-72 sm:h-88 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                    <Image
                      src="/images/about-consultation.jpg"
                      alt="IDEA Academic Counseling Session"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-5 sm:p-6">
                      <div className="text-white">
                        <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#F4A019] text-gray-950 text-[10px] font-black uppercase tracking-wider mb-1 shadow-sm">
                          {t.home.aboutOfficeBadge}
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                          {t.home.aboutOfficeLoc}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Stacking Photos */}
                  <div className="col-span-4 flex flex-col gap-3">
                    <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                      <Image
                        src="/images/hero-study-work.jpg"
                        alt="Global Pathway"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative h-32 sm:h-40 rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
                      <Image
                        src="/images/lang-german.jpg"
                        alt="Germany Study"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Floating Trust Metric Badge Top Left */}
                  <div className="absolute -top-3 -left-3 bg-white text-gray-900 px-3.5 py-2.5 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 animate-subtle-float z-20">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#002798] flex items-center justify-center text-sm font-bold shrink-0">
                      🏆
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900 leading-tight">{t.home.aboutSuccessBadge}</p>
                      <p className="text-[10px] text-gray-500">{t.home.aboutSuccessSub}</p>
                    </div>
                  </div>

                  {/* Floating Metric Badge Bottom Right */}
                  <div className="absolute -bottom-3 -right-2 bg-[#002798] text-white px-4 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20">
                    <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-xs font-bold shrink-0">
                      👥
                    </div>
                    <div>
                      <p className="text-xs font-black leading-tight">{t.home.aboutAlumniBadge}</p>
                      <p className="text-[10px] text-blue-200">{t.home.aboutAlumniSub}</p>
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. SUCCESS STORIES (TESTIMONIALS) ── */}
      <section className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              <div className="space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                  {t.home.storiesEyebrow}
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {t.home.storiesTitle}
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveStory((prev) => (prev === 0 ? successStories.length - 1 : prev - 1))}
                  className="w-10 h-10 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors"
                  aria-label="Previous story"
                >
                  &larr;
                </button>
                <button
                  onClick={() => setActiveStory((prev) => (prev === successStories.length - 1 ? 0 : prev + 1))}
                  className="w-10 h-10 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors"
                  aria-label="Next story"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <Reveal key={story.name} delay={idx * 80}>
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-[#002798] text-2xl font-serif mb-4 leading-none">““</div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-8">
                      &quot;{story.quote}&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-2xl bg-[#002798] text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-gray-900">{story.name}</h5>
                      <p className="text-[11px] text-gray-500 flex items-center gap-1 mt-0.5">
                        <span>{story.role}</span>
                        <span>{story.flag}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. COMPACT FAQ SECTION (ACCORDION) ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {t.home.faqTitle}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
                {t.home.faqSubtitle}
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {t.home.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <Reveal key={idx} delay={idx * 60}>
                  <div className="rounded-2xl border border-gray-200/90 overflow-hidden bg-white shadow-2xs transition-all">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-gray-50/80 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base font-bold text-gray-900">
                        {faq.q}
                      </span>
                      <span
                        className={`w-8 h-8 rounded-xl bg-blue-50 text-[#002798] flex items-center justify-center text-sm font-bold shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 bg-[#002798] text-white' : ''
                          }`}
                      >
                        ↓
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 bg-[#FAFBFF]">
                        {faq.a}
                      </div>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 8. PRE-FOOTER CTA BANNER ── */}
      <CTABanner
        eyebrow={t.home.ctaEyebrow}
        headline={t.home.ctaHeadline}
        subtext={t.home.ctaSubtext}
        primaryLabel={t.home.ctaPrimary}
        primaryHref="https://wa.me/6281297654332"
        showImage={true}
      />
    </div>
  )
}
