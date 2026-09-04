'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import CTABanner from '@/components/sections/CTABanner'
import { useLanguage } from '@/context/LanguageContext'

const languages = [
  {
    name: 'English',
    nativeName: 'English',
    slug: 'english',
    tagline: 'Global Lingua Franca',
    desc: 'From daily conversational confidence to rigorous academic IELTS / TOEFL test preparation.',
    img: '/images/lang-english.jpg',
    levels: 'A1 – C2 (IELTS / TOEFL Prep)',
    badgeColor: 'bg-blue-50 text-[#002798]',
    borderColor: 'border-blue-200/90',
    hoverBorder: 'hover:border-[#002798]',
    country: 'Global & UK',
  },
  {
    name: 'German',
    nativeName: 'Deutsch',
    slug: 'german',
    tagline: 'Gateway to Europe',
    desc: 'Learn German for top tuition-free universities, dual-study Ausbildung, and career visas.',
    img: '/images/lang-german.jpg',
    levels: 'A1 – C1 (Goethe / TestDaF)',
    badgeColor: 'bg-red-50 text-[#DC1E13]',
    borderColor: 'border-red-200/90',
    hoverBorder: 'hover:border-[#DC1E13]',
    country: 'Germany & Austria',
  },
  {
    name: 'Japanese',
    nativeName: '日本語',
    slug: 'japanese',
    tagline: 'Culture & Career',
    desc: 'Master Hiragana, Katakana, and Kanji with interactive JLPT curriculum and cultural immersion.',
    img: '/images/lang-japanese.jpg',
    levels: 'N5 – N3 (JLPT Ready)',
    badgeColor: 'bg-orange-50 text-[#F4A019]',
    borderColor: 'border-amber-200/90',
    hoverBorder: 'hover:border-[#F4A019]',
    country: 'Japan',
  },
  {
    name: 'Chinese',
    nativeName: '中文',
    slug: 'chinese',
    tagline: 'Global Business Standard',
    desc: 'Mandarin for business expansion, Taiwan/China university admissions, and HSK certifications.',
    img: '/images/lang-chinese.jpg',
    levels: 'HSK 1 – HSK 4 (Mandarin)',
    badgeColor: 'bg-red-50 text-[#DC1E13]',
    borderColor: 'border-red-200/90',
    hoverBorder: 'hover:border-[#DC1E13]',
    country: 'China & Taiwan',
  },
  {
    name: 'French',
    nativeName: 'Français',
    slug: 'french',
    tagline: 'Diplomacy & Arts',
    desc: 'Certified French for study in France/Canada, diplomacy careers, and official DELF diplomas.',
    img: '/images/lang-french.jpg',
    levels: 'A1 – B2 (DELF / DALF)',
    badgeColor: 'bg-blue-50 text-[#002798]',
    borderColor: 'border-blue-200/90',
    hoverBorder: 'hover:border-[#002798]',
    country: 'France & Canada',
  },
  {
    name: 'Spanish',
    nativeName: 'Español',
    slug: 'spanish',
    tagline: '500M+ Global Speakers',
    desc: 'Dynamic, conversational Spanish for travel, international relations, and DELE exam readiness.',
    img: '/images/lang-spanish.jpg',
    levels: 'A1 – B2 (DELE Standard)',
    badgeColor: 'bg-orange-50 text-[#F4A019]',
    borderColor: 'border-amber-200/90',
    hoverBorder: 'hover:border-[#F4A019]',
    country: 'Spain & Latin America',
  },
]

export default function LanguageCoursePage() {
  const { t } = useLanguage()

  const features = [
    {
      title: t.languagePage.feat1Title,
      desc: t.languagePage.feat1Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: t.languagePage.feat2Title,
      desc: t.languagePage.feat2Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: t.languagePage.feat3Title,
      desc: t.languagePage.feat3Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      title: t.languagePage.feat4Title,
      desc: t.languagePage.feat4Desc,
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
        </svg>
      ),
    },
  ]

  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION ── */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={80}>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-blue-50 text-xs font-extrabold uppercase tracking-widest text-[#002798]">
                  {t.languagePage.badge}
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-[#002798] tracking-tight leading-tight mt-2">
                  {t.languagePage.heroTitle}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                  {t.languagePage.heroSubtitle}
                </p>
              </Reveal>

              {/* Checklist */}
              <Reveal delay={240}>
                <ul className="space-y-3 pt-2">
                  {[
                    t.languagePage.check1,
                    t.languagePage.check2,
                    t.languagePage.check3,
                    t.languagePage.check4,
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-[#002798] text-white flex items-center justify-center text-xs shrink-0 shadow-sm">
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
                    href="#languages"
                    className="px-8 py-4 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    {t.languagePage.coursesTitle}
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
                      src="/images/hero-language-course.jpg"
                      alt="IDEA Students Studying Languages"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#002798] text-white text-[10px] font-black uppercase tracking-wider mb-1 shadow-sm">
                          Interactive Learning
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                          CEFR Certified Language Classes
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Metric Badge Top Left */}
                  <div className="absolute -top-4 -left-4 bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-subtle-float z-20">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#002798] flex items-center justify-center text-base font-bold shrink-0">
                      🗣️
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900 leading-tight">Native Speakers</p>
                      <p className="text-[10px] text-gray-500">Certified Tutors</p>
                    </div>
                  </div>

                  {/* Floating Global Opportunities Pill */}
                  <div className="absolute -bottom-4 -right-3 bg-[#002798] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
                    <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-sm font-bold shrink-0">
                      🌐
                    </div>
                    <div>
                      <p className="text-xs font-black leading-tight">6 Global Languages</p>
                      <p className="text-[10px] text-blue-200">CEFR Standard</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. SIX LANGUAGES SECTION (HIGH-IMPACT CARDS WITH VISIBLE BORDERS & PHOTOS) ── */}
      <section id="languages" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                {t.languagePage.badge}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798]">
                {t.languagePage.coursesTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {languages.map((lang, idx) => (
              <Reveal key={lang.slug} delay={idx * 80}>
                <div
                  className={`group bg-white rounded-3xl border ${lang.borderColor} ${lang.hoverBorder} shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full`}
                >
                  {/* Photo on Top with Flag / Country Badge */}
                  <div className="relative h-52 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={lang.img}
                      alt={lang.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-block px-3 py-1 rounded-xl text-xs font-bold ${lang.badgeColor} shadow-sm backdrop-blur-md bg-white/95`}>
                        {lang.country}
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-6 sm:p-7 space-y-4 flex flex-col justify-between grow">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-extrabold text-gray-900 group-hover:text-[#002798] transition-colors">
                          {lang.name}
                        </h3>
                        <span className="text-xs font-semibold text-gray-500">{lang.nativeName}</span>
                      </div>
                      <p className="text-xs font-semibold text-[#002798]">{lang.levels}</p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                        {lang.desc}
                      </p>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-gray-100">
                      <Link
                        href={`/language-course/${lang.slug}`}
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-sm hover:shadow group-hover:bg-[#DC1E13] transition-all duration-200"
                      >
                        <span>{t.common.learnMore}</span>
                        <span>&rarr;</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FOUR FEATURE PILLARS (WITH VISIBLE 1PX BORDER) ── */}
      <section className="py-20 bg-[#FAFBFF] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="bg-white rounded-3xl p-6 border border-blue-100/90 shadow-sm hover:border-[#002798] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-3 h-full group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002798] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#002798] group-hover:text-white transition-all shadow-sm">
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

      {/* ── 4. CTA BANNER ── */}
      <CTABanner
        eyebrow={t.home.ctaEyebrow}
        headline={t.home.ctaHeadline}
        subtext={t.home.ctaSubtext}
      />
    </div>
  )
}
