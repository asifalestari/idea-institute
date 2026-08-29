'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Course',
    href: '/course',
    children: [
      { label: '🇬🇧 English', href: '/course/english' },
      { label: '🇩🇪 German', href: '/course/german' },
      { label: '🇪🇸 Spanish', href: '/course/spanish' },
      { label: '🇫🇷 French', href: '/course/french' },
      { label: '🇨🇳 Chinese', href: '/course/chinese' },
      { label: '🇯🇵 Japanese', href: '/course/japanese' },
    ],
  },
  {
    label: 'Professional',
    href: '/professional',
    children: [
      { label: '💼 Professional Training', href: '/professional/training' },
      { label: '📚 Literacy', href: '/professional/literacy' },
      { label: '🔢 Numeracy', href: '/professional/numeracy' },
    ],
  },
  {
    label: 'Opportunities',
    href: '/opportunities',
    children: [
      { label: '🎓 Study Abroad', href: '/opportunities/study-abroad' },
      { label: '✈️ Study & Work', href: '/opportunities/study-and-work' },
      { label: '💼 Work Abroad', href: '/opportunities/work-abroad' },
      { label: '🔧 Vocational Training', href: '/opportunities/vocational-training' },
    ],
  },
  {
    label: 'About Us',
    href: '/about',
    children: [
      { label: '🏛️ About IDEA', href: '/about' },
      { label: '👥 Our Team', href: '/about/team' },
      { label: '🤝 Partners', href: '/about/partners' },
      { label: '📞 Contact', href: '/about/contact' },
    ],
  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setActiveDropdown(null)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
            : 'bg-white py-4'
        }`}
      >
        <nav className="container-section flex items-center justify-between gap-4" ref={dropdownRef}>
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo-IDEA-HD-fixed-600x96.svg"
              alt="IDEA Institut"
              width={160}
              height={26}
              priority
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label} className="relative">
                {item.children ? (
                  <button
                    onClick={() =>
                      setActiveDropdown(activeDropdown === item.label ? null : item.label)
                    }
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                      pathname.startsWith(item.href) && item.href !== '/'
                        ? 'text-primary'
                        : 'text-gray-700 hover:text-navy'
                    }`}
                    style={
                      pathname.startsWith(item.href) && item.href !== '/'
                        ? { color: '#DC1E13' }
                        : {}
                    }
                  >
                    {item.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors block ${
                      pathname === item.href ? 'text-primary' : 'text-gray-700 hover:text-navy'
                    }`}
                    style={pathname === item.href ? { color: '#DC1E13' } : {}}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                    {/* Triangle */}
                    <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={`block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-gray-50 ${
                          pathname === child.href ? 'text-primary font-semibold' : 'text-gray-700'
                        }`}
                        style={pathname === child.href ? { color: '#DC1E13' } : {}}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <Link
            href="/about/contact"
            className="hidden lg:inline-flex btn-primary text-sm py-2.5 px-5 shrink-0"
          >
            Konsultasi Gratis
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 space-y-1.5">
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-0.5 bg-gray-700 transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          mobileOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            mobileOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileOpen(false)}
        />

        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-white shadow-2xl transition-transform duration-300 ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <Link href="/">
              <Image
                src="/logo-IDEA-HD-fixed-600x96.svg"
                alt="IDEA Institut"
                width={120}
                height={20}
                className="h-6 w-auto"
              />
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-1 text-gray-500 hover:text-gray-700">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Nav Items */}
          <nav className="flex-1 overflow-y-auto px-4 py-3">
            {navItems.map((item) => (
              <div key={item.label} className="mb-1">
                {item.children ? (
                  <>
                    <button
                      onClick={() =>
                        setMobileAccordion(mobileAccordion === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform ${mobileAccordion === item.label ? 'rotate-180' : ''}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileAccordion === item.label && (
                      <div className="ml-4 mt-1 space-y-1 pb-2">
                        <Link
                          href={item.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg font-medium"
                        >
                          Lihat Semua {item.label}
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-3 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-5 py-4 border-t border-gray-100">
            <Link href="/about/contact" className="btn-primary w-full justify-center text-sm">
              Konsultasi Gratis
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
