'use client'

import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'

interface CTABannerProps {
  eyebrow?: string
  headline?: string
  title?: string
  subtext?: string
  subtitle?: string
  primaryLabel?: string
  buttonLabel?: string
  primaryHref?: string
  buttonHref?: string
  showImage?: boolean
}

export default function CTABanner({
  eyebrow = 'WHERE WILL YOUR JOURNEY TAKE YOU?',
  headline,
  title,
  subtext,
  subtitle,
  primaryLabel,
  buttonLabel,
  primaryHref,
  buttonHref,
  showImage = true,
}: CTABannerProps) {
  const displayHeadline = headline || title || 'Begin Constructing Your Global Pathway Today'
  const displaySubtext =
    subtext || subtitle || 'Connect with an expert advisor to draft your personalized educational and career blueprint.'
  const displayLabel = primaryLabel || buttonLabel || 'TALK TO AN ADVISOR'
  const displayHref = primaryHref || buttonHref || 'https://wa.me/6281297654332'

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal delay={100}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1847] via-[#002798] to-[#001759] text-white p-8 sm:p-12 lg:p-14 shadow-2xl border border-blue-900/50">
            
            {/* Ambient Lighting Gradients */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 pointer-events-none blur-3xl"
              style={{ background: 'radial-gradient(circle, #F4A019 0%, transparent 70%)' }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-25 pointer-events-none blur-2xl"
              style={{ background: 'radial-gradient(circle, #DC1E13 0%, transparent 70%)' }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
              
              {/* Left Column: Text & Call to Action (Span 7) */}
              <div className="lg:col-span-7 space-y-6 text-left">
                {eyebrow && (
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs font-extrabold uppercase tracking-widest text-[#F4A019]">
                    <span className="w-2 h-2 rounded-full bg-[#F4A019] animate-pulse" />
                    {eyebrow}
                  </div>
                )}

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.12] tracking-tight">
                  {displayHeadline}
                </h2>

                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-xl">
                  {displaySubtext}
                </p>

                {/* Trust Points */}
                <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-blue-200/90 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#F4A019]">✓</span> 100% Free Initial Consultation
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#F4A019]">✓</span> Fast 1-on-1 Guidance
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[#F4A019]">✓</span> Certified Principals
                  </div>
                </div>

                {/* Button (Standard 16px border-radius) */}
                <div className="pt-3 flex flex-wrap items-center gap-4">
                  <a
                    href={displayHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-extrabold text-gray-950 bg-[#F4A019] hover:bg-[#e08f10] shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>{displayLabel}</span>
                    <svg className="w-4 h-4 text-gray-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right Column: Hero Image (Span 5) */}
              {showImage && (
                <div className="lg:col-span-5 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-md h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 group">
                    <Image
                      src="/images/cta-students.jpg"
                      alt="IDEA Students Pathway"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5">
                      <div className="bg-black/40 backdrop-blur-md px-4 py-2 rounded-xl border border-white/20 text-xs font-semibold text-white">
                        🚀 5.000+ Alumni Studying &amp; Working Worldwide
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
