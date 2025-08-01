import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Users, Heart, Briefcase } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: ''
  })

  const contactMethods = [
    {
      icon: Phone,
      title: 'お電話でのお問い合わせ',
      content: '092-XXX-XXXX',
      description: '平日 9:00-18:00（土日祝除く）',
      action: 'tel:092-XXX-XXXX'
    },
    {
      icon: Mail,
      title: 'メールでのお問い合わせ',
      content: 'info@example.com',
      description: '24時間受付（返信は営業時間内）',
      action: 'mailto:info@example.com'
    },
    {
      icon: MapPin,
      title: '所在地',
      content: '福岡県福岡市',
      description: '詳細な住所はお問い合わせください',
      action: null
    }
  ]

  const inquiryCategories = [
    {
      id: 'admission',
      title: '入居相談',
      icon: Users,
      description: '自立援助ホームへの入居に関するご相談',
      color: 'bg-blue-500'
    },
    {
      id: 'donation',
      title: '寄付・支援',
      icon: Heart,
      description: '寄付やボランティアに関するお問い合わせ',
      color: 'bg-red-500'
    },
    {
      id: 'jobs',
      title: '求人・採用',
      icon: Briefcase,
      description: '求人情報や採用に関するお問い合わせ',
      color: 'bg-green-500'
    },
    {
      id: 'general',
      title: 'その他',
      icon: MessageCircle,
      description: '法人に関する一般的なお問い合わせ',
      color: 'bg-gray-500'
    }
  ]

  const faqItems = [
    {
      category: '入居について',
      questions: [
        {
          q: '入居の条件はありますか？',
          a: '15歳から20歳までの青少年で、家庭の支えが乏しく自立を目指している方が対象です。詳細はお問い合わせください。'
        },
        {
          q: '入居期間はどのくらいですか？',
          a: '原則として2年間ですが、個々の状況に応じて延長も可能です。自立の準備が整うまでサポートします。'
        },
        {
          q: '費用はかかりますか？',
          a: '生活費として月額数万円をご負担いただきますが、収入に応じて調整いたします。詳細はご相談ください。'
        }
      ]
    },
    {
      category: '支援について',
      questions: [
        {
          q: '寄付の方法を教えてください',
          a: 'クレジットカード、銀行振込、物品寄付など様々な方法があります。継続寄付も可能です。'
        },
        {
          q: 'ボランティアはできますか？',
          a: 'はい、可能です。学習支援、レクリエーション活動、イベントのお手伝いなど様々な形でご参加いただけます。'
        },
        {
          q: '税制優遇はありますか？',
          a: '当法人は認定NPO法人のため、寄付金控除の対象となります。寄付証明書を発行いたします。'
        }
      ]
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // フォーム送信処理
    console.log('Form submitted:', formData)
  }

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            お問い合わせ
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            ご質問やご相談がございましたら、お気軽にお問い合わせください。
            専門スタッフが丁寧にお答えいたします。
          </p>
        </div>
      </section>

      {/* 連絡先情報 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              連絡先情報
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              以下の方法でお問い合わせいただけます。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{method.title}</h3>
                    <div className="text-lg font-medium text-primary mb-2">
                      {method.content}
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {method.description}
                    </p>
                    {method.action && (
                      <Button variant="outline" asChild>
                        <a href={method.action}>
                          連絡する
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* お問い合わせカテゴリ */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              お問い合わせ内容
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              お問い合わせの内容に応じて、適切な担当者がご対応いたします。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inquiryCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card 
                  key={category.id} 
                  className="card-hover cursor-pointer"
                  onClick={() => setFormData(prev => ({ ...prev, category: category.id }))}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* お問い合わせフォーム */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                お問い合わせフォーム
              </h2>
              <p className="text-lg text-muted-foreground">
                以下のフォームにご記入の上、送信してください。
              </p>
            </div>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        お名前 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="山田 太郎"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        メールアドレス <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        電話番号
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="090-1234-5678"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        お問い合わせ種別 <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="category"
                        value={formData.category}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      >
                        <option value="">選択してください</option>
                        <option value="admission">入居相談</option>
                        <option value="donation">寄付・支援</option>
                        <option value="jobs">求人・採用</option>
                        <option value="general">その他</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      件名 <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="お問い合わせの件名を入力してください"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      お問い合わせ内容 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="お問い合わせ内容を詳しくご記入ください"
                    />
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">
                      <strong>個人情報の取り扱いについて</strong>
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      ご入力いただいた個人情報は、お問い合わせへの回答のみに使用し、
                      適切に管理いたします。第三者への提供は行いません。
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <Button type="submit" className="btn-primary px-8 py-3 text-lg">
                      <Send className="mr-2 w-5 h-5" />
                      送信する
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* よくある質問 */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              よくある質問
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              お問い合わせの多いご質問をまとめました。
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            {faqItems.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((item, itemIndex) => (
                    <Card key={itemIndex} className="card-hover">
                      <CardContent className="p-6">
                        <h4 className="font-semibold text-lg mb-3 text-primary">
                          Q. {item.q}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          A. {item.a}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 営業時間・アクセス */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">営業時間</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">平日</span>
                    <span>9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">土曜日</span>
                    <span>9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">日曜・祝日</span>
                    <span className="text-muted-foreground">休業</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>緊急時の連絡について</strong><br />
                    営業時間外でも緊急の場合は、各ホームに直接お電話ください。
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-primary" />
                  <h3 className="text-2xl font-bold">アクセス</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">法人本部</h4>
                    <p className="text-muted-foreground">
                      福岡県福岡市<br />
                      （詳細な住所はお問い合わせください）
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">最寄り駅</h4>
                    <p className="text-muted-foreground">
                      地下鉄○○線 ○○駅より徒歩10分
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">駐車場</h4>
                    <p className="text-muted-foreground">
                      専用駐車場あり（2台分）
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="outline" className="w-full">
                    <MapPin className="mr-2 w-4 h-4" />
                    地図を見る
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage

