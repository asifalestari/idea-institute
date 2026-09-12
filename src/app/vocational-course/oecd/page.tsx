'use client'

// src/app/vocational-course/oecd/page.tsx
// Halaman Detail OECD Track — Modern Clean Theme, Infinite Marquee, & CMS Ready Slide Gallery

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import { useLanguage } from '@/context/LanguageContext'

export default function OECDVocationalPage() {
    const { language } = useLanguage()

    // ── KONFIGURASI KONTEN CMS (BISA DIATUR DARI ADMIN) ──
    const cmsConfig = {
        // 1. KONTROL CMS SECTION 10 ALASAN UTAMA
        showReasons: true,
        reasonsSubtitle:
            language === 'en'
                ? 'Global qualification excellence, advanced industrial technology, and high worker protection across 38 OECD member nations.'
                : 'Keunggulan kualifikasi global, teknologi industri terdepan, serta jaminan perlindungan tenaga kerja profesional di 38 negara anggota OECD.',

        // 2. KONTROL CMS PRESENTASI SLIDE BAGAN ALUR
        showSlidePresentation: true,
        slidesSubtitle:
            language === 'en'
                ? 'Visual step-by-step pathway: Selection, Bridging Program, University / Vocational Enrollment, to Dual Systems.'
                : 'Bagan langkah terstruktur visual: Tahap Seleksi, Bridging Program Indonesia, Perkulihan/Vokasi, hingga Sistem Dual Program.',

        // Array Slide Gambar Bagan (Mencakup 4 Slide Materi LEAPING CONCEPT dari Gambar)
        slides: [
            {
                id: 1,
                src: '/images/slides/slide-1.png',
                title: language === 'en' ? 'Study Pathway (Step 1 & 2)' : 'Alur Studi (Langkah 1 & 2)',
                caption: language === 'en' ? 'Selection in ID, Bridging Program, & Further Program' : 'Seleksi di Indonesia, Bridging Program, hingga Further Program.',
            },
            {
                id: 2,
                src: '/images/slides/slide-2.png',
                title: language === 'en' ? 'Step 1: Bridging Program' : 'Langkah 1: Bridging Program',
                caption: language === 'en' ? 'Language Course (B1/B2/IELTS) & Vocational Hands-On Training' : 'Persiapan Bahasa (German/English), Foundation & Training 6-12 Bulan.',
            },
            {
                id: 3,
                src: '/images/slides/slide-3.png',
                title: language === 'en' ? 'Step 2: Further Program' : 'Langkah 2: Program Lanjut',
                caption: language === 'en' ? 'Bachelor/Master, Study&Work, Dual Program, & Ausbildung' : 'Program Kuliah/Studi Lanjut di Australia/Jerman (Bachelor/Master & Dual).',
            },
            {
                id: 4,
                src: '/images/slides/slide-4.png',
                title: language === 'en' ? 'Study Pathway Diagram' : 'Skema Alur Studi Detail',
                caption: language === 'en' ? 'Comprehensive flowchart for SMA/SMK/S1/S2 graduates' : 'Skema integrasi lulusan SMA/SMK/S1/S2 menuju University & Vokasi.',
            },
        ],
    }

    // Hero Image Carousel State
    const heroImages = [
        '/images/hero-vocational.jpg',
        '/images/hero-about.jpg',
        '/images/about-consultation.jpg',
    ]
    const [currentHeroIdx, setCurrentHeroIdx] = useState(0)
    const [activeSlideIdx, setActiveSlideIdx] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [heroImages.length])

    // Dictionary Multi-Bahasa (ID / EN)
    const content = {
        id: {
            badge: 'LEAPING CONCEPT • GLOBAL OECD SKILLWORK & VOCATIONAL',
            title1: 'STUDI Lanjut / VOKASI',
            title2: 'di NEGARA OECD',
            subtitle:
                'Program sertifikasi keahlian terapan, magang industri internasional, serta penyelarasan kualifikasi kerja berstandar negara-negara anggota OECD.',
            checks: [
                'Standar kompetensi keahlian diakui di negara-negara anggota OECD',
                'Magang industri berbayar & penempatan kerja global terstruktur',
                'Pembekalan intensif bahasa asing & penguatan budaya kerja internasional',
                'Peluang karir profesional jangka panjang di perusahaan multinasional',
            ],
            btnPrimary: 'Lihat Future CAREER ↓',
            btnSecondary: 'Bagan & Slide Alur ↓',
            reasonsBadge: 'WHY OECD NATIONS?',
            reasonsTitle: '10 Alasan Utama Vokasi di Negara OECD',
            slidesBadge: 'PRESENTASI ALUR PROGRAM',
            slidesTitle: 'Bagan & Slide Alur Studi',
            careersBadge: 'FUTURE CAREER',
            careersTitle: 'Pilihan Bidang Karir & Studi OECD',
            careersDesc:
                'Program keahlian terapan dan sains yang paling dibutuhkan dalam industri teknologi dan ekonomi global negara OECD.',
        },
        en: {
            badge: 'LEAPING CONCEPT • GLOBAL OECD SKILLWORK & VOCATIONAL',
            title1: 'Further STUDY / VET',
            title2: 'in OECD NATIONS',
            subtitle:
                'Applied skill certification programs, international industrial internships, and professional qualification alignment across OECD member countries.',
            checks: [
                'Skill competency standards recognized across OECD member nations',
                'Structured paid industrial internships & global career placement',
                'Intensive foreign language training & global work culture integration',
                'Long-term professional career opportunities in multinational firms',
            ],
            btnPrimary: 'View Future CAREER ↓',
            btnSecondary: 'View Study Slides ↓',
            reasonsBadge: 'WHY OECD NATIONS?',
            reasonsTitle: '10 Key Reasons to Study VET in OECD Countries',
            slidesBadge: 'PROGRAM PATHWAY SLIDES',
            slidesTitle: 'Study & Skill Work Flowchart',
            careersBadge: 'FUTURE CAREER',
            careersTitle: 'OECD Study & Career Pathway Options',
            careersDesc:
                'Applied skill programs in high demand across OECD member countries future industrial landscape.',
        },
    }

    const text = content[language === 'en' ? 'en' : 'id']

    // Data 10 Alasan Utama Vokasi di Negara OECD
    const tenReasons = [
        {
            num: '01',
            title: language === 'en' ? 'Global Qualification Framework' : 'Kerangka Kualifikasi Global',
            desc: language === 'en' ? 'Standards recognized seamlessly across all 38 OECD member countries.' : 'Standar sertifikasi keahlian yang diakui secara luas di 38 negara anggota OECD.',
            icon: '🌐',
        },
        {
            num: '02',
            title: language === 'en' ? 'Advanced Tech Infrastructure' : 'Infrastruktur Teknologi Terdepan',
            desc: language === 'en' ? 'Access to modern labs, cutting-edge automation, and digital workplace tools.' : 'Akses ke laboratorium modern, otomatisasi industri, dan teknologi kerja digital.',
            icon: '⚙️',
        },
        {
            num: '03',
            title: language === 'en' ? 'Paid International Internships' : 'Magang Industri Berbayar',
            desc: language === 'en' ? 'Gain real-world work experience with official monthly stipends.' : 'Pengalaman kerja nyata di industri global dengan kompensasi & uang saku resmi.',
            icon: '💰',
        },
        {
            num: '04',
            title: language === 'en' ? 'High Worker Safety & Rights' : 'Perlindungan Tenaga Kerja Tinggi',
            desc: language === 'en' ? 'Strict labor laws, fair wages, and comprehensive insurance coverage.' : 'Jaminan regulasi kerja yang adil, standar gaji resmi, dan jaminan asuransi.',
            icon: '🛡️',
        },
        {
            num: '05',
            title: language === 'en' ? 'Multilingual & Cultural Growth' : 'Penguasaan Bahasa & Budaya Global',
            desc: language === 'en' ? 'Master foreign languages while living in diverse international environments.' : 'Kuasai bahasa asing terapan dan adaptasi budaya kerja internasional.',
            icon: '🗣️',
        },
        {
            num: '06',
            title: language === 'en' ? 'High Economic Stability' : 'Stabilitas Ekonomi Negara Maju',
            desc: language === 'en' ? 'OECD nations drive global finance, offering resilient career ecosystems.' : 'Berada di pusat pertumbuhan ekonomi dunia yang stabil dan terus berkembang.',
            icon: '📈',
        },
        {
            num: '07',
            title: language === 'en' ? 'Industry-Driven Curriculum' : 'Kurikulum Berbasis Kebutuhan Industri',
            desc: language === 'en' ? 'Designed directly with corporate partners to match real job market demands.' : 'Materi disusun langsung bersama asosiasi industri untuk menjamin kesiapan kerja.',
            icon: '🎓',
        },
        {
            num: '08',
            title: language === 'en' ? 'Cross-Border Career Mobility' : 'Mobilitas Karir Lintas Negara',
            desc: language === 'en' ? 'Transfer skills easily between Europe, Asia-Pacific, and Americas.' : 'Kemudahan transfer sertifikasi untuk bekerja di berbagai kawasan negara maju.',
            icon: '✈️',
        },
        {
            num: '09',
            title: language === 'en' ? 'Inclusive & Safe Environment' : 'Lingkungan Aman & Inklusif',
            desc: language === 'en' ? 'High quality of public safety, civil rights, and modern public transport.' : 'Tingkat keselamatan tinggi, hak sipil terjamin, dan transportasi publik prima.',
            icon: '🤝',
        },
        {
            num: '10',
            title: language === 'en' ? 'Clear Long-Term Pathway' : 'Jalur Karir Jangka Panjang',
            desc: language === 'en' ? 'Clear progression from vocational certificates to full professional roles.' : 'Alur pengembangan karir yang jelas dari sertifikasi vokasi hingga posisi profesional.',
            icon: '🚀',
        },
    ]

    // Data Future CAREER OECD Track
    const oecdFutureCareers = [
        {
            title: 'HealthCare & Global Nursing',
            category: 'HealthCare',
            desc: language === 'en' ? 'Professional nursing care & international healthcare management.' : 'Layanan keperawatan profesional dan manajemen kesehatan standar global.',
            img: '/images/hero-vocational.jpg',
        },
        {
            title: 'Environment & Sustainable Dev\'ment',
            category: 'Sustainability',
            desc: language === 'en' ? 'Environmental management and global eco-system development.' : 'Pengelolaan lingkungan hidup dan pembangunan berkelanjutan berstandar OECD.',
            img: '/images/hero-about.jpg',
        },
        {
            title: 'Mining & Resource Engineering',
            category: 'Engineering',
            desc: language === 'en' ? 'Advanced mining technology, mineral extraction, & geotechnics.' : 'Teknologi pertambangan modern, ekstraksi sumber daya, dan geoteknik.',
            img: '/images/about-consultation.jpg',
        },
        {
            title: 'Computer Science & AI',
            category: 'Technology',
            desc: language === 'en' ? 'Artificial intelligence, enterprise software, & cloud engineering.' : 'Kecerdasan buatan, rekayasa perangkat lunak enterprise, dan komputasi awan.',
            img: '/images/hero-language-course.jpg',
        },
    ]

    return (
        <div className="bg-white font-sans overflow-x-hidden">
            {/* CSS Animasi Marquee Seamless */}
            <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-smooth {
          display: flex;
          width: max-content;
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-smooth:hover {
          animation-play-state: paused;
        }
      `}</style>

            {/* ── 1. HERO SECTION ── */}
            <section className="pt-28 pb-20 md:pt-36 md:pb-24 bg-[#FCFBF4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

                        {/* Teks Kiri */}
                        <div className="lg:col-span-7 space-y-6">
                            <Reveal delay={80}>
                                <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-[#D97706] text-[11px] font-black uppercase tracking-wider border border-amber-200/80">
                                    {text.badge}
                                </span>

                                <h1 className="text-3xl sm:text-4xl lg:text-[2.65rem] font-black text-gray-900 tracking-normal leading-[1.25] mt-4">
                                    {text.title1} <br />
                                    <span className="text-[#D97706] tracking-normal">{text.title2}</span>
                                </h1>
                            </Reveal>

                            <Reveal delay={160}>
                                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-xl">
                                    {text.subtitle}
                                </p>
                            </Reveal>

                            <Reveal delay={240}>
                                <div className="space-y-3 pt-1">
                                    {text.checks.map((item) => (
                                        <div key={item} className="flex items-start gap-3 text-xs sm:text-sm font-bold text-gray-800">
                                            <div className="w-5 h-5 rounded-full bg-[#D97706] text-white flex items-center justify-center text-[10px] shrink-0 mt-0.5 shadow-2xs">
                                                ✓
                                            </div>
                                            <span className="leading-snug">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </Reveal>

                            <Reveal delay={320}>
                                <div className="flex flex-wrap items-center gap-4 pt-3">
                                    <a
                                        href="#future-careers"
                                        className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#D97706] hover:bg-[#b56304] transition-all shadow-md hover:shadow-lg"
                                    >
                                        {text.btnPrimary}
                                    </a>
                                    <a
                                        href="#slide-presentation"
                                        className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#D97706] bg-white border border-amber-200 hover:bg-amber-50 transition-all shadow-2xs"
                                    >
                                        {text.btnSecondary}
                                    </a>
                                </div>
                            </Reveal>
                        </div>

                        {/* Gambar Kanan Carousel */}
                        <div className="lg:col-span-5 flex justify-center lg:justify-end">
                            <Reveal delay={200} className="relative w-full max-w-md">
                                <div className="relative">
                                    <div className="relative h-80 sm:h-96 w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-amber-100">
                                        {heroImages.map((imgUrl, index) => (
                                            <div
                                                key={imgUrl}
                                                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentHeroIdx ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                                    }`}
                                            >
                                                <Image
                                                    src={imgUrl}
                                                    alt={`OECD Slide ${index + 1}`}
                                                    fill
                                                    priority={index === 0}
                                                    className="object-cover"
                                                />
                                            </div>
                                        ))}

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-20 flex items-end justify-between p-6">
                                            <div className="text-white space-y-1">
                                                <span className="inline-block px-3 py-1 rounded-lg bg-[#D97706] text-white text-[10px] font-black uppercase tracking-wider">
                                                    STUDY &amp; SKILLWORK
                                                </span>
                                                <p className="text-xs sm:text-sm font-bold text-white">
                                                    OECD Global Pathway
                                                </p>
                                            </div>

                                            <div className="flex items-center gap-1.5 z-30">
                                                {heroImages.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setCurrentHeroIdx(i)}
                                                        className={`h-2 rounded-full transition-all ${i === currentHeroIdx ? 'w-6 bg-[#D97706]' : 'w-2 bg-white/60'
                                                            }`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Floating Badges */}
                                    <div className="absolute -top-4 -left-6 bg-white/95 backdrop-blur-md text-gray-900 px-4 py-3 rounded-2xl shadow-xl border border-amber-100 flex items-center gap-3 z-30">
                                        <div className="w-8 h-8 rounded-xl bg-amber-50 text-[#D97706] flex items-center justify-center text-sm font-bold shrink-0">
                                            🌐
                                        </div>
                                        <div>
                                            <p className="text-xs font-extrabold text-gray-900 leading-tight">OECD Standard</p>
                                            <p className="text-[10px] text-gray-500">38 Member Countries</p>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-4 -right-4 bg-[#D97706] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-30">
                                        <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-sm font-bold shrink-0">
                                            💼
                                        </div>
                                        <div>
                                            <p className="text-xs font-black leading-tight">Global Pathway</p>
                                            <p className="text-[10px] text-amber-100">Study &amp; Work Certified</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 2. MARQUEE 10 ALASAN (OPSIONAL CMS: SHOWREASONS) ── */}
            {cmsConfig.showReasons && (
                <section id="alasan-utama" className="py-20 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-3">
                        <div>
                            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-[#D97706] text-[11px] font-black uppercase tracking-wider border border-amber-200/80 shadow-2xs">
                                {text.reasonsBadge}
                            </span>
                        </div>

                        <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-normal">
                            {text.reasonsTitle}
                        </h2>

                        {cmsConfig.reasonsSubtitle && (
                            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed pt-1">
                                {cmsConfig.reasonsSubtitle}
                            </p>
                        )}
                    </div>

                    {/* Marquee Track Seamless */}
                    <div className="animate-marquee-smooth gap-6 px-4">
                        {[...tenReasons, ...tenReasons].map((item, idx) => (
                            <div
                                key={`${item.num}-${idx}`}
                                className="w-88 shrink-0 min-h-[210px] bg-[#FCFBF4] border border-amber-100 rounded-[24px] p-7 hover:border-[#D97706] hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer space-y-4"
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-3xl">{item.icon}</span>
                                    <span className="text-xs font-black text-[#D97706]/50">
                                        #{item.num}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <h3 className="text-sm font-extrabold text-gray-900 leading-snug tracking-normal">
                                        {item.title}
                                    </h3>
                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            )}

            {/* ── 3. DYNAMIC SLIDE PRESENTATION VIEWER (MENYAMPING 8-4) ── */}
            {cmsConfig.showSlidePresentation && (
                <section id="slide-presentation" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

                        <Reveal>
                            <div className="text-center space-y-3">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-[#D97706] text-[11px] font-black uppercase tracking-wider border border-amber-200/80">
                                    {text.slidesBadge}
                                </span>
                                <h2 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-normal">
                                    {text.slidesTitle}
                                </h2>

                                {cmsConfig.slidesSubtitle && (
                                    <p className="text-xs sm:text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed pt-1">
                                        {cmsConfig.slidesSubtitle}
                                    </p>
                                )}
                            </div>
                        </Reveal>

                        {/* Split Grid 8-4 Layout Clean */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                            {/* Display Utama Kiri (8/12) */}
                            <div className="lg:col-span-8 space-y-4">
                                <div className="relative w-full h-80 sm:h-[460px] rounded-[24px] overflow-hidden bg-gray-50 shadow-sm border border-gray-200/80 group">
                                    <Image
                                        src={cmsConfig.slides[activeSlideIdx].src}
                                        alt={cmsConfig.slides[activeSlideIdx].title}
                                        fill
                                        className="object-contain p-2"
                                        priority
                                    />

                                    {/* Panah Prev / Next */}
                                    <button
                                        onClick={() => setActiveSlideIdx((prev) => (prev > 0 ? prev - 1 : cmsConfig.slides.length - 1))}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#D97706] transition-all shadow-md"
                                    >
                                        ‹
                                    </button>
                                    <button
                                        onClick={() => setActiveSlideIdx((prev) => (prev < cmsConfig.slides.length - 1 ? prev + 1 : 0))}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-[#D97706] transition-all shadow-md"
                                    >
                                        ›
                                    </button>
                                </div>

                                {/* Caption Slide */}
                                <div className="flex items-center justify-between px-2 pt-1">
                                    <div>
                                        <h3 className="text-sm font-extrabold text-gray-900">
                                            {cmsConfig.slides[activeSlideIdx].title}
                                        </h3>
                                        <p className="text-xs text-gray-500">
                                            {cmsConfig.slides[activeSlideIdx].caption}
                                        </p>
                                    </div>
                                    <span className="text-xs font-black text-[#D97706] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                                        Slide {activeSlideIdx + 1} / {cmsConfig.slides.length}
                                    </span>
                                </div>
                            </div>

                            {/* Panel Navigasi Thumbnail Kanan (4/12) */}
                            <div className="lg:col-span-4 space-y-3">
                                <p className="text-xs font-black uppercase tracking-wider text-gray-400 mb-1">
                                    Daftar Slide ({cmsConfig.slides.length}):
                                </p>

                                <div className="max-h-[460px] overflow-y-auto space-y-3 pr-1">
                                    {cmsConfig.slides.map((slide, idx) => (
                                        <button
                                            key={slide.id}
                                            onClick={() => setActiveSlideIdx(idx)}
                                            className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3.5 ${activeSlideIdx === idx
                                                ? 'bg-white border-[#D97706] shadow-md ring-2 ring-amber-100'
                                                : 'bg-gray-50/80 border-gray-200/70 hover:bg-white hover:border-amber-200'
                                                }`}
                                        >
                                            <div className={`w-8 h-8 rounded-xl font-black text-xs flex items-center justify-center shrink-0 ${activeSlideIdx === idx ? 'bg-[#D97706] text-white' : 'bg-gray-200 text-gray-600'
                                                }`}>
                                                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                                            </div>
                                            <div className="overflow-hidden">
                                                <h4 className="text-xs font-extrabold text-gray-900 leading-tight truncate">
                                                    {slide.title}
                                                </h4>
                                                <p className="text-[11px] text-gray-500 truncate mt-0.5">
                                                    {slide.caption}
                                                </p>
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            )}

            {/* ── 4. FUTURE CAREER SECTION ── */}
            <section id="future-careers" className="py-24 bg-[#FCFBF4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <Reveal>
                        <div className="text-center mb-16 space-y-4">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-[#D97706] text-[11px] font-black uppercase tracking-wider border border-amber-200/80">
                                {text.careersBadge}
                            </span>
                            <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-normal">
                                {text.careersTitle}
                            </h2>
                            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed pt-1">
                                {text.careersDesc}
                            </p>
                        </div>
                    </Reveal>

                    {/* Grid 4 Kolom Simetris */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {oecdFutureCareers.map((career, idx) => (
                            <Reveal key={career.title} delay={idx * 50}>
                                <div className="bg-white border border-amber-100 rounded-[20px] overflow-hidden flex flex-col justify-between h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="space-y-4">
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image src={career.img} alt={career.title} fill className="object-cover" />
                                            <div className="absolute top-3 left-3">
                                                <span className="px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-white/95 text-[#D97706] shadow-2xs">
                                                    {career.category}
                                                </span>
                                            </div>
                                        </div>

                                        <div className="px-5 pb-6 space-y-2">
                                            <h3 className="text-sm font-extrabold text-gray-900 leading-snug tracking-normal">
                                                {career.title}
                                            </h3>
                                            <p className="text-xs text-gray-600 leading-relaxed">
                                                {career.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}