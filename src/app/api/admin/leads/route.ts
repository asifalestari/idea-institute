// src/app/api/admin/leads/route.ts
// Route handler untuk Admin leads fetching and overview stats

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const search = (searchParams.get('search') || '').toLowerCase().trim()
  const statusFilter = searchParams.get('status') || 'all'
  const programFilter = searchParams.get('program') || 'all'

  try {
    let leads: any[] = []

    try {
      // 1. Fetch data dari PostgreSQL
      const dbLeads = await prisma.lead.findMany({
        orderBy: { createdAt: 'desc' },
        include: { program: true },
      })

      leads = dbLeads.map((l) => ({
        ...l,
        createdAt: l.createdAt.toISOString(),
        updatedAt: l.updatedAt.toISOString(),
        programName: l.program?.name || l.programInterest,
      }))
    } catch (error) {
      console.error('[ADMIN_LEADS_DB_ERROR]', error)
      leads = []
    }

    // 2. Hitung statistik ringkasan sebelum filter
    const stats = {
      total: leads.length,
      new: leads.filter((l) => l.status === 'new').length,
      contacted: leads.filter((l) => l.status === 'contacted').length,
      qualified: leads.filter((l) => l.status === 'qualified').length,
      closed: leads.filter((l) => l.status === 'closed').length,
    }

    // 3. Terapkan Filter
    let filtered = [...leads]

    if (statusFilter && statusFilter !== 'all') {
      filtered = filtered.filter((l) => l.status === statusFilter)
    }

    if (programFilter && programFilter !== 'all') {
      filtered = filtered.filter((l) =>
        (l.programInterest || l.programName || '').toLowerCase().includes(programFilter.toLowerCase())
      )
    }

    if (search) {
      filtered = filtered.filter(
        (l) =>
          (l.fullName || '').toLowerCase().includes(search) ||
          (l.email || '').toLowerCase().includes(search) ||
          (l.phoneWhatsapp || '').includes(search) ||
          (l.programInterest || '').toLowerCase().includes(search) ||
          (l.notes || '').toLowerCase().includes(search)
      )
    }

    return NextResponse.json({
      success: true,
      leads: filtered,
      stats,
    })
  } catch (error) {
    console.error('[ADMIN_LEADS] Error:', error)
    return NextResponse.json(
      { success: false, message: 'Gagal memuat data leads.' },
      { status: 500 }
    )
  }
}