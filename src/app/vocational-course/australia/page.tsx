'use client'

// src/app/vocational-course/australia/page.tsx
// Fix Viewport Height, Card Min-Height & Standard Grid Layout (Matching Favorite Previous Design)

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import { useLanguage } from '@/context/LanguageContext'

export default function AustraliaVocationalPage() {
    const { language } = useLanguage()

    // State Multi-Image Hero
    const heroImages = [
        '/images/hero-vocational.jpg',
        '/images/hero-about.jpg',
        '/images/about-consultation.jpg',
    ]
    const [currentHeroIdx, setCurrentHeroIdx] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroIdx((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [heroImages.length])

    // Dictionary Multi-Bahasa
    const content = {
        id: {
            badge: 'VOCATIONAL & SKILLWORK AUSTRALIA',
            title1: 'STUDI Lanjut / KULIAH',
            title2: 'di AUSTRALIA',
            subtitle:
                'Program Cert III + Diploma / Bachelor-Master-PhD dengan Study&Work resmi selama 24 – 60 Bulan (+/-) di Australia.',
            checks: [
                'Kualifikasi resmi diakui Australian Qualifications Framework (AQF)',
                'Izin kerja paruh waktu legal hingga 48 jam per dua minggu',
                'Pembelajaran berbasis praktik industri & laboratorium modern',
                'Peluang post-study work dan penempatan karir global',
            ],
            btnPrimary: 'Lihat Future CAREER ↓',
            btnSecondary: '10 Alasan Utama ↓',

            reasonsBadge: 'WHY AUSTRALIA?',
            reasonsTitle: '10 Alasan Utama Kuliah di Australia',
            reasonsNotice: 'Keunggulan akademis, keamanan, dan peluang karir global yang menjadikan Australia destinasi favorit dunia.',

            careersBadge: 'FUTURE CAREER',
            careersTitle: 'Pilihan Bidang Karir & Studi Australia',
            careersDesc:
                'Program keahlian terapan yang paling dibutuhkan dalam industri masa depan Australia.',
        },
        en: {
            badge: 'VOCATIONAL & SKILLWORK AUSTRALIA',
            title1: 'Further STUDY / DEGREE',
            title2: 'in AUSTRALIA',
            subtitle:
                'Cert III + Diploma / Bachelor-Master-PhD with official Study&Work pathway for 24 – 60 Months (+/-) in Australia.',
            checks: [
                'Officially recognized by Australian Qualifications Framework (AQF)',
                'Legal part-time work rights up to 48 hours per fortnight',
                'Practical industry-focused learning & modern lab facilities',
                'Post-study work opportunities & global career placement',
            ],
            btnPrimary: 'View Future CAREER ↓',
            btnSecondary: '10 Key Reasons ↓',

            reasonsBadge: 'WHY AUSTRALIA?',
            reasonsTitle: '10 Key Reasons to Study in Australia',
            reasonsNotice: 'Academic excellence, safety, and global career opportunities making Australia a top destination.',

            careersBadge: 'FUTURE CAREER',
            careersTitle: 'Australia Study & Career Pathway Options',
            careersDesc:
                'Applied skill programs in high demand across Australia’s future industries.',
        },
    }

    const text = content[language === 'en' ? 'en' : 'id']

    // Data 10 Alasan Utama
    const tenReasons = [
        {
            num: '01',
            title: language === 'en' ? 'World-Class Research & Tech' : 'Riset & Teknologi Tingkat Dunia',
            desc: language === 'en' ? 'Advanced in R&D and Technology, ranked 6th globally in education advancement.' : 'Maju dalam Riset Ilmu Pengetahuan & Teknologi, ranking 6 kemajuan pendidikan dunia.',
            icon: '🔬',
        },
        {
            num: '02',
            title: language === 'en' ? 'Global Economic Driver' : 'Penggerak Ekonomi Global',
            desc: language === 'en' ? 'Top 20 global economy driver with high financial stability and growth.' : 'Masuk jajaran 20 Besar negara penggerak Ekonomi Dunia dengan keuangan kokoh.',
            icon: '📈',
        },
        {
            num: '03',
            title: language === 'en' ? 'Excellence in VET Education' : 'Unggul Pendidikan Vokasi',
            desc: language === 'en' ? 'Recognized TAFE & VET education offering comprehensive practical majors.' : 'Diakui dalam Pendidikan Vokasi (TAFE) dengan prodi terapan lengkap.',
            icon: '🎓',
        },
        {
            num: '04',
            title: language === 'en' ? 'Scholarships & Affordable Living' : 'Beasiswa & Biaya Terjangkau',
            desc: language === 'en' ? 'Wide range of scholarships and reasonable cost of living compared to Western peers.' : 'Pilihan beasiswa serta biaya hidup relatif terjangkau dibanding negara barat lain.',
            icon: '💰',
        },
        {
            num: '05',
            title: language === 'en' ? 'Part-Time Work & Full-Time Careers' : 'Part-Time Work & Karir Full-Time',
            desc: language === 'en' ? 'Legal part-time work rights during study and full-time career pathways upon graduation.' : 'Part-time Work resmi selama kuliah dan akses peluang karir setelah lulus.',
            icon: '💼',
        },
        {
            num: '06',
            title: language === 'en' ? 'Advanced Academic Standards' : 'Standar Akademik Maju',
            desc: language === 'en' ? 'Seamlessly integrating theory and practical experience in real-world industries.' : 'Menyinergikan teori dan praktik secara konsisten di industri nyata.',
            icon: '🏛️',
        },
        {
            num: '07',
            title: language === 'en' ? 'Modern Campuses & Facilities' : 'Kampus Modern & Fasilitas Lengkap',
            desc: language === 'en' ? 'World-class educational facilities, specialized tech labs, and modern learning spaces.' : 'Fasilitas pendidikan, laboratorium teknis, dan pengajaran modern.',
            icon: '🏫',
        },
        {
            num: '08',
            title: language === 'en' ? 'Vibrant Lifestyle & Tourism' : 'Objek Wisata & Fasilitas Prima',
            desc: language === 'en' ? 'High quality of life surrounded by natural wonders and world-class public amenities.' : 'Lingkungan hidup berkualitas tinggi dengan pemandangan alam indah.',
            icon: '🏖️',
        },
        {
            num: '09',
            title: language === 'en' ? 'Tolerant & Inclusive Society' : 'Masyarakat Toleran & Inklusif',
            desc: language === 'en' ? 'A welcoming multicultural community that values diversity and global cultures.' : 'Lingkungan multikultural ramah dan toleran terhadap semua budaya.',
            icon: '🤝',
        },
        {
            num: '10',
            title: language === 'en' ? 'Safe Environment & Low Crime' : 'Tingkat Kejahatan Rendah',
            desc: language === 'en' ? 'A law-abiding civil society state ranked among the safest nations worldwide.' : 'Civil Society State dengan penegakan hukum konsisten dan sangat aman.',
            icon: '🛡️',
        },
    ]

    // Data Future CAREER (8 Item Agar Grid 4 Kolom Pas & Tidak Ada Yang Jomblo Sendirian)
    const australiaFutureCareers = [
        {
            title: 'HealthCare',
            category: 'HealthCare',
            desc: language === 'en' ? 'Professional nursing care & healthcare management.' : 'Layanan keperawatan dan manajemen kesehatan profesional terakreditasi.',
            img: '/images/hero-vocational.jpg',
        },
        {
            title: 'Environment & Sustainable Dev\'ment',
            category: 'Sustainability',
            desc: language === 'en' ? 'Environmental management and global sustainable development.' : 'Pengelolaan lingkungan hidup dan pembangunan berkelanjutan berstandar global.',
            img: '/images/hero-about.jpg',
        },
        {
            title: 'Mining Engineering',
            category: 'Engineering',
            desc: language === 'en' ? 'Modern Australian mining technology & engineering management.' : 'Teknologi dan manajemen industri pertambangan modern Australia.',
            img: '/images/about-consultation.jpg',
        },
        {
            title: 'Computer Science & AI',
            category: 'Technology',
            desc: language === 'en' ? 'Artificial intelligence, software engineering, & data science.' : 'Kecerdasan buatan, rekayasa perangkat lunak, dan data science enterprise.',
            img: '/images/hero-language-course.jpg',
        },
        {
            title: 'Mechatronic & Robotic',
            category: 'Automation',
            desc: language === 'en' ? 'Mechatronics, robotics systems, and industrial automation.' : 'Mekatronika, sistem robotika industri, dan otomatisasi manufaktur.',
            img: '/images/hero-vocational.jpg',
        },
        {
            title: 'Renewable Energy',
            category: 'Clean Energy',
            desc: language === 'en' ? 'Renewable energy tech, solar systems, and green innovation.' : 'Teknologi energi terbarukan, panel surya, dan inovasi ramah lingkungan.',
            img: '/images/hero-about.jpg',
        },
        {
            title: 'Business & Economic',
            category: 'Business',
            desc: language === 'en' ? 'International business management, enterprise finance, & economics.' : 'Manajemen bisnis internasional, keuangan enterprise, dan ekonomi global.',
            img: '/images/about-consultation.jpg',
        },
        {
            title: 'Hospitality & Tourism',
            category: 'Hospitality',
            desc: language === 'en' ? 'Global hotel management, tourism operations, & culinary art.' : 'Manajemen perhotelan global, operasional pariwisata, dan tata boga.',
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
                                        href="#alasan-utama"
                                        className="px-7 py-3.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#D97706] bg-white border border-amber-200 hover:bg-amber-50 transition-all shadow-2xs"
                                    >
                                        {text.btnSecondary}
                                    </a>
                                </div>
                            </Reveal>
                        </div>

                        {/* Gambar Kanan */}
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
                                                    alt={`Australia Slide ${index + 1}`}
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
                                                    Australia Global Pathway
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
                                            🇦🇺
                                        </div>
                                        <div>
                                            <p className="text-xs font-extrabold text-gray-900 leading-tight">AQF Standard</p>
                                            <p className="text-[10px] text-gray-500">Certified TAFE Curriculum</p>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-4 -right-4 bg-[#D97706] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-30">
                                        <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-sm font-bold shrink-0">
                                            💼
                                        </div>
                                        <div>
                                            <p className="text-xs font-black leading-tight">24 – 60 Months</p>
                                            <p className="text-[10px] text-amber-100">Study &amp; Work Duration</p>
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                    </div>
                </div>
            </section>

            {/* ── 2. MARQUEE 10 ALASAN ── */}
            <section id="alasan-utama" className="py-24 bg-white border-y border-gray-100 overflow-hidden">
                {/* Header Section dengan Spacing Longgar (space-y-5 dan inline margin mb-2) */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center space-y-4">
                    <div className="mb-2">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-[#D97706] text-[11px] font-black uppercase tracking-wider border border-amber-200/80 shadow-2xs">
                            {text.reasonsBadge}
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-normal pt-1">
                        {text.reasonsTitle}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-400 max-w-md mx-auto">
                        {text.reasonsNotice}
                    </p>
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

            {/* ── 3. FUTURE CAREER SECTION (STANDARD GRID 4 KOLOM PERSIS GAMBAR SEBELUMNYA) ── */}
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

                    {/* CSS Grid Murni (4 Kolom Rapi Tanpa Pinggiran Geser) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                        {australiaFutureCareers.map((career, idx) => (
                            <Reveal key={career.title} delay={idx * 50}>
                                <div className="bg-white border border-amber-100 rounded-[20px] overflow-hidden flex flex-col justify-between h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                    <div className="space-y-4">
                                        {/* Image Header */}
                                        <div className="relative h-48 w-full overflow-hidden">
                                            <Image src={career.img} alt={career.title} fill className="object-cover" />
                                            <div className="absolute top-3 left-3">
                                                <span className="px-2.5 py-1 rounded-full text-[9px] font-extrabold uppercase tracking-wider bg-white/95 text-[#D97706] shadow-2xs">
                                                    {career.category}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content Body */}
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