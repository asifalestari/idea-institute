import type { Stat } from '@/types'

interface StatisticStripProps {
  stats: Stat[]
  dark?: boolean // navy background variant
}

export default function StatisticStrip({ stats, dark = false }: StatisticStripProps) {
  return (
    <section
      className="py-10 md:py-12"
      style={{
        background: dark ? '#002798' : '#ffffff',
        borderTop: dark ? 'none' : '1px solid rgba(0,39,152,0.07)',
        borderBottom: dark ? 'none' : '1px solid rgba(0,39,152,0.07)',
      }}
    >
      <div className="container-section">
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x"
          style={{ borderColor: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,39,152,0.12)' }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center px-4 md:px-8"
            >
              <span
                className="font-black leading-none mb-2"
                style={{
                  fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                  color: dark ? '#ffffff' : chipColor(i),
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-sm font-medium leading-snug"
                style={{ color: dark ? 'rgba(255,255,255,0.7)' : '#5a6a8a' }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Cycle through brand colors for each stat
function chipColor(index: number): string {
  const colors = ['#002798', '#DC1E13', '#F4A019', '#DC1E13']
  return colors[index % colors.length]
}
