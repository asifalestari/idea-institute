import type { ProgramData, CountryData, Stat, Testimonial } from '@/types'

// ─── Country Data (Study Abroad) ──────────────────────────────
export const countriesData: CountryData[] = [
  {
    slug: 'australia',
    name: 'Australia',
    heroImage: '/images/countries/australia-hero.jpg',
    description:
      'Australia adalah destinasi studi favorit bagi mahasiswa Indonesia. Dengan sistem pendidikan berkelas dunia, lingkungan multikultural, dan peluang kerja pascastudi yang luas, Australia menjadi pilihan utama IDEA Institut.',
    stats: [
      { label: 'Alumni di Australia', value: '350+' },
      { label: 'Universitas Mitra', value: '12+' },
      { label: 'Rata-rata Biaya Hidup/Bulan', value: 'AUD 1.800' },
      { label: 'Post-Study Work Visa', value: 'Hingga 4 Tahun' },
    ],
    requirements: [
      'IELTS minimum 6.0 (tergantung universitas)',
      'Ijazah SMA/SMK atau S1 (untuk S2)',
      'Nilai akademik minimum 3.0 GPA',
      'Statement of Purpose dalam Bahasa Inggris',
      'Bukti keuangan (bank statement)',
      'Passport yang berlaku min. 18 bulan',
    ],
    steps: [
      { step: 1, title: 'Konsultasi & Assessment', desc: 'Diskusikan tujuan studi, pilihan universitas, dan jalur yang sesuai profil Anda.' },
      { step: 2, title: 'Persiapan Dokumen', desc: 'Bantu persiapan ijazah, transkrip, SOP, dan surat rekomendasi.' },
      { step: 3, title: 'Pendaftaran Universitas', desc: 'IDEA Institut mendampingi proses aplikasi ke universitas pilihan Anda.' },
      { step: 4, title: 'Urus Visa Student', desc: 'Panduan lengkap pengajuan Student Visa Australia (subclass 500).' },
      { step: 5, title: 'Pra-Keberangkatan', desc: 'Briefing akomodasi, transportasi, dan kehidupan di Australia.' },
      { step: 6, title: 'Dukungan On-Arrival', desc: 'Tim IDEA membantu orientasi dan settling-in di kota tujuan.' },
    ],
    universities: [
      'University of Melbourne', 'Australian National University', 'University of Sydney',
      'Monash University', 'University of Queensland', 'RMIT University',
      'Curtin University', 'Griffith University',
    ],
    testimonials: [
      {
        name: 'Rina Andriani',
        location: 'Sekarang di Melbourne',
        quote: 'IDEA Institut membantu saya dari persiapan IELTS hingga tiba di Melbourne. Prosesnya lancar dan profesional!',
        photo: '/images/testimonials/rina.jpg',
        program: 'Study Abroad — Australia',
      },
    ],
  },
  {
    slug: 'germany',
    name: 'Jerman',
    heroImage: '/images/countries/germany-hero.jpg',
    description:
      'Jerman menawarkan keunggulan yang langka: pendidikan tinggi berkualitas dunia dengan biaya kuliah yang sangat terjangkau bahkan gratis di universitas negeri. Cocok untuk studi teknik, sains, dan bisnis.',
    stats: [
      { label: 'Alumni di Jerman', value: '180+' },
      { label: 'Universitas Mitra', value: '8+' },
      { label: 'Biaya Kuliah Universitas Negeri', value: 'Gratis*' },
      { label: 'Visa Pencari Kerja', value: '18 Bulan' },
    ],
    requirements: [
      'Bahasa Jerman minimal B2/C1 (TestDaF atau Goethe-Zertifikat)',
      'Atau IELTS 6.5 untuk program berbahasa Inggris',
      'Ijazah SMA (untuk bachelor) atau S1 (untuk S2)',
      'Motivationsschreiben (surat motivasi dalam Bahasa Jerman)',
      'Legalitas dokumen oleh Ditjen AHU',
      'Bukti dana € 11.208/tahun (Sperrkonto)',
    ],
    steps: [
      { step: 1, title: 'Konsultasi Program', desc: 'Tentukan universitas dan program studi yang sesuai kemampuan bahasa Anda.' },
      { step: 2, title: 'Kursus Bahasa Jerman', desc: 'Ikuti kursus intensif Jerman di IDEA Institut hingga B2/C1.' },
      { step: 3, title: 'Uni-Assist / Direct Application', desc: 'Proses pendaftaran melalui Uni-Assist atau langsung ke universitas.' },
      { step: 4, title: 'Legalisasi Dokumen', desc: 'Bantu proses legalisasi ijazah dan transkrip untuk pengakuan di Jerman.' },
      { step: 5, title: 'Permohonan Visa Studi', desc: 'Pengajuan Student Visa Jerman di Kedutaan Besar Jerman Jakarta.' },
      { step: 6, title: 'Buka Sperrkonto & Keberangkatan', desc: 'Panduan pembukaan Sperrkonto dan persiapan keberangkatan.' },
    ],
    universities: [
      'TU Munich', 'LMU Munich', 'Heidelberg University',
      'TU Berlin', 'RWTH Aachen', 'KIT Karlsruhe',
      'University of Hamburg', 'HU Berlin',
    ],
    testimonials: [
      {
        name: 'Budi Santoso',
        location: 'Sekarang di Berlin',
        quote: 'Kuliah S2 di TU Berlin gratis! Terima kasih IDEA Institut yang membantu proses dari awal hingga keberangkatan.',
        photo: '/images/testimonials/budi.jpg',
        program: 'Study Abroad — Germany',
      },
    ],
  },
  {
    slug: 'other-oecd',
    name: 'Negara OECD Lainnya',
    heroImage: '/images/countries/oecd-hero.jpg',
    description:
      'Selain Australia dan Jerman, IDEA Institut juga membantu Anda meraih pendidikan di berbagai negara OECD pilihan seperti Belanda, Kanada, Prancis, Swedia, Selandia Baru, dan Irlandia.',
    stats: [
      { label: 'Negara OECD Tersedia', value: '10+' },
      { label: 'Alumni di OECD', value: '120+' },
      { label: 'Mitra Institusi', value: '25+' },
      { label: 'Kepuasan Klien', value: '95%' },
    ],
    requirements: [
      'Persyaratan bahasa sesuai negara tujuan (IELTS/TOEFL/DELF/dll.)',
      'Ijazah yang telah dilegalisasi',
      'Bukti kemampuan finansial',
      'Asuransi kesehatan internasional',
      'Dokumen tambahan tergantung negara dan program',
    ],
    steps: [
      { step: 1, title: 'Pilih Negara & Program', desc: 'Konsultasi mendalam untuk menentukan negara dan universitas yang tepat.' },
      { step: 2, title: 'Persiapan Bahasa', desc: 'Kursus bahasa sesuai kebutuhan negara tujuan (Inggris, Prancis, Belanda, dll.).' },
      { step: 3, title: 'Aplikasi Universitas', desc: 'Pendampingan proses aplikasi ke universitas di negara pilihan.' },
      { step: 4, title: 'Proses Visa', desc: 'Bantuan permohonan visa studi sesuai regulasi negara tujuan.' },
      { step: 5, title: 'Keberangkatan', desc: 'Briefing lengkap dan dukungan pre-departure.' },
    ],
    universities: [
      'Delft University of Technology (NL)', 'University of Amsterdam (NL)',
      'McGill University (CA)', 'University of Toronto (CA)',
      'Sciences Po (FR)', 'University of Auckland (NZ)',
      'Trinity College Dublin (IE)', 'Uppsala University (SE)',
    ],
    testimonials: [
      {
        name: 'Fitria Amelia',
        location: 'Sekarang di Amsterdam',
        quote: 'IDEA Institut membantu saya diterima di University of Amsterdam untuk program Business Administration!',
        photo: '/images/testimonials/fitria.jpg',
        program: 'Study Abroad — Netherlands',
      },
    ],
  },
]

// ─── Opportunities Programs ────────────────────────────────────
export const opportunitiesPrograms: ProgramData[] = [
  {
    slug: 'study-and-work',
    title: 'Study & Work',
    subtitle: 'Raih pengalaman kerja nyata sambil menyelesaikan studi Anda di luar negeri',
    heroImage: '/images/opportunities/study-work-hero.jpg',
    benefits: [
      {
        icon: '🎓',
        title: 'Izin Kerja Saat Studi',
        desc: 'Panduan lengkap mendapatkan izin kerja paruh waktu (20 jam/minggu) selama masa studi.',
        chipColor: 'chip-navy',
      },
      {
        icon: '💼',
        title: 'Job Placement Support',
        desc: 'Jaringan mitra employer IDEA di Australia dan Jerman untuk membantu pencarian kerja pertama Anda.',
        chipColor: 'chip-primary',
      },
      {
        icon: '💰',
        title: 'Subsidi Biaya Hidup',
        desc: 'Penghasilan dari kerja paruh waktu membantu menutup biaya hidup sehari-hari.',
        chipColor: 'chip-secondary',
      },
      {
        icon: '🌟',
        title: 'Pengalaman Internasional',
        desc: 'Portofolio kerja internasional yang meningkatkan nilai CV Anda secara signifikan.',
        chipColor: 'chip-secondary',
      },
    ],
    modules: [
      {
        title: 'Persiapan Dokumen Kerja',
        items: ['CV format internasional', 'Cover letter efektif', 'LinkedIn profile', 'Referensi profesional'],
      },
      {
        title: 'Kesiapan Workplace',
        items: ['Etika kerja lokal', 'Komunikasi di tempat kerja', 'Hak & kewajiban karyawan', 'Tax & superannuation (Australia)'],
      },
    ],
    stats: [
      { label: 'Alumni Study & Work', value: '420+' },
      { label: 'Rata-rata Penghasilan', value: 'AUD 25/jam' },
      { label: 'Penempatan Berhasil', value: '85%' },
      { label: 'Kepuasan Peserta', value: '93%' },
    ],
    steps: [
      { step: 1, title: 'Konsultasi Program', desc: 'Diskusikan profil, target negara, dan jenis pekerjaan yang sesuai.' },
      { step: 2, title: 'Persiapan Bahasa & Dokumen', desc: 'Kursus bahasa + persiapan CV dan dokumen kerja internasional.' },
      { step: 3, title: 'Proses Visa', desc: 'Bantu proses visa studi dengan izin kerja paruh waktu.' },
      { step: 4, title: 'Job Matching', desc: 'IDEA menghubungkan Anda dengan mitra employer di negara tujuan.' },
    ],
    testimonials: [
      {
        name: 'Deni Firmansyah',
        location: 'Melbourne, Australia',
        quote: 'Saya kuliah + kerja di Melbourne. Biaya hidup tertutupi dan CV saya jauh lebih kuat!',
        photo: '/images/testimonials/deni.jpg',
        program: 'Study & Work Australia',
      },
    ],
  },
  {
    slug: 'work-abroad',
    title: 'Work Abroad',
    subtitle: 'Bangun karir internasional dengan penempatan kerja di Australia, Jerman, dan negara OECD',
    heroImage: '/images/opportunities/work-abroad-hero.jpg',
    benefits: [
      {
        icon: '🌍',
        title: 'Penempatan Kerja Langsung',
        desc: 'Jaringan mitra perusahaan di Australia dan Jerman untuk penempatan tenaga kerja terampil.',
        chipColor: 'chip-navy',
      },
      {
        icon: '📋',
        title: 'Visa Kerja Terstandar',
        desc: 'Bantuan pengurusan work visa (Working Holiday, Skilled Worker 482/Skilled Worker Visa Jerman).',
        chipColor: 'chip-primary',
      },
      {
        icon: '🏠',
        title: 'Dukungan Relokasi',
        desc: 'Bantuan akomodasi awal, transportasi, dan orientasi kota di negara tujuan.',
        chipColor: 'chip-secondary',
      },
      {
        icon: '📈',
        title: 'Pengembangan Karir',
        desc: 'Mentoring berkelanjutan untuk pengembangan karir jangka panjang di luar negeri.',
        chipColor: 'chip-secondary',
      },
    ],
    modules: [
      {
        title: 'Pre-Departure Preparation',
        items: ['Bahasa kerja (EN/DE)', 'CV & interview preparation', 'Pengetahuan regulasi kerja', 'Cross-cultural communication'],
      },
      {
        title: 'Proses Penempatan',
        items: ['Job matching dengan mitra employer', 'Mock interview', 'Negosiasi kontrak', 'Panduan relokasi lengkap'],
      },
    ],
    stats: [
      { label: 'Tenaga Kerja Ditempatkan', value: '280+' },
      { label: 'Mitra Employer', value: '30+' },
      { label: 'Berhasil Bekerja', value: '80%' },
      { label: 'Kepuasan Klien', value: '91%' },
    ],
    steps: [
      { step: 1, title: 'Konsultasi & Profil', desc: 'Analisis latar belakang, keahlian, dan tujuan karir Anda.' },
      { step: 2, title: 'Persiapan Kompetensi', desc: 'Kursus bahasa + Professional Training sesuai bidang kerja.' },
      { step: 3, title: 'Matching & Apply', desc: 'IDEA mencocokkan profil Anda dengan lowongan dari mitra employer.' },
      { step: 4, title: 'Visa & Keberangkatan', desc: 'Proses work visa dan persiapan keberangkatan.' },
    ],
    testimonials: [
      {
        name: 'Eko Prasetyo',
        location: 'Frankfurt, Jerman',
        quote: 'Kini saya bekerja sebagai software engineer di Jerman berkat program Work Abroad IDEA Institut!',
        photo: '/images/testimonials/eko.jpg',
        program: 'Work Abroad — Germany',
      },
    ],
  },
  {
    slug: 'vocational-training',
    title: 'Vocational Training',
    subtitle: 'Program magang dan pelatihan vokasi di perusahaan nyata di Australia dan Jerman',
    heroImage: '/images/opportunities/vocational-hero.jpg',
    benefits: [
      {
        icon: '🔧',
        title: 'Dual System Training',
        desc: 'Sistem pelatihan vokasi ala Jerman (Ausbildung) — kombinasi teori di kelas dan praktik di perusahaan.',
        chipColor: 'chip-navy',
      },
      {
        icon: '🤝',
        title: 'Mitra Perusahaan',
        desc: 'Jaringan 25+ perusahaan mitra di bidang otomotif, IT, perhotelan, dan manufaktur.',
        chipColor: 'chip-primary',
      },
      {
        icon: '💳',
        title: 'Stipend / Tunjangan',
        desc: 'Peserta mendapatkan tunjangan (stipend) selama masa pelatihan berlangsung.',
        chipColor: 'chip-secondary',
      },
      {
        icon: '🎓',
        title: 'Sertifikat Kompetensi',
        desc: 'Sertifikat vokasi yang diakui industri di Jerman dan negara-negara OECD.',
        chipColor: 'chip-secondary',
      },
    ],
    modules: [
      {
        title: 'Persiapan Program',
        items: ['Bahasa Jerman / Inggris vokasi', 'Technical vocabulary', 'Keselamatan kerja (K3)', 'Etika industri'],
      },
      {
        title: 'On-the-Job Training',
        items: ['Rotasi divisi di perusahaan mitra', 'Laporan mingguan', 'Mentoring supervisor', 'Evaluasi berkala'],
      },
    ],
    stats: [
      { label: 'Peserta Vokasi', value: '190+' },
      { label: 'Mitra Perusahaan', value: '25+' },
      { label: 'Dilanjutkan Kerja', value: '65%' },
      { label: 'Kepuasan Peserta', value: '94%' },
    ],
    steps: [
      { step: 1, title: 'Konsultasi & Seleksi', desc: 'Penilaian bakat, minat, dan kecocokan dengan bidang vokasi.' },
      { step: 2, title: 'Persiapan Teknis', desc: 'Kursus bahasa + modul teknis sesuai bidang vokasi pilihan.' },
      { step: 3, title: 'Matching Perusahaan', desc: 'Pencocokan profil dengan lowongan Ausbildung / magang mitra.' },
      { step: 4, title: 'Keberangkatan & Training', desc: 'Keberangkatan dan memulai program Vocational Training.' },
    ],
    testimonials: [
      {
        name: 'Tomi Wahyudi',
        location: 'Stuttgart, Jerman',
        quote: 'Program Vocational Training di Jerman mengubah hidup saya. Sekarang saya menjadi mekanik bersertifikasi!',
        photo: '/images/testimonials/tomi.jpg',
        program: 'Vocational Training — Germany',
      },
    ],
  },
]

export function getCountryBySlug(slug: string): CountryData | undefined {
  return countriesData.find((c) => c.slug === slug)
}

export function getOpportunityBySlug(slug: string): ProgramData | undefined {
  return opportunitiesPrograms.find((p) => p.slug === slug)
}

// ─── Unified Data Structure for /study-work/[slug] ──────────────

export interface UnifiedStudyWorkDetail {
  slug: string
  title: string
  titleEn?: string
  subtitle: string
  subtitleEn?: string
  heroImage: string
  badge: string
  badgeEn?: string
  type: 'country' | 'program'
  stats: Stat[]
  benefits: string[]
  requirements?: string[]
  steps: { step: number | string; title: string; desc: string }[]
  universities?: string[]
  modules?: { title: string; items: string[] }[]
  testimonials: Testimonial[]
}

// Slug Aliases (e.g. from legacy WordPress redirects)
const SLUG_ALIASES: Record<string, string> = {
  'kuliah-di-australia': 'australia',
  'kuliah-di-german': 'germany',
  'studi-sambil-kerja': 'study-and-work',
  'studi-keluar-negeri': 'study-and-work',
}

export function getAllStudyWorkSlugs(): string[] {
  const baseSlugs = [
    ...countriesData.map((c) => c.slug),
    ...opportunitiesPrograms.map((p) => p.slug),
    ...Object.keys(SLUG_ALIASES),
  ]
  return Array.from(new Set(baseSlugs))
}

export function getUnifiedStudyWorkDetail(rawSlug: string): UnifiedStudyWorkDetail | undefined {
  const slug = SLUG_ALIASES[rawSlug] || rawSlug

  // 1. Check Country
  const country = getCountryBySlug(slug)
  if (country) {
    return {
      slug: rawSlug,
      title: `Studi & Karier di ${country.name}`,
      titleEn: `Study & Career Pathways in ${country.name}`,
      subtitle: country.description || country.desc || '',
      subtitleEn: `Explore accredited university admissions, student work rights, and post-study opportunities in ${country.name}.`,
      heroImage: country.slug === 'australia'
        ? '/images/hero-study-work.jpg'
        : country.slug === 'germany'
        ? '/images/lang-german.jpg'
        : '/images/hero-about.jpg',
      badge: `${country.name.toUpperCase()} PATHWAY`,
      badgeEn: `${country.name.toUpperCase()} DESTINATION`,
      type: 'country',
      stats: country.stats,
      benefits: country.benefits || [
        'Akses ke universitas berperingkat dunia (Top 100 QS)',
        'Izin kerja legal selama studi berlangsung',
        'Peluang visa kerja pascastudi (Post-Study Work Visa)',
        'Dukungan penuh tim IDEA dari aplikasi hingga on-arrival',
      ],
      requirements: country.requirements,
      steps: country.steps || [],
      universities: country.universities,
      testimonials: country.testimonials || [],
    }
  }

  // 2. Check Opportunity / Program
  const program = getOpportunityBySlug(slug)
  if (program) {
    return {
      slug: rawSlug,
      title: program.title,
      titleEn: program.title === 'Study & Work' ? 'Study & Work International' : program.title,
      subtitle: program.subtitle,
      subtitleEn: `Comprehensive preparation, language coaching, placement matching, and visa guidance for ${program.title}.`,
      heroImage: program.slug === 'study-and-work'
        ? '/images/hero-study-work.jpg'
        : program.slug === 'work-abroad'
        ? '/images/hero-graduates.jpg'
        : '/images/hero-vocational.jpg',
      badge: `${program.title.toUpperCase()} PROGRAM`,
      badgeEn: `${program.title.toUpperCase()} PATHWAY`,
      type: 'program',
      stats: program.stats,
      benefits: program.benefits.map((b) => `${b.title}: ${b.desc}`),
      steps: program.steps || [],
      modules: program.modules,
      testimonials: program.testimonials || [],
    }
  }

  return undefined
}
