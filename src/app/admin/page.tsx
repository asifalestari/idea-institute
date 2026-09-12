// src/app/admin/page.tsx
// Halaman Utama Admin: Tampilan Clean Modern (Menyelaraskan dengan Website Publik)

'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AdminRootPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim() || !password) {
      setError('Email dan password wajib diisi.')
      return
    }

    setLoading(true)
    setError('')

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        router.push('/admin/leads')
        router.refresh()
      } else {
        setError(data.message || 'Login gagal. Periksa kredensial Anda.')
      }
    } catch {
      setError('Terjadi kesalahan jaringan. Coba lagi.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">

      {/* Brand Header / Logo */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center space-y-3">
        <div className="inline-flex p-3 bg-white rounded-2xl shadow-sm border border-gray-100 items-center justify-center">
          <Image
            src="/logo-IDEA-HD-fixed-600x96.svg"
            alt="IDEA Institut"
            width={170}
            height={30}
            priority
            className="h-10 w-auto"
          />
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-normal">
          Admin Portal Login
        </h2>
        <p className="text-xs text-gray-500">
          Sistem Manajemen Lead &amp; Operasional IDEA Institut
        </p>
      </div>

      {/* Form Card */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4">
        <div className="bg-white py-8 px-6 sm:px-10 rounded-3xl border border-gray-100 shadow-xl space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="rounded-xl p-3 bg-red-50 border border-red-200 text-[#DC1E13] text-xs font-bold text-center">
                {error}
              </div>
            )}

            <div>
              <label className="block text-xs font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">
                Email Admin
              </label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@idea-institut.net"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-[#002798] focus:bg-white outline-none text-xs font-semibold transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold text-gray-700 mb-1.5 uppercase tracking-wider">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-200 focus:border-[#002798] focus:bg-white outline-none text-xs font-semibold transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-extrabold text-white bg-[#002798] hover:bg-[#001d6d] shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60 pt-3"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  <span>Memproses...</span>
                </>
              ) : (
                <>
                  <span>Masuk ke Dashboard</span>
                  <span>&rarr;</span>
                </>
              )}
            </button>
          </form>

          {/* Quick Help Box */}
          <div className="pt-4 border-t border-gray-100 text-[11px] text-gray-500 space-y-1">
            <p className="font-bold text-gray-700">Kredensial Default:</p>
            <p>Email: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 font-mono">admin@idea-institut.net</code></p>
            <p>Password: <code className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-800 font-mono">admin123</code></p>
          </div>
        </div>
      </div>

    </div>
  )
}