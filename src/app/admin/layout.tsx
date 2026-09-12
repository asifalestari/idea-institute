'use client'

// src/app/admin/layout.tsx
// Shell layout for Admin Dashboard — Clean & Professional Light Theme

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Don't show sidebar on login root page
  if (pathname === '/admin') {
    return <>{children}</>
  }

  async function handleLogout() {
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' })
    } catch {
      // ignore network errors on logout
    } finally {
      router.push('/admin')
      router.refresh()
    }
  }

  const navItems = [
    { label: 'Dashboard User', href: '/admin/leads', icon: '📋' },
    { label: 'CMS Konten Web', href: '/admin/cms', icon: '📝' },
    { label: 'Public Website', href: '/', icon: '🌐' },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row font-sans text-gray-900">
      {/* ── Sidebar (Desktop) - Clean Light Theme ── */}
      <aside className="hidden md:flex md:w-64 bg-white text-gray-800 flex-col justify-between shrink-0 shadow-xs border-r border-gray-100 h-screen sticky top-0">
        <div className="p-6 space-y-8">
          {/* Brand Logo Container (Tanpa Inverted, Logo Asli Berwarna) */}
          <div className="p-3 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-center">
            <Link href="/admin/leads">
              <Image
                src="/logo-IDEA-HD-fixed-600x96.svg"
                alt="IDEA Institut"
                width={140}
                height={26}
                className="h-6 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 px-3 mb-3">
              Menu Utama
            </p>
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-3 rounded-xl text-xs font-bold transition-all ${active
                    ? 'bg-[#002798] text-white shadow-sm font-extrabold'
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              )
            })}
          </nav>
        </div>

        {/* User Info & Logout */}
        <div className="p-6 border-t border-gray-100 space-y-4 bg-white">
          <div className="flex items-center gap-3 px-1">
            <div className="w-9 h-9 rounded-xl bg-amber-100 text-amber-800 font-black flex items-center justify-center text-xs shadow-2xs shrink-0">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-gray-900 truncate">Admin Portal</p>
              <p className="text-[10px] text-gray-400 truncate">admin@idea-institut.net</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3.5 py-3 rounded-xl text-xs font-extrabold text-[#DC1E13] bg-red-50 hover:bg-red-100 border border-red-100 transition-all cursor-pointer"
          >
            <span>🚪</span>
            <span>Keluar (Logout)</span>
          </button>
        </div>
      </aside>

      {/* ── Mobile Header ── */}
      <header className="md:hidden bg-white text-gray-800 p-4 flex items-center justify-between shadow-xs border-b border-gray-100">
        <Link href="/admin/leads">
          <Image
            src="/logo-IDEA-HD-fixed-600x96.svg"
            alt="IDEA Institut"
            width={120}
            height={22}
            className="h-5 w-auto"
          />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-gray-100 text-gray-700 text-sm font-bold"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 px-4 py-4 space-y-2 border-b border-gray-100 shadow-md">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-100"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full text-left flex items-center gap-2 px-3.5 py-2.5 rounded-xl text-xs font-bold text-[#DC1E13] bg-red-50 mt-2"
          >
            <span>🚪</span>
            <span>Keluar (Logout)</span>
          </button>
        </div>
      )}

      {/* ── Main Content Area ── */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}