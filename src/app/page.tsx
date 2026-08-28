import type { Metadata } from 'next'
import Link from 'next/link'
import HeroSection from '@/components/sections/HeroSection'
import StatisticStrip from '@/components/sections/StatisticStrip'
import ValueCards from '@/components/sections/ValueCards'
import ProgramCards from '@/components/sections/ProgramCards'
import PartnerLogoStrip from '@/components/sections/PartnerLogoStrip'
import TestimonialSection from '@/components/sections/TestimonialSection'
import CTABanner from '@/components/sections/CTABanner'
import SectionHeading from '@/components/ui/SectionHeading'
import { siteStats } from '@/data/team'
import { coursesData } from '@/data/courses'

export const metadata: Metadata = {
  title: 'IDEA Institut — Belajar Bahasa Asing & Studi ke Luar Negeri',
  description:
    'IDEA Institut membantu Anda belajar bahasa asing (Inggris, Jerman, Spanyol, Prancis, Mandarin, Jepang) dan meraih impian studi serta karir di Australia, Jerman, dan negara OECD.',
}

const homeValueCards = [
  {
    icon: '🌐',
    title: 'Kursus Bahasa Asing',
    desc: '6 bahasa pilihan: Inggris, Jerman, Spanyol, Prancis, Mandarin, Jepang — dari level A1 hingga C2.',
    chipColor: 'chip-navy' as const,
  },
  {
    icon: '💼',
    title: 'Program Professional',
    desc: 'Tingkatkan kompetensi kerja: Professional Training, Literacy, dan Numeracy berstandar internasional.',
    chipColor: 'chip-primary' as const,
  },
  {
    icon: '✈️',
    title: 'Opportunities Luar Negeri',
    desc: 'Studi, studi sambil kerja, atau bekerja penuh di Australia, Jerman, dan negara OECD pilihan.',
    chipColor: 'chip-secondary' as const,
  },
  {
    icon: '🤝',
    title: 'Mitra Principal Terpercaya',
    desc: 'Bekerja sama langsung dengan mitra resmi di negara tujuan untuk menjamin keberhasilan Anda.',
    chipColor: 'chip-yellow' as const,
  },
]

const opportunitiesCards = [
  {
    href: '/opportunities/study-abroad',
    flagEmoji: '🎓',
    name: 'Study Abroad',
    nativeName: 'Studi di Luar Negeri',
    tagline: 'Kuliah di universitas terkemuka di Australia, Jerman, dan OECD',
    levels: 'S1 · S2',
  },
  {
    href: '/opportunities/study-and-work',
    flagEmoji: '📚✈️',
    name: 'Study & Work',
    nativeName: 'Studi sambil Kerja',
    tagline: 'Raih pengalaman kerja nyata sambil menyelesaikan studi',
    levels: 'Part-time',
  },
  {
    href: '/opportunities/work-abroad',
    flagEmoji: '💼',
    name: 'Work Abroad',
    nativeName: 'Bekerja di Luar Negeri',
    tagline: 'Karir profesional di Australia dan Jerman',
    levels: 'Full-time',
  },
  {
    href: '/opportunities/vocational-training',
    flagEmoji: '🔧',
    name: 'Vocational Training',
    nativeName: 'Pelatihan Vokasi',
    tagline: 'Program magang dan Ausbildung di perusahaan Jerman',
    levels: 'Training',
  },
]

const homeTestimonials = [
  {
    name: 'Rina Andriani',
    location: 'University of Melbourne',
    quote: 'Berkat kursus English dan bimbingan konsultasi di IDEA Institut, IELTS saya 7.5 dan kini saya kuliah S2 di Melbourne!',
    photo: '',
    program: 'Study Abroad — Australia',
  },
  {
    name: 'Budi Santoso',
    location: 'TU Berlin, Jerman',
    quote: 'IDEA Institut membantu saya dari TestDaF B2 hingga diterima di TU Berlin. Prosesnya profesional dan beres!',
    photo: '',
    program: 'Study Abroad — Germany',
  },
  {
    name: 'Ahmad Fauzi',
    location: 'Jakarta → Frankfurt',
    quote: 'Program Professional Training IDEA Institut mengubah CV saya. Sekarang saya bekerja di perusahaan Jerman!',
    photo: '',
    program: 'Professional Training',
  },
]

export default function HomePage() {
  const courseCards = coursesData.map((c) => ({
    href: `/course/${c.slug}`,
    flagEmoji: c.flagEmoji,
    name: c.name,
    nativeName: c.nativeName,
    levels: c.levels.join('–'),
    students: c.stats[0]?.value,
    tagline: c.tagline,
  }))

  return (
    <>
      {/* 1. Hero */}
      <HeroSection
        variant="home"
        eyebrow="Institut De EurnesiA"
        title="Belajar Bahasa Asing yang Membuka Banyak Peluang"
        titleHighlight="Membuka Banyak Peluang"
        subtitle="Studi ke luar negeri, studi sambil kerja, bekerja atau pelatihan vokasi — semuanya dimulai dari kemampuan berbahasa. IDEA Institut hadir bersama partner principal di negara tujuan untuk menjamin keberhasilan Anda."
        primaryCTA={{ label: 'Konsultasi Gratis', href: 'https://wa.me/6281297654332', external: true }}
        secondaryCTA={{ label: 'Lihat Program', href: '/course' }}
        languageChips={['🇬🇧 English', '🇩🇪 German', '🇪🇸 Spanish', '🇫🇷 French', '🇨🇳 Chinese', '🇯🇵 Japanese']}
        badge="120+ siswa lolos ke luar negeri tahun ini"
        floatingCards={[
          { emoji: '🎓', title: '350+ Alumni', subtitle: 'Kuliah di Australia', position: 'top-left' },
          { emoji: '⭐', title: '97% Kepuasan', subtitle: 'Siswa IDEA Institut', position: 'bottom-right' },
        ]}
      />

      {/* 2. Statistic Strip */}
      <StatisticStrip stats={siteStats} />

      {/* 3. Value Cards — 4 Pilar */}
      <ValueCards
        eyebrow="Mengapa IDEA Institut?"
        title="Satu Institusi, Semua Solusi"
        highlight="Semua Solusi"
        subtitle="Dari kursus bahasa, peningkatan kompetensi profesional, hingga penempatan studi dan kerja di luar negeri — semuanya tersedia di IDEA Institut."
        cards={homeValueCards}
      />

      {/* 4. Program Highlight — 6 Bahasa */}
      <ProgramCards
        eyebrow="Program Bahasa"
        title="6 Bahasa, Satu Tujuan"
        highlight="Satu Tujuan"
        subtitle="Kuasai bahasa asing pilihan Anda dengan kurikulum terstruktur, pengajar native/tersertifikasi, dan sistem belajar yang terbukti efektif."
        cards={courseCards}
        columns={3}
      />

      {/* 5. Opportunities Highlight */}
      <section className="py-20 md:py-24" style={{ background: '#F8F9FC' }}>
        <div className="container-section">
          <SectionHeading
            eyebrow="Peluang Internasional"
            title="Raih Impianmu di Luar Negeri"
            highlight="Impianmu"
            subtitle="Dari studi penuh, studi sambil kerja, hingga pelatihan vokasi — IDEA Institut menjamin perjalananmu ke Australia, Jerman, dan negara OECD pilihan."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {opportunitiesCards.map((card) => (
              <Link
                key={card.href}
                href={card.href}
                className="group card-base bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 hover:border-transparent"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                  style={{ background: '#F8F9FC' }}
                >
                  {card.flagEmoji}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-1" style={{ color: '#002798' }}>
                    {card.name}
                  </h3>
                  <p className="text-xs mb-2" style={{ color: '#F4A019' }}>
                    {card.nativeName}
                  </p>
                  <p className="text-sm leading-snug" style={{ color: '#5a6a8a' }}>
                    {card.tagline}
                  </p>
                </div>
                <span
                  className="inline-flex items-center gap-1.5 text-sm font-semibold mt-auto transition-gap group-hover:gap-2.5"
                  style={{ color: '#DC1E13' }}
                >
                  Pelajari →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partner Logo Strip */}
      <PartnerLogoStrip />

      {/* 7. Testimonials */}
      <TestimonialSection testimonials={homeTestimonials} />

      {/* 8. CTA Banner */}
      <CTABanner
        title="Wujudkan Impian Studi & Karir Internasionalmu Bersama IDEA Institut"
        subtitle="Konsultasi gratis dengan tim ahli kami. Tidak ada biaya pendaftaran awal, tidak ada kewajiban apapun."
        variant="navy"
      />
    </>
  )
}
