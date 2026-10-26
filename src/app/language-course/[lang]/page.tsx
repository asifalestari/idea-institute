'use client'

// src/app/language-course/[lang]/page.tsx
// Halaman Pendaftaran Bahasa Tanpa Label "Detail Terpilih"

import { useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'

export default function LanguageDetailFormPage() {
    const params = useParams()
    const router = useRouter()

    const langParam = (params?.lang as string) || 'english'
    const formattedLangName = langParam.charAt(0).toUpperCase() + langParam.slice(1)
    const programTitle = `Language Course - ${formattedLangName}`

    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [submitting, setSubmitting] = useState(false)
    const [successMessage, setSuccessMessage] = useState(false)
    const [formError, setFormError] = useState<string | null>(null)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        setFormError(null)

        if (!fullName.trim() || !email.trim()) {
            setFormError('Nama lengkap dan email wajib diisi ya.')
            return
        }

        setSubmitting(true)

        try {
            const res = await fetch('/api/leads', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: fullName.trim(),
                    email: email.trim().toLowerCase(),
                    programInterest: programTitle,
                    consentGiven: true,
                    sourcePage: `/language-course/${langParam}`,
                }),
            })

            const data = await res.json()

            if (res.ok && data.success) {
                setSuccessMessage(true)
            } else {
                setFormError(data.message || 'Gagal mengirim pendaftaran. Coba lagi ya.')
            }
        } catch {
            setFormError('Terjadi kendala koneksi. Silakan coba beberapa saat lagi.')
        } finally {
            setSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gray-50/50 pt-28 pb-20 font-sans">
            <div className="max-w-xl mx-auto px-4 sm:px-6 space-y-6">

                {/* Tombol Kembali */}
                <div>
                    <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-gray-500 hover:text-[#002798] transition-colors">
                        ← Kembali ke Beranda
                    </Link>
                </div>

                {/* Card Utama Pendaftaran */}
                <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8 sm:p-10 space-y-6">

                    {/* Header */}
                    <div className="text-center space-y-2 border-b border-gray-100 pb-5">
                        <div className="flex justify-center">
                            <span className="px-3 py-1 rounded-full bg-blue-50 text-[#002798] text-[10px] font-black uppercase tracking-wider">
                                LANGUAGE COURSE PROGRAM
                            </span>
                        </div>

                        <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                            Daftar Kursus Bahasa {formattedLangName}
                        </h1>

                        <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                            Lengkapi data di bawah ini untuk memulai sesi konsultasi program bahasa pilihan Anda.
                        </p>
                    </div>

                    {successMessage ? (
                        <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-2xl text-center space-y-3">
                            <div className="w-10 h-10 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto text-sm font-bold shadow-sm">
                                ✓
                            </div>
                            <h3 className="text-sm font-bold text-emerald-900">Pendaftaran Berhasil Terkirim!</h3>
                            <p className="text-xs text-emerald-700 leading-relaxed">
                                Makasih ya! Data kamu untuk program <span className="font-bold">({programTitle})</span> sudah masuk. Tim konselor kami bakal segera menghubungi lewat email.
                            </p>
                            <button
                                onClick={() => router.push('/')}
                                className="w-full mt-2 py-3 rounded-xl bg-[#002798] text-white text-xs font-bold shadow-md hover:bg-[#001a6e] transition-all"
                            >
                                Kembali ke Beranda
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {formError && (
                                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2">
                                    <span>⚠️</span>
                                    <span>{formError}</span>
                                </div>
                            )}

                            {/* Field Informasi Program Pilihan */}
                            <div className="space-y-1.5">
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400">
                                    Program Pilihan
                                </label>
                                <div className="w-full px-4 py-3 rounded-2xl bg-blue-50/60 border border-blue-100 flex items-right justify-right text-xs">
                                    <span className="text-[#002798] font-extrabold">
                                        {programTitle}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                                    Nama Lengkap <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
                                    placeholder="Masukkan nama lengkap kamu"
                                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#002798] focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50/50"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-700">
                                    Alamat Email Aktif <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="contoh: nama@email.com"
                                    className="w-full px-4 py-3 rounded-2xl border border-gray-200 text-gray-900 placeholder-gray-400 text-xs sm:text-sm focus:outline-none focus:border-[#002798] focus:ring-2 focus:ring-blue-100 transition-all bg-gray-50/50"
                                />
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={submitting}
                                    className="w-full py-3.5 px-6 rounded-2xl font-bold text-xs sm:text-sm text-white bg-[#002798] hover:bg-[#001a6e] transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-60"
                                >
                                    {submitting ? 'Mengirim Pendaftaran...' : 'Kirim Pendaftaran →'}
                                </button>
                            </div>

                            <p className="text-[10px] text-center text-gray-400 pt-1">
                                🔒 Data kamu aman dan langsung masuk ke sistem konselor kami.
                            </p>
                        </form>
                    )}

                </div>
            </div>
        </div>
    )
}