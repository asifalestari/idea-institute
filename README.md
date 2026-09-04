# IDEA Institut — Website

Upgrade website [idea-institut.net](https://idea-institut.net) dari WordPress ke Next.js + PostgreSQL.

## Struktur

```
src/app/                — Next.js App Router pages
src/components/         — Reusable UI components
  layout/               — Navbar, Footer, LanguageToggle
  sections/             — HeroSection, CTABanner, ProgramCards, dll
  ui/                   — Badge, Button, Reveal, SectionHeading
src/data/               — Static data (courses, translations, team, dll)
src/context/            — LanguageContext (ID/EN toggle)
src/types/              — Shared TypeScript types
public/images/          — Foto hero, team, language course
docs/                   — Dokumentasi migrasi & go-live
```

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. (Opsional) Jalankan PostgreSQL lokal via Docker
npm run db:up

# 3. (Opsional) Migrasi schema & seed data master
npm run db:migrate
npm run db:seed

# 4. Jalankan development server
npm run dev
```

- Frontend: http://localhost:3000
- API Endpoint: `POST /api/leads`
- Prisma Studio: `npm run db:studio` (GUI Database Viewer)

## Halaman

| Path | Keterangan |
|------|------------|
| `/` | Homepage |
| `/about` | Tentang IDEA Institut |
| `/language-course` | Daftar kursus bahasa |
| `/language-course/[slug]` | Detail kursus bahasa |
| `/vocational-course` | Kursus vokasional |
| `/study-work` | Program Study & Work |

## Deploy

- **Frontend:** Vercel, root directory `./`
- **Domain:** `idea-institut.net`

Lihat [`docs/golive-checklist.md`](docs/golive-checklist.md) untuk langkah cutover lengkap.
