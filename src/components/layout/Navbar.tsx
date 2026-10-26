'use client'

// src/components/layout/Navbar.tsx
// Header navigation — Native responsive details/summary dropdown for Language Course

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Pilihan bahasa turunan untuk Language Course
  const languageSubMenu = [
    { label: 'English', href: '/language-course/english' },
    { label: 'German', href: '/language-course/german' },
    { label: 'Spanish', href: '/language-course/spanish' },
    { label: 'French', href: '/language-course/french' },
    { label: 'Chinese', href: '/language-course/chinese' },
    { label: 'Japanese', href: '/language-course/japanese' },
  ]

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

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">

            {/* Language Course Dropdown menggunakan tag details agar 100% pasti bisa diklik */}
            <details className="relative group cursor-pointer">
              <summary className="text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#002798] transition-all py-1 flex items-center gap-1 list-none select-none focus:outline-none">
                <span>Language Course</span>
                <svg className="w-3.5 h-3.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              {/* Dropdown Box */}
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-xl py-2 z-50">
                {languageSubMenu.map((lang) => (
                  <Link
                    key={lang.label}
                    href={lang.href}
                    className="block px-4 py-2 text-xs font-semibold text-gray-700 hover:bg-blue-50 hover:text-[#002798] transition-colors"
                  >
                    {lang.label} Course
                  </Link>
                ))}
              </div>
            </details>

            {/* Vocational Course */}
            <Link
              href="/vocational-course/australia"
              className={`text-xs sm:text-sm font-semibold transition-all py-1 ${pathname.startsWith('/vocational-course')
                  ? 'text-[#002798] font-extrabold'
                  : 'text-gray-600 hover:text-[#002798]'
                }`}
            >
              Vocational Course
            </Link>

            {/* Study & Work Program */}
            <Link
              href="/study-work"
              className={`text-xs sm:text-sm font-semibold transition-all py-1 ${pathname === '/study-work'
                  ? 'text-[#002798] font-extrabold'
                  : 'text-gray-600 hover:text-[#002798]'
                }`}
            >
              Study & Work Program
            </Link>
          </nav>

          {/* Right Action Bar */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageToggle />
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="-mr-1.5 p-1.5 rounded-xl text-gray-700 hover:text-[#002798] hover:bg-gray-100/85 focus:outline-none transition-colors"
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
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-20 bg-white/98 backdrop-blur-md px-6 py-6 flex flex-col space-y-4 overflow-y-auto">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Language Course Options</p>
          <div className="grid grid-cols-2 gap-2 pl-2">
            {languageSubMenu.map((lang) => (
              <Link
                key={lang.label}
                href={lang.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 px-3 rounded-xl bg-gray-50 border border-gray-100 text-xs font-semibold text-gray-800 hover:text-[#002798]"
              >
                {lang.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-3 space-y-3">
            <Link href="/vocational-course/australia" onClick={() => setMobileOpen(false)} className="block text-sm font-semibold text-gray-800">
              Vocational Course
            </Link>
            <Link href="/study-work" onClick={() => setMobileOpen(false)} className="block text-sm font-semibold text-gray-800">
              Study & Work Program
            </Link>
          </div>
        </div>
      )}
    </>
  )
}