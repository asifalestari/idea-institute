import Link from 'next/link'
import SectionHeading from '@/components/ui/SectionHeading'
import Badge from '@/components/ui/Badge'

interface ProgramCard {
  href: string
  flagEmoji: string
  name: string
  nativeName: string
  levels?: string
  students?: string
  tagline?: string
}

interface ProgramCardsProps {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  cards: ProgramCard[]
  columns?: 3 | 4 | 6
}

export default function ProgramCards({
  eyebrow,
  title,
  highlight,
  subtitle,
  cards,
  columns = 3,
}: ProgramCardsProps) {
  const gridCols =
    columns === 6
      ? 'grid-cols-2 sm:grid-cols-3 lg:grid-cols-6'
      : columns === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-section">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          subtitle={subtitle}
        />

        <div className={`grid ${gridCols} gap-5`}>
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group card-base border border-gray-100 rounded-2xl overflow-hidden hover:border-transparent"
            >
              {/* Flag / Banner */}
              <div
                className="h-28 flex items-center justify-center text-6xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: '#F8F9FC' }}
              >
                {card.flagEmoji}
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div>
                    <p className="font-bold text-base leading-tight" style={{ color: '#002798' }}>
                      {card.name}
                    </p>
                    <p className="text-sm" style={{ color: '#5a6a8a' }}>
                      {card.nativeName}
                    </p>
                  </div>
                </div>

                {card.tagline && (
                  <p className="text-sm leading-snug mb-3" style={{ color: '#5a6a8a' }}>
                    {card.tagline}
                  </p>
                )}

                <div className="flex items-center gap-2 flex-wrap">
                  {card.levels && (
                    <Badge variant="navy" size="sm">
                      {card.levels}
                    </Badge>
                  )}
                  {card.students && (
                    <span className="text-xs" style={{ color: '#5a6a8a' }}>
                      {card.students} siswa
                    </span>
                  )}
                </div>

                <div
                  className="mt-4 flex items-center gap-1.5 text-sm font-semibold transition-colors group-hover:gap-2.5"
                  style={{ color: '#DC1E13' }}
                >
                  Pelajari Lebih Lanjut
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
