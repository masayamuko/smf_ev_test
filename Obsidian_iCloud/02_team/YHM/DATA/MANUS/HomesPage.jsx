import React from 'react'
import { MapPin, Users, Clock, Phone, Mail, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
// import homeImage1 from '../assets/HwiKGAKoHo24.jpg'
// import homeImage2 from '../assets/YJGnGQKoHo24.jpg'
// import homeImage3 from '../assets/ZJGnGQKoHo24.jpg'

const HomesPage = () => {
  const homes = [
    {
      id: 'kanransya',
      name: 'かんらん舎',
      location: '福岡市中央区',
      capacity: 6,
      established: '2011年',
      description: '温かい家庭的な雰囲気の中で、個別支援を重視したホームです。一人ひとりの個性を大切にし、自立に向けた丁寧なサポートを行っています。',
      features: [
        '個別支援計画の作成',
        '就労支援・職業訓練',
        '学習支援',
        '生活スキル指導',
        '心理的サポート'
      ],
      schedule: {
        weekday: '6:30 起床 → 7:30 朝食 → 8:30 出勤・通学 → 18:00 帰宅 → 19:00 夕食 → 22:00 就寝',
        weekend: '8:00 起床 → 9:00 朝食 → 自由時間・外出 → 18:00 帰宅 → 19:00 夕食 → 22:00 就寝'
      },
      image: 'placeholder',
      contact: {
        phone: '092-XXX-XXXX',
        email: 'kanransya@example.com'
      }
    },
    {
      id: 'yui',
      name: '結ホーム',
      location: '福岡市南区',
      capacity: 6,
      established: '2013年',
      description: '地域との繋がりを大切にし、社会参加を促進するホームです。地域のボランティア活動や行事への参加を通じて、社会性を育みます。',
      features: [
        '地域連携プログラム',
        'ボランティア活動',
        '社会参加支援',
        '進路相談・指導',
        '家族関係調整'
      ],
      schedule: {
        weekday: '6:30 起床 → 7:30 朝食 → 8:30 出勤・通学 → 18:00 帰宅 → 19:00 夕食 → 22:00 就寝',
        weekend: '8:00 起床 → 9:00 朝食 → 地域活動・外出 → 18:00 帰宅 → 19:00 夕食 → 22:00 就寝'
      },
      image: 'placeholder',
      contact: {
        phone: '092-XXX-XXXX',
        email: 'yui@example.com'
      }
    },
    {
      id: 'leap',
      name: 'LEAP',
      location: '筑紫野市',
      capacity: 6,
      established: '2015年',
      description: '新しい一歩を踏み出すための支援に特化したホームです。自立への意欲を高め、具体的な目標設定と達成をサポートします。',
      features: [
        '目標設定・達成支援',
        'キャリアカウンセリング',
        '資格取得支援',
        '金銭管理指導',
        'アフターケア'
      ],
      schedule: {
        weekday: '6:30 起床 → 7:30 朝食 → 8:30 出勤・通学 → 18:00 帰宅 → 19:00 夕食 → 22:00 就寝',
        weekend: '8:00 起床 → 9:00 朝食 → 自主活動・学習 → 18:00 帰宅 → 19:00 夕食 → 22:00 就寝'
      },
      image: 'placeholder',
      contact: {
        phone: '092-XXX-XXXX',
        email: 'leap@example.com'
      }
    },
    {
      id: 'switch',
      name: 'スイッチ',
      location: '福岡市東区',
      capacity: 6,
      established: '2017年',
      description: '人生の転換点となる支援を提供するホームです。過去の困難を乗り越え、新しい自分に出会うためのサポートを行います。',
      features: [
        'トラウマケア',
        'メンタルヘルス支援',
        '人間関係構築支援',
        '自己肯定感向上',
        'ピアサポート'
      ],
      schedule: {
        weekday: '6:30 起床 → 7:30 朝食 → 8:30 出勤・通学 → 18:00 帰宅 → 19:00 夕食 → 22:00 就寝',
        weekend: '8:00 起床 → 9:00 朝食 → カウンセリング・活動 → 18:00 帰宅 → 19:00 夕食 → 22:00 就寝'
      },
      image: 'placeholder',
      contact: {
        phone: '092-XXX-XXXX',
        email: 'switch@example.com'
      }
    },
    {
      id: 'ties',
      name: 'TIES',
      location: '太宰府市',
      capacity: 6,
      established: '2020年',
      description: '人と人との繋がりを大切にするホームです。信頼関係の構築を基盤とし、安心できる環境の中で自立を支援します。',
      features: [
        '信頼関係構築',
        'コミュニケーション支援',
        '社会復帰プログラム',
        '継続的フォロー',
        '家族再統合支援'
      ],
      schedule: {
        weekday: '6:30 起床 → 7:30 朝食 → 8:30 出勤・通学 → 18:00 帰宅 → 19:00 夕食 → 22:00 就寝',
        weekend: '8:00 起床 → 9:00 朝食 → グループ活動 → 18:00 帰宅 → 19:00 夕食 → 22:00 就寝'
      },
      image: 'placeholder',
      contact: {
        phone: '092-XXX-XXXX',
        email: 'ties@example.com'
      }
    }
  ]

  const overallStats = [
    { number: '5', label: 'ホーム数', unit: 'ホーム' },
    { number: '30', label: '総定員数', unit: '名' },
    { number: '100+', label: '累計支援者数', unit: '名' },
    { number: '24', label: '職員数', unit: '名' }
  ]

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            自立援助ホーム
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            福岡県内で5つのホームを運営し、それぞれ特色のある支援を提供しています。
            青少年一人ひとりのニーズに合わせた個別支援を行っています。
          </p>
        </div>
      </section>

      {/* 統計情報 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {overallStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-medium text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.unit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ホーム一覧 */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="space-y-16">
            {homes.map((home, index) => (
              <div key={home.id} id={home.id} className="scroll-mt-20">
                <Card className="overflow-hidden shadow-lg">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${
                    index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                  }`}>
                    {/* 画像 */}
                    <div className="relative h-64 lg:h-auto">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Users className="w-12 h-12 text-primary mx-auto mb-2" />
                          <p className="text-primary font-semibold text-sm">{home.name}</p>
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold">{home.name}</h3>
                        <div className="flex items-center space-x-4 text-sm opacity-90">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{home.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>定員{home.capacity}名</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* コンテンツ */}
                    <CardContent className={`p-8 ${
                      index % 2 === 1 ? 'lg:col-start-1' : ''
                    }`}>
                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                            <span>{home.established}設立</span>
                          </div>
                          <p className="text-lg leading-relaxed">
                            {home.description}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-lg mb-3">主な支援内容</h4>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {home.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-primary rounded-full"></div>
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold text-lg mb-3">一日のスケジュール例</h4>
                          <div className="space-y-3">
                            <div>
                              <h5 className="font-medium text-sm text-primary mb-1">平日</h5>
                              <p className="text-sm text-muted-foreground">{home.schedule.weekday}</p>
                            </div>
                            <div>
                              <h5 className="font-medium text-sm text-primary mb-1">休日</h5>
                              <p className="text-sm text-muted-foreground">{home.schedule.weekend}</p>
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <div className="flex items-center space-x-2 text-sm">
                            <Phone className="w-4 h-4 text-primary" />
                            <span>{home.contact.phone}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm">
                            <Mail className="w-4 h-4 text-primary" />
                            <span>{home.contact.email}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 入居について */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              入居について
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              自立援助ホームへの入居をご検討の方は、まずはお気軽にご相談ください。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">お問い合わせ</h3>
                <p className="text-muted-foreground text-sm">
                  電話またはメールでお気軽にご相談ください。
                  専門スタッフが丁寧に対応いたします。
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">面談・見学</h3>
                <p className="text-muted-foreground text-sm">
                  ホームの見学と面談を行います。
                  ご本人の状況やニーズをお聞かせください。
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h3 className="font-semibold text-lg mb-3">入居決定</h3>
                <p className="text-muted-foreground text-sm">
                  面談結果を踏まえ、最適なホームでの
                  生活をスタートします。
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button className="btn-primary px-8 py-3 text-lg">
              <Phone className="mr-2 w-5 h-5" />
              入居相談・お問い合わせ
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomesPage

