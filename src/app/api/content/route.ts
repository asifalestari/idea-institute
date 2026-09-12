// src/app/api/content/route.ts
// API route untuk mengambil (GET) dan menyimpan (PUT) data CMS Portal 3 Program

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

// Endpoint opsional untuk testing kirim notifikasi email dari CMS panel
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    if (body.action === 'test-email') {
      const cms = await getPortalCMSData()
      const targetEmail = body.email || cms.settings.adminNotificationEmail

      const result = await sendAdminLeadNotification({
        adminEmail: targetEmail,
        fullName: 'Calon Mahasiswa (Uji Coba)',
        email: 'pengunjung.test@example.com',
        sourcePage: '/ (Uji Coba Panel Admin CMS)',
        programInterest: 'English Course & VET Testing',
      })

      return NextResponse.json({
        success: result.success,
        simulated: result.simulated,
        message: result.simulated
          ? `Kredensial SMTP belum disetup di .env; simulasi notifikasi berhasil dicatat untuk <${targetEmail}>.`
          : `Email uji coba berhasil dikirim ke <${targetEmail}>!`,
      })
    }

    return NextResponse.json({ success: false, message: 'Aksi tidak dikenali.' }, { status: 400 })
  } catch (error) {
    console.error('[API_CONTENT_POST_ERROR]', error)
    return NextResponse.json({ success: false, message: 'Gagal mengirim email tes.' }, { status: 500 })
  }
}
