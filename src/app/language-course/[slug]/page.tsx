import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { coursesData, getCourseBySlug } from '@/data/courses'
import LanguageCourseDetailClient from '@/components/language/LanguageCourseDetailClient'

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
    title: `${course.nativeName} Course — IDEA Institute`,
    description: `Kursus ${course.name} di IDEA Institute. Level ${course.levels.join(', ')}. ${course.tagline}`,
  }
}

export default async function LanguageCourseDetailPage({ params }: Props) {
  const { slug } = await params
  const course = getCourseBySlug(slug)
  if (!course) notFound()

  return <LanguageCourseDetailClient course={course} />
}
