'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function CoursesPage() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simple password check (in production, use proper authentication)
    if (password === 'course2024') {
      setIsAuthenticated(true)
      setError('')
      localStorage.setItem('courseAuth', 'true')
    } else {
      setError('パスワードが間違っています')
    }
  }

  const courses = [
    {
      id: 1,
      title: 'AI活用基礎講座',
      description: 'ChatGPTを使った業務効率化の基本',
      videoCount: 12,
      duration: '3時間',
      thumbnail: '/course-thumbnails/ai-basics.jpg'
    },
    {
      id: 2,
      title: '第二の自分構築法',
      description: 'AIを自分の分身として育てる独自手法',
      videoCount: 8,
      duration: '2時間',
      thumbnail: '/course-thumbnails/second-self.jpg'
    },
    {
      id: 3,
      title: '3Dモデリング入門',
      description: 'Blenderを使った3Dモデリングの基礎',
      videoCount: 15,
      duration: '4時間',
      thumbnail: '/course-thumbnails/3d-modeling.jpg'
    }
  ]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">講座エリア</h1>
            <p className="text-gray-600">パスワードを入力してください</p>
          </div>
          
          <form onSubmit={handlePasswordSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                パスワード
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="パスワードを入力"
                required
              />
            </div>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              ログイン
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">講座一覧</h1>
          <button
            onClick={() => {
              localStorage.removeItem('courseAuth')
              setIsAuthenticated(false)
            }}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            ログアウト
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-2">📚</div>
                  <div className="text-sm opacity-80">Course {course.id}</div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span>{course.videoCount}本の動画</span>
                  <span>{course.duration}</span>
                </div>
                
                <button
                  onClick={() => router.push(`/courses/${course.id}`)}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  講座を開始
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}