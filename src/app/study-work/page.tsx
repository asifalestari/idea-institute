import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Study & Work Program — IDEA Institute',
  description:
    'Study abroad and gain work experience at the same time. Build your career while exploring the world with Germany, Australia, and OECD destinations.',
}

const pathwaySteps = [
  {
    step: 'Choose Your Destination',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: 'Prepare & Apply',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    step: 'Study & Learn',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    step: 'Work & Gain Experience',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    step: 'Build Your Future',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
]

const destinations = [
  {
    title: 'Germany',
    desc: 'World-class education and strong career opportunities.',
    color: '#DC1E13',
    bgColor: '#FFF0F0',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Australia',
    desc: 'High-quality education and diverse work opportunities.',
    color: '#002798',
    bgColor: '#EEF4FF',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Other Destinations',
    desc: 'Explore opportunities in other OECD countries worldwide.',
    color: '#002798',
    bgColor: '#EEF4FF',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
  },
]

const supportFeatures = [
  {
    title: 'Visa Guidance',
    desc: 'Expert support for your visa application.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Accommodation Assistance',
    desc: 'We help you find the right place to stay.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    title: 'Job Placement Support',
    desc: 'We connect you with trusted employers.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Ongoing Support',
    desc: "We're with you throughout your journey.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
]

export default function StudyWorkPage() {
  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION (Seamless from top navbar) ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FFF9F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={100}>
                <h1 className="text-4xl sm:text-5xl font-black text-[#DC1E13] tracking-tight leading-tight">
                  Study &amp; Work <br />
                  Program
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                  Study abroad and gain work experience at the same time. Build your career while exploring the world.
                </p>
              </Reveal>

              {/* Checklist */}
              <Reveal delay={300}>
                <ul className="space-y-3 pt-2">
                  {[
                    'Quality education abroad',
                    'Gain valuable work experience',
                    'Career growth & global exposure',
                    'Full support from application to placement',
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
              <Reveal delay={400}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#pathway"
                    className="px-7 py-3.5 rounded-2xl text-xs font-bold text-white bg-[#DC1E13] hover:bg-[#b81710] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    Explore Programs
                  </a>
                  <a
                    href="https://wa.me/6281297654332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 rounded-2xl text-xs font-bold text-[#002798] bg-white border border-[#002798] hover:bg-blue-50 hover:-translate-y-0.5 active:translate-y-0 shadow-sm hover:shadow transition-all duration-200"
                  >
                    Talk to an Advisor
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={250} direction="left">
                <div className="relative w-72 sm:w-80 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/hero-study-work.jpg"
                    alt="Study and Work in Sydney Australia"
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

      {/* ── 2. PROGRAM PATHWAY (5 STEPS) ── */}
      <section id="pathway" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] mb-12">
              Program Pathway
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {pathwaySteps.map((s, idx) => (
              <Reveal key={s.step} delay={idx * 80}>
                <div
                  className="bg-[#FAFBFF] rounded-3xl p-5 border border-gray-100 flex flex-col items-center text-center relative hover:shadow-md hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-[#002798] flex items-center justify-center mb-3 shadow-sm">
                    {s.icon}
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-gray-900 leading-snug">{s.step}</h4>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. POPULAR DESTINATIONS ── */}
      <section className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] mb-10">
              Popular Destinations
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((dest, idx) => (
              <Reveal key={dest.title} delay={idx * 100}>
                <div
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group"
                >
                  <div>
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm"
                      style={{ backgroundColor: dest.bgColor, color: dest.color }}
                    >
                      {dest.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{dest.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {dest.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Destination CTA Card */}
            <Reveal delay={300}>
              <div className="bg-[#FFF0F0] rounded-3xl p-6 border border-red-100 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Not sure where to start?</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    Our advisors are here to help you plan your journey and match the best country.
                  </p>
                </div>
                <a
                  href="https://wa.me/6281297654332"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-wider text-white bg-[#DC1E13] hover:bg-[#b81710] hover:-translate-y-0.5 active:translate-y-0 shadow-sm transition-all"
                >
                  Talk to an Advisor
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 4. FOUR SUPPORT FEATURES ── */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {supportFeatures.map((f, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex flex-col space-y-2 group p-2">
                  <div className="w-10 h-10 rounded-2xl bg-orange-50 text-[#F4A019] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform shadow-sm">
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
    </div>
  )
}
