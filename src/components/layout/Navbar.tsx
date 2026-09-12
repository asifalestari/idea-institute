'use client'

// src/components/layout/Navbar.tsx
// Header navigation — Menu 3 program aktif mengarah ke rute internal Next.js setelah form diisi (unlocked)

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isUnlocked, setIsUnlocked] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const checkUnlock = () => {
      try {
        const stored = localStorage.getItem('idea_portal_user')
        setIsUnlocked(Boolean(stored))
      } catch {
        setIsUnlocked(false)
      }
    }
    checkUnlock()

    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('storage', checkUnlock)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('storage', checkUnlock)
    }
  }, [pathname])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // NavItems disesuaikan ke rute internal Next.js
  const navItems = isUnlocked
    ? [
      { label: 'Language Course', href: 'https://www.ialc.org/' },
      { label: 'Vocational Course', href: '/vocational-course/australia' },
      { label: 'Study & Work Program', href: '/study-work' },
    ]
    : []

  if (pathname?.startsWith('/admin')) return null

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled ? 'shadow-sm py-3 border-b border-gray-100' : 'py-4 border-b border-gray-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0 -ml-1 p-1">
            <Image
              src="/logo-IDEA-HD-fixed-600x96.svg"
              alt="IDEA Institut"
              width={160}
              height={28}
              priority
              className="h-7 sm:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation Links (Tampil setelah unlock) */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-xs sm:text-sm font-semibold transition-all py-1 ${pathname === item.href
                  ? 'text-[#002798] font-extrabold'
                  : 'text-gray-600 hover:text-[#002798]'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Action Bar (Language Toggle) */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            {navItems.length > 0 && (
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="-mr-1.5 p-1.5 rounded-xl text-gray-700 hover:text-[#002798] hover:bg-gray-100/80 focus:outline-none transition-colors"
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Tampil jika unlocked) */}
      {mobileOpen && navItems.length > 0 && (
        <div className="fixed inset-0 z-40 md:hidden pt-20 bg-white/95 backdrop-blur-md px-6 py-6 flex flex-col space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`text-base font-semibold py-3 border-b border-gray-100 ${pathname === item.href ? 'text-[#002798] font-bold' : 'text-gray-800'
                }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}