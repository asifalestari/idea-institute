'use client'

import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import CTABanner from '@/components/sections/CTABanner'
import { useLanguage } from '@/context/LanguageContext'

const coreValues = [
  {
    title: 'Excellence & Quality',
    desc: 'We maintain rigorous standards in language teaching, curriculum design, and institutional partnerships.',
    icon: '🎯',
  },
  {
    title: 'Transparency & Trust',
    desc: 'Zero hidden fees, clear educational milestones, and complete honesty in visa & pathway consulting.',
    icon: '🤝',
  },
  {
    title: 'Global Mindset',
    desc: 'We prepare students not just academically, but culturally for confident global living and leadership.',
    icon: '🌍',
  },
  {
    title: 'Student-First Focus',
    desc: 'Every counseling session and program is customized to your unique career goals and circumstances.',
    icon: '💡',
  },
]

const milestones = [
  {
    year: '2015',
    title: 'Inception in Jakarta',
    desc: 'IDEA Institut was established in Jakarta, offering German and English preparatory classes.',
  },
  {
    year: '2018',
    title: 'OECD & Dual Vocational Expansion',
    desc: 'Formed direct partnerships with leading Ausbildung providers in Germany and colleges in Australia.',
  },
  {
    year: '2021',
    title: 'Vocational Training Lab Launch',
    desc: 'Introduced hands-on vocational courses with industry-aligned certification frameworks.',
  },
  {
    year: '2024+',
    title: '5,000+ Alumni Milestone',
    desc: 'Surpassed 5,000+ successful alumni studying, working, and thriving across Europe, Australia, and Asia.',
  },
]

const teamMembers = [
  {
    name: 'Dr. Hendra Wijaya',
    role: 'Managing Director & Academic Founder',
    bio: '15+ years in international education management and bilateral university cooperation.',
    img: '/images/team-1.jpg',
  },
  {
    name: 'Markus Weber, M.Ed.',
    role: 'Head of European & German Programs',
    bio: 'Former DAAD scholar with deep expertise in German dual study (Ausbildung) pathways.',
    img: '/images/team-1.jpg',
  },
  {
    name: 'Amanda Setiawan, B.Bus',
    role: 'Head of Australia & Work Pathways',
    bio: 'Alumna of University of Sydney specializing in vocational placement and student visas.',
    img: '/images/team-1.jpg',
  },
]

export default function AboutPage() {
  const { t } = useLanguage()

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
                  {t.aboutPage.badge}
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-[#002798] tracking-tight leading-tight mt-2">
                  {t.aboutPage.heroTitle}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                  {t.aboutPage.heroSubtitle}
                </p>
              </Reveal>

              {/* Badges */}
              <Reveal delay={240}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-white border border-blue-100 shadow-sm">
                    <p className="text-xl font-black text-[#002798]">10+ Years</p>
                    <p className="text-xs text-gray-500 mt-1">Experience in Global Education</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-orange-100 shadow-sm">
                    <p className="text-xl font-black text-[#F4A019]">5.000+</p>
                    <p className="text-xs text-gray-500 mt-1">Alumni Worldwide</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white border border-red-100 shadow-sm">
                    <p className="text-xl font-black text-[#DC1E13]">98%</p>
                    <p className="text-xs text-gray-500 mt-1">Placement Success Rate</p>
                  </div>
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
                      src="/images/about-consultation.jpg"
                      alt="IDEA Institute Head Office & Academic Counseling"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent flex items-end p-6">
                      <div className="text-white">
                        <span className="inline-block px-2.5 py-0.5 rounded-lg bg-[#F4A019] text-gray-950 text-[10px] font-black uppercase tracking-wider mb-1 shadow-sm">
                          Head Office
                        </span>
                        <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                          Mahaka Square, Kelapa Gading, Jakarta
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Metric Badge Top Left */}
                  <div className="absolute -top-4 -left-4 bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-subtle-float z-20">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#002798] flex items-center justify-center text-base font-bold shrink-0">
                      🏛️
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900 leading-tight">Est. 2015</p>
                      <p className="text-[10px] text-gray-500">10+ Years Trust</p>
                    </div>
                  </div>

                  {/* Floating Global Opportunities Pill */}
                  <div className="absolute -bottom-4 -right-3 bg-[#002798] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-20">
                    <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-sm font-bold shrink-0">
                      🌐
                    </div>
                    <div>
                      <p className="text-xs font-black leading-tight">Global Partners</p>
                      <p className="text-[10px] text-blue-200">OECD Direct Network</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MISSION & VISION (CARDS WITH 1PX BORDER) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Reveal delay={80}>
              <div className="bg-[#FAFBFF] rounded-3xl p-8 border border-blue-100 shadow-sm space-y-4 h-full">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002798] flex items-center justify-center text-xl font-bold shadow-sm">
                  🎯
                </div>
                <h3 className="text-2xl font-black text-[#002798]">{t.aboutPage.missionTitle}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t.aboutPage.missionDesc}
                </p>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={160}>
              <div className="bg-[#FFFDF9] rounded-3xl p-8 border border-orange-100 shadow-sm space-y-4 h-full">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#F4A019] flex items-center justify-center text-xl font-bold shadow-sm">
                  🔭
                </div>
                <h3 className="text-2xl font-black text-[#F4A019]">{t.aboutPage.visionTitle}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {t.aboutPage.visionDesc}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. FOUR CORE VALUES (CARDS WITH 1PX BORDER) ── */}
      <section className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                {t.aboutPage.valuesEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {t.aboutPage.valuesTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="bg-white rounded-3xl p-6 border border-gray-200/80 shadow-sm hover:border-[#002798] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col space-y-3 h-full group">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002798] flex items-center justify-center text-xl group-hover:scale-110 group-hover:bg-[#002798] group-hover:text-white transition-all shadow-sm">
                    {v.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900">{v.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TIMELINE / MILESTONES ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                {t.aboutPage.timelineEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798]">
                {t.aboutPage.timelineTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <Reveal key={m.year} delay={idx * 80}>
                <div className="bg-[#FAFBFF] rounded-3xl p-6 border border-blue-100 shadow-sm space-y-3 h-full relative">
                  <span className="inline-block px-3 py-1 rounded-xl bg-[#002798] text-white text-xs font-black">
                    {m.year}
                  </span>
                  <h4 className="text-base font-bold text-gray-900">{m.title}</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. LEADERSHIP TEAM (3 PROFILES) ── */}
      <section id="team" className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                {t.aboutPage.teamEyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                {t.aboutPage.teamTitle}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {teamMembers.map((m, idx) => (
              <Reveal key={m.name} delay={idx * 80}>
                {/* Tambahkan class 'group' di div ini */}
                <div className="group bg-white rounded-3xl border border-gray-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full">
                  <div className="relative h-60 w-full overflow-hidden bg-gray-100">
                    <Image
                      src={m.img}
                      alt={m.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 space-y-2 grow">
                    <h3 className="text-lg font-extrabold text-gray-900">{m.name}</h3>
                    <p className="text-xs font-semibold text-[#002798]">{m.role}</p>
                    <p className="text-xs text-gray-600 leading-relaxed pt-2">{m.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA BANNER ── */}
      <CTABanner
        eyebrow={t.home.ctaEyebrow}
        headline={t.home.ctaHeadline}
        subtext={t.home.ctaSubtext}
      />
    </div>
  )
}
