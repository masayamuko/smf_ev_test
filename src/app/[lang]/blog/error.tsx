'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-orange-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="space-y-8">
          <div className="text-6xl font-bold text-orange-500">
            📖
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-gray-900">
              ブログの読み込みに失敗しました
            </h2>
            <p className="text-gray-600">
              申し訳ございません。ブログ記事の読み込み中にエラーが発生しました。
            </p>
          </div>
          <div className="space-y-4">
            <button
              onClick={() => reset()}
              className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              もう一度試す
            </button>
            <div>
              <a
                href="/"
                className="text-orange-600 hover:underline"
              >
                ホームに戻る
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}