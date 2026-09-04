import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getAllStudyWorkSlugs, getUnifiedStudyWorkDetail } from '@/data/opportunities'
import StudyWorkDetailClient from '@/components/opportunities/StudyWorkDetailClient'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const slugs = getAllStudyWorkSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const detail = getUnifiedStudyWorkDetail(slug)
  if (!detail) return {}

  return {
    title: `${detail.title} — IDEA Institut`,
    description: detail.subtitle || `Informasi lengkap program ${detail.title} di IDEA Institut.`,
  }
}

export default async function StudyWorkDetailPage({ params }: Props) {
  const { slug } = await params
  const detail = getUnifiedStudyWorkDetail(slug)
  if (!detail) notFound()

  return <StudyWorkDetailClient detail={detail} />
}
