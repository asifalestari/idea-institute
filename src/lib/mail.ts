// src/lib/mail.ts
// Utility Pengirim Notifikasi Email Admin via Resend API (Clean Version)

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

interface AdminLeadMailPayload {
  adminEmail?: string
  fullName: string
  email: string
  sourcePage?: string
  programInterest?: string
  leadId: string
}

export async function sendAdminLeadNotification(data: AdminLeadMailPayload) {
  const targetEmail = process.env.ADMIN_EMAIL || data.adminEmail || 'admin@idea-institut.net'

  const formattedDate = new Intl.DateTimeFormat('id-ID', {
    dateStyle: 'full',
    timeStyle: 'medium',
    timeZone: 'Asia/Jakarta',
  }).format(new Date())

  try {
    const response = await resend.emails.send({
      from: 'IDEA Portal <onboarding@resend.dev>',
      to: [targetEmail],
      subject: `✨ Pendaftar Baru: ${data.fullName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f6f9; padding: 30px 15px; color: #333;">
          <div style="max-width: 520px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); border: 1px solid #eaeaea;">
            
            <div style="background-color: #002798; padding: 24px; text-align: center; color: #ffffff;">
              <h2 style="margin: 0; font-size: 18px; font-weight: 800; letter-spacing: 0.5px;">IDEA INSTITUT PORTAL</h2>
              <p style="margin: 6px 0 0 0; font-size: 12px; opacity: 0.85;">Notifikasi Pendaftar / Lead Baru</p>
            </div>

            <div style="padding: 28px 24px;">
              <p style="margin: 0 0 20px 0; font-size: 14px; color: #555; line-height: 1.5;">
                Halo Admin, seseorang baru saja mengisi formulir pendaftaran di portal:
              </p>

              <div style="background-color: #f8fafc; border-radius: 12px; padding: 18px; border: 1px solid #edf2f7;">
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tr>
                    <td style="padding: 8px 0; color: #718096; width: 130px; font-weight: 600;">Nama Lengkap</td>
                    <td style="padding: 8px 0; color: #1a202c; font-weight: 700;">${data.fullName}</td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600; border-top: 1px solid #edf2f7;">Email Aktif</td>
                    <td style="padding: 8px 0; border-top: 1px solid #edf2f7;">
                      <a href="mailto:${data.email}" style="color: #002798; font-weight: 700; text-decoration: none;">${data.email}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 8px 0; color: #718096; font-weight: 600; border-top: 1px solid #edf2f7;">Waktu Daftar</td>
                    <td style="padding: 8px 0; color: #2d3748; border-top: 1px solid #edf2f7; font-size: 13px;">${formattedDate}</td>
                  </tr>
                </table>
              </div>

            </div>

            <div style="background-color: #fafbfc; padding: 16px; text-align: center; border-top: 1px solid #eaeaea; font-size: 11px; color: #9ca3af;">
              Email otomatis ini dikirim oleh sistem portal resmi IDEA Institut.
            </div>

          </div>
        </div>
      `,
    })

    console.log(`[MAIL] Clean minimal notification successfully sent to: ${targetEmail}`)
    return response
  } catch (error) {
    console.error('[MAIL:ERROR] Failed to send email via Resend:', error)
    throw error
  }
}