'use client'

// src/app/admin/login/page.tsx
// Login page for IDEA Institut Admin Portal

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function AdminLoginPage() {
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
    <div className="min-h-screen bg-[#071330] flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Ambient background glows */}
      <div
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full opacity-30 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, #002798 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full opacity-25 pointer-events-none blur-3xl"
        style={{ background: 'radial-gradient(circle, #F4A019 0%, transparent 70%)' }}
      />

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10 text-center space-y-4">
        <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 shadow-xl">
          <Image
            src="/logo-IDEA-HD-fixed-600x96.svg"
            alt="IDEA Institut"
            width={180}
            height={32}
            className="h-8 w-auto brightness-0 invert"
          />
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Admin Portal
        </h2>
        <p className="text-xs text-blue-200/80">
          Sistem Manajemen Lead &amp; Operasional IDEA Institut
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10 px-4">
        <div className="bg-white/10 backdrop-blur-xl py-8 px-6 sm:px-10 rounded-3xl border border-white/15 shadow-2xl space-y-6">
          <form onSubmit={handleLogin} className="space-y-5">
            {error && (
              <div className="rounded-xl p-3.5 bg-red-500/20 border border-red-400/40 text-red-200 text-xs flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-1.5">
                Email Admin
              </label>
              <input
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@idea-institut.net"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-blue-300/50 border border-white/15 focus:border-[#F4A019] focus:ring-2 focus:ring-[#F4A019]/40 outline-none text-sm transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-1.5">
                Password
              </label>
              <input
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder-blue-300/50 border border-white/15 focus:border-[#F4A019] focus:ring-2 focus:ring-[#F4A019]/40 outline-none text-sm transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-sm font-extrabold text-gray-950 bg-[#F4A019] hover:bg-[#e08f10] shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-60"
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
          <div className="pt-4 border-t border-white/10 text-[11px] text-blue-200/70 space-y-1">
            <p className="font-semibold text-blue-100">Kredensial Default:</p>
            <p>Email: <code className="bg-white/10 px-1.5 py-0.5 rounded text-amber-300">admin@idea-institut.net</code></p>
            <p>Password: <code className="bg-white/10 px-1.5 py-0.5 rounded text-amber-300">admin123</code></p>
          </div>
        </div>
      </div>
    </div>
  )
}
