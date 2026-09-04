# Client Decisions — IDEA Institut

Dokumen ini mencatat keputusan default yang dipakai untuk implementasi awal. **Konfirmasi ulang ke client** sebelum go-live produksi.

| Topik | Keputusan Sementara | Catatan |
|-------|---------------------|---------|
| WooCommerce | Tidak dipakai | Katalog program statis + lead form; tanpa checkout online |
| Bahasa | Bilingual ID/EN | Sudah diimplementasi di frontend (`LanguageContext`) |
| Branding | Reuse dari prototipe | Logo & copy dari source `idea-institute-main` |
| Notifikasi lead | Email ke `info@idea-institut.net` | SMTP dikonfigurasi via env `SMTP_*`; fallback log ke console |
| Hosting FE | Vercel | Root directory: `apps/web` |
| Hosting BE | Railway / VPS | API di `api.idea-institut.net` (disarankan) |
| Timeline | Fase 0–1 selesai di repo lokal | Cutover DNS manual oleh client |

## Aksi Client Sebelum Go-Live

1. Setujui copy dan statistik di homepage (20+ tahun, 50rb+ siswa, dll.)
2. Berikan kredensial SMTP untuk notifikasi email
3. Tambahkan domain `idea-institut.net` di Vercel
4. Update DNS dari Exabytes WordPress ke Vercel
5. Submit sitemap di Google Search Console
