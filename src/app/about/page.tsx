import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'About Us — IDEA Institute',
  description:
    'We empower individuals to achieve their global potential through quality education, practical skills, and life-changing opportunities.',
}

const teamMembers = [
  {
    name: 'Andi Prasetyo',
    role: 'Director',
    avatar: '/images/team-1.jpg',
  },
  {
    name: 'Sinta Santoso',
    role: 'Academic Manager',
    avatar: null,
  },
  {
    name: 'Dewi Lestari',
    role: 'Program Coordinator',
    avatar: null,
  },
  {
    name: 'Rizky Handoko',
    role: 'Student Advisor',
    avatar: null,
  },
]

const whyChooseUs = [
  {
    title: 'Experienced Team',
    desc: 'Dedicated professionals with years of experience in education and training.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Global Network',
    desc: 'Strong partnerships with institutions and industries worldwide.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: 'Student-Centered',
    desc: 'We focus on your goals and provide personalized learning pathways.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Integrity & Excellence',
    desc: 'We uphold high standards in everything we do.',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
]

const journeyTimeline = [
  { year: '2015', desc: 'IDEA Institute was founded.' },
  { year: '2018', desc: 'Expanded programs and international partnerships.' },
  { year: '2021', desc: 'Launched vocational training and career support services.' },
  { year: '2024+', desc: 'Empowering more students to achieve global success.' },
]

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION (Seamless from top navbar) ── */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={100}>
                <h1 className="text-4xl sm:text-5xl font-black text-[#002798] tracking-tight">
                  About IDEA Institute
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-xl">
                  We empower individuals to achieve their global potential through quality education, practical skills, and life-changing opportunities.
                </p>
              </Reveal>
            </div>

            {/* Right Column: Hero Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={250} direction="left">
                <div className="relative w-72 sm:w-80 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/hero-about.jpg"
                    alt="IDEA Institute Office & Team"
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

      {/* ── 2. MISSION & VISION (2 CARDS) ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <Reveal delay={100}>
              <div className="bg-[#FAFBFF] rounded-3xl p-8 border border-blue-100 flex items-start gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-[#002798] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#002798]">Our Mission</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To provide world-class education and training that equips students with the skills, knowledge, and confidence to succeed globally.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Vision */}
            <Reveal delay={200}>
              <div className="bg-[#FFFDF9] rounded-3xl p-8 border border-orange-100 flex items-start gap-5 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full group">
                <div className="w-12 h-12 rounded-2xl bg-orange-100 text-[#F4A019] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-[#F4A019]">Our Vision</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    To be a leading global institute that opens education and career opportunities for a better future.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE IDEA? (4 CARDS) ── */}
      <section className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] mb-12">
              Why Choose IDEA?
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((w, idx) => (
              <Reveal key={w.title} delay={idx * 100}>
                <div
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-start space-y-3 h-full group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-[#002798] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                    {w.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900">{w.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. OUR JOURNEY (TIMELINE) ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] mb-12">
              Our Journey
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {journeyTimeline.map((item, index) => (
              <Reveal key={item.year} delay={index * 120}>
                <div className="relative flex flex-col space-y-3 group p-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 rounded-full bg-[#002798] ring-4 ring-blue-100 group-hover:scale-125 transition-transform" />
                    <span className="text-xl font-black text-[#002798]">{item.year}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. MEET OUR TEAM ── */}
      <section id="team" className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] mb-12">
              Meet Our Team
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, idx) => (
              <Reveal key={member.name} delay={idx * 100}>
                <div
                  className="bg-white rounded-3xl p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 text-center flex flex-col items-center h-full group"
                >
                  <div className="relative w-28 h-28 rounded-2xl overflow-hidden mb-4 bg-gray-100 flex items-center justify-center shadow-sm">
                    {member.avatar ? (
                      <Image
                        src={member.avatar}
                        alt={member.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-[#EEF4FF] text-[#002798] font-bold text-2xl flex items-center justify-center">
                        {member.name.split(' ').map((n) => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <h4 className="text-base font-bold text-gray-900">{member.name}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
