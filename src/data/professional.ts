// src/data/professional.ts
import type { ProgramData } from '@/types'

export const professionalData: ProgramData[] = [
  {
    slug: 'training',
    title: 'Professional Training',
    subtitle: 'Tingkatkan kompetensi profesional Anda untuk bersaing di pasar kerja internasional',
    heroImage: '/images/professional/training-hero.jpg',
    benefits: [
      {
        icon: '🎯',
        title: 'Kurikulum Berbasis Industri',
        desc: 'Materi dirancang bersama praktisi dari perusahaan multinasional di Australia, Jerman, dan OECD.',
        chipColor: 'chip-navy',
      },
      {
        icon: '📜',
        title: 'Sertifikasi Internasional',
        desc: 'Dapatkan sertifikat yang diakui oleh lembaga internasional dan mitra IDEA di luar negeri.',
        chipColor: 'chip-primary',
      },
      {
        icon: '👔',
        title: 'Mentoring 1-on-1',
        desc: 'Sesi mentoring personal dengan profesional berpengalaman di bidang Anda.',
        chipColor: 'chip-secondary',
      },
      {
        icon: '🌐',
        title: 'Jaringan Global',
        desc: 'Bergabung dengan komunitas alumni IDEA yang tersebar di 10+ negara.',
        chipColor: 'chip-secondary',
      },
    ],
    modules: [
      {
        title: 'Modul 1: Professional Communication',
        items: [
          'Business English / Deutsch writing',
          'Presentasi profesional lintas budaya',
          'Negosiasi dan persuasi',
          'Email dan korespondensi bisnis',
        ],
      },
      {
        title: 'Modul 2: Workplace Readiness',
        items: [
          'Etika kerja internasional',
          'Time management & productivity',
          'Teamwork dalam lingkungan multikultural',
          'Problem solving & critical thinking',
        ],
      },
      {
        title: 'Modul 3: Career Development',
        items: [
          'CV dan cover letter internasional',
          'Strategi job search di luar negeri',
          'Interview simulation (EN/DE)',
          'LinkedIn profile optimization',
        ],
      },
    ],
    stats: [
      { label: 'Peserta Lulus', value: '1.200+' },
      { label: 'Mitra Perusahaan', value: '45+' },
      { label: 'Penempatan Kerja', value: '78%' },
      { label: 'Kepuasan Peserta', value: '96%' },
    ],
    steps: [
      { step: 1, title: 'Konsultasi Awal', desc: 'Diskusikan tujuan karir dan kebutuhan pelatihan Anda bersama konsultan kami.' },
      { step: 2, title: 'Enrollment & Assessment', desc: 'Tes penempatan untuk menentukan level dan program yang sesuai.' },
      { step: 3, title: 'Pelatihan Intensif', desc: 'Ikuti sesi pelatihan 3 bulan dengan tutor profesional berpengalaman.' },
      { step: 4, title: 'Sertifikasi', desc: 'Ujian akhir dan penerbitan sertifikat yang diakui secara internasional.' },
    ],
    testimonials: [
      {
        name: 'Ahmad Fauzi',
        location: 'Jakarta',
        quote: 'Professional Training di IDEA Institut membuka peluang kerja di perusahaan Jerman. Investasi terbaik!',
        photo: '/images/testimonials/ahmad.jpg',
        program: 'Professional Training',
      },
    ],
  },
  {
    slug: 'literacy',
    title: 'Literacy Program',
    subtitle: 'Tingkatkan kemampuan membaca, menulis, dan memahami teks kompleks lintas bahasa',
    heroImage: '/images/professional/literacy-hero.jpg',
    benefits: [
      {
        icon: '📚',
        title: 'Literasi Akademik',
        desc: 'Kuasai kemampuan membaca dan menganalisis teks akademik dalam bahasa Inggris, Jerman, dan Prancis.',
        chipColor: 'chip-navy',
      },
      {
        icon: '✍️',
        title: 'Academic Writing',
        desc: 'Latihan menulis essay, laporan, dan karya ilmiah sesuai standar universitas luar negeri.',
        chipColor: 'chip-primary',
      },
      {
        icon: '🔍',
        title: 'Critical Reading',
        desc: 'Teknik membaca kritis untuk memahami argumen, fakta, dan bias dalam teks kompleks.',
        chipColor: 'chip-secondary',
      },
      {
        icon: '🏆',
        title: 'Persiapan Ujian',
        desc: 'Latihan soal IELTS Academic, TOEFL iBT, TestDaF, DELF — fokus pada komponen reading & writing.',
        chipColor: 'chip-secondary',
      },
    ],
    modules: [
      {
        title: 'Modul 1: Foundations of Literacy',
        items: [
          'Reading comprehension strategies',
          'Vocabulary building akademik',
          'Skimming, scanning, dan intensive reading',
          'Note-taking techniques',
        ],
      },
      {
        title: 'Modul 2: Academic Writing',
        items: [
          'Struktur paragraf dan essay',
          'Argumentative & analytical writing',
          'Citation dan referencing (APA/MLA)',
          'Peer review dan revisi',
        ],
      },
      {
        title: 'Modul 3: Applied Literacy',
        items: [
          'Analisis artikel jurnal internasional',
          'Menulis laporan penelitian',
          'Digital literacy & sumber terpercaya',
          'Presentasi berbasis teks',
        ],
      },
    ],
    stats: [
      { label: 'Peserta Lulus', value: '900+' },
      { label: 'Peningkatan Skor', value: '+2 Band' },
      { label: 'Rata-rata Durasi', value: '4 Bulan' },
      { label: 'Kepuasan Peserta', value: '94%' },
    ],
    steps: [
      { step: 1, title: 'Diagnostic Test', desc: 'Asesmen awal untuk mengetahui level literasi dan area yang perlu ditingkatkan.' },
      { step: 2, title: 'Program Intensif', desc: 'Sesi intensif 2x seminggu dengan fokus reading comprehension dan writing skills.' },
      { step: 3, title: 'Practice & Feedback', desc: 'Latihan soal mingguan dengan umpan balik detail dari tutor.' },
      { step: 4, title: 'Mock Exam & Sertifikasi', desc: 'Simulasi ujian penuh dan sertifikat kompetensi dari IDEA Institut.' },
    ],
    testimonials: [
      {
        name: 'Nadia Sari',
        location: 'Bandung',
        quote: 'Skor IELTS Academic writing saya naik dari 5.5 ke 7.0 hanya dalam 4 bulan. Luar biasa!',
        photo: '/images/testimonials/nadia.jpg',
        program: 'Literacy Program',
      },
    ],
  },
  {
    slug: 'numeracy',
    title: 'Numeracy Program',
    subtitle: 'Kuasai kemampuan matematika dan analisis data untuk sukses di pendidikan dan dunia kerja internasional',
    heroImage: '/images/professional/numeracy-hero.jpg',
    benefits: [
      {
        icon: '📊',
        title: 'Numerasi Akademik',
        desc: 'Persiapkan diri untuk program studi S1/S2 yang mengutamakan kemampuan kuantitatif.',
        chipColor: 'chip-navy',
      },
      {
        icon: '💹',
        title: 'Business Analytics',
        desc: 'Teknik analisis data dasar untuk keperluan bisnis dan riset di lingkungan internasional.',
        chipColor: 'chip-primary',
      },
      {
        icon: '🧮',
        title: 'Persiapan GMAT/GRE',
        desc: 'Latihan intensif untuk komponen Quantitative Reasoning pada tes masuk pascasarjana.',
        chipColor: 'chip-secondary',
      },
      {
        icon: '📐',
        title: 'Applied Mathematics',
        desc: 'Matematika terapan untuk kebutuhan studi teknik, ekonomi, dan sains di luar negeri.',
        chipColor: 'chip-secondary',
      },
    ],
    modules: [
      {
        title: 'Modul 1: Foundational Numeracy',
        items: [
          'Aritmatika dan aljabar dasar',
          'Statistik deskriptif',
          'Probabilitas dan persentase',
          'Grafik dan interpretasi data',
        ],
      },
      {
        title: 'Modul 2: Quantitative Reasoning',
        items: [
          'Problem solving kuantitatif',
          'Data sufficiency (GMAT-style)',
          'Word problems & applied math',
          'Logika matematika',
        ],
      },
      {
        title: 'Modul 3: Academic & Professional Math',
        items: [
          'Statistik inferensial dasar',
          'Interpretasi laporan keuangan',
          'Data literacy dengan spreadsheet',
          'Presentasi data visual',
        ],
      },
    ],
    stats: [
      { label: 'Peserta Lulus', value: '650+' },
      { label: 'Peningkatan Skor', value: '+35 Poin' },
      { label: 'Rata-rata Durasi', value: '3 Bulan' },
      { label: 'Kepuasan Peserta', value: '92%' },
    ],
    steps: [
      { step: 1, title: 'Placement Test', desc: 'Tes kemampuan awal untuk menentukan titik mulai program yang tepat.' },
      { step: 2, title: 'Sesi Intensif', desc: 'Belajar 3x seminggu dengan metode problem-based learning.' },
      { step: 3, title: 'Latihan Soal Harian', desc: 'Bank soal eksklusif + latihan timed untuk meningkatkan kecepatan dan akurasi.' },
      { step: 4, title: 'Final Assessment', desc: 'Ujian akhir dan sertifikat numerasi dari IDEA Institut.' },
    ],
    testimonials: [
      {
        name: 'Kevin Hartono',
        location: 'Surabaya',
        quote: 'Skor GRE Quantitative saya naik 30 poin setelah ikut program Numeracy di IDEA Institut!',
        photo: '/images/testimonials/kevin.jpg',
        program: 'Numeracy Program',
      },
    ],
  },
]

export function getProfessionalBySlug(slug: string): ProgramData | undefined {
  return professionalData.find((p) => p.slug === slug)
}
