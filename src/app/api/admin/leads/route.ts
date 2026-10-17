// src/app/api/admin/leads/route.ts
// Route handler untuk Admin leads fetching and overview stats

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const search = (searchParams.get('search') || '').toLowerCase().trim()
  const statusFilter = searchParams.get('status') || 'all'
  const programFilter = searchParams.get('program') || 'all'

  try {
    // 1. Fetch data dari PostgreSQL (Tanpa try-catch tersembunyi agar error terlihat)
    const dbLeads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
      // Jika tabel relasi 'program' belum ada atau opsional, baris include ini bisa memicu error 500. 
      // Jika error, kita buat aman dengan menghapus sementara 'include: { program: true }' atau dibungkus rapi.
    })

    const leads = dbLeads.map((l: any) => ({
      ...l,
      createdAt: l.createdAt.toISOString(),
      updatedAt: l.updatedAt ? l.updatedAt.toISOString() : new Date().toISOString(),
      programName: l.programInterest || 'Portal 3 Program',
    }))

    // 2. Hitung statistik ringkasan sebelum filter
    const stats = {
      total: leads.length,
      new: leads.filter((l: any) => l.status?.toLowerCase() === 'new').length,
      contacted: leads.filter((l: any) => l.status?.toLowerCase() === 'contacted').length,
      qualified: leads.filter((l: any) => l.status?.toLowerCase() === 'qualified').length,
      closed: leads.filter((l: any) => l.status?.toLowerCase() === 'closed').length,
    }

    // 3. Terapkan Filter
    let filtered = [...leads]

    if (statusFilter && statusFilter !== 'all') {
      filtered = filtered.filter((l: any) => l.status?.toLowerCase() === statusFilter.toLowerCase())
    }

    if (programFilter && programFilter !== 'all') {
      filtered = filtered.filter((l: any) =>
        (l.programInterest || '').toLowerCase().includes(programFilter.toLowerCase())
      )
    }

    if (search) {
      filtered = filtered.filter(
        (l: any) =>
          (l.fullName || '').toLowerCase().includes(search) ||
          (l.email || '').toLowerCase().includes(search) ||
          (l.phoneWhatsapp || '').includes(search) ||
          (l.programInterest || '').toLowerCase().includes(search)
      )
    }

    return NextResponse.json({
      success: true,
      leads: filtered,
      stats,
    })
  } catch (error: any) {
    console.error('[ADMIN_LEADS_FATAL_ERROR]', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Gagal memuat data leads dari database.' },
      { status: 500 }
    )
  }
}