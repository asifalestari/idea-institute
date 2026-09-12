'use client'

// src/app/admin/cms/page.tsx
// Panel CMS Konten, Media & Halaman Detail Lengkap — Clean White Dashboard Style

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { PortalCMSData, DEFAULT_CMS_DATA } from '@/lib/cms'

const PRESET_IMAGES = [
  { label: 'Language Course Hero', value: '/images/hero-language-course.jpg' },
  { label: 'Vocational Course Hero', value: '/images/hero-vocational.jpg' },
  { label: 'Study & Work Hero', value: '/images/hero-study-work.jpg' },
  { label: 'English Class', value: '/images/lang-english.jpg' },
  { label: 'German Class / Ausbildung', value: '/images/lang-german.jpg' },
  { label: 'Consultation Session', value: '/images/about-consultation.jpg' },
  { label: 'Graduates & Campus', value: '/images/hero-graduates.jpg' },
  { label: 'Students Group', value: '/images/cta-students.jpg' },
]

export default function AdminCMSPage() {
  const [data, setData] = useState<PortalCMSData>(DEFAULT_CMS_DATA)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [uploadingField, setUploadingField] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'hero' | 'english' | 'vet' | 'study' | 'details' | 'settings'>('hero')
  const [toast, setToast] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [testEmailLoading, setTestEmailLoading] = useState(false)

  const fileInputRef = useRef<HTMLInputElement | null>(null)
  const [targetUploadKey, setTargetUploadKey] = useState<string>('')

  useEffect(() => {
    async function loadCMS() {
      try {
        const res = await fetch('/api/content')
        const json = await res.json()
        if (json.success && json.data) {
          setData(json.data)
        }
      } catch (err) {
        console.error('Gagal memuat CMS:', err)
      } finally {
        setLoading(false)
      }
    }
    loadCMS()
  }, [])

  function showToast(type: 'success' | 'error', text: string) {
    setToast({ type, text })
    setTimeout(() => setToast(null), 5000)
  }

  async function handleSave(e?: React.FormEvent) {
    if (e) e.preventDefault()
    setSaving(true)
    try {
      const res = await fetch('/api/content', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        showToast('success', 'Perubahan seluruh konten, halaman detail, dan gambar berhasil disimpan!')
        if (json.data) setData(json.data)
      } else {
        showToast('error', json.message || 'Gagal menyimpan ke database.')
      }
    } catch (err: any) {
      showToast('error', err.message || 'Terjadi kesalahan jaringan.')
    } finally {
      setSaving(false)
    }
  }

  async function handleFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploadingField(targetUploadKey)
    const formData = new FormData()
    formData.append('file', file)

    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      })
      const json = await res.json()

      if (json.success && json.url) {
        applyImageUrl(targetUploadKey, json.url)
        showToast('success', 'Gambar berhasil diunggah dan diterapkan!')
      } else {
        showToast('error', json.message || 'Gagal mengunggah gambar.')
      }
    } catch (err: any) {
      showToast('error', err.message || 'Terjadi kesalahan unggah berkas.')
    } finally {
      setUploadingField(null)
      if (fileInputRef.current) fileInputRef.current.value = ''
    }
  }

  function triggerUpload(key: string) {
    setTargetUploadKey(key)
    fileInputRef.current?.click()
  }

  function applyImageUrl(key: string, url: string) {
    if (key === 'hero.heroImage') {
      setData({ ...data, hero: { ...data.hero, heroImage: url } })
    } else if (key === 'englishCourse.image') {
      setData({ ...data, englishCourse: { ...data.englishCourse, image: url } })
    } else if (key === 'vocationalTraining.image') {
      setData({ ...data, vocationalTraining: { ...data.vocationalTraining, image: url } })
    } else if (key === 'studyAndWork.image') {
      setData({ ...data, studyAndWork: { ...data.studyAndWork, image: url } })
    }
  }

  async function handleTestEmail() {
    setTestEmailLoading(true)
    try {
      const res = await fetch('/api/content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'test-email',
          email: data.settings.adminNotificationEmail,
        }),
      })
      const json = await res.json()
      if (json.success) {
        showToast('success', json.message || 'Email uji coba diproses!')
      } else {
        showToast('error', json.message || 'Gagal mengirim email tes.')
      }
    } catch (err: any) {
      showToast('error', err.message || 'Gagal mengirim email tes.')
    } finally {
      setTestEmailLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="p-12 flex flex-col items-center justify-center min-h-[60vh] gap-3">
        <div className="w-10 h-10 border-4 border-[#002798] border-t-transparent rounded-full animate-spin" />
        <p className="text-xs font-bold text-gray-500">Memuat panel CMS...</p>
      </div>
    )
  }

  return (
    <div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-8 font-sans">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/png,image/jpeg,image/webp,image/svg+xml"
        onChange={handleFileSelected}
        className="hidden"
      />

      {/* Top Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900">Manajemen Konten, Halaman Detail &amp; Media</h1>
          <p className="text-xs text-gray-500 mt-1">Kelola seluruh wording halaman utama hingga rincian halaman detail program.</p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-700 bg-white border border-gray-200 hover:bg-gray-50 shadow-2xs transition-all flex items-center gap-1.5"
          >
            <span>Lihat Website</span>
            <span>↗</span>
          </a>
          <button
            type="button"
            onClick={() => handleSave()}
            disabled={saving}
            className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-white bg-[#002798] hover:bg-[#001d6d] shadow-md transition-all flex items-center gap-2 disabled:opacity-50 cursor-pointer"
          >
            {saving ? 'Menyimpan...' : '💾 Simpan Perubahan'}
          </button>
        </div>
      </div>

      {/* Toast Notification */}
      {toast && (
        <div
          className={`p-4 rounded-xl text-xs font-semibold flex items-center justify-between border ${toast.type === 'success'
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : 'bg-red-50 text-red-800 border-red-200'
            }`}
        >
          <div className="flex items-center gap-2">
            <span>{toast.type === 'success' ? '✓' : '⚠️'}</span>
            <span>{toast.text}</span>
          </div>
          <button onClick={() => setToast(null)} className="text-gray-400 hover:text-gray-600">✕</button>
        </div>
      )}

      {/* Clean Tab Navigation */}
      <div className="flex overflow-x-auto gap-2 border-b border-gray-200 pb-2">
        {[
          { id: 'hero', label: '🎯 Hero & Gated Form' },
          { id: 'english', label: '🇬🇧 English Course' },
          { id: 'vet', label: '🎓 Vocational Training' },
          { id: 'study', label: '💼 Study & Work' },
          { id: 'details', label: '📄 Halaman Detail Program' },
          { id: 'settings', label: '🔔 Pengaturan & Email' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${activeTab === tab.id
                ? 'bg-[#002798] text-white shadow-sm'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* TAB 1: HERO */}
        {activeTab === 'hero' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-2xs space-y-6">
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">Hero Section &amp; Gated Form</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Badge Utama</label>
                <input
                  type="text"
                  value={data.hero.badge}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, badge: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#002798] outline-none"
                />
              </div>
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Judul Sorotan (Highlight)</label>
                <input
                  type="text"
                  value={data.hero.titleHighlight}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, titleHighlight: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#002798] outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Headline Utama</label>
                <input
                  type="text"
                  value={data.hero.title}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, title: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#002798] outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Subheadline</label>
                <textarea
                  rows={3}
                  value={data.hero.subtitle}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, subtitle: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#002798] outline-none"
                />
              </div>
              <div className="md:col-span-2 pt-4 border-t border-gray-100">
                <h3 className="font-extrabold text-[#002798] uppercase tracking-wider">Formulir Gated Access</h3>
              </div>
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Judul Form</label>
                <input
                  type="text"
                  value={data.hero.formTitle}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, formTitle: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#002798] outline-none"
                />
              </div>
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Teks Tombol</label>
                <input
                  type="text"
                  value={data.hero.submitButtonText}
                  onChange={(e) => setData({ ...data, hero: { ...data.hero, submitButtonText: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:border-[#002798] outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ENGLISH COURSE */}
        {activeTab === 'english' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-2xs space-y-6">
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">English Course Program</h2>

            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-extrabold uppercase text-[#002798]">Foto Kartu Program</span>
                <button
                  type="button"
                  onClick={() => triggerUpload('englishCourse.image')}
                  className="px-4 py-2 bg-[#002798] text-white font-bold rounded-xl cursor-pointer"
                >
                  {uploadingField === 'englishCourse.image' ? 'Mengunggah...' : '📁 Unggah Foto Baru'}
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-32 h-20 rounded-xl overflow-hidden bg-gray-200 border shrink-0">
                  <Image src={data.englishCourse.image || '/images/hero-language-course.jpg'} alt="Preview" fill className="object-cover" />
                </div>
                <select
                  value={data.englishCourse.image}
                  onChange={(e) => setData({ ...data, englishCourse: { ...data.englishCourse, image: e.target.value } })}
                  className="w-full px-3 py-2 rounded-xl border bg-white font-medium"
                >
                  {PRESET_IMAGES.map((img) => (
                    <option key={img.value} value={img.value}>{img.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Nama Program</label>
                <input
                  type="text"
                  value={data.englishCourse.title}
                  onChange={(e) => setData({ ...data, englishCourse: { ...data.englishCourse, title: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                />
              </div>
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Badge</label>
                <input
                  type="text"
                  value={data.englishCourse.badge}
                  onChange={(e) => setData({ ...data, englishCourse: { ...data.englishCourse, badge: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Deskripsi</label>
                <textarea
                  rows={3}
                  value={data.englishCourse.description}
                  onChange={(e) => setData({ ...data, englishCourse: { ...data.englishCourse, description: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                />
              </div>
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">URL Halaman</label>
                <input
                  type="text"
                  value={data.englishCourse.internalUrl}
                  onChange={(e) => setData({ ...data, englishCourse: { ...data.englishCourse, internalUrl: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 font-mono text-[#002798]"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: VET */}
        {activeTab === 'vet' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-2xs space-y-6">
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">Vocational Training (VET)</h2>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-extrabold uppercase text-[#002798]">Foto Kartu VET</span>
                <button
                  type="button"
                  onClick={() => triggerUpload('vocationalTraining.image')}
                  className="px-4 py-2 bg-[#002798] text-white font-bold rounded-xl cursor-pointer"
                >
                  {uploadingField === 'vocationalTraining.image' ? 'Mengunggah...' : '📁 Unggah Foto Baru'}
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-32 h-20 rounded-xl overflow-hidden bg-gray-200 border shrink-0">
                  <Image src={data.vocationalTraining.image || '/images/hero-vocational.jpg'} alt="Preview" fill className="object-cover" />
                </div>
                <select
                  value={data.vocationalTraining.image}
                  onChange={(e) => setData({ ...data, vocationalTraining: { ...data.vocationalTraining, image: e.target.value } })}
                  className="w-full px-3 py-2 rounded-xl border bg-white font-medium"
                >
                  {PRESET_IMAGES.map((img) => (
                    <option key={img.value} value={img.value}>{img.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Nama Program</label>
                <input
                  type="text"
                  value={data.vocationalTraining.title}
                  onChange={(e) => setData({ ...data, vocationalTraining: { ...data.vocationalTraining, title: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                />
              </div>
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Badge</label>
                <input
                  type="text"
                  value={data.vocationalTraining.badge}
                  onChange={(e) => setData({ ...data, vocationalTraining: { ...data.vocationalTraining, badge: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Deskripsi</label>
                <textarea
                  rows={3}
                  value={data.vocationalTraining.description}
                  onChange={(e) => setData({ ...data, vocationalTraining: { ...data.vocationalTraining, description: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: STUDY & WORK */}
        {activeTab === 'study' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-2xs space-y-6">
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">Study &amp; Work Program</h2>
            <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-3 text-xs">
              <div className="flex justify-between items-center">
                <span className="font-extrabold uppercase text-[#002798]">Foto Kartu Study &amp; Work</span>
                <button
                  type="button"
                  onClick={() => triggerUpload('studyAndWork.image')}
                  className="px-4 py-2 bg-[#002798] text-white font-bold rounded-xl cursor-pointer"
                >
                  {uploadingField === 'studyAndWork.image' ? 'Mengunggah...' : '📁 Unggah Foto Baru'}
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="relative w-32 h-20 rounded-xl overflow-hidden bg-gray-200 border shrink-0">
                  <Image src={data.studyAndWork.image || '/images/hero-study-work.jpg'} alt="Preview" fill className="object-cover" />
                </div>
                <select
                  value={data.studyAndWork.image}
                  onChange={(e) => setData({ ...data, studyAndWork: { ...data.studyAndWork, image: e.target.value } })}
                  className="w-full px-3 py-2 rounded-xl border bg-white font-medium"
                >
                  {PRESET_IMAGES.map((img) => (
                    <option key={img.value} value={img.value}>{img.label}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Nama Program</label>
                <input
                  type="text"
                  value={data.studyAndWork.title}
                  onChange={(e) => setData({ ...data, studyAndWork: { ...data.studyAndWork, title: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                />
              </div>
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Badge</label>
                <input
                  type="text"
                  value={data.studyAndWork.badge}
                  onChange={(e) => setData({ ...data, studyAndWork: { ...data.studyAndWork, badge: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Deskripsi</label>
                <textarea
                  rows={3}
                  value={data.studyAndWork.description}
                  onChange={(e) => setData({ ...data, studyAndWork: { ...data.studyAndWork, description: e.target.value } })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: HALAMAN DETAIL PROGRAM (NEW) */}
        {activeTab === 'details' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-2xs space-y-6">
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">Pengaturan Wording &amp; Konten Halaman Detail</h2>
            <p className="text-xs text-gray-500">Kelola rincian judul, kurikulum, atau teks yang tampil di halaman detail spesifik program.</p>

            <div className="space-y-6 text-xs">
              <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl space-y-3">
                <h3 className="font-black text-[#002798] uppercase tracking-wider">Detail English Course</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Judul Header Halaman Detail</label>
                    <input
                      type="text"
                      value={data.englishCourse.title}
                      onChange={(e) => setData({ ...data, englishCourse: { ...data.englishCourse, title: e.target.value } })}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-gray-200 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Teks Tombol Aksi Detail</label>
                    <input
                      type="text"
                      value={data.englishCourse.buttonText}
                      onChange={(e) => setData({ ...data, englishCourse: { ...data.englishCourse, buttonText: e.target.value } })}
                      className="w-full px-3 py-2 rounded-xl bg-white border border-gray-200 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-amber-50/50 border border-amber-100 rounded-xl space-y-3">
                <h3 className="font-black text-amber-800 uppercase tracking-wider">Detail Destinasi VET (Australia, Jerman, OECD)</h3>
                <div className="space-y-4">
                  {data.vocationalTraining.countries.map((country, idx) => (
                    <div key={country.id} className="p-3 bg-white rounded-xl border border-amber-200 space-y-2">
                      <div className="flex items-center gap-2 font-bold text-gray-900">
                        <span>{country.flag}</span>
                        <span>{country.name}</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <input
                          type="text"
                          value={country.subtitle}
                          onChange={(e) => {
                            const updated = [...data.vocationalTraining.countries]
                            updated[idx] = { ...updated[idx], subtitle: e.target.value }
                            setData({ ...data, vocationalTraining: { ...data.vocationalTraining, countries: updated } })
                          }}
                          placeholder="Subtitle negara..."
                          className="px-3 py-1.5 rounded-lg border bg-gray-50"
                        />
                        <input
                          type="text"
                          value={country.description}
                          onChange={(e) => {
                            const updated = [...data.vocationalTraining.countries]
                            updated[idx] = { ...updated[idx], description: e.target.value }
                            setData({ ...data, vocationalTraining: { ...data.vocationalTraining, countries: updated } })
                          }}
                          placeholder="Deskripsi negara..."
                          className="px-3 py-1.5 rounded-lg border bg-gray-50"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 6: SETTINGS */}
        {activeTab === 'settings' && (
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-2xs space-y-6">
            <h2 className="text-base font-bold text-gray-900 border-b border-gray-100 pb-3">Pengaturan Notifikasi &amp; Kontak</h2>
            <div className="space-y-5 text-xs">
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Email Tujuan Notifikasi Admin</label>
                <div className="flex gap-3">
                  <input
                    type="email"
                    value={data.settings.adminNotificationEmail}
                    onChange={(e) => setData({ ...data, settings: { ...data.settings, adminNotificationEmail: e.target.value } })}
                    className="flex-1 px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                  />
                  <button
                    type="button"
                    onClick={handleTestEmail}
                    disabled={testEmailLoading}
                    className="px-4 py-2.5 bg-blue-50 text-[#002798] font-extrabold rounded-xl border border-blue-200 hover:bg-blue-100 cursor-pointer"
                  >
                    {testEmailLoading ? 'Mengirim...' : '✉️ Tes Email'}
                  </button>
                </div>
              </div>
              <div>
                <label className="block font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">Nomor WhatsApp Konsultasi</label>
                <input
                  type="text"
                  value={data.settings.waConsultationNumber}
                  onChange={(e) => setData({ ...data, settings: { ...data.settings, waConsultationNumber: e.target.value } })}
                  className="w-full max-w-md px-3.5 py-2.5 rounded-xl bg-gray-50 border border-gray-200 outline-none"
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            disabled={saving}
            className="px-8 py-3 rounded-xl text-xs font-extrabold text-white bg-[#002798] hover:bg-[#001d6d] shadow-md transition-all cursor-pointer disabled:opacity-50"
          >
            {saving ? 'Menyimpan Perubahan...' : '💾 Simpan Seluruh Perubahan CMS'}
          </button>
        </div>
      </form>
    </div>
  )
}