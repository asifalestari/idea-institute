// src/data/team.ts
import type { TeamMember, Partner } from '@/types'

export const teamMembers: TeamMember[] = [
  {
    name: 'Dr. Hendra Kusuma, M.Ed.',
    role: 'Direktur Utama',
    bio: 'Pendiri IDEA Institut dengan 20+ tahun pengalaman di bidang pendidikan bahasa dan konsultasi studi internasional.',
    photo: '/images/team/hendra.jpg',
    socials: { linkedin: '#', instagram: '#' },
  },
  {
    name: 'Sari Dewi, M.A.',
    role: 'Kepala Program Bahasa',
    bio: 'Lulusan University of Melbourne, mengelola kurikulum 6 program bahasa asing dengan 15+ instruktur.',
    photo: '/images/team/sari.jpg',
    socials: { linkedin: '#', instagram: '#' },
  },
  {
    name: 'Reza Firmansyah, S.E.',
    role: 'Manajer Konsultasi Opportunities',
    bio: 'Spesialis konsultasi studi dan kerja ke Australia & Jerman, telah membantu 500+ klien sukses ke luar negeri.',
    photo: '/images/team/reza.jpg',
    socials: { linkedin: '#' },
  },
  {
    name: 'Anita Rahmi, M.Pd.',
    role: 'Koordinator Professional Programs',
    bio: 'Mengelola program Professional Training, Literacy, dan Numeracy dengan latar belakang pendidikan vokasi internasional.',
    photo: '/images/team/anita.jpg',
    socials: { linkedin: '#', instagram: '#' },
  },
  {
    name: 'Didi Prasetyo, S.Kom.',
    role: 'IT & Digital Operations',
    bio: 'Memastikan seluruh operasional digital IDEA Institut berjalan optimal, termasuk platform belajar online.',
    photo: '/images/team/didi.jpg',
  },
  {
    name: 'Lia Hartini, S.Psi.',
    role: 'Student Counselor',
    bio: 'Memberikan dukungan psikologis dan motivasi bagi siswa dalam perjalanan studi mereka menuju luar negeri.',
    photo: '/images/team/lia.jpg',
    socials: { instagram: '#' },
  },
]

export const partnersData: Partner[] = [
  // Universities — Australia
  { name: 'University of Melbourne', logo: '/images/partners/unimelb.png', category: 'university', country: 'Australia' },
  { name: 'Monash University', logo: '/images/partners/monash.png', category: 'university', country: 'Australia' },
  { name: 'Australian National University', logo: '/images/partners/anu.png', category: 'university', country: 'Australia' },
  { name: 'RMIT University', logo: '/images/partners/rmit.png', category: 'university', country: 'Australia' },
  { name: 'Curtin University', logo: '/images/partners/curtin.png', category: 'university', country: 'Australia' },

  // Universities — Germany
  { name: 'TU Munich', logo: '/images/partners/tum.png', category: 'university', country: 'Jerman' },
  { name: 'Heidelberg University', logo: '/images/partners/heidelberg.png', category: 'university', country: 'Jerman' },
  { name: 'RWTH Aachen', logo: '/images/partners/rwth.png', category: 'university', country: 'Jerman' },

  // Language Certification Bodies
  { name: 'IALC', logo: '/images/partners/ialc.png', category: 'language' },
  { name: 'British Council', logo: '/images/partners/british-council.png', category: 'language' },
  { name: 'Goethe-Institut', logo: '/images/partners/goethe.png', category: 'language' },
  { name: 'Alliance Française', logo: '/images/partners/alliance-francaise.png', category: 'language' },
  { name: 'Instituto Cervantes', logo: '/images/partners/cervantes.png', category: 'language' },

  // Government / Official
  { name: 'Australian Trade & Investment Commission', logo: '/images/partners/austrade.png', category: 'government', country: 'Australia' },
  { name: 'DAAD Germany', logo: '/images/partners/daad.png', category: 'government', country: 'Jerman' },
]

// Global site stats for Home page
export const siteStats = [
  { label: 'Alumni Sukses', value: '5.000+' },
  { label: 'Negara Tujuan', value: '15+' },
  { label: 'Mitra Universitas', value: '30+' },
  { label: 'Tahun Pengalaman', value: '10+' },
]

// Contact info
export const contactInfo = {
  whatsapp: 'https://wa.me/6281297654332',
  whatsappNumber: '+62 812-9765-4332',
  instagram: 'https://www.instagram.com/ideainstitut',
  twitter: 'https://twitter.com/ideainstitut',
  facebook: 'https://www.facebook.com/profile.php?id=100077532669575',
  email: 'info@idea-institut.net',
  address: 'Jakarta, Indonesia',
  officialName: 'Institut De EurnesiA — IDEA Language Study & Travel',
}
