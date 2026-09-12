'use client'

// src/app/admin/leads/page.tsx
// Halaman Dashboard Leads — Tampilan Bersih, Minimalis, Stat Cards & Export CSV

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

  // Filter pencarian & status
  const filteredLeads = leads.filter(lead => {
    const matchSearch = lead.fullName.toLowerCase().includes(search.toLowerCase()) ||
      lead.email.toLowerCase().includes(search.toLowerCase())
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
            <span>🔄</span> Refresh
          </button>
          <button
            onClick={handleExportCSV}
            className="px-4 py-2.5 bg-[#002798] hover:bg-[#001d6d] text-white text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-1.5"
          >
            <span>📥</span> Export CSV
          </button>
        </div>
      </div>

      {/* ── Visualisasi Data Sederhana (Stat Cards Minimalis) ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400">Total Leads</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-black text-gray-900">{totalLeads}</p>
            <span className="text-sm">📊</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600">New (Uncontacted)</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-black text-amber-700">{newLeads}</p>
            <span className="text-sm">⚡</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-purple-600">Qualified</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-black text-purple-700">{qualifiedLeads}</p>
            <span className="text-sm">🎯</span>
          </div>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-2xs space-y-1">
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-600">Closed / Deal</p>
          <div className="flex items-baseline justify-between">
            <p className="text-2xl font-black text-emerald-700">{closedLeads}</p>
            <span className="text-sm">🎉</span>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-2xs flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="w-full md:w-96 relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-gray-400">🔍</span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari nama atau email..."
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
                <th className="py-4 px-6">Status Pipeline</th>
                <th className="py-4 px-6">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-xs text-gray-700">
              {loading ? (
                <tr>
                  <td colSpan={4} className="text-center py-12 text-gray-400 font-semibold">
                    Memuat data leads...
                  </td>
                </tr>
              ) : filteredLeads.length === 0 ? (
                <tr>
                  <td colSpan={4} className="text-center py-12 text-gray-400 font-semibold">
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

                      {/* Kolom 3: Status Pipeline */}
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

                      {/* Kolom 4: Aksi */}
                      <td className="py-4 px-6 whitespace-nowrap space-x-2">
                        <a
                          href={`mailto:${lead.email}`}
                          className="inline-flex items-center px-3 py-1.5 bg-blue-50 text-[#002798] hover:bg-blue-100 font-bold rounded-xl transition-all"
                        >
                          Balas Email
                        </a>
                        <button
                          onClick={() => handleDelete(lead.id)}
                          className="inline-flex items-center px-2.5 py-1.5 bg-red-50 text-[#DC1E13] hover:bg-red-100 font-bold rounded-xl transition-all"
                          title="Hapus Lead"
                        >
                          🗑️
                        </button>
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