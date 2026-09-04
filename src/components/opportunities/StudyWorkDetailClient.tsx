'use client'

// src/components/opportunities/StudyWorkDetailClient.tsx
// Halaman Detail Dinamis untuk Sub-program & Destinasi Study & Work

import Image from 'next/image'
import Link from 'next/link'
import Reveal from '@/components/ui/Reveal'
import CTABanner from '@/components/sections/CTABanner'
import { useLanguage } from '@/context/LanguageContext'
import type { UnifiedStudyWorkDetail } from '@/data/opportunities'

interface Props {
  detail: UnifiedStudyWorkDetail
}

export default function StudyWorkDetailClient({ detail }: Props) {
  const { language } = useLanguage()
  const isId = language === 'id'

  const title = isId ? detail.title : (detail.titleEn || detail.title)
  const subtitle = isId ? detail.subtitle : (detail.subtitleEn || detail.subtitle)
  const badge = isId ? detail.badge : (detail.badgeEn || detail.badge)

  return (
    <div className="bg-white">
      {/* ── 1. HERO SECTION ── */}
      <section className="pt-28 pb-16 md:pt-32 md:pb-24 bg-[#FAFBFF] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Info & Action */}
            <div className="lg:col-span-7 space-y-6">
              <Reveal delay={80}>
                {/* Breadcrumb Navigation */}
                <div className="mb-3">
                  <Link
                    href="/study-work"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#002798] transition-colors"
                  >
                    <span>&larr;</span>
                    <span>{isId ? 'Semua Program Study & Work' : 'All Study & Work Pathways'}</span>
                    <span className="text-gray-300">/</span>
                    <span className="text-gray-900 font-bold">{detail.slug}</span>
                  </Link>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-blue-50 text-xs font-extrabold uppercase tracking-widest text-[#002798]">
                  <span className="w-2 h-2 rounded-full bg-[#002798] animate-pulse" />
                  <span>{badge}</span>
                </div>

                <h1 className="text-4xl sm:text-5xl font-black text-[#002798] tracking-tight leading-tight mt-2">
                  {title}
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  {subtitle}
                </p>
              </Reveal>

              {/* Trust Checkpoints */}
              <Reveal delay={240}>
                <ul className="space-y-3 pt-2">
                  {[
                    isId
                      ? 'Konsultasi & assessment profil 100% gratis'
                      : '100% free profile assessment & initial guidance',
                    isId
                      ? 'Pendampingan dokumen visa & legalitas resmi'
                      : 'Full visa documentation & official translation support',
                    isId
                      ? 'Koneksi ke mitra universitas & employer terakreditasi'
                      : 'Direct access to accredited universities & verified employers',
                    isId
                      ? 'Dukungan pre-departure & on-arrival di negara tujuan'
                      : 'Complete pre-departure briefing & on-arrival orientation',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm sm:text-base font-semibold text-gray-800">
                      <span className="w-5 h-5 rounded-full bg-[#002798] text-white flex items-center justify-center text-xs shrink-0 shadow-sm">
                        ✓
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>

              {/* Action Buttons */}
              <Reveal delay={320}>
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <a
                    href="#contact-info"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl text-sm font-extrabold text-white bg-[#002798] hover:bg-[#001f78] shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                  >
                    <span>{isId ? 'Daftar Konsultasi' : 'Apply for Consultation'}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                  <a
                    href={`https://wa.me/6281297654332?text=${encodeURIComponent(`Halo IDEA Institut, saya ingin konsultasi mengenai program ${detail.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl text-sm font-bold text-gray-700 bg-white border border-gray-200 hover:border-[#002798] hover:text-[#002798] shadow-sm hover:shadow-md transition-all duration-200"
                  >
                    <span>💬 WhatsApp Advisor</span>
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Hero Visual Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <Reveal delay={200} direction="left" className="w-full max-w-md">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 group">
                  <div className="relative h-96 sm:h-[420px] w-full">
                    <Image
                      src={detail.heroImage}
                      alt={detail.title}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1847]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="inline-block px-3 py-1 rounded-xl bg-[#F4A019] text-gray-950 text-xs font-black uppercase tracking-wider mb-2 self-start shadow-md">
                        {isId ? 'Jalur Resmi & Terpercaya' : 'Official Verified Pathway'}
                      </span>
                      <p className="text-lg font-extrabold leading-snug text-white">
                        {detail.title}
                      </p>
                      <p className="text-xs text-blue-100/80 mt-1">
                        {isId ? 'Bimbingan terpadu dari awal hingga penempatan.' : 'Comprehensive mentoring from start to arrival.'}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. STATISTIC STRIP ── */}
      {detail.stats && detail.stats.length > 0 && (
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {detail.stats.map((st, i) => (
                <Reveal key={st.label} delay={i * 60}>
                  <div className="bg-[#FAFBFF] rounded-3xl p-6 border border-blue-50 text-center hover:border-blue-200 transition-colors">
                    <div className="text-3xl sm:text-4xl font-black text-[#002798] tracking-tight">
                      {st.value}
                    </div>
                    <div className="text-xs font-semibold text-gray-500 mt-1 uppercase tracking-wider">
                      {st.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 3. BENEFITS & REQUIREMENTS / MODULES ── */}
      <section className="py-16 sm:py-20 bg-[#F9FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
            
            {/* Key Benefits */}
            <div className="space-y-6">
              <Reveal>
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-blue-50 text-xs font-extrabold uppercase tracking-widest text-[#002798]">
                  <span>✨ {isId ? 'KEUNGGULAN UTAMA' : 'KEY ADVANTAGES'}</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] mt-2">
                  {isId ? 'Mengapa Memilih Program Ini?' : 'Why Choose This Pathway?'}
                </h2>
              </Reveal>

              <div className="space-y-4">
                {detail.benefits.map((b, idx) => (
                  <Reveal key={idx} delay={idx * 60}>
                    <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm flex items-start gap-4 hover:border-blue-200 transition-colors">
                      <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#002798] flex items-center justify-center font-bold text-sm shrink-0">
                        {idx + 1}
                      </div>
                      <p className="text-sm font-semibold text-gray-800 leading-relaxed pt-1">
                        {b}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Requirements or Modules */}
            <div className="space-y-6">
              {detail.requirements && detail.requirements.length > 0 ? (
                <>
                  <Reveal>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-amber-50 text-xs font-extrabold uppercase tracking-widest text-[#F4A019]">
                      <span>📋 {isId ? 'PERSYARATAN UTAMA' : 'KEY REQUIREMENTS'}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] mt-2">
                      {isId ? 'Kualifikasi & Dokumen' : 'Qualifications & Documents'}
                    </h2>
                  </Reveal>

                  <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-4">
                    {detail.requirements.map((req, idx) => (
                      <Reveal key={idx} delay={idx * 50}>
                        <div className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-[#DC1E13] font-bold text-base mt-0.5">•</span>
                          <span className="font-medium leading-relaxed">{req}</span>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </>
              ) : detail.modules && detail.modules.length > 0 ? (
                <>
                  <Reveal>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-xl bg-amber-50 text-xs font-extrabold uppercase tracking-widest text-[#F4A019]">
                      <span>📚 {isId ? 'MODUL PERSIAPAN' : 'PREPARATION MODULES'}</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798] mt-2">
                      {isId ? 'Materi & Pelatihan' : 'Curriculum & Modules'}
                    </h2>
                  </Reveal>

                  <div className="space-y-4">
                    {detail.modules.map((mod, idx) => (
                      <Reveal key={idx} delay={idx * 60}>
                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm space-y-3">
                          <h4 className="text-base font-bold text-gray-900">{mod.title}</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {mod.items.map((item, i) => (
                              <div key={i} className="flex items-center gap-2 text-xs font-semibold text-gray-600">
                                <span className="text-[#002798]">✓</span>
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </>
              ) : null}
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. STEP-BY-STEP PATHWAY PROCESS ── */}
      {detail.steps && detail.steps.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-12 space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#DC1E13]">
                  {isId ? 'TAHAPAN PROGRAM' : 'STEP-BY-STEP PATHWAY'}
                </p>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#002798]">
                  {isId ? 'Langkah Menuju Impian Global Anda' : 'Your Journey to Global Success'}
                </h2>
              </div>
            </Reveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {detail.steps.map((st, idx) => (
                <Reveal key={idx} delay={idx * 60}>
                  <div className="bg-[#FAFBFF] rounded-3xl p-6 sm:p-7 border border-blue-50 shadow-sm hover:border-[#002798] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full group">
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#002798] flex items-center justify-center font-black text-sm group-hover:bg-[#002798] group-hover:text-white transition-colors">
                        {typeof st.step === 'number' ? `0${st.step}` : st.step}
                      </div>
                      <h3 className="text-base font-bold text-gray-900 group-hover:text-[#002798] transition-colors">
                        {st.title}
                      </h3>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {st.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 5. PARTNER UNIVERSITIES / INSTITUTIONS (IF COUNTRY) ── */}
      {detail.universities && detail.universities.length > 0 && (
        <section className="py-14 bg-[#FAFBFF] border-t border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <Reveal>
              <p className="text-xs font-extrabold uppercase tracking-widest text-gray-500">
                {isId ? 'MITRA UNIVERSITAS TERKEMUKA' : 'NOTABLE PARTNER UNIVERSITIES'}
              </p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mt-1">
                {isId ? 'Pilihan Institusi Pendidikan Terbaik' : 'Top Academic Institutions'}
              </h3>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto pt-2">
                {detail.universities.map((uni) => (
                  <span
                    key={uni}
                    className="px-4 py-2 rounded-2xl bg-white border border-gray-200 text-xs font-bold text-gray-800 shadow-sm hover:border-[#002798] hover:text-[#002798] transition-all"
                  >
                    🏛️ {uni}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* ── 6. TESTIMONIALS ── */}
      {detail.testimonials && detail.testimonials.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="text-center mb-10 space-y-2">
                <p className="text-xs font-extrabold uppercase tracking-widest text-[#002798]">
                  {isId ? 'CERITA ALUMNI' : 'ALUMNI STORIES'}
                </p>
                <h3 className="text-2xl font-extrabold text-gray-900">
                  {isId ? 'Kisah Sukses Peserta IDEA' : 'Real Experiences from Our Students'}
                </h3>
              </div>
            </Reveal>

            <div className="space-y-6">
              {detail.testimonials.map((testi, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="bg-[#FAFBFF] rounded-3xl p-8 sm:p-10 border border-blue-50 shadow-md relative">
                    <span className="text-5xl text-blue-200 font-serif absolute top-4 right-6 select-none pointer-events-none">
                      &ldquo;
                    </span>
                    <p className="text-base sm:text-lg text-gray-800 italic leading-relaxed mb-6 relative z-10">
                      &quot;{testi.quote}&quot;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-[#002798] text-white flex items-center justify-center font-bold text-lg shadow-sm">
                        {testi.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{testi.name}</h4>
                        <p className="text-xs text-gray-500">{testi.location} • {testi.program || detail.title}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 7. CTA BANNER ── */}
      <CTABanner
        headline={isId ? `Wujudkan Impian Anda di ${detail.title}` : `Achieve Your Future with ${title}`}
        subtext={isId ? 'Diskusikan rencana pendidikan dan karier luar negeri Anda bersama konsultan berpengalaman IDEA Institut.' : 'Consult your overseas study and international career pathway with our certified mentors.'}
        primaryLabel={isId ? 'KONSULTASI SEKARANG' : 'TALK TO AN ADVISOR'}
        primaryHref="#contact-info"
      />
    </div>
  )
}
