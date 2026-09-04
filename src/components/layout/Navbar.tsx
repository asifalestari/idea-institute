'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/context/LanguageContext'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  const navItems = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.languageCourse, href: '/language-course' },
    { label: t.nav.vocationalCourse, href: '/vocational-course' },
    { label: t.nav.studyWork, href: '/study-work' },
    { label: t.nav.about, href: '/#contact-info' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return false
    return pathname.startsWith(href)
  }

  if (pathname?.startsWith('/admin')) return null

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-4 border-b border-gray-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo (Flush with left container margin) */}
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
            {navItems.map((item) => {
              const active = isActive(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xs sm:text-sm font-semibold transition-all relative py-1 ${active ? 'text-gray-900 font-bold' : 'text-gray-600 hover:text-[#002798]'
                    }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#DC1E13] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Action Bar: Language Toggle (Minimalist & Clean) */}
          <div className="hidden md:flex items-center">
            <LanguageToggle />
          </div>

          {/* Mobile Actions: Language Toggle + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageToggle />
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
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden pt-20 bg-white/95 backdrop-blur-md px-6 py-6 flex flex-col space-y-4">
          {navItems.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-semibold py-3 border-b border-gray-100 ${active ? 'text-[#DC1E13]' : 'text-gray-800'
                  }`}
              >
                {item.label}
              </Link>
            )
          })}
          <div className="pt-4">
            <a
              href="https://wa.me/6281297654332"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-bold text-white bg-[#002798]"
            >
              <span>{t.nav.talkToUs}</span>
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </>
  )
}
