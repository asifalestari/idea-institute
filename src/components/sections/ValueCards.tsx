import SectionHeading from '@/components/ui/SectionHeading'
import type { ProgramBenefit } from '@/types'

interface ValueCardsProps {
  eyebrow?: string
  title: string
  highlight?: string
  subtitle?: string
  cards: ProgramBenefit[]
}

const chipBg: Record<string, string> = {
  'chip-navy': '#002798',
  'chip-primary': '#DC1E13',
  'chip-secondary': '#F4A019',
}

const chipText: Record<string, string> = {
  'chip-navy': '#ffffff',
  'chip-primary': '#ffffff',
  'chip-secondary': '#ffffff',
}

export default function ValueCards({ eyebrow, title, highlight, subtitle, cards }: ValueCardsProps) {
  return (
    <section className="py-20 md:py-24" style={{ background: '#F8F9FC' }}>
      <div className="container-section">
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          highlight={highlight}
          subtitle={subtitle}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl p-7 flex flex-col gap-4 card-base"
              style={{
                background: chipBg[card.chipColor] ?? '#002798',
                color: chipText[card.chipColor] ?? '#ffffff',
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: 'rgba(255,255,255,0.15)' }}
              >
                {card.icon}
              </div>

              {/* Content */}
              <div>
                <h3
                  className="font-bold text-lg mb-2 leading-tight"
                  style={{ color: chipText[card.chipColor] ?? '#ffffff' }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: 'rgba(255,255,255,0.8)' }}
                >
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
