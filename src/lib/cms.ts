// src/lib/cms.ts
// CMS content definition and persistence helper for IDEA Institut 3-Program Portal

import { prisma } from './prisma'

export interface ProgramCountryItem {
  id: string
  name: string
  flag: string
  subtitle: string
  description: string
  url: string
  image?: string
  isActive: boolean
}

export interface PortalCMSData {
  hero: {
    badge: string
    title: string
    titleHighlight: string
    subtitle: string
    heroImage: string
    formTitle: string
    formSubtitle: string
    submitButtonText: string
    successUnlockedBadge: string
    successUnlockedNotice: string
  }
  englishCourse: {
    title: string
    subtitle: string
    badge: string
    description: string
    image: string
    internalUrl: string
    referenceUrl: string
    buttonText: string
    features: string[]
  }
  vocationalTraining: {
    title: string
    subtitle: string
    badge: string
    description: string
    image: string
    internalUrl: string
    countries: ProgramCountryItem[]
  }
  studyAndWork: {
    title: string
    subtitle: string
    badge: string
    description: string
    image: string
    internalUrl: string
    referenceUrl: string
    buttonText: string
    features: string[]
  }
  settings: {
    adminNotificationEmail: string
    sendEmailNotification: boolean
    notificationSubject: string
    waConsultationNumber: string
  }
}

export const DEFAULT_CMS_DATA: PortalCMSData = {
  hero: {
    badge: 'BELAJAR • LATIH SKILL • GO FURTHER',
    title: 'Belajar Hari Ini. Latih Keahlianmu.',
    titleHighlight: 'Raih Masa Depan.',
    subtitle:
      'IDEA Institut membantu Anda membangun kemampuan bahasa asing, keahlian profesional, serta peluang studi dan karir internasional dengan bimbingan terpercaya.',
    heroImage: '/images/hero-language-course.jpg',
    formTitle: 'Buka Akses Informasi 3 Program Unggulan',
    formSubtitle:
      'Lengkapi nama dan email Anda untuk membuka panduan lengkap, kurikulum berstandar internasional, serta rincian beasiswa & izin kerja di luar negeri.',
    submitButtonText: 'Buka Akses Program Sekarang',
    successUnlockedBadge: 'Akses Direktori Terbuka',
    successUnlockedNotice: 'Selamat datang! Anda kini dapat mengeksplorasi seluruh program unggulan di bawah ini.',
  },
  englishCourse: {
    title: 'English Course',
    subtitle: 'International Accredited English Preparation',
    badge: 'Standar Akreditasi IALC',
    description:
      'Kuasai bahasa Inggris internasional dengan metode interaktif, pengajar bersertifikat, dan standar CEFR resmi. Terakreditasi IALC untuk persiapan IELTS, TOEFL, & Academic English.',
    image: '/images/hero-language-course.jpg',
    internalUrl: '/language-course/english',
    referenceUrl: 'https://www.ialc.org/',
    buttonText: 'Lihat Detail English Course',
    features: [
      'Kurikulum Berstandar Internasional IALC',
      'Persiapan Intensif Ujian IELTS / TOEFL',
      'Pengajar Tersertifikasi & Native Speaker',
      'Garansi Peningkatan Skor & Academic Pathway',
    ],
  },
  vocationalTraining: {
    title: 'Vocational Education Training (VET)',
    subtitle: 'Pendidikan Vokasi & Kejuruan Siap Kerja Global',
    badge: 'Siap Kerja & Praktikal',
    description:
      'Bangun keterampilan praktis dan kejuruan yang siap pakai untuk industri nyata serta sertifikasi global di Australia, Jerman (Ausbildung), dan negara-negara OECD.',
    image: '/images/hero-vocational.jpg',
    internalUrl: '/vocational-course',
    countries: [
      {
        id: 'australia',
        name: 'Australia',
        flag: '🇦🇺',
        subtitle: 'Kuliah & Vokasi TAFE di Australia',
        description:
          'Program VET & TAFE berstandar industri dengan izin kerja part-time resmi selama studi dan hak apply Graduate Post-Study Work Visa.',
        url: '/vocational-course#australia',
        image: '/images/hero-vocational.jpg',
        isActive: true,
      },
      {
        id: 'jerman',
        name: 'Jerman (Ausbildung)',
        flag: '🇩🇪',
        subtitle: 'Pendidikan Kejuruan Ganda Dual-System',
        description:
          'Program Ausbildung gratis di Jerman dengan uang saku bulanan (€900 - €1.300/bln), asuransi kesehatan, dan penempatan kerja resmi.',
        url: '/vocational-course#jerman',
        image: '/images/lang-german.jpg',
        isActive: true,
      },
      {
        id: 'oecd',
        name: 'Negara Anggota OECD',
        flag: '🌐',
        subtitle: 'Standar Pendidikan Vokasi Terintegrasi OECD',
        description:
          'Akses jalur pendidikan dan pelatihan vokasi terspesialisasi di berbagai negara anggota OECD dengan kurikulum berbasis industri modern.',
        url: '/vocational-course#oecd',
        image: '/images/hero-about.jpg',
        isActive: true,
      },
    ],
  },
  studyAndWork: {
    title: 'Study & Work Program',
    subtitle: 'Kuliah di Luar Negeri Sambil Bekerja Legal',
    badge: 'Mandiri Finansial & Karier',
    description:
      'Kuliah di luar negeri sambil mendapatkan pengalaman kerja berbayar resmi di Australia, Jerman, dan negara OECD untuk membiayai studi dan membangun karier internasional.',
    image: '/images/hero-study-work.jpg',
    internalUrl: '/study-work',
    referenceUrl: 'https://idea-institut.net/index.php/studi-sambil-kerja/',
    buttonText: 'Lihat Program Study & Work',
    features: [
      'Izin Kerja Legal 24–48 Jam per Fortnight / Week',
      'Pendapatan UMR Standar Negara Tujuan',
      'Pendampingan Pembuatan CV Internasional & Tax File',
      'Konsultasi Visa Studi Subclass Resmi',
    ],
  },
  settings: {
    adminNotificationEmail: 'admin@idea-institut.net',
    sendEmailNotification: true,
    notificationSubject: '🚨 Lead Baru Terdaftar di Portal IDEA Institut',
    waConsultationNumber: '6281297654332',
  },
}

const CMS_PAGE_SLUG = 'program-portal-cms'

/**
 * Mendapatkan data CMS terkini dari database Supabase (fallback ke DEFAULT_CMS_DATA jika belum ada).
 */
export async function getPortalCMSData(): Promise<PortalCMSData> {
  try {
    const page = await prisma.page.findUnique({
      where: { slug: CMS_PAGE_SLUG },
    })

    if (page && page.contentJson && typeof page.contentJson === 'object') {
      const content = page.contentJson as unknown as Partial<PortalCMSData>
      return {
        hero: {
          ...DEFAULT_CMS_DATA.hero,
          ...(content.hero || {}),
          heroImage: content.hero?.heroImage || DEFAULT_CMS_DATA.hero.heroImage,
        },
        englishCourse: {
          ...DEFAULT_CMS_DATA.englishCourse,
          ...(content.englishCourse || {}),
          image: content.englishCourse?.image || DEFAULT_CMS_DATA.englishCourse.image,
          internalUrl: content.englishCourse?.internalUrl || DEFAULT_CMS_DATA.englishCourse.internalUrl,
          referenceUrl: content.englishCourse?.referenceUrl || DEFAULT_CMS_DATA.englishCourse.referenceUrl,
        },
        vocationalTraining: {
          ...DEFAULT_CMS_DATA.vocationalTraining,
          ...(content.vocationalTraining || {}),
          image: content.vocationalTraining?.image || DEFAULT_CMS_DATA.vocationalTraining.image,
          internalUrl: content.vocationalTraining?.internalUrl || DEFAULT_CMS_DATA.vocationalTraining.internalUrl,
          countries:
            content.vocationalTraining?.countries && Array.isArray(content.vocationalTraining.countries)
              ? content.vocationalTraining.countries
              : DEFAULT_CMS_DATA.vocationalTraining.countries,
        },
        studyAndWork: {
          ...DEFAULT_CMS_DATA.studyAndWork,
          ...(content.studyAndWork || {}),
          image: content.studyAndWork?.image || DEFAULT_CMS_DATA.studyAndWork.image,
          internalUrl: content.studyAndWork?.internalUrl || DEFAULT_CMS_DATA.studyAndWork.internalUrl,
          referenceUrl: content.studyAndWork?.referenceUrl || DEFAULT_CMS_DATA.studyAndWork.referenceUrl,
        },
        settings: { ...DEFAULT_CMS_DATA.settings, ...(content.settings || {}) },
      }
    }
  } catch (error) {
    console.error('[CMS] Error fetching CMS from DB, using defaults:', error)
  }

  return DEFAULT_CMS_DATA
}

/**
 * Menyimpan pembaruan data CMS ke tabel Page di Supabase.
 */
export async function savePortalCMSData(data: PortalCMSData): Promise<PortalCMSData> {
  const updatedPage = await prisma.page.upsert({
    where: { slug: CMS_PAGE_SLUG },
    create: {
      slug: CMS_PAGE_SLUG,
      title: 'Portal 3 Program Wording & Configuration',
      contentJson: data as any,
      metaTitle: 'IDEA Institut — Portal Informasi 3 Program Unggulan',
      metaDescription: 'Portal panduan resmi English Course, Vocational Education Training, dan Study & Work.',
      publishedAt: new Date(),
    },
    update: {
      contentJson: data as any,
      updatedAt: new Date(),
    },
  })

  return updatedPage.contentJson as unknown as PortalCMSData
}
