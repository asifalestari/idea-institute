// prisma/seed.ts — IDEA Institut Database Seed Script
// Sesuai spesifikasi di docs/erd.md

import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Memulai seeding database IDEA Institut...')

  // ── 1. Program Categories ───────────────────────────────────────
  console.log('📁 Seeding program_categories...')
  const categories = [
    {
      slug: 'language-course',
      name: 'Language Course',
      description: 'Kursus persiapan bahasa asing berstandar CEFR internasional (Inggris, Jerman, Spanyol, Prancis, Mandarin, Jepang).',
      sortOrder: 1,
    },
    {
      slug: 'vocational-course',
      name: 'Vocational Course',
      description: 'Pelatihan vokasional dan kejuruan siap kerja berstandar industri global.',
      sortOrder: 2,
    },
    {
      slug: 'study-work-program',
      name: 'Study & Work Program',
      description: 'Program kuliah dan kerja terakreditasi di Australia, Jerman, dan negara OECD.',
      sortOrder: 3,
    },
  ]

  const categoryMap = new Map<string, string>()

  for (const cat of categories) {
    const record = await prisma.programCategory.upsert({
      where: { slug: cat.slug },
      update: {
        name: cat.name,
        description: cat.description,
        sortOrder: cat.sortOrder,
      },
      create: cat,
    })
    categoryMap.set(cat.slug, record.id)
    console.log(`  ✓ Kategori: ${cat.name} (${record.id})`)
  }

  // ── 2. Programs ─────────────────────────────────────────────────
  console.log('\n🎓 Seeding programs...')
  const langCatId = categoryMap.get('language-course')!
  const vocCatId = categoryMap.get('vocational-course')!
  const swCatId = categoryMap.get('study-work-program')!

  const programs = [
    // Language Courses
    { categoryId: langCatId, slug: 'english', name: 'Bahasa Inggris', country: 'GB', description: 'General English, IELTS, TOEFL & Academic Writing', sortOrder: 1 },
    { categoryId: langCatId, slug: 'german', name: 'Bahasa Jerman', country: 'DE', description: 'Deutsch A1–C1, TestDaF & Goethe-Zertifikat prep', sortOrder: 2 },
    { categoryId: langCatId, slug: 'spanish', name: 'Bahasa Spanyol', country: 'ES', description: 'Español A1–B2 & DELE exam preparation', sortOrder: 3 },
    { categoryId: langCatId, slug: 'french', name: 'Bahasa Prancis', country: 'FR', description: 'Français A1–B2 & DELF exam preparation', sortOrder: 4 },
    { categoryId: langCatId, slug: 'chinese', name: 'Bahasa Mandarin', country: 'CN', description: 'Mandarin Pinyin, Hanzi & HSK 1–4 preparation', sortOrder: 5 },
    { categoryId: langCatId, slug: 'japanese', name: 'Bahasa Jepang', country: 'JP', description: 'Nihongo N5–N3 & JLPT exam preparation', sortOrder: 6 },

    // Vocational Courses
    { categoryId: vocCatId, slug: 'hospitality', name: 'Hospitality & Hotel Operations', country: null, description: 'Manajemen perhotelan dan operasional F&B berstandar global', sortOrder: 1 },
    { categoryId: vocCatId, slug: 'culinary-arts', name: 'Culinary Arts & Pastry', country: null, description: 'Seni kuliner internasional dan sertifikasi higienitas', sortOrder: 2 },
    { categoryId: vocCatId, slug: 'digital-business', name: 'Digital Business & Administration', country: null, description: 'Administrasi perkantoran modern dan pemasaran digital', sortOrder: 3 },

    // Study & Work Programs
    { categoryId: swCatId, slug: 'australia', name: 'Study & Work Australia', country: 'AU', description: 'Kuliah di universitas top Australia dengan hak kerja paruh waktu & post-study visa', sortOrder: 1 },
    { categoryId: swCatId, slug: 'germany', name: 'Study & Ausbildung Jerman', country: 'DE', description: 'Pendidikan tinggi bebas biaya kuliah dan program vokasi ganda (Ausbildung)', sortOrder: 2 },
    { categoryId: swCatId, slug: 'other-oecd', name: 'Studi Negara OECD Pilihan', country: null, description: 'Akses pendidikan tinggi di Belanda, Kanada, Prancis, Swedia, Selandia Baru', sortOrder: 3 },
    { categoryId: swCatId, slug: 'work-abroad', name: 'Skilled Work Abroad', country: null, description: 'Penempatan kerja profesional dan pendampingan visa kerja', sortOrder: 4 },
  ]

  const programMap = new Map<string, string>()

  for (const prog of programs) {
    const record = await prisma.program.upsert({
      where: { slug: prog.slug },
      update: {
        categoryId: prog.categoryId,
        name: prog.name,
        country: prog.country,
        description: prog.description,
        sortOrder: prog.sortOrder,
        isActive: true,
      },
      create: prog,
    })
    programMap.set(prog.slug, record.id)
    console.log(`  ✓ Program: ${prog.name} (${record.slug})`)
  }

  // ── 3. Admin Users ──────────────────────────────────────────────
  console.log('\n👤 Seeding admin_users...')
  const defaultAdminEmail = 'admin@idea-institut.net'
  const defaultPassword = 'admin123'
  const passwordHash = await bcrypt.hash(defaultPassword, 10)

  const admin = await prisma.adminUser.upsert({
    where: { email: defaultAdminEmail },
    update: {
      passwordHash,
      role: 'admin',
    },
    create: {
      email: defaultAdminEmail,
      passwordHash,
      role: 'admin',
    },
  })
  console.log(`  ✓ Admin: ${admin.email} (default password: ${defaultPassword})`)

  // ── 4. CMS Pages ────────────────────────────────────────────────
  console.log('\n📄 Seeding pages (CMS)...')
  const pages = [
    {
      slug: 'studi-keluar-negeri',
      title: 'Konsultasi Studi ke Luar Negeri Terpadu',
      metaTitle: 'Studi ke Luar Negeri — IDEA Institut',
      metaDescription: 'Panduan lengkap kuliah ke Australia, Jerman, dan negara OECD bersama IDEA Institut.',
      contentJson: {
        intro: 'IDEA Institut memfasilitasi persiapan akademik, kursus bahasa, pendaftaran universitas, hingga pengurusan visa studi.',
        features: ['Bimbingan Pemilihan Jurusan', 'Persiapan IELTS/TestDaF', 'Pengurusan Visa 100%'],
      },
    },
    {
      slug: 'studi-sambil-kerja',
      title: 'Program Studi Sambil Kerja (Study & Work)',
      metaTitle: 'Study & Work Abroad — IDEA Institut',
      metaDescription: 'Kuliah di luar negeri sambil bekerja paruh waktu legal untuk menutupi biaya hidup.',
      contentJson: {
        intro: 'Dapatkan pengalaman kerja internasional di Australia dan Jerman selama menempuh pendidikan tinggi.',
        features: ['Izin Kerja Legal 20 Jam/Minggu', 'Pendampingan Job Matching', 'Post-Study Work Visa'],
      },
    },
    {
      slug: 'kuliah-di-australia',
      title: 'Panduan Kuliah & Kerja di Australia',
      metaTitle: 'Kuliah di Australia — IDEA Institut',
      metaDescription: 'Informasi beasiswa, biaya kuliah, dan visa studi Australia subclass 500.',
      contentJson: {
        intro: 'Australia adalah pilihan utama mahasiswa Indonesia dengan universitas Top 100 QS dan lingkungan multikultural.',
        features: ['Mitra 12+ Universitas Australia', 'Upah Kerja Minimum Tinggi', 'Post-Study Visa s.d. 4 Tahun'],
      },
    },
    {
      slug: 'kuliah-di-german',
      title: 'Kuliah Bebas Biaya di Universitas Negeri Jerman',
      metaTitle: 'Kuliah di Jerman — IDEA Institut',
      metaDescription: 'Studi S1 & S2 di universitas negeri Jerman dengan biaya kuliah gratis dan izin kerja 18 bulan pascastudi.',
      contentJson: {
        intro: 'Jerman menawarkan pendidikan sains & teknologi kelas dunia dengan biaya kuliah gratis di universitas negeri.',
        features: ['Universitas Negeri Bebas Uang Kuliah', 'Persiapan TestDaF B2/C1', 'Bimbingan Sperrkonto & Visa'],
      },
    },
  ]

  for (const p of pages) {
    const record = await prisma.page.upsert({
      where: { slug: p.slug },
      update: {
        title: p.title,
        metaTitle: p.metaTitle,
        metaDescription: p.metaDescription,
        contentJson: p.contentJson,
        publishedAt: new Date(),
      },
      create: {
        ...p,
        publishedAt: new Date(),
      },
    })
    console.log(`  ✓ Page: ${record.title} (/${record.slug})`)
  }

  // ── 5. Sample Initial Leads ─────────────────────────────────────
  console.log('\n📋 Seeding sample leads untuk preview dashboard...')
  const sampleLeads = [
    {
      fullName: 'Andi Pratama',
      email: 'andi.pratama@example.com',
      phoneWhatsapp: '081288991122',
      programId: programMap.get('australia'),
      programInterest: 'Study & Work Australia',
      sourcePage: '/study-work/australia',
      utmSource: 'google',
      utmMedium: 'cpc',
      utmCampaign: 'study-australia-2026',
      status: 'new' as const,
      consentGiven: true,
      notes: 'Berminat S2 Business Administration di Melbourne.',
    },
    {
      fullName: 'Siti Nurhaliza',
      email: 'siti.nur@example.com',
      phoneWhatsapp: '081399887766',
      programId: programMap.get('german'),
      programInterest: 'Language Course — Jerman',
      sourcePage: '/language-course/german',
      status: 'contacted' as const,
      consentGiven: true,
      notes: 'Sudah dihubungi via WA, menjadwalkan placement test A1.',
    },
    {
      fullName: 'Reza Mahardika',
      email: 'reza.m@example.com',
      phoneWhatsapp: '081122334455',
      programId: programMap.get('germany'),
      programInterest: 'Ausbildung Jerman',
      sourcePage: '/study-work/germany',
      status: 'qualified' as const,
      consentGiven: true,
      notes: 'Punya sertifikat B1, persiapan berkas Sperrkonto dan visa.',
    },
    {
      fullName: 'Dewi Lestari',
      email: 'dewi.lestari@example.com',
      phoneWhatsapp: '081566778899',
      programId: programMap.get('english'),
      programInterest: 'IELTS Preparation',
      sourcePage: '/language-course/english',
      status: 'closed' as const,
      consentGiven: true,
      notes: 'Telah terdaftar kelas intensif IELTS batch September 2026.',
    },
  ]

  for (const lead of sampleLeads) {
    const existing = await prisma.lead.findFirst({
      where: { email: lead.email },
    })

    if (!existing) {
      await prisma.lead.create({ data: lead })
      console.log(`  ✓ Lead: ${lead.fullName} (${lead.status})`)
    } else {
      console.log(`  ~ Lead sudah ada: ${lead.fullName}`)
    }
  }

  console.log('\n🎉 Seeding selesai dengan sukses!')
}

main()
  .catch((e) => {
    console.error('❌ Terjadi kesalahan saat seeding:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
