# URL Redirect Mapping — WordPress → Next.js

| URL WordPress (lama) | URL Baru | Tipe |
|----------------------|----------|------|
| `/` | `/` | Replace |
| `/index.php/studi-keluar-negeri/` | `/study-work/studi-keluar-negeri` | 301 |
| `/index.php/studi-sambil-kerja/` | `/study-work/studi-sambil-kerja` | 301 |
| `/index.php/kuliah-di-australia/` | `/study-work/kuliah-di-australia` | 301 |
| `/index.php/kuliah-di-german/` | `/study-work/kuliah-di-german` | 301 |

Redirect diimplementasi di [`apps/web/next.config.ts`](../apps/web/next.config.ts).

## Halaman Baru (tidak ada padanan langsung di WP)

| URL | Deskripsi |
|-----|-----------|
| `/language-course` | Kursus bahasa (6 bahasa + detail slug) |
| `/vocational-course` | Program kejuruan |
| `/study-work` | Hub program studi & kerja |
| `/about` | Profil institusi |
| `/#contact-info` | Kontak + lead form (Footer) |
| `/admin` | Dashboard lead (internal) |
