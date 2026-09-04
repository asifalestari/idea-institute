'use client'

// src/app/admin/leads/page.tsx
// Lead Intake Dashboard with real-time stats, filtering, status changer, modal details & CSV export

import { useState, useEffect, useCallback } from 'react'

interface Lead {
  id: string
  fullName: string
  email: string
  phoneWhatsapp: string
  programInterest?: string
  sourcePage?: string
  utmSource?: string
  utmMedium?: string
  utmCampaign?: string
  status: 'new' | 'contacted' | 'qualified' | 'closed'
  notes?: string
  consentGiven: boolean
  ipHash?: string
  createdAt: string
  updatedAt: string
}

interface Stats {
  total: number
  new: number
  contacted: number
  qualified: number
  closed: number
}

const statusConfig: Record<string, { label: string; bg: string; text: string; border: string }> = {
  new: { label: 'New', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  contacted: { label: 'Contacted', bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  qualified: { label: 'Qualified', bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
  closed: { label: 'Closed', bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [stats, setStats] = useState<Stats>({ total: 0, new: 0, contacted: 0, qualified: 0, closed: 0 })
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [activeModalLead, setActiveModalLead] = useState<Lead | null>(null)
  const [modalNotes, setModalNotes] = useState('')
  const [updatingId, setUpdatingId] = useState<string | null>(null)

  // ── Fetch Leads ─────────────────────────────────────────────────
  const fetchLeads = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (search) params.set('search', search)
      if (selectedStatus !== 'all') params.set('status', selectedStatus)

      const res = await fetch(`/api/admin/leads?${params.toString()}`)
      const json = await res.json()

      if (json.success) {
        setLeads(json.leads)
        setStats(json.stats)
      }
    } catch (err) {
      console.error('Failed to load leads:', err)
    } finally {
      setLoading(false)
    }
  }, [search, selectedStatus])

  useEffect(() => {
    fetchLeads()
  }, [fetchLeads])

  // ── Update Lead Status ──────────────────────────────────────────
  async function handleStatusChange(id: string, newStatus: string) {
    setUpdatingId(id)
    try {
      const res = await fetch(`/api/admin/leads/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      })

      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus as any } : l))
        )
        if (activeModalLead && activeModalLead.id === id) {
          setActiveModalLead((prev) => (prev ? { ...prev, status: newStatus as any } : null))
        }
      }
    } catch (err) {
      console.error('Failed to update status:', err)
    } finally {
      setUpdatingId(null)
    }
  }

  // ── Save Notes ──────────────────────────────────────────────────
  async function handleSaveNotes() {
    if (!activeModalLead) return
    setUpdatingId(activeModalLead.id)

    try {
      const res = await fetch(`/api/admin/leads/${activeModalLead.id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ notes: modalNotes }),
      })

      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === activeModalLead.id ? { ...l, notes: modalNotes } : l))
        )
        setActiveModalLead((prev) => (prev ? { ...prev, notes: modalNotes } : null))
      }
    } catch (err) {
      console.error('Failed to save notes:', err)
    } finally {
      setUpdatingId(null)
    }
  }

  // ── Delete Lead ─────────────────────────────────────────────────
  async function handleDelete(id: string) {
    if (!confirm('Apakah Anda yakin ingin menghapus lead ini?')) return

    try {
      const res = await fetch(`/api/admin/leads/${id}`, { method: 'DELETE' })
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id))
        if (activeModalLead?.id === id) setActiveModalLead(null)
      }
    } catch (err) {
      console.error('Failed to delete lead:', err)
    }
  }

  // ── Export CSV ──────────────────────────────────────────────────
  function exportCSV() {
    if (leads.length === 0) return

    const headers = ['ID', 'Nama Lengkap', 'Email', 'WhatsApp', 'Program', 'Status', 'Halaman Asal', 'UTM Source', 'UTM Campaign', 'Tanggal Dibuat', 'Catatan']
    const rows = leads.map((l) => [
      `"${l.id}"`,
      `"${l.fullName.replace(/"/g, '""')}"`,
      `"${l.email}"`,
      `"${l.phoneWhatsapp}"`,
      `"${(l.programInterest || '').replace(/"/g, '""')}"`,
      `"${l.status}"`,
      `"${l.sourcePage || ''}"`,
      `"${l.utmSource || ''}"`,
      `"${l.utmCampaign || ''}"`,
      `"${new Date(l.createdAt).toLocaleString('id-ID')}"`,
      `"${(l.notes || '').replace(/"/g, '""')}"`,
    ])

    const csvContent = 'data:text/csv;charset=utf-8,\uFEFF' + [headers.join(','), ...rows.map((e) => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `idea_leads_${new Date().toISOString().slice(0, 10)}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="p-6 sm:p-8 lg:p-10 max-w-7xl mx-auto space-y-8">
      {/* ── Top Bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0A1847] tracking-tight">
            Leads Intake Dashboard
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1">
            Kelola prospek masuk, status penanganan, dan follow-up konsultasi.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => fetchLeads()}
            className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 hover:bg-gray-50 text-xs font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <span>🔄</span>
            <span>Refresh</span>
          </button>
          <button
            onClick={exportCSV}
            disabled={leads.length === 0}
            className="px-5 py-2.5 rounded-xl bg-[#002798] hover:bg-[#001f78] disabled:opacity-50 text-white text-xs font-bold transition-all shadow-sm flex items-center gap-2"
          >
            <span>📥</span>
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* ── Metric Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: 'Total Leads', val: stats.total, color: 'text-[#0A1847]', bg: 'bg-white', icon: '📊' },
          { label: 'New (Uncontacted)', val: stats.new, color: 'text-amber-600', bg: 'bg-amber-50/60', icon: '⚡' },
          { label: 'Qualified', val: stats.qualified, color: 'text-purple-600', bg: 'bg-purple-50/60', icon: '🎯' },
          { label: 'Closed / Deal', val: stats.closed, color: 'text-emerald-600', bg: 'bg-emerald-50/60', icon: '🎉' },
        ].map((m) => (
          <div key={m.label} className={`${m.bg} rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-sm flex items-center justify-between`}>
            <div>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">{m.label}</p>
              <p className={`text-2xl sm:text-3xl font-black ${m.color} mt-1`}>{m.val}</p>
            </div>
            <div className="text-2xl sm:text-3xl opacity-80">{m.icon}</div>
          </div>
        ))}
      </div>

      {/* ── Search & Status Filters ── */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-gray-100 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Search Box */}
          <div className="relative w-full sm:w-80">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari nama, email, WhatsApp, notes..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 text-xs focus:border-[#002798] focus:ring-2 focus:ring-[#002798]/20 outline-none transition-all"
            />
            <span className="absolute left-3.5 top-2.5 text-gray-400 text-xs">🔍</span>
          </div>

          {/* Status Tab Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {['all', 'new', 'contacted', 'qualified', 'closed'].map((status) => {
              const active = selectedStatus === status
              return (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold capitalize transition-all ${active
                    ? 'bg-[#0A1847] text-white shadow-sm'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                >
                  {status}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* ── Leads Table ── */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-bold uppercase tracking-wider">
              <tr>
                <th className="py-4 px-6">Nama &amp; Kontak</th>
                <th className="py-4 px-6">Minat Program</th>
                <th className="py-4 px-6">Status Pipeline</th>
                <th className="py-4 px-6">Tanggal</th>
                <th className="py-4 px-6 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {loading ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-400">
                    <span className="inline-block animate-spin mr-2">⏳</span> Memuat data leads...
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-400">
                    Tidak ada lead yang cocok dengan filter pencarian.
                  </td>
                </tr>
              ) : (
                leads.map((lead) => {
                  const cfg = statusConfig[lead.status] || statusConfig.new
                  const waNumber = lead.phoneWhatsapp.replace(/[\s\-()+]/g, '')
                  const waLink = `https://wa.me/${waNumber.startsWith('0') ? '62' + waNumber.slice(1) : waNumber}`

                  return (
                    <tr key={lead.id} className="hover:bg-blue-50/30 transition-colors">
                      {/* Name & Contact */}
                      <td className="py-4 px-6">
                        <div className="font-bold text-gray-900 text-sm">{lead.fullName}</div>
                        <div className="text-gray-500 text-[11px] mt-0.5">{lead.email}</div>
                        <div className="mt-1 flex items-center gap-2">
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 hover:text-emerald-700 hover:underline"
                          >
                            <span>💬 {lead.phoneWhatsapp}</span>
                          </a>
                        </div>
                      </td>

                      {/* Program Interest */}
                      <td className="p-4 space-y-1">
                        {/* Badge Program Interest */}
                        <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-900 font-bold text-[11px] border border-blue-100 inline-block capitalize">
                          {lead.programInterest || 'Umum'}
                        </span>
                      </td>
                      {/* Interactive Status Changer */}
                      <td className="py-4 px-6">
                        <div className="relative inline-block">
                          <select
                            value={lead.status}
                            disabled={updatingId === lead.id}
                            onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                            className={`appearance-none px-3 py-1.5 pr-7 rounded-xl font-bold text-[11px] border cursor-pointer outline-none transition-all ${cfg.bg} ${cfg.text} ${cfg.border} hover:shadow-sm`}
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="qualified">Qualified</option>
                            <option value="closed">Closed</option>
                          </select>
                          <span className="pointer-events-none absolute right-2 top-2 text-[10px] opacity-60">
                            ▼
                          </span>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="py-4 px-6 text-gray-500 text-[11px]">
                        {new Date(lead.createdAt).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                        <div className="text-[10px] text-gray-400">
                          {new Date(lead.createdAt).toLocaleTimeString('id-ID', {
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </td>

                      {/* Actions */}
                      <td className="py-4 px-6 text-right">
                        <div className="flex items-center justify-end gap-2">
                          {/* Tombol Detail & Notes */}
                          <button
                            type="button"
                            onClick={() => {
                              setActiveModalLead(lead)
                              setModalNotes(lead.notes || '')
                            }}
                            className="px-3.5 py-1.5 rounded-xl bg-gray-100 hover:bg-[#0A1847] hover:text-white font-bold text-gray-700 transition-all duration-200 text-[11px] shadow-sm border border-gray-200/60"
                          >
                            Detail &amp; Notes
                          </button>

                          {/* Tombol Hapus */}
                          <button
                            type="button"
                            onClick={() => handleDelete(lead.id)}
                            className="p-1.5 rounded-xl text-gray-400 hover:text-red-600 hover:bg-red-50 border border-transparent hover:border-red-200 transition-all duration-200 text-xs"
                            title="Hapus Lead"
                          >
                            🗑️
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

      {/* ── Modal Details & Notes ── */}
      {activeModalLead && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-lg w-full shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-black text-gray-900">{activeModalLead.fullName}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{activeModalLead.email} • {activeModalLead.phoneWhatsapp}</p>
              </div>
              <button
                onClick={() => setActiveModalLead(null)}
                className="p-1.5 rounded-xl hover:bg-gray-100 text-gray-400 hover:text-gray-700 text-base"
              >
                ✕
              </button>
            </div>

            {/* Tracking Info Grid */}
            <div className="bg-gray-50 rounded-2xl p-4 space-y-2 text-xs">
              <p className="font-bold text-gray-700 uppercase tracking-wider text-[10px]">Data Tracking &amp; Compliance</p>
              <div className="grid grid-cols-2 gap-2 text-gray-600 text-[11px] pt-1">
                <div><span className="text-gray-400">Program:</span> {activeModalLead.programInterest || '-'}</div>
                <div><span className="text-gray-400">Asal Halaman:</span> {activeModalLead.sourcePage || '-'}</div>
                <div><span className="text-gray-400">UTM Source:</span> {activeModalLead.utmSource || '-'}</div>
                <div><span className="text-gray-400">UTM Campaign:</span> {activeModalLead.utmCampaign || '-'}</div>
                <div><span className="text-gray-400">Consent UU PDP:</span> {activeModalLead.consentGiven ? '✅ Disetujui' : '❌ Belum'}</div>
                <div><span className="text-gray-400">IP Hash:</span> <span className="font-mono text-[9px]">{activeModalLead.ipHash?.slice(0, 10)}...</span></div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider">
                Catatan Internal Follow-up
              </label>
              <textarea
                rows={4}
                value={modalNotes}
                onChange={(e) => setModalNotes(e.target.value)}
                placeholder="Tulis catatan sales/konsultasi..."
                className="w-full p-3 rounded-xl border border-gray-200 text-xs focus:border-[#002798] focus:ring-2 focus:ring-[#002798]/20 outline-none transition-all"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveModalLead(null)}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-100 transition-colors"
              >
                Tutup
              </button>
              <button
                onClick={handleSaveNotes}
                disabled={updatingId === activeModalLead.id}
                className="px-6 py-2.5 rounded-xl text-xs font-extrabold text-white bg-[#002798] hover:bg-[#001f78] shadow-md transition-all disabled:opacity-60"
              >
                {updatingId === activeModalLead.id ? 'Menyimpan...' : 'Simpan Catatan'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
