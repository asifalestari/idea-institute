'use client'

import LeadForm from '@/components/sections/LeadForm'
import Reveal from '@/components/ui/Reveal'

interface CTABannerProps {
  eyebrow?: string
  headline?: string
  title?: string
  subtext?: string
  subtitle?: string
  primaryLabel?: string
  primaryHref?: string
}

export default function CTABanner({
  eyebrow = 'KONSULTASI GRATIS',
  headline,
  subtext,
  primaryLabel = 'Daftar Sekarang',
  primaryHref = '#lead-form',
}: CTABannerProps) {
  const displayHeadline = headline || 'Mulai Perjalananmu Hari Ini'
  const displaySubtext =
    subtext ||
    'Isi form di bawah dan tim advisor kami akan menghubungimu untuk membantu menyusun rencana pendidikan dan karier internasionalmu.'

  return (
    <section id="contact-info" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal delay={80}>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0a1847] via-[#002798] to-[#001759] text-white p-6 sm:p-10 lg:p-14 shadow-2xl border border-blue-900/50">
            {/* Ambient Lighting */}
            <div
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-30 pointer-events-none blur-3xl"
              style={{
                background: 'radial-gradient(circle, #F4A019 0%, transparent 70%)',
              }}
            />
            <div
              className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full opacity-25 pointer-events-none blur-2xl"
              style={{
                background: 'radial-gradient(circle, #DC1E13 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* LEFT: CTA COPY */}
              <div className="lg:col-span-5 space-y-6">
                {eyebrow && (
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-xs font-extrabold uppercase tracking-widest text-[#F4A019]">
                    <span className="w-2 h-2 rounded-full bg-[#F4A019] animate-pulse" />
                    {eyebrow}
                  </div>
                )}

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.1] tracking-tight">
                  {displayHeadline}
                </h2>

                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed max-w-lg">
                  {displaySubtext}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-sm text-blue-100/90">
                    <span className="text-[#F4A019] font-black">✓</span>
                    <span>100% Konsultasi Gratis</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-blue-100/90">
                    <span className="text-[#F4A019] font-black">✓</span>
                    <span>Respon dalam 1×24 jam kerja</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-blue-100/90">
                    <span className="text-[#F4A019] font-black">✓</span>
                    <span>20+ Tahun Berpengalaman</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-blue-100/90">
                    <span className="text-[#F4A019] font-black">✓</span>
                    <span>Data Anda Aman & Terlindungi</span>
                  </div>
                </div>

              </div>

              {/* RIGHT: LEAD FORM (Directly embedded with glass card) */}
              <div className="lg:col-span-7">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-xl">
                  <LeadForm />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}