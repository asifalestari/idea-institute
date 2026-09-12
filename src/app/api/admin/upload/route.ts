// src/app/api/admin/upload/route.ts
// Route handler untuk upload gambar dari panel Admin CMS

import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ success: false, message: 'Tidak ada berkas yang diunggah.' }, { status: 400 })
    }

    // Validasi tipe berkas
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml']
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { success: false, message: 'Format berkas harus berupa JPG, PNG, WebP, atau SVG.' },
        { status: 400 }
      )
    }

    // Ukuran maksimal 5MB
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json({ success: false, message: 'Ukuran berkas maksimal 5MB.' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Buat nama berkas unik
    const ext = path.extname(file.name) || '.jpg'
    const cleanBase = path.basename(file.name, ext).replace(/[^a-zA-Z0-9_-]/g, '_').toLowerCase()
    const fileName = `${cleanBase}_${Date.now()}${ext}`

    const uploadDir = path.join(process.cwd(), 'public', 'uploads')
    await mkdir(uploadDir, { recursive: true })

    const filePath = path.join(uploadDir, fileName)
    await writeFile(filePath, buffer)

    const publicUrl = `/uploads/${fileName}`

    return NextResponse.json({
      success: true,
      message: 'Gambar berhasil diunggah!',
      url: publicUrl,
    })
  } catch (error: any) {
    console.error('[UPLOAD_ERROR]', error)
    return NextResponse.json(
      { success: false, message: error?.message || 'Gagal mengunggah berkas.' },
      { status: 500 }
    )
  }
}
