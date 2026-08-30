'use client'

import Image from 'next/image'
import Link from 'next/link'

interface HeroStat {
  value: string
  label: string
}

interface HeroSectionProps {
  /** Small pill label di atas headline, warna merah */
  badgePill?: string
  /** Baris headline — bisa array string untuk multi-line styling */
  lines: string[]
  /** Kata yang di-highlight merah (harus ada dalam salah satu baris) */
  highlight?: string
  subtitle: string
  primaryCTA: { label: string; href: string; external?: boolean }
  secondaryCTA?: { label: string; href: string; external?: boolean }
  /** Path to photo (relative to /public) — ditampilkan di kolom kanan */
  heroImage?: string
  heroImageAlt?: string
  /** Stats di bawah CTA */
  stats?: HeroStat[]
  /** home = min-h-screen; page = py-20 lebih compact */
  variant?: 'home' | 'page'
}

export default function HeroSection({
  badgePill,
  lines,
  highlight,
  subtitle,
  primaryCTA,
  secondaryCTA,
  heroImage,
  heroImageAlt = 'IDEA Institut',
  stats = [],
  variant = 'home',
}: HeroSectionProps) {
  const isHome = variant === 'home'

  const renderLine = (line: string, i: number) => {
    if (!highlight || !line.includes(highlight)) {
      return <span key={i} className="block">{line}</span>
    }
    const idx = line.indexOf(highlight)
    return (
      <span key={i} className="block">
        {line.slice(0, idx)}
        <span style={{ color: '#DC1E13' }}>{highlight}</span>
        {line.slice(idx + highlight.length)}
      </span>
    )
  }

  return (
    <section
      className={`relative overflow-hidden bg-white ${isHome ? 'min-h-screen' : 'min-h-[60vh]'} flex`}
      style={{ paddingTop: '72px' }}  /* navbar height */
    >
      <div className="w-full flex flex-col lg:flex-row">

        {/* ── Left: Text Content ── */}
        <div className="flex-1 flex items-center px-6 md:px-12 lg:px-16 xl:px-24 py-16 lg:py-20">
          <div className="max-w-xl w-full">

            {/* Pill Badge */}
            {badgePill && (
              <div className="inline-flex items-center gap-2 mb-5">
                <span
                  className="px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase text-white"
                  style={{ background: '#DC1E13' }}
                >
                  {badgePill}
                </span>
              </div>
            )}

            {/* Headline */}
            <h1
              className="font-black leading-tight mb-5"
              style={{
                fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                color: '#002798',
                lineHeight: 1.05,
              }}
            >
              {lines.map((line, i) => renderLine(line, i))}
            </h1>

            {/* Subtitle */}
            <p
              className="text-base md:text-lg leading-relaxed mb-8"
              style={{ color: '#5a6a8a', maxWidth: '480px' }}
            >
              {subtitle}
            </p>

            {/* CTA Buttons (Standard rounded-2xl / 16px) */}
            <div className="flex flex-wrap gap-3 mb-10">
              {primaryCTA.external ? (
                <a
                  href={primaryCTA.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-xs font-bold text-white transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg"
                  style={{ background: '#DC1E13' }}
                >
                  {primaryCTA.label}
                </a>
              ) : (
                <Link
                  href={primaryCTA.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-xs font-bold text-white transition-all hover:-translate-y-0.5 active:translate-y-0 shadow-md hover:shadow-lg"
                  style={{ background: '#DC1E13' }}
                >
                  {primaryCTA.label}
                </Link>
              )}

              {secondaryCTA && (
                secondaryCTA.external ? (
                  <a
                    href={secondaryCTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-xs font-bold border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 hover:shadow-md"
                    style={{ color: '#002798', borderColor: '#002798', background: 'transparent' }}
                  >
                    {secondaryCTA.label}
                  </a>
                ) : (
                  <Link
                    href={secondaryCTA.href}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl text-xs font-bold border-2 transition-all hover:-translate-y-0.5 active:translate-y-0 hover:shadow-md"
                    style={{ color: '#002798', borderColor: '#002798', background: 'transparent' }}
                  >
                    {secondaryCTA.label}
                  </Link>
                )
              )}
            </div>

            {/* Stats Row */}
            {stats.length > 0 && (
              <div className="flex flex-wrap gap-x-8 gap-y-4 pt-6 border-t border-gray-100">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="font-black text-2xl leading-none" style={{ color: '#002798' }}>
                      {stat.value}
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#5a6a8a' }}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ── Right: Hero Image ── */}
        <div className="relative w-full lg:w-[48%] xl:w-[52%] min-h-[340px] lg:min-h-0 overflow-hidden">
          {heroImage ? (
            <Image
              src={heroImage}
              alt={heroImageAlt}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 52vw"
            />
          ) : (
            /* Fallback gradient jika tidak ada foto */
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(135deg, #002798 0%, #1a3db5 50%, #DC1E13 100%)' }}
            />
          )}
          {/* Red bottom accent bar di mobile */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1 lg:hidden"
            style={{ background: '#DC1E13' }}
          />
        </div>
      </div>
    </section>
  )
}
