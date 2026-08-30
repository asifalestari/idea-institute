# Design Spec — Halaman Lanjutan IDEA Institut

> Melanjutkan homepage yang sudah dibangun. Warna final: `#DC1E13` (merah), `#F4A019` (oranye), `#002798` (navy), `#FFFFFF` (putih).
> Navbar final: **Home | Language Course | Vocational Course | Study & Work Program | About Us** + tombol "TALK TO AN ADVISOR".

---

## 0. Perbaikan Komponen Global (terapkan di semua halaman baru + revisi homepage)

Untuk menghindari kesan "flat/monoton" dari terlalu banyak outline card merah tipis:

- **3 gaya card** dipakai bergantian sesuai konteks:
  1. *Outline card* (border tipis merah/abu, background putih) — untuk daftar/grid item netral.
  2. *Soft-tint card* (background pink-pucat/oranye-pucat/navy-pucat + ikon bulat warna solid) — untuk highlight benefit/fitur, seperti pola "Why must join with IDEA" yang sudah bagus di homepage.
  3. *Solid color card* (background merah/navy/oranye penuh, teks putih) — dipakai sesekali untuk CTA card atau angka statistik agar ada kontras tegas.
- **Hero tanpa border luar** (hilangkan bingkai kotak di sekitar hero, biarkan full-bleed dengan background gradasi lembut).
- **Foto:** ganti foto collage 4-kotak generik dengan 1 foto besar relevan per section, atau ikon custom bulat besar (seperti section "Why must join").
- **Badge pill** (seperti "BUILDING GLOBAL PATHWAYS") dipakai konsisten di atas setiap hero halaman baru, isi teks disesuaikan per halaman.
- **FAQ icon** diperbesar & diberi warna merah/navy solid, bukan abu-abu pucat.

---

## 1. Language Course (index)

**Hero**
- Badge pill: "MASTER A NEW LANGUAGE"
- Headline 2 baris warna berbeda: *"Speak. Connect."* (merah) / *"Open Every Door."* (navy)
- Sub-teks: bahasa yang dikuasai membuka peluang karier & pendidikan global (parafrase dari copy klien, bukan kutipan langsung)
- CTA: "TALK TO AN ADVISOR" (solid merah) + "SEE ALL LANGUAGES" (outline navy)
- Foto besar: siswa belajar/di kelas bahasa, tanpa collage kecil

**Grid 6 Bahasa** (English, German, Spanish, French, Chinese, Japanese)
- Gunakan *soft-tint card*: tiap card warna latar berbeda bergantian (pink-pucat/oranye-pucat/navy-pucat), ikon bendera besar + nama bahasa + 1 baris manfaat singkat ("Buka peluang kerja di Eropa", dst.) + panah "→"
- Hindari foto collage generik — cukup ikon bendera besar & bersih

**Section "Kenapa Belajar di IDEA"**
- 3-4 poin singkat (kurikulum terstruktur, pengajar bersertifikat, partner internasional) memakai pola soft-tint icon card dari homepage

**CTA Banner + Footer** — sama seperti homepage.

---

## 2. Language Course — Halaman Detail per Bahasa (template, contoh: English)

**Hero**
- Badge pill: nama bahasa, mis. "ENGLISH PROGRAM"
- Headline: "Master English. Master Your Future."
- CTA: "DAFTAR KELAS" solid merah
- Foto tutor/kelas relevan

**Statistic strip:** jumlah lulusan, level tersedia (A1–C2), rata-rata durasi belajar — 3-4 kolom angka besar (bisa pakai *solid color card* navy sebagai variasi dari homepage yang selalu putih)

**Kurikulum:** accordion/list level A1 s.d. C2, tiap level 1 baris deskripsi

**Pengajar:** 2-3 kartu profil tutor (foto, nama, kredensial)

**Testimoni:** 1-2 kutipan siswa bahasa ini, pola sama seperti homepage (quote icon merah, avatar inisial)

**CTA Banner + Footer** — sama seperti homepage.

---

## 3. Vocational Course

**Hero**
- Badge pill: "BUILD REAL-WORLD SKILLS"
- Headline: *"Train."* (oranye) / *"Certify."* (merah) / *"Advance."* (navy) — pola 3-baris warna seperti hero homepage
- Sub-teks: pelatihan vokasi, literasi, dan numerasi untuk kesuksesan di negara tujuan kerja
- CTA: "EXPLORE VOCATIONAL PROGRAMS" solid merah

**Grid 3 Program** (Professional Training, Literacy, Numeracy)
- *Soft-tint card* dengan ikon besar (alat/topi wisuda utk training, buku utk literacy, angka/kalkulator utk numeracy)
- Tiap card: judul, 1-2 kalimat deskripsi, badge "Sertifikat Internasional" bila relevan, tombol "Pelajari Lebih Lanjut"

**Section "Kenapa Penting" (Literasi & Numerasi utk sukses kerja luar negeri)**
- 2 kolom info card menjelaskan korelasi literasi/numerasi dengan keberhasilan bekerja di negara tujuan (mengacu ke konteks yang klien berikan)

**Statistic strip:** jumlah peserta terlatih, tingkat kelulusan sertifikasi, negara penempatan

**Testimoni + CTA Banner + Footer** — sama seperti homepage.

---

## 4. Study & Work Program

Halaman ini menggabungkan 3 topik dari copy klien: **Studi Keluar Negeri**, **Studi sambil Kerja**, **Bekerja/Pelatihan Kerja Keluar Negeri**.

**Hero**
- Badge pill: "YOUR PATHWAY ABROAD STARTS HERE"
- Headline: *"Study. Work."* (merah) / *"Go Global."* (navy)
- Sub-teks: menjamin keberhasilan studi/kerja ke luar negeri bersama partner principal di negara tujuan
- CTA: "TALK TO AN ADVISOR" solid merah
- Foto besar: momen keberangkatan/kelulusan (bisa reuse foto wisuda dari homepage dengan crop berbeda)

**3 Kartu Jalur Program** (tab atau grid: Studi Keluar Negeri / Studi sambil Kerja / Bekerja & Pelatihan Kerja)
- *Solid color card* bergantian (navy/merah/oranye) dengan teks putih — memberi variasi tegas dari card putih di section lain
- Tiap kartu: ikon, judul jalur, 1-2 kalimat manfaat, tombol "Lihat Detail"

**Section Negara Tujuan** (Australia, Jerman, Negara OECD lainnya)
- 3 card foto landmark negara (foto besar, bukan collage), badge "Partner Principal", nama negara, 1 baris highlight (mis. "Biaya hidup terjangkau", "Universitas top dunia")
- Tombol "Pelajari Lebih Lanjut" per negara → mengarah ke sub-section/anchor detail negara di bawahnya atau halaman terpisah bila dibutuhkan nanti

**Detail per Negara** (anchor section di bawah grid, bisa 1 halaman panjang atau halaman terpisah — lihat catatan di bawah)
- Statistic strip: estimasi biaya hidup, jumlah universitas/mitra partner, jumlah alumni
- "Syarat & Tahapan": 4 step card bernomor (Konsultasi → Persiapan Bahasa & Dokumen → Proses Visa → Keberangkatan)
- Testimoni alumni dari negara tsb.

**CTA Banner + Footer** — sama seperti homepage.

> **Catatan:** Jika konten per negara ternyata cukup panjang (syarat visa, biaya rinci, dsb.), sebaiknya pisah jadi halaman tersendiri (`/study-work/australia`, `/study-work/germany`, `/study-work/oecd`) daripada anchor di satu halaman panjang — beri tahu saya kalau mau saya buatkan template halaman detail negaranya juga.

---

## 5. About Us (versi ringkas, 1 halaman)

**Hero**
- Badge pill: "WHO WE ARE"
- Headline: "Building Global Pathways Since [Tahun Berdiri]"
- Sub-teks: profil singkat IDEA Institut sebagai lembaga bahasa & konsultan studi/kerja luar negeri

**Section Cerita/Misi**
- 2 kolom: teks cerita singkat lembaga di kiri, foto tim/kantor di kanan

**Section "Kenapa Kami Berbeda"**
- Reuse pola "Why must join with IDEA" dari homepage (4 soft-tint icon card) — bisa jadi section yang sama dipindah ke sini kalau dirasa terlalu berat di homepage

**Section Tim Singkat**
- Grid 3-4 foto anggota tim kunci (foto, nama, jabatan) — versi ringkas, bukan direktori lengkap

**Section Partner** (reuse "Recognized by Global Institutions" dengan logo asli, bukan placeholder)

**Section Kontak Singkat**
- Alamat, telepon, email (data sama seperti di footer saat ini), tombol "TALK TO AN ADVISOR"

**CTA Banner + Footer** — sama seperti homepage.

---

## Ringkasan Perubahan dari design.md versi sebelumnya

- Warna kuning `#FFF500` di-drop dari palet final (4 warna saja).
- Sitemap disederhanakan dari 5 menu dengan banyak sub-dropdown menjadi 4 menu utama flat: Language Course, Vocational Course, Study & Work Program, About Us.
- "Professional" (lama) → jadi "Vocational Course".
- "Opportunities" (lama: Study Abroad/Study & Work/Work Abroad/Vocational Training) → digabung jadi "Study & Work Program" (Vocational Training dipisah keluar, jadi bagian dari Vocational Course).
- "About Us" tidak lagi punya 4 sub-halaman terpisah (About IDEA/Our Team/Partners/Contact) — disederhanakan jadi 1 halaman panjang.
