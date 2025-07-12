"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

interface LanguageSwitcherProps {
  variant?: 'compact' | 'mobile'
}

export default function LanguageSwitcher({ variant = 'compact' }: LanguageSwitcherProps) {
  const pathname = usePathname()
  
  // pathnameがnullの場合のフォールバック
  if (!pathname) {
    return null
  }
  
  const currentLang = pathname.split('/')[1] || 'ja' // URLの最初のセグメントから言語を取得

  const getLocalizedPath = (lang: string) => {
    const segments = pathname.split('/')
    if (segments[1] === 'ja' || segments[1] === 'en') {
      segments[1] = lang // 言語セグメントを置き換え
    } else {
      segments.splice(1, 0, lang) // 言語セグメントを挿入
    }
    return segments.join('/')
  }

  if (variant === 'mobile') {
    return (
      <div className="flex space-x-3 py-3">
        <Link 
          href={getLocalizedPath('ja')} 
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            currentLang === 'ja' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="mr-2">🇯🇵</span>
          日本語
        </Link>
        <Link 
          href={getLocalizedPath('en')} 
          className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
            currentLang === 'en' 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          <span className="mr-2">🇺🇸</span>
          English
        </Link>
      </div>
    )
  }

  // コンパクト版（ナビゲーション用）
  return (
    <div className="flex bg-gray-100 rounded-lg p-1">
      <Link 
        href={getLocalizedPath('ja')} 
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'ja' 
            ? 'bg-white text-gray-900 shadow-sm' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        🇯🇵 JP
      </Link>
      <Link 
        href={getLocalizedPath('en')} 
        className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
          currentLang === 'en' 
            ? 'bg-white text-gray-900 shadow-sm' 
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        🇺🇸 EN
      </Link>
    </div>
  )
}
