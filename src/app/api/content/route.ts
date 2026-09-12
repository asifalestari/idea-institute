// src/app/api/content/route.ts
// API route untuk mengambil (GET), menyimpan (PUT), dan menguji email (POST) data CMS Portal

import { NextRequest, NextResponse } from 'next/server'
import { getPortalCMSData, savePortalCMSData, PortalCMSData } from '@/lib/cms'
import { sendAdminLeadNotification } from '@/lib/mail'

export async function GET() {
  try {
    const data = await getPortalCMSData()
    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('[API_CONTENT_GET_ERROR]', error)
    return NextResponse.json(
      { success: false, message: 'Gagal memuat data konten portal.' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body: PortalCMSData = await request.json()

    if (!body || !body.hero || !body.englishCourse || !body.vocationalTraining || !body.studyAndWork) {
      return NextResponse.json(
        { success: false, message: 'Data payload tidak valid.' },
        { status: 400 }
      )
    }

    const saved = await savePortalCMSData(body)
    return NextResponse.json(
      { success: true, message: 'Perubahan konten berhasil disimpan ke database!', data: saved },
      { status: 200 }
    )
  } catch (error) {
    console.error('[API_CONTENT_PUT_ERROR]', error)
    return NextResponse.json(
      { success: false, message: 'Terjadi kesalahan saat menyimpan data konten.' },
      { status: 500 }
    )
  }
}

// Endpoint POST untuk testing kirim notifikasi email dari CMS panel
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, email } = body

    if (action === 'test-email') {
      // Ambil data CMS saat ini untuk fallback email admin jika parameter email kosong
      const currentCMS = await getPortalCMSData()
      const targetEmail = email || currentCMS.settings.adminNotificationEmail || 'admin@idea-institut.net'

      // Panggil fungsi kirim email dengan menyertakan leadId dummy
      const emailResult = await sendAdminLeadNotification({
        adminEmail: targetEmail,
        fullName: 'Uji Coba Admin CMS',
        email: targetEmail,
        sourcePage: '/admin/cms',
        programInterest: 'Test Email Konfigurasi Sistem',
        leadId: 'TEST-LEAD-ID-000',
      })

      // Periksa apakah Resend mengembalikan error
      if (emailResult.error) {
        return NextResponse.json({
          success: false,
          message: `Gagal mengirim email via Resend: ${emailResult.error.message}`
        }, { status: 400 })
      }

      return NextResponse.json({
        success: true,
        message: 'Email uji coba berhasil dikirim ke ' + targetEmail
      }, { status: 200 })
    }

    return NextResponse.json(
      { success: false, message: 'Aksi tidak dikenal.' },
      { status: 400 }
    )
  } catch (err: any) {
    console.error('[API_CONTENT_POST_ERROR]', err)
    return NextResponse.json({
      success: false,
      message: err.message || 'Terjadi kesalahan saat mengirim email tes.'
    }, { status: 500 })
  }
}