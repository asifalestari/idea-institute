// src/data/courses.ts
import type { CourseLangData } from '@/types'

export const coursesData: CourseLangData[] = [
  {
    slug: 'english',
    name: 'Bahasa Inggris',
    nativeName: 'English',
    flagEmoji: '🇬🇧',
    tagline: 'Kuasai bahasa global dan buka pintu karir internasional',
    heroImage: '/images/courses/english-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '2.500+' },
      { label: 'Level Tersedia', value: 'A1–C2' },
      { label: 'Rata-rata Durasi', value: '6 Bulan' },
      { label: 'Tingkat Kelulusan', value: '94%' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    curriculum: [
      {
        level: 'A1–A2',
        title: 'Dasar',
        topics: ['Percakapan sehari-hari', 'Tata bahasa fundamental', 'Kosakata dasar', 'Listening sederhana'],
      },
      {
        level: 'B1–B2',
        title: 'Menengah',
        topics: ['Diskusi topik umum', 'Writing paragraf', 'Pemahaman teks kompleks', 'Persiapan IELTS/TOEFL'],
      },
      {
        level: 'C1–C2',
        title: 'Mahir',
        topics: ['Presentasi profesional', 'Academic writing', 'Negosiasi bisnis', 'Simulasi wawancara kerja'],
      },
    ],
    tutors: [
      {
        name: 'Sarah Olivia, M.TESOL',
        title: 'Lead English Instructor',
        bio: 'Certified CELTA instructor dengan 10 tahun pengalaman mengajar di Indonesia dan Australia.',
        photo: '/images/tutors/sarah.jpg',
      },
      {
        name: 'James Anderson, B.Ed.',
        title: 'Native English Tutor',
        bio: 'Native speaker dari Melbourne, spesialis persiapan IELTS dan academic English.',
        photo: '/images/tutors/james.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Rina Andriani',
        location: 'Jakarta',
        quote: 'Berkat kursus English di IDEA Institut, IELTS saya 7.5 dan saya bisa diterima di University of Melbourne!',
        photo: '/images/testimonials/rina.jpg',
        program: 'IELTS Preparation',
      },
    ],
  },
  {
    slug: 'german',
    name: 'Bahasa Jerman',
    nativeName: 'Deutsch',
    flagEmoji: '🇩🇪',
    tagline: 'Pintu menuju Eropa — studi dan kerja di Jerman tanpa batas',
    heroImage: '/images/courses/german-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '800+' },
      { label: 'Level Tersedia', value: 'A1–C1' },
      { label: 'Rata-rata Durasi', value: '8 Bulan' },
      { label: 'Lolos ke Jerman', value: '89%' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2', 'C1'],
    curriculum: [
      {
        level: 'A1–A2',
        title: 'Pemula',
        topics: ['Alfabet & fonetik', 'Kalimat dasar Jerman', 'Angka, warna, waktu', 'Salam & perkenalan'],
      },
      {
        level: 'B1–B2',
        title: 'Menengah',
        topics: ['Tata bahasa lanjutan', 'Percakapan formal', 'Membaca teks Jerman', 'Persiapan TestDaF/Goethe'],
      },
      {
        level: 'C1',
        title: 'Mahir',
        topics: ['Bahasa akademik Jerman', 'Penulisan ilmiah', 'Diskusi kompleks', 'Simulasi studi di Jerman'],
      },
    ],
    tutors: [
      {
        name: 'Dieter Müller, M.A.',
        title: 'German Language Expert',
        bio: 'Native German speaker dari Berlin, berpengalaman 12 tahun mengajar bahasa Jerman di Asia Tenggara.',
        photo: '/images/tutors/dieter.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Budi Santoso',
        location: 'Surabaya',
        quote: 'IDEA Institut membantu saya meraih TestDaF B2 dan sekarang saya kuliah S2 di TU Berlin!',
        photo: '/images/testimonials/budi.jpg',
        program: 'Deutsch B2',
      },
    ],
  },
  {
    slug: 'spanish',
    name: 'Bahasa Spanyol',
    nativeName: 'Español',
    flagEmoji: '🇪🇸',
    tagline: 'Bahasa terbesar kedua di dunia — 21 negara, jutaan peluang',
    heroImage: '/images/courses/spanish-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '450+' },
      { label: 'Level Tersedia', value: 'A1–B2' },
      { label: 'Rata-rata Durasi', value: '6 Bulan' },
      { label: 'Kepuasan Siswa', value: '96%' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2'],
    curriculum: [
      {
        level: 'A1–A2',
        title: 'Pemula',
        topics: ['Fonetik Spanyol', 'Kosakata sehari-hari', 'Tata bahasa dasar', 'Percakapan sederhana'],
      },
      {
        level: 'B1–B2',
        title: 'Menengah',
        topics: ['Ekspresi idiomatis', 'Tenses kompleks', 'Diskusi topik umum', 'Persiapan DELE'],
      },
    ],
    tutors: [
      {
        name: 'María González',
        title: 'Certified Spanish Instructor',
        bio: 'Native speaker dari Madrid dengan sertifikasi ELE (Español como Lengua Extranjera).',
        photo: '/images/tutors/maria.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Dewi Putri',
        location: 'Bandung',
        quote: 'Saya bisa bernegosiasi langsung dengan klien dari Spanyol berkat kursus di IDEA Institut.',
        photo: '/images/testimonials/dewi.jpg',
        program: 'Español B1',
      },
    ],
  },
  {
    slug: 'french',
    name: 'Bahasa Prancis',
    nativeName: 'Français',
    flagEmoji: '🇫🇷',
    tagline: 'Bahasa diplomasi dan budaya — peluang OECD yang luas',
    heroImage: '/images/courses/french-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '380+' },
      { label: 'Level Tersedia', value: 'A1–B2' },
      { label: 'Rata-rata Durasi', value: '7 Bulan' },
      { label: 'Kepuasan Siswa', value: '95%' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2'],
    curriculum: [
      {
        level: 'A1–A2',
        title: 'Pemula',
        topics: ['Pengucapan Prancis', 'Kosakata dasar', 'Tata bahasa sederhana', 'Dialog sehari-hari'],
      },
      {
        level: 'B1–B2',
        title: 'Menengah',
        topics: ['Struktur kalimat kompleks', 'Tulisan formal', 'Debat dan diskusi', 'Persiapan DELF/DALF'],
      },
    ],
    tutors: [
      {
        name: 'Claire Dupont',
        title: 'French Language Instructor',
        bio: "Diplômée de l'Université Paris-Sorbonne, pengajar bersertifikasi CAVILAM Alliance Française.",
        photo: '/images/tutors/claire.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Arif Hidayat',
        location: 'Yogyakarta',
        quote: 'Saya lulus DELF B1 pertama kali berkat metode pembelajaran yang sistematis di IDEA Institut.',
        photo: '/images/testimonials/arif.jpg',
        program: 'Français B1',
      },
    ],
  },
  {
    slug: 'chinese',
    name: 'Bahasa Mandarin',
    nativeName: '普通话',
    flagEmoji: '🇨🇳',
    tagline: 'Bahasa bisnis Asia — kuasai Mandarin untuk karir global',
    heroImage: '/images/courses/chinese-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '600+' },
      { label: 'Level Tersedia', value: 'HSK 1–4' },
      { label: 'Rata-rata Durasi', value: '6 Bulan' },
      { label: 'Kepuasan Siswa', value: '93%' },
    ],
    levels: ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4'],
    curriculum: [
      {
        level: 'HSK 1–2',
        title: 'Dasar',
        topics: ['Pinyin & nada', 'Karakter dasar (300)', 'Percakapan sederhana', 'Angka & waktu'],
      },
      {
        level: 'HSK 3–4',
        title: 'Menengah',
        topics: ['Kosakata bisnis', 'Membaca teks Mandarin', 'Menulis karakter', 'Persiapan HSK'],
      },
    ],
    tutors: [
      {
        name: 'Li Wei (李威)',
        title: 'Mandarin Language Expert',
        bio: 'Native speaker dari Shanghai, pengajar HSK tersertifikasi dengan pengalaman 8 tahun di Indonesia.',
        photo: '/images/tutors/liwei.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Sinta Rahayu',
        location: 'Medan',
        quote: 'HSK 3 saya lulus dengan nilai memuaskan! Metode IDEA Institut sangat efektif untuk pemula.',
        photo: '/images/testimonials/sinta.jpg',
        program: 'Mandarin HSK 3',
      },
    ],
  },
  {
    slug: 'japanese',
    name: 'Bahasa Jepang',
    nativeName: '日本語',
    flagEmoji: '🇯🇵',
    tagline: 'Bahasa teknologi dan budaya — peluang kerja di negeri Sakura',
    heroImage: '/images/courses/japanese-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '700+' },
      { label: 'Level Tersedia', value: 'N5–N3' },
      { label: 'Rata-rata Durasi', value: '8 Bulan' },
      { label: 'Kepuasan Siswa', value: '97%' },
    ],
    levels: ['N5', 'N4', 'N3'],
    curriculum: [
      {
        level: 'N5',
        title: 'Pemula',
        topics: ['Hiragana & Katakana', 'Kanji dasar (80)', 'Kalimat sederhana', 'Salam & perkenalan'],
      },
      {
        level: 'N4',
        title: 'Dasar Lanjut',
        topics: ['Kanji N4 (300+)', 'Tata bahasa menengah', 'Percakapan sehari-hari', 'Kebudayaan Jepang'],
      },
      {
        level: 'N3',
        title: 'Menengah',
        topics: ['Teks kompleks', 'Bahasa formal & informal', 'Persiapan JLPT', 'Bahasa kerja Jepang'],
      },
    ],
    tutors: [
      {
        name: 'Yuki Tanaka (田中雪)',
        title: 'Japanese Language Instructor',
        bio: 'Native speaker dari Tokyo, pengajar bersertifikasi JLPT dengan spesialisasi Japanese for Business.',
        photo: '/images/tutors/yuki.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Rizky Pratama',
        location: 'Surabaya',
        quote: 'Lulus JLPT N3 hanya dalam 8 bulan! Sekarang saya magang di perusahaan Jepang di Jakarta.',
        photo: '/images/testimonials/rizky.jpg',
        program: 'Japanese N3',
      },
    ],
  },
]

export function getCourseBySlug(slug: string): CourseLangData | undefined {
  return coursesData.find((c) => c.slug === slug)
}
