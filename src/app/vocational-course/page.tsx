import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Vocational Course — IDEA Institute',
  description:
    'Gain in-demand skills and hands-on experience to boost your career prospects. Hospitality, Business, IT & Digital Skills, and Engineering.',
}

const vocationalPrograms = [
  {
    title: 'Hospitality & Tourism',
    desc: 'Build your skills in hotel operations, customer service, and tourism management.',
    color: '#002798',
    bgColor: '#EEF4FF',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Business & Administration',
    desc: 'Gain practical knowledge in office management, marketing, and finance.',
    color: '#F4A019',
    bgColor: '#FFF8EE',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'IT & Digital Skills',
    desc: "Learn essential digital skills for today's tech-driven workplace.",
    color: '#002798',
    bgColor: '#EEF4FF',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Engineering & Technical',
    desc: 'Develop technical expertise for various industrial sectors.',
    color: '#DC1E13',
    bgColor: '#FFF0F0',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
]

const stepPathway = [
  {
    step: 'Learn',
    desc: 'Industry-focused training',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: 'Practice',
    desc: 'Hands-on experience',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    step: 'Certify',
    desc: 'Earn recognized certificates',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    step: 'Work',
    desc: 'Step into global opportunities',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
]

export default function VocationalCoursePage() {
  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION (Seamless from top navbar) ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FFFDF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={100}>
                <h1 className="text-4xl sm:text-5xl font-black text-[#F4A019] tracking-tight">
                  Vocational Course
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                  Gain in-demand skills and hands-on experience to boost your career prospects.
                </p>
              </Reveal>

              {/* Checklist */}
              <Reveal delay={300}>
                <ul className="space-y-3 pt-2">
                  {[
                    'Industry-relevant curriculum',
                    'Hands-on training & workshops',
                    'Practical projects',
                    'Certification & career support',
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
            </div>

            {/* Right Column: Hero Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={250} direction="left">
                <div className="relative w-72 sm:w-80 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/hero-vocational.jpg"
                    alt="Vocational Course Training"
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. OUR VOCATIONAL PROGRAMS (4-cards) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] mb-10">
              Our Vocational Programs
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {vocationalPrograms.map((prog, idx) => (
              <Reveal key={prog.title} delay={idx * 80}>
                <div
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                      style={{ backgroundColor: prog.bgColor, color: prog.color }}
                    >
                      {prog.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{prog.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {prog.desc}
                    </p>
                  </div>
                  <a
                    href="https://wa.me/6281297654332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold text-[#002798] group-hover:gap-2 transition-all gap-1 pt-4 border-t border-gray-50"
                  >
                    <span>View Program</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. FROM LEARNING TO EARNING PATHWAY ── */}
      <section className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] text-center mb-12">
              From Learning to Earning
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stepPathway.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 100}>
                <div
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center relative h-full"
                >
                  <div className="w-12 h-12 rounded-full bg-orange-50 text-[#F4A019] flex items-center justify-center mb-4 shadow-sm">
                    {s.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900">{s.step}</h4>
                  <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. ADVISOR CALLOUT STRIP ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal delay={150}>
            <div className="rounded-3xl bg-[#FFF8EE] border border-orange-100 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  Ready to build your future?
                </h3>
                <p className="text-sm text-gray-600">
                  Talk to our advisor and find the right program for you.
                </p>
              </div>
              <a
                href="https://wa.me/6281297654332"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-2xl text-xs font-bold text-white bg-[#F4A019] hover:bg-[#d98b10] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all shrink-0"
              >
                Talk to an Advisor
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
