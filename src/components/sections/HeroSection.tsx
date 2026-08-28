import Link from 'next/link'
import FloatingCard from '@/components/ui/FloatingCard'
import { contactInfo } from '@/data/team'

interface HeroSectionProps {
  eyebrow?: string
  title: string
  titleHighlight?: string   // word to highlight in primary color
  subtitle: string
  primaryCTA?: { label: string; href: string; external?: boolean }
  secondaryCTA?: { label: string; href: string }
  floatingCards?: { emoji: string; title: string; subtitle: string; position: 'top-left' | 'bottom-right' | 'top-right' }[]
  languageChips?: string[]
  badge?: string
  variant?: 'home' | 'page'  // home = full height, page = compact
}

const defaultPrimary = { label: 'Konsultasi Gratis', href: contactInfo.whatsapp, external: true }
const defaultSecondary = { label: 'Lihat Program', href: '/course' }

export default function HeroSection({
  eyebrow,
  title,
  titleHighlight,
  subtitle,
  primaryCTA = defaultPrimary,
  secondaryCTA = defaultSecondary,
  floatingCards = [],
  languageChips,
  badge,
  variant = 'home',
}: HeroSectionProps) {
  const isHome = variant === 'home'

  // Render title with optional highlight
  const renderTitle = () => {
    if (!titleHighlight) return <>{title}</>
    const idx = title.indexOf(titleHighlight)
    if (idx === -1) return <>{title}</>
    return (
      <>
        {title.slice(0, idx)}
        <span style={{ color: '#DC1E13' }}>{titleHighlight}</span>
        {title.slice(idx + titleHighlight.length)}
      </>
    )
  }

  return (
    <section
      className={`relative overflow-hidden ${isHome ? 'min-h-screen' : 'py-24 md:py-32'} flex items-center`}
      style={{ paddingTop: '5rem' }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Top-right blob */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-5"
          style={{ background: '#002798' }}
        />
        {/* Bottom-left blob */}
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full opacity-5"
          style={{ background: '#DC1E13' }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, #002798, #002798 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #002798, #002798 1px, transparent 1px, transparent 60px)',
          }}
        />
      </div>

      <div className="container-section relative z-10 w-full">
        <div className={`grid ${isHome ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-12 lg:gap-16 items-center`}>
          {/* ── Left Column: Text ── */}
          <div className="fade-up">
            {/* Eyebrow */}
            {eyebrow && (
              <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#F4A019' }}>
                {eyebrow}
              </p>
            )}

            {/* Badge */}
            {badge && (
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-sm font-semibold"
                style={{ background: 'rgba(220,30,19,0.08)', color: '#DC1E13', border: '1px solid rgba(220,30,19,0.2)' }}>
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" style={{ background: '#DC1E13' }} />
                {badge}
              </div>
            )}

            {/* Title */}
            <h1
              className="font-black leading-tight mb-5"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.75rem)',
                color: '#002798',
                lineHeight: '1.08',
              }}
            >
              {renderTitle()}
            </h1>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg leading-relaxed mb-6 max-w-lg"
              style={{ color: '#5a6a8a' }}
            >
              {subtitle}
            </p>

            {/* Language Chips */}
            {languageChips && (
              <div className="flex flex-wrap gap-2 mb-7">
                {languageChips.map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 rounded-full text-sm font-semibold border"
                    style={{ background: 'rgba(0,39,152,0.06)', color: '#002798', borderColor: 'rgba(0,39,152,0.15)' }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              {primaryCTA.external ? (
                <a
                  href={primaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  {primaryCTA.label}
                </a>
              ) : (
                <Link href={primaryCTA.href} className="btn-primary">
                  {primaryCTA.label}
                </Link>
              )}

              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn-secondary">
                  {secondaryCTA.label}
                </Link>
              )}
            </div>
          </div>

          {/* ── Right Column: Visual ── */}
          <div className="relative flex items-center justify-center">
            {/* Main image placeholder with frame */}
            <div className="relative">
              {/* Yellow decorative frame */}
              <div
                className="absolute -top-4 -left-4 w-full h-full rounded-3xl z-0"
                style={{ background: '#FFF500', opacity: 0.4 }}
              />

              {/* Main visual box */}
              <div
                className="relative z-10 rounded-3xl overflow-hidden"
                style={{
                  width: 'clamp(260px, 40vw, 480px)',
                  height: 'clamp(280px, 45vw, 520px)',
                  background: 'linear-gradient(135deg, #002798 0%, #1a3db5 50%, #DC1E13 100%)',
                }}
              >
                {/* Decorative content inside */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8 text-center">
                  <div className="text-6xl mb-4">🌏</div>
                  <p className="font-black text-2xl mb-2">IDEA Institut</p>
                  <p className="text-sm opacity-75">Language Study & Travel</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 w-full max-w-[260px]">
                    {['🇬🇧', '🇩🇪', '🇪🇸', '🇫🇷', '🇨🇳', '🇯🇵'].map((flag, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-xl flex items-center justify-center text-2xl"
                        style={{ background: 'rgba(255,255,255,0.15)' }}
                      >
                        {flag}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            {floatingCards.map((card, i) => {
              const posClasses: Record<string, string> = {
                'top-left': 'absolute -left-6 top-8 z-20',
                'top-right': 'absolute -right-6 top-8 z-20',
                'bottom-right': 'absolute -right-6 bottom-12 z-20',
              }
              return (
                <FloatingCard
                  key={i}
                  emoji={card.emoji}
                  title={card.title}
                  subtitle={card.subtitle}
                  className={posClasses[card.position]}
                  style={{ animationDelay: `${i * 0.5}s` } as React.CSSProperties}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
