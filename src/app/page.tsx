'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import CTABanner from '@/components/sections/CTABanner'

// 6 Languages with Landmarks
const languages = [
  { name: 'English', slug: 'english', img: '/images/lang-english.jpg' },
  { name: 'German', slug: 'german', img: '/images/lang-german.jpg' },
  { name: 'Japanese', slug: 'japanese', img: '/images/lang-japanese.jpg' },
  { name: 'Chinese', slug: 'chinese', img: '/images/lang-chinese.jpg' },
  { name: 'French', slug: 'french', img: '/images/lang-french.jpg' },
  { name: 'Spanish', slug: 'spanish', img: '/images/lang-spanish.jpg' },
]

// 5 Why Pillars
const whyPillars = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#002798]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    bgColor: '#EEF4FF',
    title: 'Expert Guidance',
    desc: 'Experienced mentors who care about your success.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#F4A019]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    bgColor: '#FFF8EE',
    title: 'Quality Education',
    desc: 'High-quality programs tailored to global standards.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#DC1E13]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    bgColor: '#FFF0F0',
    title: 'Global Network',
    desc: 'Strong partnerships with institutions worldwide.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#002798]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    bgColor: '#EEF4FF',
    title: 'Career Support',
    desc: 'We help you prepare for your future career path.',
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#F4A019]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    bgColor: '#FFF8EE',
    title: 'End-to-End Support',
    desc: "From enrollment to your future, we're with you all the way.",
  },
]

// Testimonials (Success Stories)
const successStories = [
  {
    quote: 'IDEA helped me achieve my dream to study in Germany. The support was amazing!',
    name: 'Dewi Lestari',
    role: 'Studied in Germany',
    flag: '🇩🇪',
  },
  {
    quote: 'Through the Study & Work Program, I gained international experience and improved my career.',
    name: 'Rizky Pratama',
    role: 'Working in Australia',
    flag: '🇦🇺',
  },
  {
    quote: 'The vocational course gave me practical skills that helped me get a better job.',
    name: 'Siti Aisyah',
    role: 'Healthcare Professional',
    flag: '🇮🇩',
  },
]

export default function HomePage() {
  const [activeStory, setActiveStory] = useState(0)

  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION ── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16 md:pt-36 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 space-y-6">
              {/* Pill Eyebrow */}
              <Reveal delay={50} direction="down">
                <p className="text-xs font-extrabold tracking-widest text-[#002798] uppercase flex items-center gap-1.5">
                  <span>LEARN</span>
                  <span className="text-[#DC1E13]">•</span>
                  <span>TRAIN</span>
                  <span className="text-[#DC1E13]">•</span>
                  <span className="text-[#DC1E13]">GO FURTHER</span>
                </p>
              </Reveal>

              {/* 3-Color Main Headline */}
              <Reveal delay={150}>
                <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.08]">
                  <span className="text-[#002798] block">Learn Today.</span>
                  <span className="text-[#F4A019] block">Train Your Skills.</span>
                  <span className="text-[#DC1E13] block">Go Further.</span>
                </h1>
              </Reveal>

              {/* Subtitle */}
              <Reveal delay={250}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-lg">
                  IDEA Institut helps you build language skills, develop professional abilities, and achieve international education and career opportunities.
                </p>
              </Reveal>

              {/* Action Buttons (Standard 16-18px rounded-2xl) */}
              <Reveal delay={350}>
                <div className="flex flex-wrap items-center gap-4 pt-1">
                  <Link
                    href="/language-course"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>Explore Programs</span>
                    <span>&rarr;</span>
                  </Link>

                  <a
                    href="https://wa.me/6281297654332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-xs font-bold text-gray-700 bg-white border border-gray-300 hover:border-gray-400 hover:bg-gray-50 hover:-translate-y-0.5 active:translate-y-0 shadow-sm transition-all duration-200"
                  >
                    <span>Talk to Us</span>
                    <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </a>
                </div>
              </Reveal>

              {/* Social Proof Avatars */}
              <Reveal delay={450}>
                <div className="flex items-center gap-3 pt-3">
                  <div className="flex -space-x-2">
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-[#002798] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      A
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-[#DC1E13] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      D
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-[#F4A019] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      R
                    </div>
                    <div className="w-9 h-9 rounded-full border-2 border-white bg-gray-800 text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      S
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-900 leading-snug">
                      Trusted by 10K+ students
                    </p>
                    <p className="text-[11px] text-gray-500">
                      from Indonesia and beyond
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Multi-Card Collage */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <Reveal delay={300} direction="left" className="relative w-full max-w-lg">
                <div className="grid grid-cols-12 gap-3 relative">
                  
                  {/* Main Large Photo (Span 7) */}
                  <div className="col-span-7 relative h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl border-2 border-white group">
                    <Image
                      src="/images/hero-language-course.jpg"
                      alt="IDEA Students"
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Right Column 2 Small Photos (Span 5) */}
                  <div className="col-span-5 flex flex-col gap-3">
                    {/* Top Sydney Landmark */}
                    <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden shadow-md border-2 border-white group">
                      <Image
                        src="/images/hero-study-work.jpg"
                        alt="Sydney Destination"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    {/* Bottom Vocational Workshop */}
                    <div className="relative h-40 sm:h-48 rounded-2xl overflow-hidden shadow-md border-2 border-white group">
                      <Image
                        src="/images/hero-vocational.jpg"
                        alt="Vocational Workshop"
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>

                  {/* Floating Orange Badge on left */}
                  <div className="absolute -left-4 top-1/3 bg-[#F4A019] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl z-20 animate-subtle-float">
                    <p className="text-xl sm:text-2xl font-black leading-none">10+</p>
                    <p className="text-xs font-bold">Programs</p>
                    <p className="text-[10px] text-white/80 mt-0.5">Designed for your future</p>
                  </div>

                  {/* Floating Navy Badge on bottom right */}
                  <div className="absolute -right-2 -bottom-4 bg-[#002798] text-white px-4 py-3 rounded-2xl shadow-xl z-20 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-sm">
                      🌐
                    </div>
                    <div>
                      <p className="text-xs font-bold leading-tight">Global Opportunities</p>
                      <p className="text-[10px] text-blue-200">Start Here</p>
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. CHOOSE YOUR PATH SECTION ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                CHOOSE YOUR PATH
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight">
                Find the Program <span className="text-[#002798]">That&apos;s Right for You</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Language Course */}
            <Reveal delay={100}>
              <div className="group bg-[#F4F7FF] rounded-3xl p-7 border border-blue-100/80 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#002798] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#002798]">Language Course</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Learn international languages with interactive methods and experienced instructors.
                  </p>
                  <Link
                    href="/language-course"
                    className="inline-flex items-center text-xs font-bold text-[#002798] group-hover:gap-2 transition-all gap-1 pt-1"
                  >
                    <span>Explore Languages</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mt-6 shadow-sm">
                  <Image
                    src="/images/hero-language-course.jpg"
                    alt="Language Course"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Reveal>

            {/* Card 2: Vocational Course */}
            <Reveal delay={200}>
              <div className="group bg-[#FFFDF5] rounded-3xl p-7 border border-orange-100/80 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#F4A019] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#F4A019]">Vocational Course</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Build practical skills that prepare you for real-world industries and global career opportunities.
                  </p>
                  <Link
                    href="/vocational-course"
                    className="inline-flex items-center text-xs font-bold text-[#F4A019] group-hover:gap-2 transition-all gap-1 pt-1"
                  >
                    <span>Explore Courses</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mt-6 shadow-sm">
                  <Image
                    src="/images/hero-vocational.jpg"
                    alt="Vocational Course"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Reveal>

            {/* Card 3: Study & Work Program */}
            <Reveal delay={300}>
              <div className="group bg-[#FFF7F7] rounded-3xl p-7 border border-red-100/80 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#DC1E13] text-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#DC1E13]">Study &amp; Work Program</h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    Study abroad and gain work experience to boost your career and global confidence.
                  </p>
                  <Link
                    href="/study-work"
                    className="inline-flex items-center text-xs font-bold text-[#DC1E13] group-hover:gap-2 transition-all gap-1 pt-1"
                  >
                    <span>Explore Programs</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
                <div className="relative h-44 w-full rounded-2xl overflow-hidden mt-6 shadow-sm">
                  <Image
                    src="/images/hero-study-work.jpg"
                    alt="Study & Work Program"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. LANGUAGE COURSE SECTION (6 LANDMARKS) ── */}
      <section className="py-20 bg-[#F9FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                  LANGUAGE COURSE
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Open the Door with Language
                </h2>
              </div>
              <Link
                href="/language-course"
                className="inline-flex items-center text-xs font-bold text-[#002798] hover:gap-2 transition-all gap-1 self-start sm:self-auto"
              >
                <span>View All Languages</span>
                <span>&rarr;</span>
              </Link>
            </div>
          </Reveal>

          {/* 6 Landmark Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
            {languages.map((lang, idx) => (
              <Reveal key={lang.slug} delay={idx * 70}>
                <Link
                  href={`/language-course/${lang.slug}`}
                  className="group bg-white rounded-2xl p-4 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center h-full"
                >
                  <div className="relative w-full h-24 rounded-xl overflow-hidden mb-3">
                    <Image
                      src={lang.img}
                      alt={lang.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <span className="text-sm font-bold text-gray-800 group-hover:text-[#002798] transition-colors">
                    {lang.name}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. METRIC STRIP BANNER (ROYAL NAVY) ── */}
      <section className="py-12 bg-[#002798] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
            <Reveal delay={100} className="pt-4 md:pt-0">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-2xl mb-1">🏅</span>
                <p className="text-3xl font-black">20+</p>
                <p className="text-xs text-blue-200 font-medium">Years of Experience</p>
              </div>
            </Reveal>

            <Reveal delay={200} className="pt-4 md:pt-0 md:pl-4">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-2xl mb-1">👥</span>
                <p className="text-3xl font-black">50K+</p>
                <p className="text-xs text-blue-200 font-medium">Students Enrolled</p>
              </div>
            </Reveal>

            <Reveal delay={300} className="pt-4 md:pt-0 md:pl-4">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-2xl mb-1">🏛️</span>
                <p className="text-3xl font-black">100+</p>
                <p className="text-xs text-blue-200 font-medium">Partner Institutions</p>
              </div>
            </Reveal>

            <Reveal delay={400} className="pt-4 md:pt-0 md:pl-4">
              <div className="flex flex-col items-center space-y-1">
                <span className="text-2xl mb-1">🌐</span>
                <p className="text-3xl font-black">15+</p>
                <p className="text-xs text-blue-200 font-medium">Countries</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 5. STUDY & WORK PROGRAM (DESTINATIONS) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column (Span 4) */}
            <div className="lg:col-span-4 space-y-4">
              <Reveal>
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                  STUDY &amp; WORK PROGRAM
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                  Your Journey, <br />
                  <span className="text-[#002798]">Beyond Borders</span>
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                  We connect you to global opportunities in top destinations.
                </p>
                <div className="pt-3">
                  <Link
                    href="/study-work"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all"
                  >
                    <span>Explore Destinations</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right 3 Destination Cards (Span 8) */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-5">
              {/* Australia */}
              <Reveal delay={100}>
                <Link
                  href="/study-work"
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src="/images/hero-study-work.jpg"
                      alt="Australia"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Australia</h4>
                      <p className="text-[11px] text-gray-500">Study, work and live in Australia</p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-[#002798] flex items-center justify-center group-hover:bg-[#002798] group-hover:text-white transition-colors">
                      &rarr;
                    </div>
                  </div>
                </Link>
              </Reveal>

              {/* Germany */}
              <Reveal delay={200}>
                <Link
                  href="/study-work"
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src="/images/lang-german.jpg"
                      alt="Germany"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Germany</h4>
                      <p className="text-[11px] text-gray-500">Achieve your goals in Germany</p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-[#002798] flex items-center justify-center group-hover:bg-[#002798] group-hover:text-white transition-colors">
                      &rarr;
                    </div>
                  </div>
                </Link>
              </Reveal>

              {/* Other Destinations */}
              <Reveal delay={300}>
                <Link
                  href="/study-work"
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
                >
                  <div className="relative h-36 w-full overflow-hidden">
                    <Image
                      src="/images/hero-about.jpg"
                      alt="Other Destinations"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Other Destinations</h4>
                      <p className="text-[11px] text-gray-500">In other OECD countries</p>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-[#002798] flex items-center justify-center group-hover:bg-[#002798] group-hover:text-white transition-colors">
                      &rarr;
                    </div>
                  </div>
                </Link>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 6. WHY IDEA? (5 PILLARS) ── */}
      <section className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                WHY IDEA?
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                We&apos;re With You, Every Step of the Way
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {whyPillars.map((p, idx) => (
              <Reveal key={p.title} delay={idx * 80}>
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center space-y-3 h-full group">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm"
                    style={{ backgroundColor: p.bgColor }}
                  >
                    {p.icon}
                  </div>
                  <h4 className="text-sm font-bold text-gray-900">{p.title}</h4>
                  <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. ABOUT INTRO SECTION (WITH DEDICATED HIGH-RES CONSULTATION ASSET) ── */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (Span 6) */}
            <div className="lg:col-span-6 space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-red-50 text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                  A BIT ABOUT US
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#002798] tracking-tight leading-tight mt-2">
                  Empowering Global Journeys. <br />
                  <span className="text-gray-900">Building International Futures.</span>
                </h2>
              </Reveal>

              <Reveal delay={150}>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Founded with a mission to make world-class foreign language education and overseas pathways accessible to every Indonesian student and professional. With principal partners across Australia, Germany, and OECD countries, we guide you from your first class to your global career.
                </p>
              </Reveal>

              {/* 3 Pillars */}
              <Reveal delay={250}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-1">
                  <div className="p-4 rounded-2xl bg-[#FAFBFF] border border-blue-100 shadow-sm">
                    <p className="text-base font-black text-[#002798]">10+ Years</p>
                    <p className="text-xs text-gray-500 mt-0.5">Proven track record &amp; experience</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FFFDF9] border border-orange-100 shadow-sm">
                    <p className="text-base font-black text-[#F4A019]">Direct Partners</p>
                    <p className="text-xs text-gray-500 mt-0.5">Official institutions in Germany &amp; Australia</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-[#FFF9F9] border border-red-100 shadow-sm">
                    <p className="text-base font-black text-[#DC1E13]">Full Support</p>
                    <p className="text-xs text-gray-500 mt-0.5">From consultation to departure</p>
                  </div>
                </div>
              </Reveal>

              {/* Link to About Page (16-18px rounded-2xl) */}
              <Reveal delay={350}>
                <div className="pt-2">
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>Learn More About IDEA</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Photo Column (Span 6) — Rich Image Card with Badges */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <Reveal delay={250} direction="left" className="relative w-full max-w-lg">
                <div className="relative">
                  
                  {/* Main Consultation Photo */}
                  <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                    <Image
                      src="/images/about-consultation.jpg"
                      alt="IDEA Academic Counseling Session"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent flex items-end p-6">
                      <div className="text-white">
                        <span className="inline-block px-3 py-1 rounded-lg bg-[#F4A019] text-gray-950 text-[11px] font-black uppercase tracking-wider mb-1.5 shadow-sm">
                          IDEA Institut Head Office
                        </span>
                        <p className="text-sm sm:text-base font-bold text-white leading-tight">
                          Mahaka Square, Kelapa Gading, Jakarta
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating Trust Metric Badge Top Right */}
                  <div className="absolute -top-4 -right-3 bg-white text-gray-900 px-4 py-3 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-subtle-float">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#002798] flex items-center justify-center text-lg font-bold">
                      🏆
                    </div>
                    <div>
                      <p className="text-xs font-black text-gray-900 leading-tight">98% Success Rate</p>
                      <p className="text-[10px] text-gray-500">Visa &amp; Placement</p>
                    </div>
                  </div>

                  {/* Floating Metric Badge Bottom Left */}
                  <div className="absolute -bottom-4 -left-3 bg-[#002798] text-white px-4 py-3 rounded-2xl shadow-xl flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center text-sm font-bold">
                      👥
                    </div>
                    <div>
                      <p className="text-xs font-black leading-tight">5.000+ Alumni</p>
                      <p className="text-[10px] text-blue-200">Across Germany &amp; Australia</p>
                    </div>
                  </div>

                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 8. SUCCESS STORIES (TESTIMONIALS) ── */}
      <section className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-center justify-between mb-12">
              <div className="space-y-1">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                  SUCCESS STORIES
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  Real People, Real Achievements
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveStory((prev) => (prev === 0 ? successStories.length - 1 : prev - 1))}
                  className="w-9 h-9 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors"
                  aria-label="Previous story"
                >
                  &larr;
                </button>
                <button
                  onClick={() => setActiveStory((prev) => (prev === successStories.length - 1 ? 0 : prev + 1))}
                  className="w-9 h-9 rounded-2xl border border-gray-200 flex items-center justify-center hover:bg-gray-100 text-gray-600 transition-colors"
                  aria-label="Next story"
                >
                  &rarr;
                </button>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, idx) => (
              <Reveal key={story.name} delay={idx * 120}>
                <div className="bg-white rounded-3xl p-7 border border-blue-100/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="text-[#002798] text-2xl font-serif mb-3 leading-none">““</div>
                    <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-6">
                      &quot;{story.quote}&quot;
                    </p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-10 h-10 rounded-2xl bg-[#002798] text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                      {story.name.charAt(0)}
                    </div>
                    <div>
                      <h5 className="text-xs sm:text-sm font-bold text-gray-900">{story.name}</h5>
                      <p className="text-[11px] text-gray-500 flex items-center gap-1">
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

      {/* ── 9. PRE-FOOTER CTA BANNER (REDESIGNED ULTRA EYE-CATCHING COMPONENT) ── */}
      <CTABanner
        eyebrow="WHERE WILL YOUR JOURNEY TAKE YOU?"
        headline="Begin Constructing Your Global Pathway Today"
        subtext="Connect with an expert advisor to draft your personalized educational blueprint."
        primaryLabel="TALK TO AN ADVISOR"
        primaryHref="https://wa.me/6281297654332"
        showImage={true}
      />
    </div>
  )
}
