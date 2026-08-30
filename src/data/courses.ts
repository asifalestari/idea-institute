// src/data/courses.ts
import type { CourseLangData } from '@/types'

export const coursesData: CourseLangData[] = [
  {
    slug: 'english',
    name: 'Bahasa Inggris',
    nameEn: 'English',
    nativeName: 'English',
    flagEmoji: '🇬🇧',
    tagline: 'Kuasai bahasa global dan buka pintu karir internasional',
    taglineEn: 'Master the global language and unlock international career pathways',
    heroImage: '/images/courses/english-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '2.500+' },
      { label: 'Level Tersedia', value: 'A1–C2' },
      { label: 'Rata-rata Durasi', value: '6 Bulan' },
      { label: 'Tingkat Kelulusan', value: '94%' },
    ],
    statsEn: [
      { label: 'Graduates', value: '2,500+' },
      { label: 'Available Levels', value: 'A1–C2' },
      { label: 'Average Duration', value: '6 Months' },
      { label: 'Pass Rate', value: '94%' },
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
    curriculumEn: [
      {
        level: 'A1–A2',
        title: 'Beginner',
        topics: ['Daily conversational English', 'Grammar fundamentals', 'Core vocabulary', 'Basic listening skills'],
      },
      {
        level: 'B1–B2',
        title: 'Intermediate',
        topics: ['General discussions', 'Paragraph & essay writing', 'Complex reading comprehension', 'IELTS & TOEFL test prep'],
      },
      {
        level: 'C1–C2',
        title: 'Advanced',
        topics: ['Professional presentations', 'Academic writing', 'Business negotiations', 'Job interview simulation'],
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
    tutorsEn: [
      {
        name: 'Sarah Olivia, M.TESOL',
        title: 'Lead English Instructor',
        bio: 'Certified CELTA instructor with 10 years of experience teaching in Indonesia and Australia.',
        photo: '/images/tutors/sarah.jpg',
      },
      {
        name: 'James Anderson, B.Ed.',
        title: 'Native English Tutor',
        bio: 'Native speaker from Melbourne specializing in IELTS preparation and academic English.',
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
    testimonialsEn: [
      {
        name: 'Rina Andriani',
        location: 'Jakarta',
        quote: 'Thanks to IDEA Institute, I scored IELTS 7.5 and got accepted into the University of Melbourne!',
        photo: '/images/testimonials/rina.jpg',
        program: 'IELTS Preparation',
      },
    ],
  },
  {
    slug: 'german',
    name: 'Bahasa Jerman',
    nameEn: 'German',
    nativeName: 'Deutsch',
    flagEmoji: '🇩🇪',
    tagline: 'Pintu menuju Eropa — studi dan kerja di Jerman tanpa batas',
    taglineEn: 'Your gateway to Europe — limitless study and work opportunities in Germany',
    heroImage: '/images/courses/german-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '800+' },
      { label: 'Level Tersedia', value: 'A1–C1' },
      { label: 'Rata-rata Durasi', value: '8 Bulan' },
      { label: 'Lolos ke Jerman', value: '89%' },
    ],
    statsEn: [
      { label: 'Graduates', value: '800+' },
      { label: 'Available Levels', value: 'A1–C1' },
      { label: 'Average Duration', value: '8 Months' },
      { label: 'Placed in Germany', value: '89%' },
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
    curriculumEn: [
      {
        level: 'A1–A2',
        title: 'Beginner',
        topics: ['German alphabet & phonetics', 'Basic sentence structures', 'Numbers, colors & time', 'Greetings & self-introduction'],
      },
      {
        level: 'B1–B2',
        title: 'Intermediate',
        topics: ['Advanced grammar cases', 'Formal business conversation', 'Complex German reading', 'Goethe & TestDaF prep'],
      },
      {
        level: 'C1',
        title: 'Advanced',
        topics: ['Academic German language', 'Scientific writing', 'Complex analytical debates', 'University study simulations'],
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
    tutorsEn: [
      {
        name: 'Dieter Müller, M.A.',
        title: 'German Language Expert',
        bio: 'Native German speaker from Berlin with 12 years of experience teaching German across Southeast Asia.',
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
    testimonialsEn: [
      {
        name: 'Budi Santoso',
        location: 'Surabaya',
        quote: 'IDEA Institute helped me pass TestDaF B2 and I am now pursuing my Master degree at TU Berlin!',
        photo: '/images/testimonials/budi.jpg',
        program: 'Deutsch B2',
      },
    ],
  },
  {
    slug: 'spanish',
    name: 'Bahasa Spanyol',
    nameEn: 'Spanish',
    nativeName: 'Español',
    flagEmoji: '🇪🇸',
    tagline: 'Bahasa terbesar kedua di dunia — 21 negara, jutaan peluang',
    taglineEn: 'The world’s second most spoken language — 21 countries, millions of opportunities',
    heroImage: '/images/courses/spanish-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '450+' },
      { label: 'Level Tersedia', value: 'A1–B2' },
      { label: 'Rata-rata Durasi', value: '6 Bulan' },
      { label: 'Kepuasan Siswa', value: '96%' },
    ],
    statsEn: [
      { label: 'Graduates', value: '450+' },
      { label: 'Available Levels', value: 'A1–B2' },
      { label: 'Average Duration', value: '6 Months' },
      { label: 'Satisfaction Rate', value: '96%' },
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
    curriculumEn: [
      {
        level: 'A1–A2',
        title: 'Beginner',
        topics: ['Spanish phonetics', 'Daily vocabulary', 'Basic grammar structures', 'Simple conversations'],
      },
      {
        level: 'B1–B2',
        title: 'Intermediate',
        topics: ['Idiomatic expressions', 'Subjunctive & complex tenses', 'General discussions', 'Official DELE exam prep'],
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
    tutorsEn: [
      {
        name: 'María González',
        title: 'Certified Spanish Instructor',
        bio: 'Native speaker from Madrid certified in ELE (Teaching Spanish as a Foreign Language).',
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
    testimonialsEn: [
      {
        name: 'Dewi Putri',
        location: 'Bandung',
        quote: 'I can now negotiate directly with Spanish clients thanks to the training at IDEA Institute.',
        photo: '/images/testimonials/dewi.jpg',
        program: 'Español B1',
      },
    ],
  },
  {
    slug: 'french',
    name: 'Bahasa Prancis',
    nameEn: 'French',
    nativeName: 'Français',
    flagEmoji: '🇫🇷',
    tagline: 'Bahasa diplomasi, seni, dan budaya internasional',
    taglineEn: 'The language of diplomacy, culture, arts, and global business',
    heroImage: '/images/courses/french-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '350+' },
      { label: 'Level Tersedia', value: 'A1–B2' },
      { label: 'Rata-rata Durasi', value: '6 Bulan' },
      { label: 'Lolos DELF', value: '92%' },
    ],
    statsEn: [
      { label: 'Graduates', value: '350+' },
      { label: 'Available Levels', value: 'A1–B2' },
      { label: 'Average Duration', value: '6 Months' },
      { label: 'DELF Pass Rate', value: '92%' },
    ],
    levels: ['A1', 'A2', 'B1', 'B2'],
    curriculum: [
      {
        level: 'A1–A2',
        title: 'Pemula',
        topics: ['Pelafalan Prancis', 'Konjugasi kata kerja dasar', 'Percakapan sehari-hari', 'Kosakata esensial'],
      },
      {
        level: 'B1–B2',
        title: 'Menengah',
        topics: ['Penulisan opini', 'Pemahaman audio otentik', 'Diskusi sosial & budaya', 'Persiapan DELF'],
      },
    ],
    curriculumEn: [
      {
        level: 'A1–A2',
        title: 'Beginner',
        topics: ['French pronunciation & liaison', 'Basic verb conjugations', 'Everyday dialogue', 'Essential vocabulary'],
      },
      {
        level: 'B1–B2',
        title: 'Intermediate',
        topics: ['Opinion writing & essays', 'Authentic audio listening', 'Social & cultural debates', 'Official DELF exam prep'],
      },
    ],
    tutors: [
      {
        name: 'Antoine Dubois',
        title: 'French Language Specialist',
        bio: 'Pengajar berpengalaman dari Lyon dengan sertifikasi DAEFLE dari Alliance Française.',
        photo: '/images/tutors/antoine.jpg',
      },
    ],
    tutorsEn: [
      {
        name: 'Antoine Dubois',
        title: 'French Language Specialist',
        bio: 'Experienced instructor from Lyon certified with DAEFLE from Alliance Française.',
        photo: '/images/tutors/antoine.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Fauzan Hakim',
        location: 'Yogyakarta',
        quote: 'Persiapan DELF B2 saya sangat terbantu, instruktur mengoreksi pengucapan dengan sangat teliti.',
        photo: '/images/testimonials/fauzan.jpg',
        program: 'DELF B2 Prep',
      },
    ],
    testimonialsEn: [
      {
        name: 'Fauzan Hakim',
        location: 'Yogyakarta',
        quote: 'My DELF B2 prep was smooth and successful; instructors meticulously perfected my pronunciation.',
        photo: '/images/testimonials/fauzan.jpg',
        program: 'DELF B2 Prep',
      },
    ],
  },
  {
    slug: 'chinese',
    name: 'Bahasa Mandarin',
    nameEn: 'Chinese (Mandarin)',
    nativeName: '中文',
    flagEmoji: '🇨🇳',
    tagline: 'Kuasai bahasa bisnis global dengan penutur terbanyak di dunia',
    taglineEn: 'Master the global commerce language with the highest native speaker count worldwide',
    heroImage: '/images/courses/chinese-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '1.200+' },
      { label: 'Level Tersedia', value: 'HSK 1–4' },
      { label: 'Rata-rata Durasi', value: '6 Bulan' },
      { label: 'Lolos HSK', value: '95%' },
    ],
    statsEn: [
      { label: 'Graduates', value: '1,200+' },
      { label: 'Available Levels', value: 'HSK 1–4' },
      { label: 'Average Duration', value: '6 Months' },
      { label: 'HSK Pass Rate', value: '95%' },
    ],
    levels: ['HSK 1', 'HSK 2', 'HSK 3', 'HSK 4'],
    curriculum: [
      {
        level: 'HSK 1–2',
        title: 'Dasar',
        topics: ['Pinyin & nada', 'Karakter Hanzi dasar', 'Percakapan harian', '150–300 kosakata'],
      },
      {
        level: 'HSK 3–4',
        title: 'Menengah',
        topics: ['Membaca teks Hanzi', 'Percakapan bisnis dasar', 'Writing karakter', '600–1200 kosakata'],
      },
    ],
    curriculumEn: [
      {
        level: 'HSK 1–2',
        title: 'Beginner',
        topics: ['Pinyin & tones', 'Basic Hanzi radicals', 'Daily greetings & dialogue', '150–300 core vocabulary'],
      },
      {
        level: 'HSK 3–4',
        title: 'Intermediate',
        topics: ['Hanzi text reading', 'Basic business Mandarin', 'Character writing', '600–1200 vocabulary mastery'],
      },
    ],
    tutors: [
      {
        name: 'Li Wei, M.Ed.',
        title: 'Senior Mandarin Instructor',
        bio: 'Pengajar bersertifikasi CTCSOL dari Beijing Language and Culture University.',
        photo: '/images/tutors/liwei.jpg',
      },
    ],
    tutorsEn: [
      {
        name: 'Li Wei, M.Ed.',
        title: 'Senior Mandarin Instructor',
        bio: 'CTCSOL-certified instructor from Beijing Language and Culture University.',
        photo: '/images/tutors/liwei.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Kevin Wijaya',
        location: 'Medan',
        quote: 'Metode belajar Hanzi-nya sangat mudah dipahami. Saya lulus HSK 3 hanya dalam 4 bulan!',
        photo: '/images/testimonials/kevin.jpg',
        program: 'HSK 3 Mastery',
      },
    ],
    testimonialsEn: [
      {
        name: 'Kevin Wijaya',
        location: 'Medan',
        quote: 'The Hanzi learning method was intuitive and fun. I passed HSK 3 in just 4 months!',
        photo: '/images/testimonials/kevin.jpg',
        program: 'HSK 3 Mastery',
      },
    ],
  },
  {
    slug: 'japanese',
    name: 'Bahasa Jepang',
    nameEn: 'Japanese',
    nativeName: '日本語',
    flagEmoji: '🇯🇵',
    tagline: 'Jembatan studi, kerja, dan budaya di Negeri Sakura',
    taglineEn: 'Your bridge to study, career, and culture in the Land of the Rising Sun',
    heroImage: '/images/courses/japanese-hero.jpg',
    stats: [
      { label: 'Siswa Lulus', value: '950+' },
      { label: 'Level Tersedia', value: 'N5–N3' },
      { label: 'Rata-rata Durasi', value: '7 Bulan' },
      { label: 'Lolos JLPT', value: '91%' },
    ],
    statsEn: [
      { label: 'Graduates', value: '950+' },
      { label: 'Available Levels', value: 'N5–N3' },
      { label: 'Average Duration', value: '7 Months' },
      { label: 'JLPT Pass Rate', value: '91%' },
    ],
    levels: ['N5', 'N4', 'N3'],
    curriculum: [
      {
        level: 'N5',
        title: 'Pemula',
        topics: ['Hiragana & Katakana', '100 Kanji dasar', 'Tata bahasa dasar', 'Percakapan sehari-hari'],
      },
      {
        level: 'N4',
        title: 'Pra-Menengah',
        topics: ['300 Kanji', 'Tata bahasa lanjutan', 'Membaca teks pendek', 'Listening percakapan'],
      },
      {
        level: 'N3',
        title: 'Menengah',
        topics: ['650 Kanji', 'Persiapan JLPT N3', 'Artikel berita sederhana', 'Simulasi kerja di Jepang'],
      },
    ],
    curriculumEn: [
      {
        level: 'N5',
        title: 'Beginner',
        topics: ['Hiragana & Katakana', '100 basic Kanji', 'Foundational grammar', 'Everyday dialogue'],
      },
      {
        level: 'N4',
        title: 'Pre-Intermediate',
        topics: ['300 Kanji characters', 'Advanced grammar structures', 'Short story reading', 'Listening comprehension'],
      },
      {
        level: 'N3',
        title: 'Intermediate',
        topics: ['650 Kanji mastery', 'JLPT N3 exam prep', 'News article reading', 'Working in Japan simulation'],
      },
    ],
    tutors: [
      {
        name: 'Kenji Tanaka',
        title: 'Native Japanese Instructor',
        bio: 'Pengajar bersertifikasi dari Tokyo, spesialis persiapan JLPT dan etika kerja Jepang.',
        photo: '/images/tutors/kenji.jpg',
      },
    ],
    tutorsEn: [
      {
        name: 'Kenji Tanaka',
        title: 'Native Japanese Instructor',
        bio: 'Certified instructor from Tokyo specializing in JLPT preparation and Japanese business etiquette.',
        photo: '/images/tutors/kenji.jpg',
      },
    ],
    testimonials: [
      {
        name: 'Anisa Rahma',
        location: 'Semarang',
        quote: 'Alhamdulillah lulus JLPT N4 dan sekarang sedang proses visa kerja Tokutei Ginou ke Jepang!',
        photo: '/images/testimonials/anisa.jpg',
        program: 'JLPT N4 Prep',
      },
    ],
    testimonialsEn: [
      {
        name: 'Anisa Rahma',
        location: 'Semarang',
        quote: 'Passed JLPT N4 and currently processing my Tokutei Ginou work visa to Japan!',
        photo: '/images/testimonials/anisa.jpg',
        program: 'JLPT N4 Prep',
      },
    ],
  },
]

export function getCourseBySlug(slug: string): CourseLangData | undefined {
  return coursesData.find((c) => c.slug === slug)
}
