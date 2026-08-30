// src/types/index.ts
// Shared TypeScript types for IDEA Institut website

export interface Stat {
  label: string
  value: string
  suffix?: string
}

export interface Testimonial {
  name: string
  location: string
  quote: string
  photo: string
  program?: string
}

export interface Tutor {
  name: string
  title: string
  bio: string
  photo: string
}

export interface CurriculumLevel {
  level: string
  title: string
  topics: string[]
}

export interface CourseLangData {
  slug: string
  name: string               // "Bahasa Inggris"
  nameEn?: string
  nativeName: string         // "English"
  flagEmoji: string
  tagline: string
  taglineEn?: string
  heroImage: string
  stats: Stat[]
  statsEn?: Stat[]
  levels: string[]
  curriculum: CurriculumLevel[]
  curriculumEn?: CurriculumLevel[]
  tutors: Tutor[]
  tutorsEn?: Tutor[]
  testimonials: Testimonial[]
  testimonialsEn?: Testimonial[]
}

export interface ProgramBenefit {
  icon: string
  title: string
  desc: string
  chipColor: 'chip-navy' | 'chip-primary' | 'chip-secondary'
}

export interface ProgramModule {
  title: string
  items: string[]
}

export interface ProgramStep {
  step: number
  title: string
  desc: string
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
  socials?: {
    linkedin?: string
    instagram?: string
    twitter?: string
  }
}

export interface Partner {
  name: string
  logo: string
  category: string
  country?: string
}

export interface CountryData {
  name: string
  slug: string
  flag?: string
  headline?: string
  desc?: string
  description?: string
  heroImage?: string
  benefits?: string[]
  requirements?: string[]
  stats: Stat[]
  steps?: ProgramStep[]
  universities?: string[]
  testimonials?: Testimonial[]
}

export interface ProgramData {
  slug: string
  title: string
  subtitle: string
  desc?: string
  heroImage?: string
  stats: Stat[]
  benefits: ProgramBenefit[]
  modules?: ProgramModule[]
  steps?: ProgramStep[]
  testimonials?: Testimonial[]
}
