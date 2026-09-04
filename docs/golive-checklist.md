# Go-Live Checklist — IDEA Institut

## Pre-Deploy

- [ ] Set environment variables di Vercel (`NEXT_PUBLIC_API_URL`)
- [ ] Set environment variables di Railway/VPS untuk API
- [ ] Ganti `JWT_SECRET`, `ADMIN_PASSWORD` di production
- [ ] Konfigurasi SMTP untuk notifikasi lead
- [ ] (Opsional) Aktifkan Cloudflare Turnstile (`TURNSTILE_ENABLED=true`)

## DNS Cutover

1. Tambah domain `idea-institut.net` di Vercel project
2. Update DNS A/CNAME di Exabytes ke Vercel
3. Tambah subdomain `api.idea-institut.net` ke server API
4. Verifikasi HTTPS aktif di kedua domain

## Post-Deploy

- [ ] Submit `https://idea-institut.net/sitemap.xml` ke Google Search Console
- [ ] Test semua redirect 301 dari URL WordPress lama
- [ ] Test lead form end-to-end (submit → DB → email)
- [ ] Test admin login di `/admin`
- [ ] Setup backup PostgreSQL harian (Railway auto-backup atau cron `pg_dump`)

## Monitoring

- Uptime monitoring: UptimeRobot atau Better Stack
- Error tracking: Sentry (opsional)
- Log API: Railway logs / Docker logs

## Rollback

Jika terjadi masalah kritis, kembalikan DNS ke WordPress Exabytes sementara. Data lead tetap aman di PostgreSQL.
