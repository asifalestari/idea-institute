import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import StatisticStrip from '@/components/sections/StatisticStrip'
import TestimonialSection from '@/components/sections/TestimonialSection'
import CTABanner from '@/components/sections/CTABanner'
import SectionHeading from '@/components/ui/SectionHeading'
import { coursesData, getCourseBySlug } from '@/data/courses'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return coursesData.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) return {}
  return {
    title: `${course.nativeName} — Language Course IDEA Institute`,
    description: `Kursus ${course.name} di IDEA Institute. Level ${course.levels.join(', ')}. ${course.tagline}`,
  }
}

const levelColors = [
  { bg: 'rgba(0,39,152,0.06)', border: 'rgba(0,39,152,0.15)', text: '#002798' },
  { bg: 'rgba(244,160,25,0.08)', border: 'rgba(244,160,25,0.2)', text: '#d4880f' },
  { bg: 'rgba(220,30,19,0.07)', border: 'rgba(220,30,19,0.15)', text: '#b81710' },
]

export default async function LanguageCourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) notFound()

  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION ── */}
      <HeroSection
        variant="page"
        badgePill={`${course.nativeName.toUpperCase()} PROGRAM`}
        lines={[`Master ${course.nativeName}.`, 'Master Your Future.']}
        highlight={`Master ${course.nativeName}.`}
        subtitle={course.tagline}
        primaryCTA={{ label: 'DAFTAR KELAS', href: 'https://wa.me/6281297654332', external: true }}
        secondaryCTA={{ label: 'Lihat Kurikulum', href: '#curriculum' }}
        heroImage={`/images/lang-${course.slug}.jpg`}
        heroImageAlt={`${course.nativeName} Course`}
      />

      {/* ── 2. STATISTIC STRIP (NAVY) ── */}
      <StatisticStrip stats={course.stats} dark />

      {/* ── 3. CURRICULUM ── */}
      <section id="curriculum" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Kurikulum"
            title="Level & Silabus Program"
            highlight="Level & Silabus"
            subtitle={`Program ${course.nativeName} di IDEA Institute mengikuti kerangka CEFR internasional. Pilih level yang sesuai kemampuan Anda.`}
          />

          <div className="space-y-4">
            {course.curriculum.map((lvl, i) => {
              const clr = levelColors[i % levelColors.length]
              return (
                <div
                  key={lvl.level}
                  className="rounded-2xl overflow-hidden"
                  style={{ border: `1.5px solid ${clr.border}`, background: clr.bg }}
                >
                  <div className="flex items-center gap-4 px-6 py-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black text-white shrink-0"
                      style={{ background: clr.text }}
                    >
                      {lvl.level.split('–')[0]}
                    </div>
                    <div className="flex-1">
                      <span className="font-bold text-sm" style={{ color: clr.text }}>
                        Level {lvl.level}
                      </span>
                      <span className="text-sm ml-2 text-gray-500">
                        — {lvl.title}
                      </span>
                    </div>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ background: clr.text, color: '#fff' }}
                    >
                      {lvl.level}
                    </span>
                  </div>

                  <div className="px-6 pb-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {lvl.topics.map((topic) => (
                        <div
                          key={topic}
                          className="flex items-center gap-2 text-sm text-gray-700"
                        >
                          <span style={{ color: clr.text }}>✓</span>
                          {topic}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://wa.me/6281297654332"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-3.5 rounded-2xl text-xs font-bold text-white bg-[#002798] hover:bg-[#001a6e] shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Konsultasi Pilih Level
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. TUTORS ── */}
      <section className="py-20 bg-[#F9FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pengajar"
            title="Belajar dari Para Ahli"
            highlight="Para Ahli"
            subtitle={`Instruktur ${course.nativeName} kami adalah native speaker dan pemegang sertifikasi internasional.`}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {course.tutors.map((tutor, i) => {
              const colors = ['#002798', '#DC1E13', '#F4A019']
              const avatarColor = colors[i % colors.length]
              return (
                <div
                  key={tutor.name}
                  className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col gap-4"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-black text-xl shrink-0"
                      style={{ background: avatarColor }}
                    >
                      {tutor.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight text-[#002798]">
                        {tutor.name}
                      </p>
                      <p className="text-xs text-[#F4A019] mt-0.5">
                        {tutor.title}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-gray-500">
                    {tutor.bio}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ── */}
      <TestimonialSection testimonials={course.testimonials} light />

      {/* Back Link */}
      <div className="py-4 bg-white text-center text-sm">
        <Link href="/language-course" className="text-gray-500 hover:text-[#002798] hover:underline">
          &larr; Kembali ke Language Course
        </Link>
      </div>

      {/* ── 6. CTA BANNER ── */}
      <CTABanner
        eyebrow="Start Your Learning Journey"
        title={`Siap Mulai Belajar ${course.nativeName}?`}
        subtitle="Daftar kelas atau konsultasikan level yang tepat untuk Anda — gratis, tanpa kewajiban."
        buttonLabel="DAFTAR VIA WHATSAPP"
        buttonHref="https://wa.me/6281297654332"
      />
    </div>
  )
}
