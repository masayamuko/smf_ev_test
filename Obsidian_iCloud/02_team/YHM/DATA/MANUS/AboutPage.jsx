import React from 'react'
import { Users, Target, Heart, Award, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
// import aboutImage from '../assets/YJGnGQKoHo24.jpg'
// import missionImage from '../assets/ZJGnGQKoHo24.jpg'

const AboutPage = () => {
  const values = [
    {
      icon: Heart,
      title: '一人ひとりを大切に',
      description: '青少年の個性と可能性を尊重し、一人ひとりに寄り添った支援を行います。'
    },
    {
      icon: Users,
      title: '地域との連携',
      description: '地域社会との繋がりを大切にし、協力して青少年の自立を支援します。'
    },
    {
      icon: Target,
      title: '自立への道筋',
      description: '明確な目標設定と段階的な支援により、確実な自立を目指します。'
    },
    {
      icon: Award,
      title: '専門性の向上',
      description: '職員の専門性向上に努め、質の高い支援を提供し続けます。'
    }
  ]

  const history = [
    {
      year: '2010年',
      event: '特定非営利活動法人として設立'
    },
    {
      year: '2011年',
      event: '第1号ホーム「かんらん舎」開設'
    },
    {
      year: '2013年',
      event: '「結ホーム」開設'
    },
    {
      year: '2015年',
      event: '「LEAP」開設（筑紫野市）'
    },
    {
      year: '2017年',
      event: '「スイッチ」開設'
    },
    {
      year: '2020年',
      event: '「TIES」開設（太宰府市）'
    },
    {
      year: '2023年',
      event: '累計支援者数100名を突破'
    }
  ]

  const stats = [
    { number: '5', label: '運営ホーム数', unit: 'ホーム' },
    { number: '30', label: '定員数', unit: '名' },
    { number: '100+', label: '累計支援者数', unit: '名' },
    { number: '13', label: '運営年数', unit: '年' }
  ]

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                法人について
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                特定非営利活動法人 青少年の自立を支える福岡の会は、
                家庭の支えが乏しい青少年の自立支援を目的として設立されました。
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-primary font-semibold">青少年の未来を支える</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 統計情報 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* ミッション・ビジョン */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  私たちのミッション
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  家庭の支えが乏しい青少年が、社会の一員として自立した生活を送れるよう、
                  温かい支援と専門的なケアを提供することです。
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  一人ひとりの個性と可能性を大切にし、その人らしい人生を歩めるよう、
                  継続的で包括的な支援を行っています。
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  ビジョン
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  すべての青少年が希望を持って未来に向かい、
                  地域社会の中で自分らしく生きることができる社会の実現を目指します。
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <Target className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-primary font-semibold">ミッション・ビジョン</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 私たちの価値観 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              私たちの価値観
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              支援活動の基盤となる4つの価値観をご紹介します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              法人の沿革
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              2010年の設立から現在まで、着実に支援の輪を広げてきました。
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* タイムライン線 */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary transform md:-translate-x-0.5"></div>
              
              {history.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* タイムライン点 */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform md:-translate-x-2 z-10"></div>
                  
                  {/* コンテンツ */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <Card className="card-hover">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-3 mb-3">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="text-lg font-bold text-primary">{item.year}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {item.event}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 法人概要 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              法人概要
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">法人名</h4>
                      <p className="text-muted-foreground">
                        特定非営利活動法人 青少年の自立を支える福岡の会
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">設立年月日</h4>
                      <p className="text-muted-foreground">2010年4月1日</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">代表者</h4>
                      <p className="text-muted-foreground">理事長 山田 太郎</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">所在地</h4>
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-5 h-5 text-primary mt-0.5" />
                        <p className="text-muted-foreground">
                          福岡県福岡市<br />
                          （詳細はお問い合わせください）
                        </p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">事業内容</h4>
                      <p className="text-muted-foreground">
                        自立援助ホームの運営<br />
                        青少年の自立支援事業<br />
                        地域連携・啓発活動
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage

