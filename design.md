# Design System — IDEA Institut Website

> Referensi layout: 4 moodboard (Connecto, ReelUp, Easy Speak, TaskTide) — **hanya layout & struktur** yang diadopsi.
> Referensi konten & copy: [www.idea-institut.net](https://www.idea-institut.net)

---

## 1. Ringkasan Proyek

IDEA Institut adalah lembaga konsultasi bahasa asing & studi/kerja ke luar negeri (fokus: Australia, Jerman, negara OECD lain). Website baru perlu tampil lebih modern, energik, dan "conversion-driven" — mengikuti pola landing page SaaS/edtech modern (hero besar + statistik sosial proof + kartu highlight), namun tetap membawa nuansa institusi pendidikan yang terpercaya.

---

## 2. Brand Colors

| Warna | Hex | Peran |
|---|---|---|
| 🔴 Merah | `#DC1E13` | Primary brand, CTA utama, aksen tegas |
| 🟠 Oranye | `#F4A019` | Secondary/CTA alternatif, highlight badge, ikon |
| 🔵 Navy Blue | `#002798` | Warna teks judul besar / section gelap, elemen trust (footer, header gelap) |
| ⚪ Putih | `#FFFFFF` | Background utama, teks di atas warna gelap |
| 🟡 Kuning | `#FFF500` | Aksen kecil, badge "New", garis bawah, elemen dekoratif (seperti frame kuning di referensi Easy Speak) |

### Panduan Pemakaian
- **Background dominan:** putih bersih, dengan blok warna (navy/merah/oranye) hanya di section tertentu (hero, CTA, footer) — meniru gaya ReelUp & TaskTide yang banyak whitespace.
- **CTA utama:** merah `#DC1E13` solid dengan teks putih; CTA sekunder: outline navy atau oranye solid.
- **Badge statistik/angka pencapaian** (mis. "12k+ Fresh Graduates", "97% Satisfied Users"): gunakan warna blok navy, merah, oranye, kuning bergantian — persis pola kartu warna-warni di referensi TaskTide & Easy Speak.
- **Aksen kuning** dipakai tipis: garis bawah pada kata kunci judul, bintang/elemen dekoratif, border frame foto (seperti frame kuning Easy Speak).
- Hindari memakai kuning sebagai warna teks di atas putih (kontras rendah) — gunakan sebagai background chip/badge dengan teks navy/hitam.

---

## 3. Tipografi

- **Headline:** Sans-serif tebal, ukuran besar (mis. Poppins/Sora ExtraBold, 40–64px) — meniru gaya headline besar "Speak a language fearlessly..." dan "Connect beyond the surface".
- **Body text:** Sans-serif reguler, ukuran nyaman baca (16–18px), warna abu gelap/navy soft.
- **Angka statistik:** Bold besar (28–36px), warna kontras terhadap background chip-nya.
- Gaya judul boleh mem-*highlight* 1–2 kata dengan warna berbeda (merah/oranye) atau garis bawah kuning — seperti pola highlight di ReelUp ("Meet the Super-fast **E-com Video Platform**").

---

## 4. Referensi Layout per Moodboard

| Referensi | Elemen yang diadopsi |
|---|---|
| **Connecto** | Hero split: teks & CTA di kiri-bawah, foto besar di kanan-atas; floating notification card ("New Connection") mengambang di atas foto; baris statistik horizontal di bawah hero (50k / 1M+ / 100+). |
| **ReelUp** | Hero berlatar soft-pastel, mockup produk (phone/App) di tengah dengan floating stat card di kiri-kanan; deretan logo partner/klien di bawah hero; section "achieving benchmark" dengan grid angka pencapaian. |
| **Easy Speak** | **Paling relevan** karena sama-sama edukasi bahasa: navbar simpel (logo, menu, ikon notifikasi, avatar/CTA), hero dengan judul besar + 2 foto orang saling berhadapan + frame kuning dekoratif, baris CTA "Get Started" + counter "people connect", strip statistik 4 kolom di bagian bawah hero (12k+, 8+, 352+, 47+). |
| **TaskTide** | Hero dengan avatar-avatar mengambang di sekitar judul (social proof visual), grid kartu warna-warni untuk value proposition/statistik (50+, 97%, 10K+, 20+), tone judul "Collaborate & Succeed with [Brand]". |

**Pola gabungan untuk IDEA Institut:**
Hero ala Easy Speak (relevansi topik bahasa) + strip statistik & badge warna-warni ala TaskTide/Easy Speak + floating card sosial proof ala Connecto/ReelUp + grid logo partner (universitas/mitra OECD) ala ReelUp.

---

## 5. Komponen UI Utama

- **Navbar:** Logo kiri, menu tengah/kanan (Home, Course ▾, Professional ▾, Opportunities ▾, About Us ▾), tombol CTA solid merah "Konsultasi Gratis" di ujung kanan. Dropdown mega-menu untuk item yang punya sub-halaman.
- **Hero Section:** Judul besar 2 baris dengan 1 kata di-highlight warna, sub-teks 1-2 kalimat, dua CTA (primary solid + secondary outline), foto/ilustrasi orang dengan frame dekoratif kuning/oranye, floating badge kecil (mis. "120+ siswa lolos bulan ini").
- **Statistic Strip:** 3-4 kolom angka besar + label kecil, dipisah garis tipis vertikal, muncul di bawah hero (pola Easy Speak & Connecto).
- **Value/Feature Cards:** Grid 3–4 kartu warna blok bergantian (navy/merah/oranye/kuning) berisi ikon + angka/judul singkat + deskripsi pendek (pola TaskTide).
- **Partner/University Logo Strip:** Grid logo mitra (universitas, negara OECD, lembaga bahasa) grayscale, muncul di bawah hero (pola ReelUp).
- **Program/Course Card:** Untuk daftar bahasa (English, German, Spanish, dst.) & program (Study Abroad, Work Abroad, dst.) — kartu dengan foto/ikon bendera, nama program, badge level, tombol "Pelajari Lebih Lanjut".
- **Floating Testimonial/Notification Card:** Kartu kecil mengambang di atas foto hero berisi cuplikan kisah sukses siswa (pola Connecto "New Connection").
- **CTA Banner:** Blok warna penuh (navy/merah) dengan judul ajakan + tombol putih, dipakai sebelum footer di setiap halaman.
- **Footer:** Latar navy, logo putih, kolom link sitemap, kontak (WhatsApp, Instagram, Twitter, Facebook), copyright.

---

## 6. Sitemap Website

```
IDEA Institut
├── Home
├── Course
│   ├── English
│   ├── German
│   ├── Spanish
│   ├── French
│   ├── Chinese
│   └── Japanese
├── Professional
│   ├── Professional Training
│   ├── Literacy
│   └── Numeracy
├── Opportunities
│   ├── Study Abroad
│   │   ├── Australia
│   │   ├── Germany
│   │   └── Other OECD Countries
│   ├── Study & Work
│   ├── Work Abroad
│   └── Vocational Training
└── About Us
    ├── About IDEA
    ├── Our Team
    ├── Partners
    └── Contact
```

Navbar menggunakan 4 menu utama dengan dropdown (Course, Professional, Opportunities, About Us), dan Home sebagai item tunggal tanpa dropdown. Menu "Opportunities > Study Abroad" punya sub-dropdown level ke-2 (Australia, Germany, Other OECD Countries) — bisa ditampilkan sebagai accordion di mega-menu atau halaman index tersendiri.

---

## 7. Spesifikasi Layout per Halaman

### 7.1 Home
1. Navbar sticky.
2. **Hero** (pola Easy Speak): judul besar "Belajar Bahasa Asing yang Membuka Banyak Peluang" dengan kata kunci bahasa (English/German/Spanish/dst.) muncul bergantian atau sebagai chip list kecil di bawah judul; 2 CTA ("Konsultasi Gratis", "Lihat Program"); foto siswa dengan frame kuning; floating badge testimoni.
3. **Statistic Strip**: jumlah alumni, negara tujuan, mitra universitas, tahun pengalaman.
4. **Value Cards** (grid warna-warni): 4 pilar utama — Course, Professional, Opportunities, About/Trust.
5. **Program Highlight**: preview singkat 6 bahasa (Course) dalam bentuk card carousel/grid.
6. **Opportunities Highlight**: 4 kartu (Study Abroad, Study & Work, Work Abroad, Vocational Training) dengan foto negara tujuan.
7. **Partner Logo Strip**: logo universitas/mitra OECD.
8. **Testimonial Section**: kutipan alumni + foto.
9. **CTA Banner** penuh warna sebelum footer.
10. **Footer.**

### 7.2 Course (index) + 6 halaman bahasa (English/German/Spanish/French/Chinese/Japanese)
- **Index Course:** hero pendek + grid 6 kartu bahasa (bendera/ikon negara, nama bahasa, level tersedia, jumlah siswa aktif), filter/tab jika perlu.
- **Halaman detail per bahasa** (template sama untuk 6 bahasa):
  - Hero kecil: nama bahasa + foto pengajar/siswa + CTA "Daftar Kelas".
  - Statistic strip: jumlah siswa lulus, level (A1–C2), rata-rata durasi belajar.
  - Section "Kurikulum" (grid level/silabus).
  - Section "Pengajar" (kartu profil tutor, mirip pola foto tutor di Easy Speak).
  - Testimoni siswa bahasa tsb.
  - CTA banner + Footer.

### 7.3 Professional (index) + Professional Training, Literacy, Numeracy
- **Index:** hero + 3 kartu besar (Professional Training, Literacy, Numeracy) dengan ikon & deskripsi singkat.
- **Halaman detail** (template sama untuk 3 sub-menu):
  - Hero: judul program + CTA.
  - Section "Manfaat Program" (grid value card warna-warni, pola TaskTide).
  - Section "Materi/Modul" (list/accordion).
  - Statistic strip pencapaian program.
  - CTA banner + Footer.

### 7.4 Opportunities (index) + Study Abroad (dgn 3 sub-negara), Study & Work, Work Abroad, Vocational Training
- **Index:** hero besar (pola ReelUp — mockup/ilustrasi peta dunia) + grid 4 kartu peluang.
- **Study Abroad (index):** hero + 3 kartu negara (Australia, Germany, Other OECD Countries) dengan foto landmark.
  - **Halaman negara** (Australia/Germany/Other OECD): hero foto negara, statistic strip (biaya hidup, universitas mitra, alumni di negara ini), section syarat & tahapan (step card), testimoni alumni di negara tsb., CTA banner.
- **Study & Work, Work Abroad, Vocational Training:** template halaman program sama seperti Professional (hero → manfaat → tahapan/proses → statistik → testimoni → CTA).

### 7.5 About Us (index) + About IDEA, Our Team, Partners, Contact
- **Index / About IDEA:** hero cerita singkat lembaga, timeline sejarah, visi-misi, statistic strip (tahun berdiri, jumlah cabang, alumni total).
- **Our Team:** grid kartu foto tim (foto, nama, jabatan, ikon sosial media) — pola grid rapi seperti daftar tutor di Easy Speak.
- **Partners:** logo grid semua mitra (universitas, lembaga bahasa internasional, perusahaan) dikelompokkan per kategori.
- **Contact:** hero singkat + form kontak (nama, email, WA, pesan) di satu sisi, peta/alamat kantor + info sosial media (WhatsApp, Instagram, Twitter, Facebook) di sisi lain, mengikuti data kontak yang sudah ada di website saat ini.

---

## 8. Panduan Responsif

- **Desktop (≥1200px):** layout split 2 kolom pada hero, grid 3–4 kolom pada card section.
- **Tablet (768–1199px):** grid card turun ke 2 kolom, hero tetap split tapi foto mengecil.
- **Mobile (<768px):** hero jadi 1 kolom (teks di atas, foto di bawah), statistic strip jadi scroll horizontal atau grid 2 kolom, navbar jadi hamburger menu dengan accordion untuk dropdown Course/Professional/Opportunities/About Us.

---

## 9. Do's & Don'ts

**Do:**
- Pertahankan whitespace luas seperti referensi ReelUp/TaskTide agar tidak terkesan padat.
- Gunakan warna blok (bukan gradient rumit) untuk kartu statistik — konsisten dengan flat & bold style ke-4 referensi.
- Gunakan foto orang asli (siswa/tutor) untuk membangun trust, bukan ilustrasi generik saja.

**Don't:**
- Jangan gunakan kuning sebagai warna teks utama di atas background putih.
- Jangan campur terlalu banyak warna blok dalam satu section (maks. 3-4 warna per grid statistik).
- Jangan buat dropdown menu lebih dari 2 level di navbar (level ke-3 seperti Australia/Germany sebaiknya jadi kartu di halaman index Study Abroad, bukan submenu bertingkat).
