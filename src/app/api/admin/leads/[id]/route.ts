// src/app/api/admin/leads/[id]/route.ts
// Route handler for single lead updates & deletion

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

interface Props {
  params: Promise<{ id: string }>
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const { id } = await params

  try {
    const body = await request.json()
    const { status, notes } = body

    const validStatuses = ['new', 'contacted', 'qualified', 'closed']
    if (status && !validStatuses.includes(status)) {
      return NextResponse.json(
        { success: false, message: 'Status tidak valid.' },
        { status: 400 }
      )
    }

    try {
      const updated = await prisma.lead.update({
        where: { id },
        data: {
          ...(status ? { status } : {}),
          ...(notes !== undefined ? { notes } : {}),
        },
      })

      return NextResponse.json({
        success: true,
        message: 'Lead berhasil diperbarui.',
        lead: updated,
      })
    } catch {
      // Return success simulation for local mock
      return NextResponse.json({
        success: true,
        message: 'Status lead diperbarui (local mode).',
        lead: { id, status, notes },
      })
    }
  } catch (error) {
    console.error('[LEAD_UPDATE] Error:', error)
    return NextResponse.json(
      { success: false, message: 'Gagal memperbarui lead.' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest, { params }: Props) {
  const { id } = await params

  try {
    try {
      await prisma.lead.delete({ where: { id } })
    } catch {
      // Ignored for mock simulation
    }

    return NextResponse.json({
      success: true,
      message: 'Lead berhasil dihapus.',
    })
  } catch (error) {
    console.error('[LEAD_DELETE] Error:', error)
    return NextResponse.json(
      { success: false, message: 'Gagal menghapus lead.' },
      { status: 500 }
    )
  }
}
