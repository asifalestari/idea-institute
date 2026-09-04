// src/app/api/leads/route.ts
// Next.js Route Handler — POST /api/leads
// Menyimpan data lead dari form konsultasi ke PostgreSQL via Prisma

import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createHash } from 'crypto'

// ─── Helper: Check Valid UUID ─────────────────────────────────────

function isValidUUID(uuid: string): boolean {
  return /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(uuid)
}

// Peta kata kunci umum ke slug database yang tepat (Fallback Mapping)
const KEYWORD_MAPPING: Record<string, string> = {
  ausbildung: 'germany',
  jerman: 'german',
  inggris: 'english',
  ielts: 'english',
  toefl: 'english',
  spanyol: 'spanish',
  prancis: 'french',
  mandarin: 'chinese',
  jepang: 'japanese',
}

// ─── Types ───────────────────────────────────────────────────────

interface LeadPayload {
  fullName: string
  email: string
  phoneWhatsapp: string
  programInterest?: string
  consentGiven: boolean
  sourcePage?: string
}

// ─── Validation ──────────────────────────────────────────────────

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function validatePhone(phone: string): boolean {
  return /^(\+62|62|0)[0-9]{8,14}$/.test(phone.replace(/[\s\-()]/g, ''))
}

function sanitize(str: string): string {
  return str.trim().slice(0, 500)
}

// ─── IP Hash (SHA-256, privacy-safe) ─────────────────────────────

function hashIP(ip: string): string {
  return createHash('sha256').update(ip + (process.env.IP_HASH_SALT ?? 'idea-salt')).digest('hex')
}

function getClientIP(request: NextRequest): string {
  return (
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    request.headers.get('x-real-ip') ??
    'unknown'
  )
}

// ─── Route Handler ───────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    const body: LeadPayload = await request.json()

    // ── Validation ──
    const errors: Record<string, string> = {}

    if (!body.fullName?.trim()) errors.fullName = 'Nama lengkap wajib diisi'
    if (!body.email?.trim()) {
      errors.email = 'Email wajib diisi'
    } else if (!validateEmail(body.email)) {
      errors.email = 'Format email tidak valid'
    }
    if (!body.phoneWhatsapp?.trim()) {
      errors.phoneWhatsapp = 'Nomor WhatsApp wajib diisi'
    } else if (!validatePhone(body.phoneWhatsapp)) {
      errors.phoneWhatsapp = 'Format nomor WhatsApp tidak valid'
    }
    if (!body.consentGiven) {
      errors.consentGiven = 'Persetujuan diperlukan'
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 422 })
    }

    // ── Extract UTM & Source Page ──
    const referer = request.headers.get('referer') ?? ''
    let sourcePage = body.sourcePage || '/'
    let utmSource: string | undefined
    let utmMedium: string | undefined
    let utmCampaign: string | undefined

    try {
      if (referer) {
        const refUrl = new URL(referer)
        if (!body.sourcePage) {
          sourcePage = refUrl.pathname
        }
        utmSource = refUrl.searchParams.get('utm_source') ?? undefined
        utmMedium = refUrl.searchParams.get('utm_medium') ?? undefined
        utmCampaign = refUrl.searchParams.get('utm_campaign') ?? undefined
      }
    } catch {
      // referer parsing fallback
    }

    // ── Hash IP ──
    const ipHash = hashIP(getClientIP(request))

    // ── Safe Query Program ID ──
    let programId: string | undefined

    if (body.programInterest) {
      const rawInput = body.programInterest.toLowerCase().trim()
      const targetSlug = KEYWORD_MAPPING[rawInput] || body.programInterest
      const isUUID = isValidUUID(targetSlug)

      const matchedProgram = await prisma.program.findFirst({
        where: {
          OR: [
            ...(isUUID ? [{ id: targetSlug }] : []),
            { slug: targetSlug },
            { name: { contains: targetSlug, mode: 'insensitive' } },
          ],
        },
        select: { id: true },
      })

      if (matchedProgram) {
        programId = matchedProgram.id
      }
    }

    // ── Save to DB ──
    const lead = await prisma.lead.create({
      data: {
        fullName: sanitize(body.fullName),
        email: sanitize(body.email).toLowerCase(),
        phoneWhatsapp: sanitize(body.phoneWhatsapp),
        programInterest: body.programInterest ? sanitize(body.programInterest) : undefined,
        programId,
        sourcePage,
        utmSource,
        utmMedium,
        utmCampaign,
        consentGiven: body.consentGiven,
        ipHash,
        status: 'new',
      },
    })

    console.log(`[LEAD] New lead saved: ${lead.id} | ${lead.email} | ${lead.programInterest ?? 'unspecified'}`)

    return NextResponse.json(
      {
        success: true,
        message: 'Terima kasih! Tim kami akan menghubungi Anda segera.',
        leadId: lead.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[LEAD] Error saving lead:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Terjadi kesalahan server. Silakan coba lagi.',
      },
      { status: 500 }
    )
  }
}

// ─── GET: Health check ───────────────────────────────────────────

export async function GET() {
  return NextResponse.json({ status: 'ok', endpoint: 'POST /api/leads' })
}