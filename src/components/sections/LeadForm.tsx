'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function LeadFormContent() {
  const searchParams = useSearchParams()
  const [loading, setLoading] = useState(false)

  // State untuk mengontrol status submit & pesan
  const [submitted, setSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    program: '',
    consent: false,
  })

  useEffect(() => {
    const urlProgram = searchParams.get('program') || searchParams.get('p')
    if (urlProgram) {
      setFormData((prev) => ({ ...prev, program: urlProgram }))
    }
  }, [searchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrorMessage(null)

    const payload = {
      fullName: formData.name,
      email: formData.email,
      phoneWhatsapp: formData.whatsapp,
      programInterest: formData.program,
      consentGiven: formData.consent,
      sourcePage: typeof window !== 'undefined' ? window.location.pathname : '/',
    }

    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await res.json()

      if (res.ok && result.success) {
        // Tandai bahwa form berhasil terkirim
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          whatsapp: '',
          program: '',
          consent: false,
        })
      } else if (res.status === 422 && result.errors) {
        const firstErr = Object.values(result.errors)[0] as string
        setErrorMessage(firstErr || 'Gagal mengirim data. Periksa isian Anda.')
      } else {
        setErrorMessage(result.message || 'Gagal mengirim data.')
      }
    } catch (error) {
      console.error('Submit Error:', error)
      setErrorMessage('Terjadi kesalahan koneksi. Silakan coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  // ── JIKA FORM BERHASIL TERKIRIM (TAMPILAN SUKSES PERSISTEN) ──
  if (submitted) {
    return (
      <div className="bg-emerald-500/15 border border-emerald-500/30 rounded-2xl p-6 text-center space-y-4 animate-in fade-in duration-300">
        <div className="w-12 h-12 bg-emerald-500 text-gray-950 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
          ✓
        </div>
        <div className="space-y-1">
          <h3 className="text-lg font-extrabold text-white">Konsultasi Berhasil Terkirim!</h3>
          <p className="text-xs text-blue-100/80 leading-relaxed">
            Terima kasih telah menghubungi IDEA Institut. Tim konsultan kami akan menghubungi Anda melalui WhatsApp/Email dalam kurun 1x24 jam.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-xs font-bold transition-all"
        >
          Kirim Konsultasi Lain
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Banner Pesan Error (Jika ada) */}
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs font-semibold flex items-center justify-between">
          <span>⚠️ {errorMessage}</span>
          <button type="button" onClick={() => setErrorMessage(null)} className="text-red-300 font-bold ml-2">
            ✕
          </button>
        </div>
      )}

      {/* Nama Lengkap */}
      <div>
        <label className="block text-[11px] font-bold text-blue-100 uppercase tracking-wider mb-1.5">
          Nama Lengkap *
        </label>
        <input
          type="text"
          required
          placeholder="Nama Lengkap"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/50 text-sm focus:outline-none focus:border-[#F4A019] focus:ring-1 focus:ring-[#F4A019] transition-all"
        />
      </div>

      {/* Grid Email & WhatsApp */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[11px] font-bold text-blue-100 uppercase tracking-wider mb-1.5">
            Alamat Email *
          </label>
          <input
            type="email"
            required
            placeholder="nama@email.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/50 text-sm focus:outline-none focus:border-[#F4A019] focus:ring-1 focus:ring-[#F4A019] transition-all"
          />
        </div>

        <div>
          <label className="block text-[11px] font-bold text-blue-100 uppercase tracking-wider mb-1.5">
            WhatsApp *
          </label>
          <input
            type="tel"
            required
            placeholder="08123456789"
            value={formData.whatsapp}
            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-blue-200/50 text-sm focus:outline-none focus:border-[#F4A019] focus:ring-1 focus:ring-[#F4A019] transition-all"
          />
        </div>
      </div>

      {/* Program Select */}
      <div>
        <label className="block text-[11px] font-bold text-blue-100 uppercase tracking-wider mb-1.5">
          Program Yang Diminati
        </label>
        <select
          value={formData.program}
          onChange={(e) => setFormData({ ...formData, program: e.target.value })}
          className="w-full pl-4 pr-10 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm focus:outline-none focus:border-[#F4A019] focus:ring-1 focus:ring-[#F4A019] transition-all [&>option]:text-gray-900 appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22white%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat"
        >
          <option value="">Pilih program...</option>
          <optgroup label="Language Courses">
            <option value="english">Bahasa Inggris (IELTS / TOEFL)</option>
            <option value="german">Bahasa Jerman (Kursus Bahasa)</option>
            <option value="spanish">Bahasa Spanyol</option>
            <option value="french">Bahasa Prancis</option>
            <option value="chinese">Bahasa Mandarin</option>
            <option value="japanese">Bahasa Jepang</option>
          </optgroup>
          <optgroup label="Vocational Courses">
            <option value="hospitality">Hospitality & Hotel Operations</option>
            <option value="culinary-arts">Culinary Arts & Pastry</option>
            <option value="digital-business">Digital Business & Administration</option>
          </optgroup>
          <optgroup label="Study & Work Programs">
            <option value="australia">Study & Work Australia</option>
            <option value="germany">Study & Ausbildung Jerman</option>
            <option value="other-oecd">Studi Negara OECD Pilihan</option>
            <option value="work-abroad">Skilled Work Abroad</option>
          </optgroup>
        </select>
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-2.5 pt-1">
        <input
          type="checkbox"
          id="consent"
          required
          checked={formData.consent}
          onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
          className="mt-0.5 rounded border-white/30 bg-white/10 text-[#F4A019] focus:ring-[#F4A019]"
        />
        <label htmlFor="consent" className="text-[11px] text-blue-100/80 leading-snug">
          Saya menyetujui penggunaan data pribadi saya untuk keperluan konsultasi, sesuai UU PDP No. 27/2022.
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-4 px-6 rounded-xl bg-[#F4A019] hover:bg-[#e09012] disabled:opacity-50 disabled:cursor-not-allowed text-gray-950 font-extrabold text-sm shadow-lg transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
      >
        <span>{loading ? 'Mengirim Data...' : 'Kirim & Dapatkan Konsultasi Gratis'}</span>
        {!loading && <span>&rarr;</span>}
      </button>
    </form>
  )
}

export default function LeadForm() {
  return (
    <Suspense fallback={<div className="text-white text-sm">Loading form...</div>}>
      <LeadFormContent />
    </Suspense>
  )
}