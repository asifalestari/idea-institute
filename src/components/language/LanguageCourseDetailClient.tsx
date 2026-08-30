'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import CTABanner from '@/components/sections/CTABanner'
import { useLanguage } from '@/context/LanguageContext'
import type { CourseLangData } from '@/types'

interface Props {
  course: CourseLangData
}

export default function LanguageCourseDetailClient({ course }: Props) {
  const { language } = useLanguage()
  const isId = language === 'id'

  // Dynamic language data selection
  const currentTagline = isId ? course.tagline : (course.taglineEn || course.tagline)
  const currentStats = (isId ? course.stats : (course.statsEn || course.stats))
  const currentCurriculum = (isId ? course.curriculum : (course.curriculumEn || course.curriculum))
  const currentTutors = (isId ? course.tutors : (course.tutorsEn || course.tutors))
  const currentTestimonials = (isId ? course.testimonials : (course.testimonialsEn || course.testimonials))

  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION ── */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-[#FAFBFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={80}>
                {/* Breadcrumb Back Navigation */}
                <div className="mb-3">
                  <Link
                    href="/language-course"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#002798] transition-colors"
                  >
                    <span>&larr;</span>
                    <span>{isId ? 'Semua Program Bahasa' : 'All Language Programs'}</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-900 font-bold">{course.nativeName}</span>
                  </Link>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-blue-50 text-xs font-extrabold uppercase tracking-widest text-[#002798]">
                  <span>{course.flagEmoji}</span>
                  <span>{course.nativeName.toUpperCase()} {isId ? 'PROGRAM' : 'PATHWAY'}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-black text-[#002798] tracking-tight leading-tight mt-2">
                  Master {course.nativeName}. <br />
                  <span className="text-gray-900">
                    {isId ? 'Raih Masa Depanmu.' : 'Master Your Future.'}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  {currentTagline}.{' '}
                  {isId
                    ? 'Kurikulum internasional CEFR dipandu instruktur native dan pengajar bersertifikat resmi.'
                    : 'International CEFR curriculum guided by native and certified professional instructors.'}
                </p>
              </Reveal>

              {/* Checklist */}
              <Reveal delay={240}>
                <ul className="space-y-3 pt-2">
                  {[
                    isId
                      ? `Tersedia level lengkap (${course.levels.join(', ')})`
                      : `Comprehensive levels available (${course.levels.join(', ')})`,
                    isId
                      ? 'Instruktur native speaker & pengajar bersertifikasi resmi'
                      : 'Native speaker instructors & certified educators',
                    isId
                      ? 'Fokus komunikasi praktis & persiapan ujian internasional'
                      : 'Practical conversational focus & official exam prep',
                    isId
                      ? 'Pilihan kelas fleksibel (Online Live & Tatap Muka)'
                      : 'Flexible class options (Online Live & In-Person)',
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

              {/* Action Buttons */}
              <Reveal delay={320}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="https://wa.me/6281297654332"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    {isId ? 'Daftar Kelas WhatsApp' : 'Enroll via WhatsApp'}
                  </a>
                  <a
                    href="#curriculum"
                    className="px-8 py-4 rounded-2xl text-xs font-bold text-[#002798] bg-white border border-[#002798] hover:bg-blue-50 hover:-translate-y-0.5 active:translate-y-0 shadow-sm transition-all duration-200"
                  >
                    {isId ? 'Lihat Kurikulum' : 'View Curriculum'}
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Photo */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={200} direction="left">
                <div className="relative w-72 sm:w-80 h-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                  <Image
                    src={`/images/lang-${course.slug}.jpg`}
                    alt={`${course.nativeName} Course`}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-xs font-bold text-[#F4A019] uppercase tracking-wider">{course.flagEmoji} {course.nativeName}</p>
                      <p className="text-base font-bold">{isId ? 'Kurikulum Resmi Bersertifikat' : 'Official Certified Curriculum'}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. METRIC STRIP (NAVY) ── */}
      <section className="py-12 bg-[#002798] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/15">
            {currentStats.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 80} className="pt-4 md:pt-0 md:pl-4">
                <div className="flex flex-col items-center space-y-1">
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="text-xs text-blue-200 font-medium">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. CURRICULUM LEVELS ── */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                {isId ? 'KURIKULUM & SILABUS' : 'CURRICULUM & SYLLABUS'}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798]">
                {isId ? `Tingkatan Level ${course.nativeName}` : `${course.nativeName} Level Progression`}
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto pt-1">
                {isId
                  ? 'Mengikuti standar kerangka CEFR internasional. Pilih tingkatan level yang sesuai dengan target dan kemampuan Anda.'
                  : 'Aligned with international CEFR standards. Select the proficiency level tailored to your goals and current abilities.'}
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentCurriculum.map((lvl, i) => (
              <Reveal key={lvl.level} delay={i * 80}>
                <div className="group bg-[#FAFBFF] rounded-3xl p-6 sm:p-7 border border-blue-200/70 shadow-sm hover:shadow-xl hover:border-blue-400 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-3.5 py-1 rounded-xl bg-[#002798] text-white text-xs font-black uppercase tracking-wider">
                        Level {lvl.level}
                      </span>
                      <span className="text-xs font-bold text-gray-500">{lvl.title}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-4 group-hover:text-[#002798] transition-colors">
                      {lvl.title} ({lvl.level})
                    </h3>

                    <div className="space-y-2.5 pt-2 border-t border-blue-100">
                      {lvl.topics.map((topic) => (
                        <div key={topic} className="flex items-center gap-2.5 text-xs sm:text-sm text-gray-700 font-medium">
                          <span className="text-[#002798] font-bold">✓</span>
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-blue-100/80">
                    <a
                      href="https://wa.me/6281297654332"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-sm hover:shadow transition-all"
                    >
                      <span>{isId ? `Pilih Level ${lvl.level}` : `Choose Level ${lvl.level}`}</span>
                      <span>&rarr;</span>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INSTRUCTORS & TUTORS ── */}
      <section className="py-20 bg-[#F9FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-12 space-y-2">
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                {isId ? 'PENGAJAR BERSERTIFIKAT' : 'CERTIFIED INSTRUCTORS'}
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798]">
                {isId ? 'Belajar Langsung dari Para Ahli' : 'Learn Directly from Native Experts'}
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentTutors.map((tutor, idx) => (
              <Reveal key={tutor.name} delay={idx * 80}>
                <div className="bg-white rounded-3xl p-6 sm:p-7 border border-gray-200/90 shadow-sm hover:shadow-xl hover:border-blue-200 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#002798] text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                        {tutor.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-gray-900 group-hover:text-[#002798] transition-colors">{tutor.name}</h4>
                        <p className="text-xs font-semibold text-[#F4A019] mt-0.5">{tutor.title}</p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2 border-t border-gray-100">
                      {tutor.bio}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. STUDENT TESTIMONIALS ── */}
      {currentTestimonials && currentTestimonials.length > 0 && (
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-12 space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                  {isId ? 'KISAH SUKSES ALUMNI' : 'ALUMNI SUCCESS STORIES'}
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
                  {isId ? `Pengalaman Nyata Siswa ${course.nativeName}` : `Real Experiences of ${course.nativeName} Students`}
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentTestimonials.map((t, idx) => (
                <Reveal key={t.name} delay={idx * 80}>
                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
                    <div>
                      <div className="text-[#002798] text-2xl font-serif mb-4 leading-none">““</div>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed italic mb-8">
                        &quot;{t.quote}&quot;
                      </p>
                    </div>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                      <div className="w-10 h-10 rounded-2xl bg-[#002798] text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h5 className="text-xs sm:text-sm font-bold text-gray-900">{t.name}</h5>
                        <p className="text-[11px] text-gray-500 mt-0.5">
                          {t.location} {t.program && `• ${t.program}`}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. CTA BANNER ── */}
      <CTABanner
        eyebrow={isId ? 'MULAI PERJALANAN BELAJAR ANDA' : 'BEGIN YOUR LANGUAGE JOURNEY'}
        headline={
          isId
            ? `Siap Menguasai Bahasa ${course.nativeName}?`
            : `Ready to Master ${course.nativeName}?`
        }
        subtext={
          isId
            ? 'Daftar kelas atau konsultasikan level yang paling tepat untuk Anda — gratis dan dipandu oleh konselor akademik kami.'
            : 'Enroll in a class or receive a complimentary level consultation guided by our expert academic advisors.'
        }
        primaryLabel={isId ? 'DAFTAR VIA WHATSAPP' : 'ENROLL VIA WHATSAPP'}
        primaryHref="https://wa.me/6281297654332"
      />
    </div>
  )
}
