"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function LanguageSwitcher() {
  const pathname = usePathname()
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

  return (
    <div className="flex space-x-2">
      <Link href={getLocalizedPath('ja')} className={`px-3 py-1 rounded-md ${currentLang === 'ja' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        日本語
      </Link>
      <Link href={getLocalizedPath('en')} className={`px-3 py-1 rounded-md ${currentLang === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
        English
      </Link>
    </div>
  )
}
