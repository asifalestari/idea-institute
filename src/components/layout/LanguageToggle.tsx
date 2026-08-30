'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="inline-flex items-center p-1 rounded-2xl bg-gray-100/90 border border-gray-200/80 shadow-inner">
      <button
        onClick={() => setLanguage('id')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-black transition-all duration-200 ${
          language === 'id'
            ? 'bg-white text-[#002798] shadow-sm scale-100'
            : 'text-gray-500 hover:text-gray-900'
        }`}
        aria-label="Switch to Indonesian"
      >
        <span>🇮🇩</span>
        <span>ID</span>
      </button>

      <button
        onClick={() => setLanguage('en')}
        className={`flex items-center gap-1.5 px-2.5 py-1 rounded-xl text-xs font-black transition-all duration-200 ${
          language === 'en'
            ? 'bg-white text-[#002798] shadow-sm scale-100'
            : 'text-gray-500 hover:text-gray-900'
        }`}
        aria-label="Switch to English"
      >
        <span>🇬🇧</span>
        <span>EN</span>
      </button>
    </div>
  )
}
