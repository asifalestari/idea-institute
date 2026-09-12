'use client'

// src/app/vocational-course/jerman/page.tsx
// Halaman Detail Jerman — Presisi Slide LEAPING CONCEPT Germany + Infinite Smooth Marquee

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Reveal from '@/components/ui/Reveal'
import { useLanguage } from '@/context/LanguageContext'

export default function JermanVocationalPage() {
    const { language } = useLanguage()

    // State Multi-Image Hero CMS
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

    // Dictionary Multi-Bahasa (ID / EN)
    const content = {
        id: {
            badge: 'LEAPING CONCEPT • STUDY & SKILLWORK IN GERMANY',
            title1: 'STUDI Lanjut / KULIAH',
            title2: 'di JERMAN',
            subtitle:
                'Jalur pendidikan tinggi Bachelor-Master-Doctor, Dual Study Program, serta peluang Part-Time & Full-Time Work resmi selama 24 – 60 Bulan (+/-) di Jerman.',
            checks: [
                'Bebas atau subsidi biaya pendidikan perguruan tinggi di Jerman',
                'Sistem kuliah ganda (Dual Study Program) terintegrasi industri',
                'Izin kerja paruh waktu resmi selama kuliah (Part-Time Work)',
                'Akses karir profesional & izin tinggal pasca lulus (Full-Time Work)',
            ],
            btnPrimary: 'Lihat Future CAREER ↓',
            btnSecondary: '10 Alasan Utama ↓',

            reasonsBadge: 'WHY GERMANY?',
            reasonsTitle: '10 Alasan Utama Kuliah di Jerman',
            reasonsNotice: 'Keunggulan akademis, teknologi presisi, dan peluang karir global yang menjadikan Jerman pusat pendidikan teknik dan industri dunia.',

            careersBadge: 'FUTURE CAREER',
            careersTitle: 'Pilihan Bidang Karir & Studi Jerman',
            careersDesc:
                'Program keahlian terapan dan sains yang paling dibutuhkan dalam industri teknologi dan ekonomi masa depan Jerman.',
        },
        en: {
            badge: 'LEAPING CONCEPT • STUDY & SKILLWORK IN GERMANY',
            title1: 'Further STUDY / DEGREE',
            title2: 'in GERMANY',
            subtitle:
                'Higher education pathway for Bachelor-Master-Doctor, Dual Study Program, and official Part-Time & Full-Time Work opportunities for 24 – 60 Months (+/-) in Germany.',
            checks: [
                'Tuition-free or highly subsidized university education in Germany',
                'Industry-integrated Dual Study Programs (Dual Study System)',
                'Legal part-time work permits during study (Part-Time Work)',
                'Access to full-time global career placement post-graduation',
            ],
            btnPrimary: 'View Future CAREER ↓',
            btnSecondary: '10 Key Reasons ↓',

            reasonsBadge: 'WHY GERMANY?',
            reasonsTitle: '10 Key Reasons to Study in Germany',
            reasonsNotice: 'Academic excellence, engineering precision, and global career pathways making Germany a world leader.',

            careersBadge: 'FUTURE CAREER',
            careersTitle: 'Germany Study & Career Pathway Options',
            careersDesc:
                'Applied skill and science programs in high demand across Germany’s future industrial landscape.',
        },
    }

    const text = content[language === 'en' ? 'en' : 'id']

    // Data 10 Alasan Utama Kuliah di Jerman (Konten Asli Web Lama)
    const tenReasons = [
        {
            num: '01',
            title: language === 'en' ? 'Engine of Global Economy' : 'Penggerak Ekonomi Global',
            desc: language === 'en' ? 'Top economy driver in Europe with exceptional industrial stability.' : 'Masuk dalam jajaran negara penggerak Ekonomi Dunia dan nomor 1 di Eropa.',
            icon: '📈',
        },
        {
            num: '02',
            title: language === 'en' ? 'World-Class Engineering & Tech' : 'Pusat Teknik & Teknologi Dunia',
            desc: language === 'en' ? 'Global leader in automotive, mechatronics, and precision engineering.' : 'Pemimpin global dalam inovasi otomotif, mekatronika, dan sains terapan.',
            icon: '⚙️',
        },
        {
            num: '03',
            title: language === 'en' ? 'Tuition-Free Public Education' : 'Bebas Biaya Uang Kuliah',
            desc: language === 'en' ? 'Most public universities offer 100% free tuition for international students.' : 'Perguruan tinggi negeri menawarkan kuliah bebas biaya SPP untuk mahasiswa internasional.',
            icon: '🎓',
        },
        {
            num: '04',
            title: language === 'en' ? 'Dual Study System (Berufsschule)' : 'Sistem Kuliah Ganda (Dual System)',
            desc: language === 'en' ? 'Combine academic theory with paid practical work at top German firms.' : 'Kombinasi teori akademis dan magang berbayar langsung di industri Jerman.',
            icon: '🏭',
        },
        {
            num: '05',
            title: language === 'en' ? 'Legal Part-Time & Full-Time Work' : 'Part-Time Work & Karir Full-Time',
            desc: language === 'en' ? 'Official student work permits and 18-month post-study job seeker visa.' : 'Izin kerja resmi saat kuliah dan visa pencari kerja 18 bulan setelah lulus.',
            icon: '💼',
        },
        {
            num: '06',
            title: language === 'en' ? 'Highest Academic Standards' : 'Standar Akademik Berkelas Dunia',
            desc: language === 'en' ? 'Rigorous scientific methods and internationally accredited qualifications.' : 'Metode akademis ketat dan kualifikasi diploma yang diakui secara global.',
            icon: '🏛️',
        },
        {
            num: '07',
            title: language === 'en' ? 'Advanced Research Facilities' : 'Laboratorium & Riset canggih',
            desc: language === 'en' ? 'State-of-the-art research institutions like Max Planck & Fraunhofer.' : 'Fasilitas riset modern bekerja sama dengan lembaga sains kelas dunia.',
            icon: '🔬',
        },
        {
            num: '08',
            title: language === 'en' ? 'High Quality of Life & Culture' : 'Kualitas Hidup & Budaya Tinggi',
            desc: language === 'en' ? 'Rich history, beautiful landscapes, and excellent public infrastructure.' : 'Standar hidup tinggi, sejarah kaya, dan infrastruktur transportasi prima.',
            icon: '🏰',
        },
        {
            num: '09',
            title: language === 'en' ? 'Safe & Stable Society' : 'Negara Aman & Stabil',
            desc: language === 'en' ? 'Low crime rates, strong rule of law, and comprehensive social security.' : 'Tingkat kejahatan sangat rendah, hukum adil, dan jaminan keamanan sosial.',
            icon: '🛡️',
        },
        {
            num: '10',
            title: language === 'en' ? 'Schengen Visa Mobility' : 'Bebas Akses Kawasan Schengen',
            desc: language === 'en' ? 'Travel freely across 27+ European nations during your study period.' : 'Bebas menjelajah dan bepergian ke 27+ negara anggota Uni Eropa/Schengen.',
            icon: '✈️',
        },
    ]

    // Data Future CAREER dari Slide Gambar Jerman
    const germanyFutureCareers = [
        {
            title: 'HealthCare',
            category: 'HealthCare',
            desc: language === 'en' ? 'Professional medical services, nursing, & healthcare admin.' : 'Layanan medis profesional, keperawatan terakreditasi, dan kesehatan.',
            img: '/images/hero-vocational.jpg',
        },
        {
            title: 'Environment & Sustainable Dev\'ment',
            category: 'Sustainability',
            desc: language === 'en' ? 'Environmental engineering and eco-friendly development.' : 'Pengelolaan lingkungan hidup dan pembangunan berkelanjutan berstandar Eropa.',
            img: '/images/hero-about.jpg',
        },
        {
            title: 'Mining Engineering',
            category: 'Engineering',
            desc: language === 'en' ? 'Geotechnical, mineral extraction, & mining technology.' : 'Teknologi geoteknik, ekstraksi mineral, dan teknik pertambangan modern.',
            img: '/images/about-consultation.jpg',
        },
        {
            title: 'Computer Science & AI',
            category: 'Technology',
            desc: language === 'en' ? 'Software engineering, AI systems, & data security.' : 'Kecerdasan buatan, rekayasa perangkat lunak, dan keamanan data enterprise.',
            img: '/images/hero-language-course.jpg',
        },
        {
            title: 'Mechatronic & Robotic',
            category: 'Automation',
            desc: language === 'en' ? 'German industrial robotics, automation, & mechatronics.' : 'Mekatronika, robotika industri manufaktur Jerman, dan otomatisasi.',
            img: '/images/hero-vocational.jpg',
        },
        {
            title: 'Renewable Energy',
            category: 'Clean Energy',
            desc: language === 'en' ? 'Solar, wind power tech, and green energy innovations.' : 'Teknologi energi terbarukan, tenaga angin/surya, dan inovasi hijau.',
            img: '/images/hero-about.jpg',
        },
        {
            title: 'Sustainable Development',
            category: 'Eco-System',
            desc: language === 'en' ? 'Urban planning, sustainable resources, & green tech.' : 'Perencanaan kota ramah lingkungan, manajemen sumber daya, dan teknologi hijau.',
            img: '/images/hero-language-course.jpg',
        },
        {
            title: 'Business & Economic',
            category: 'Business',
            desc: language === 'en' ? 'European business management, international finance, & economics.' : 'Manajemen bisnis Eropa, keuangan internasional, dan analisis ekonomi.',
            img: '/images/about-consultation.jpg',
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
                                                    alt={`Jerman Slide ${index + 1}`}
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
                                                    Germany Global Pathway
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
                                            🇩🇪
                                        </div>
                                        <div>
                                            <p className="text-xs font-extrabold text-gray-900 leading-tight">Dual Study System</p>
                                            <p className="text-[10px] text-gray-500">Degree &amp; Work Combined</p>
                                        </div>
                                    </div>

                                    <div className="absolute -bottom-4 -right-4 bg-[#D97706] text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 z-30">
                                        <div className="w-8 h-8 rounded-xl bg-white/15 flex items-center justify-center text-sm font-bold shrink-0">
                                            🎓
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 text-center space-y-4">
                    <div className="mb-2">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-50 text-[#D97706] text-[11px] font-black uppercase tracking-wider border border-amber-200/80 shadow-2xs">
                            {text.reasonsBadge}
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-black text-gray-900 tracking-normal pt-1">
                        {text.reasonsTitle}
                    </h2>

                    <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto leading-relaxed">
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

            {/* ── 3. FUTURE CAREER SECTION (STANDARD GRID 4 KOLOM MURNI) ── */}
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
                        {germanyFutureCareers.map((career, idx) => (
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