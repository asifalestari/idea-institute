'use client'

// src/app/admin/leads/page.tsx
// Halaman Dashboard Leads — Posisi Program Pilihan di Samping Status Pipeline & Perbaikan Ikon Salin

import { useState, useEffect } from 'react'

interface Lead {
  id: string
  fullName: string
  email: string
  phoneWhatsapp?: string | null
  status: string
  createdAt: string
  programInterest?: string
}

export default function LeadsAdminPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('ALL')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Fetch data leads dari database API
  useEffect(() => {
    fetchLeads()
  }, [])

  async function fetchLeads() {
    try {
      setLoading(true)
      const res = await fetch('/api/admin/leads')
      const data = await res.json()
      if (data.success) {
        setLeads(data.leads)
      }
    } catch (err) {
      console.error('Gagal memuat data leads:', err)
    } finally {
      setLoading(false)
    }
  }

  // Fungsi Salin Email ke Clipboard
  function handleCopyEmail(email: string, id: string) {
    navigator.clipboard.writeText(email)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Update status pipeline lead
  async function handleStatusChange(id: string, newStatus: string) {
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })
      if (res.ok) {
        setLeads(leads.map(l => l.id === id ? { ...l, status: newStatus } : l))
      }
    } catch (err) {
      console.error('Gagal memperbarui status:', err)
    }
  }

  // Hapus lead
  async function handleDelete(id: string) {
    if (!confirm('Apakah Anda yakin ingin menghapus data lead ini?')) return
    try {
      const res = await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setLeads(leads.filter(l => l.id !== id))
      }
    } catch (err) {
      console.error('Gagal menghapus lead:', err)
    }
  }

  // Fungsi Export Data ke CSV
  function handleExportCSV() {
    if (leads.length === 0) {
      alert('Tidak ada data leads untuk diexport.')
      return
    }

    const headers = ['ID,Nama Lengkap,Email,Program Minat,Status,Tanggal Daftar']
    const rows = leads.map(l => {
      const dateStr = new Date(l.createdAt).toLocaleString('id-ID')
      return `"${l.id}","${l.fullName}","${l.email}","${l.programInterest || '-'}","${l.status}","${dateStr}"`
    })

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers, ...rows].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `leads-idea-institut-${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  // Helper untuk menentukan warna badge berdasarkan program pilihan
  function getProgramBadgeStyle(program?: string) {
    const prog = (program || '').toLowerCase()
    if (prog.includes('language')) {
      return 'bg-blue-50 text-[#002798] border-blue-200'
    } else if (prog.includes('vocational')) {
      return 'bg-amber-50 text-amber-800 border-amber-200'
    } else if (prog.includes('study')) {
      return 'bg-red-50 text-[#DC1E13] border-red-200'
    }
    return 'bg-gray-50 text-gray-700 border-gray-200'
  }

  // Filter pencarian & status
  const filteredLeads = leads.filter(lead => {
    const matchSearch = lead.fullName.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase()) ||
      (lead.programInterest && lead.programInterest.toLowerCase().includes(search.toLowerCase()))
    const matchStatus = filterStatus === 'ALL' || lead.status.toLowerCase() === filterStatus.toLowerCase()
    return matchSearch && matchStatus
  })

  // Hitung Metrik / Statistik Sederhana
  const totalLeads = leads.length
  const newLeads = leads.filter(l => l.status.toLowerCase() === 'new').length
  const qualifiedLeads = leads.filter(l => l.status.toLowerCase() === 'qualified').length
  const closedLeads = leads.filter(l => l.status.toLowerCase() === 'closed').length

  return (
    <div className="p-6 lg:p-10 space-y-8 font-sans max-w-7xl mx-auto">

      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900">Dashboard User IDEA</h1>
          <p className="text-xs text-gray-500 mt-1">Kelola prospek masuk, status penanganan, dan follow-up konsultasi.</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={fetchLeads}
            className="px-4 py-2.5 bg-white border border-gray-200 text-gray-700 text-xs font-bold rounded-xl shadow-2xs hover:bg-gray-50 transition-all flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            <span>Refresh</span>
          </button>
          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 bg-[#002798] hover:bg-[#001d6d] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
          >
            <svg className="w-3.5 h-3.5 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* ── Stat Cards Minimalis ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400">Total Leads</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-black text-gray-900">{totalLeads}</p>
            <svg className="w-4 h-4 text-gray-400 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">New (Uncontacted)</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-black text-amber-700">{newLeads}</p>
            <svg className="w-4 h-4 text-amber-500 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-purple-600">Qualified</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-black text-purple-700">{qualifiedLeads}</p>
            <svg className="w-4 h-4 text-purple-500 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600">Closed / Deal</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-black text-emerald-700">{closedLeads}</p>
            <svg className="w-4 h-4 text-emerald-500 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-96 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">
            <svg className="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama, email, atau program..."
            className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-900 focus:bg-white focus:border-[#002798] outline-none transition-all"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
          {['ALL', 'NEW', 'CONTACTED', 'QUALIFIED', 'CLOSED'].map((st) => (
            <button
              key={st}
              onClick={() => setFilterStatus(st)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${filterStatus === st
                ? 'bg-[#002798] text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Main Table Container */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-2xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/70 text-[11px] font-black text-gray-500 uppercase tracking-wider">
                <th className="py-4 px-6">Nama &amp; Kontak</th>
                <th className="py-4 px-6">Tanggal &amp; Waktu</th>
                <th className="py-4 px-6">Program Pilihan</th>
                <th className="py-4 px-6">Status Pipeline</th>
                <th className="py-4 px-6">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-700">
              {loading ? (
                <tr>
                  <td colSpan={5} className="text-center py-12 text-gray-400 font-semibold">
                    Memuat data leads...
                  </td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="text-center py-12 text-gray-400 font-semibold">
                    Tidak ada data lead ditemukan.
                  </td>
                </tr>
              ) : (
                filteredLeads.map((lead) => {
                  const dateObj = new Date(lead.createdAt)
                  const formattedDate = dateObj.toLocaleDateString('id-ID', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                  })
                  const formattedTime = dateObj.toLocaleTimeString('id-ID', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })

                  return (
                    <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                      {/* Kolom 1: Nama & Kontak */}
                      <td className="py-4 px-6 space-y-0.5">
                        <p className="font-extrabold text-gray-900 text-sm">{lead.fullName}</p>
                        <a href={`mailto:${lead.email}`} className="text-[#002798] hover:underline font-medium">
                          {lead.email}
                        </a>
                      </td>

                      {/* Kolom 2: Tanggal & Waktu */}
                      <td className="py-4 px-6 whitespace-nowrap">
                        <p className="font-bold text-gray-800">{formattedDate}</p>
                        <p className="text-[11px] text-gray-400">{formattedTime} WIB</p>
                      </td>

                      {/* Kolom 3: Program Pilihan (Dipindah tepat sebelum Status Pipeline) */}
                      <td className="py-4 px-6">
                        <span className={`inline-flex px-3 py-1 rounded-lg font-extrabold text-[11px] border ${getProgramBadgeStyle(lead.programInterest)}`}>
                          {lead.programInterest || 'Portal Umum'}
                        </span>
                      </td>

                      {/* Kolom 4: Status Pipeline */}
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="relative inline-block">
                          <select
                            value={lead.status}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                            className={`appearance-none px-3.5 pr-9 py-2 rounded-xl text-xs font-extrabold border outline-none cursor-pointer transition-all ${lead.status.toLowerCase() === 'new'
                              ? 'bg-amber-50 text-amber-700 border-amber-200'
                              : lead.status.toLowerCase() === 'qualified'
                                ? 'bg-purple-50 text-purple-700 border-purple-200'
                                : lead.status.toLowerCase() === 'closed'
                                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                  : 'bg-blue-50 text-blue-700 border-blue-200'
                              }`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="closed">Closed / Deal</option>
                          </select>
                          <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-[10px] opacity-70">
                            ▼
                          </span>
                        </div>
                      </td>

                      {/* Kolom 5: Aksi (Ikon Clipboard Clean Stroke) */}
                      <td className="py-4 px-6 whitespace-nowrap">
                        <div className="flex items-center gap-1.5">
                          {/* Tombol Salin */}
                          <button
                            onClick={() => handleCopyEmail(lead.email, lead.id)}
                            className="inline-flex items-center justify-center w-8 h-8 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-all shadow-2xs"
                            title={copiedId === lead.id ? 'Email Disalin!' : 'Salin Email'}
                          >
                            {copiedId === lead.id ? (
                              <svg className="w-4 h-4 text-emerald-600 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            ) : (
                              <svg className="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                              </svg>
                            )}
                          </button>

                          {/* Tombol Balas Email */}
                          <a
                            href={`mailto:${lead.email}`}
                            className="inline-flex items-center justify-center w-8 h-8 bg-blue-50 hover:bg-blue-100 text-[#002798] rounded-xl transition-all shadow-2xs"
                            title="Balas Email"
                          >
                            <svg className="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </a>

                          {/* Tombol Hapus */}
                          <button
                            onClick={() => handleDelete(lead.id)}
                            className="inline-flex items-center justify-center w-8 h-8 bg-red-50 hover:bg-red-100 text-[#DC1E13] rounded-xl transition-all shadow-2xs"
                            title="Hapus Lead"
                          >
                            <svg className="w-4 h-4 stroke-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  )
}