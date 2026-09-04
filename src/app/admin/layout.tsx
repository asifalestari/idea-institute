'use client'

// src/app/admin/layout.tsx
// Shell layout for Admin Dashboard

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Don't show sidebar on login page
  if (pathname === '/admin/login') {
    return <>{children}</>
  }

  async function handleLogout() {
    try {
      await fetch('/api/admin/auth/logout', { method: 'POST' })
    } finally {
      router.push('/admin/login')
      router.refresh()
    }
  }

  const navItems = [
    { label: 'Leads Intake', href: '/admin/leads', icon: '📋' },
    { label: 'Public Website', href: '/', icon: '🌐' },
  ]

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row font-sans text-gray-900">
      {/* ── Sidebar (Desktop) ── */}
      <aside className="hidden md:flex md:w-64 bg-[#0A1847] text-white flex-col justify-between shrink-0 shadow-xl border-r border-blue-900/40 h-screen sticky top-0">
        <div className="p-6 space-y-8">
          {/* Brand Logo */}
          <Link href="/admin/leads" className="flex items-center gap-3">
            <Image
              src="/logo-IDEA-HD-fixed-600x96.svg"
              alt="IDEA Institut"
              width={160}
              height={30}
              className="h-7 w-auto brightness-0 invert"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="space-y-1.5">
            <p className="text-[10px] font-extrabold uppercase tracking-widest text-blue-300/60 px-3 mb-2">
              Main Menu
            </p>
            {navItems.map((item) => {
              const active = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-bold transition-all ${active
                    ? 'bg-[#F4A019] text-gray-950 shadow-md'
                    : 'text-blue-100 hover:bg-white/10 hover:text-white'
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
        <div className="p-6 border-t border-white/10 space-y-4 bg-[#0A1847]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F4A019] text-gray-950 font-black flex items-center justify-center text-xs shadow-sm">
              AD
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-white truncate">Admin User</p>
              <p className="text-[10px] text-blue-300/80 truncate">admin@idea-institut.net</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold text-red-300 bg-red-500/15 hover:bg-red-500/25 border border-red-400/20 transition-colors"
          >
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* ── Mobile Header ── */}
      <header className="md:hidden bg-[#0A1847] text-white p-4 flex items-center justify-between shadow-md">
        <Link href="/admin/leads">
          <Image
            src="/logo-IDEA-HD-fixed-600x96.svg"
            alt="IDEA Institut"
            width={130}
            height={24}
            className="h-6 w-auto brightness-0 invert"
          />
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-white/10 text-white"
        >
          {mobileMenuOpen ? '✕' : '☰'}
        </button>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0A1847] text-white px-4 py-4 space-y-3 border-b border-white/10">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-bold text-blue-100"
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-300"
          >
            <span>🚪</span>
            <span>Logout</span>
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
