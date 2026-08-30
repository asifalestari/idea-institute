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
  nativeName: string         // "English"
  flagEmoji: string
  tagline: string
  heroImage: string
  stats: Stat[]
  levels: string[]
  curriculum: CurriculumLevel[]
  tutors: Tutor[]
  testimonials: Testimonial[]
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

export interface ProgramData {
  slug: string
  title: string
  subtitle: string
  heroImage: string
  benefits: ProgramBenefit[]
  modules: ProgramModule[]
  stats: Stat[]
  steps?: ProgramStep[]
  testimonials: Testimonial[]
}

export interface CountryData {
  slug: string
  name: string
  heroImage: string
  description: string
  stats: Stat[]
  requirements: string[]
  steps: ProgramStep[]
  universities: string[]
  testimonials: Testimonial[]
}

export interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
  socials?: {
    linkedin?: string
    instagram?: string
  }
}

export interface Partner {
  name: string
  logo: string
  category: 'university' | 'language' | 'company' | 'government'
  country?: string
}

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}
