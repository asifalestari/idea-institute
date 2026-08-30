import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Language Course — IDEA Institute',
  description:
    'Master a new language and open doors to global opportunities in education, career, and life. English, German, Spanish, French, Chinese, and Japanese.',
}

const languages = [
  { name: 'English', slug: 'english', img: '/images/lang-english.jpg' },
  { name: 'German', slug: 'german', img: '/images/lang-german.jpg' },
  { name: 'Spanish', slug: 'spanish', img: '/images/lang-spanish.jpg' },
  { name: 'French', slug: 'french', img: '/images/lang-french.jpg' },
  { name: 'Chinese', slug: 'chinese', img: '/images/lang-chinese.jpg' },
  { name: 'Japanese', slug: 'japanese', img: '/images/lang-japanese.jpg' },
]

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'All Levels',
    desc: 'From Beginner to Advanced',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Certified Programs',
    desc: 'Internationally recognized',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'Interactive Learning',
    desc: 'Practical, hands-on communication-focused',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Career Opportunities',
    desc: 'Improve your career with language skills',
  },
]

export default function LanguageCoursePage() {
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
                  Language Course
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  Master a new language and open doors to global opportunities in education, career, and life.
                </p>
              </Reveal>

              {/* Checklist */}
              <Reveal delay={300}>
                <ul className="space-y-3 pt-2">
                  {[
                    'Expert native and local instructors',
                    'Communicative & practical approach',
                    'Flexible class options',
                    'International standard curriculum',
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
            </div>

            {/* Right Column: Pill/Round Hero Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={250} direction="left">
                <div className="relative w-72 sm:w-80 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white group">
                  <Image
                    src="/images/hero-language-course.jpg"
                    alt="Language Course Students"
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

      {/* ── 2. CHOOSE YOUR LANGUAGE GRID (3x2) ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] mb-10">
              Choose Your Language
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {languages.map((lang, idx) => (
              <Reveal key={lang.slug} delay={idx * 80}>
                <Link
                  href={`/language-course/${lang.slug}`}
                  className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col h-full"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={lang.img}
                      alt={lang.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex items-center justify-between">
                    <span className="text-base font-bold text-gray-900">{lang.name}</span>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 group-hover:bg-[#DC1E13] group-hover:text-white group-hover:rotate-45 transition-all duration-300">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. ADVISOR PROMO STRIP ── */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal delay={150}>
            <div className="rounded-3xl bg-[#EEF4FF] border border-blue-100 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
              <div className="space-y-1 text-center md:text-left">
                <h3 className="text-lg sm:text-xl font-bold text-[#002798]">
                  Not sure which language is right for you?
                </h3>
                <p className="text-sm text-gray-600">
                  Our experts will help you find the best fit for your education and career goals.
                </p>
              </div>
              <a
                href="https://wa.me/6281297654332"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-3.5 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all shrink-0"
              >
                Talk to an Advisor
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 4. FOUR FEATURE PILLARS ── */}
      <section className="py-16 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
            {features.map((f, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex flex-col items-center sm:items-start space-y-2 group p-2">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#002798] flex items-center justify-center mb-1 group-hover:scale-110 transition-transform shadow-sm">
                    {f.icon}
                  </div>
                  <h4 className="text-base font-bold text-gray-900">{f.title}</h4>
                  <p className="text-xs text-gray-500">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
