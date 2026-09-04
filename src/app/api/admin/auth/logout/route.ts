// src/app/api/admin/auth/logout/route.ts
// Route handler for Admin logout

import { NextResponse } from 'next/server'

export async function POST() {
  const response = NextResponse.json({
    success: true,
    message: 'Logout berhasil.',
  })

  response.cookies.delete('idea_admin_session')
  return response
}
