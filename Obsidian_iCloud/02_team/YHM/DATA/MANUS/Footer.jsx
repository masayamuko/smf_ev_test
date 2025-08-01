import React from 'react'
import { Link } from 'react-router-dom'
import { Users, Mail, Phone, MapPin, Heart, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: '法人について', href: '/about' },
    { name: '自立援助ホーム', href: '/homes' },
    { name: '求人情報', href: '/jobs' },
    { name: '寄付・支援', href: '/donation' },
  ]

  const homes = [
    { name: 'かんらん舎', href: '/homes#kanransya' },
    { name: '結ホーム', href: '/homes#yui' },
    { name: 'LEAP', href: '/homes#leap' },
    { name: 'スイッチ', href: '/homes#switch' },
    { name: 'TIES', href: '/homes#ties' },
  ]

  return (
    <footer className="bg-primary text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 法人情報 */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-lg">青少年の自立を支える福岡の会</h3>
                <p className="text-sm opacity-90">特定非営利活動法人</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              家庭の支えが乏しい青少年の自立を支援するため、複数の自立援助ホームを運営しています。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* クイックリンク */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">クイックリンク</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 自立援助ホーム */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">自立援助ホーム</h4>
            <ul className="space-y-2">
              {homes.map((home) => (
                <li key={home.name}>
                  <Link
                    to={home.href}
                    className="text-sm opacity-90 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {home.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 連絡先 */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">お問い合わせ</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 opacity-90" />
                <div className="text-sm opacity-90">
                  <p>福岡県福岡市</p>
                  <p>（詳細はお問い合わせください）</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 opacity-90" />
                <span className="text-sm opacity-90">092-XXX-XXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 opacity-90" />
                <span className="text-sm opacity-90">info@example.com</span>
              </div>
            </div>
            <Link to="/donation" className="inline-flex items-center space-x-2 bg-accent hover:bg-accent/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              <Heart className="w-4 h-4" />
              <span>寄付で支援する</span>
            </Link>
          </div>
        </div>

        {/* 下部 */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm opacity-90">
              © {currentYear} 特定非営利活動法人 青少年の自立を支える福岡の会. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                プライバシーポリシー
              </Link>
              <Link to="/terms" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

