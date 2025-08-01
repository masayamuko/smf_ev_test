import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Users, Heart, Briefcase, Home, Star, Quote } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const HomePage = () => {
  const features = [
    {
      icon: Home,
      title: '5つのホーム',
      description: '福岡県内で5つの自立援助ホームを運営し、30名の青少年を支援しています。'
    },
    {
      icon: Users,
      title: '個別支援',
      description: '一人ひとりの状況に合わせた個別支援計画を作成し、きめ細やかなサポートを提供します。'
    },
    {
      icon: Heart,
      title: '温かい環境',
      description: '家庭的な雰囲気の中で、安心して生活できる環境を整えています。'
    }
  ]

  const homes = [
    {
      name: 'かんらん舎',
      location: '福岡市中央区',
      capacity: 6,
      description: '温かい家庭的な雰囲気の中で、個別支援を重視したホームです。'
    },
    {
      name: '結ホーム',
      location: '福岡市南区',
      capacity: 6,
      description: '地域との繋がりを大切にし、社会参加を促進するホームです。'
    },
    {
      name: 'LEAP',
      location: '筑紫野市',
      capacity: 6,
      description: '新しい一歩を踏み出すための支援に特化したホームです。'
    },
    {
      name: 'スイッチ',
      location: '福岡市東区',
      capacity: 6,
      description: '人生の転換点となる支援を提供するホームです。'
    },
    {
      name: 'TIES',
      location: '太宰府市',
      capacity: 6,
      description: '人と人との繋がりを大切にするホームです。'
    }
  ]

  const testimonials = [
    {
      name: '田中さん（元利用者）',
      content: 'ホームでの生活を通じて、自分に自信を持てるようになりました。職員の皆さんの温かいサポートのおかげで、今は自立した生活を送っています。',
      rating: 5
    },
    {
      name: '佐藤さん（支援者）',
      content: '継続的な寄付を通じて、青少年の成長を見守ることができています。活動報告を読むたびに、支援の意義を実感しています。',
      rating: 5
    },
    {
      name: '山田さん（職員）',
      content: '青少年一人ひとりの成長に関われることが、この仕事の最大のやりがいです。チーム一丸となって支援に取り組んでいます。',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                青少年の
                <span className="text-accent">未来</span>を
                <br />
                一緒に支えませんか
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                特定非営利活動法人 青少年の自立を支える福岡の会は、
                家庭の支えが乏しい青少年の自立を支援しています。
                あなたの温かいご支援をお待ちしています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/donation">
                  <Button className="btn-accent px-8 py-3 text-lg">
                    <Heart className="mr-2 w-5 h-5" />
                    寄付で支援する
                  </Button>
                </Link>
                <Link to="/about">
                  <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
                    法人について
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-20 h-20 text-primary mx-auto mb-4" />
                  <p className="text-primary font-semibold text-lg">青少年の未来を支える</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              私たちの特徴
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              青少年一人ひとりに寄り添った支援を行っています。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 自立援助ホーム紹介 */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              自立援助ホーム
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              それぞれ特色のある5つのホームで、青少年の自立を支援しています。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {homes.map((home, index) => (
              <Card key={index} className="card-hover overflow-hidden">
                <div className="relative h-48">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <Home className="w-12 h-12 text-primary mx-auto mb-2" />
                      <p className="text-primary font-semibold">{home.name}</p>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 text-primary">
                    <h3 className="text-xl font-bold">{home.name}</h3>
                    <p className="text-sm opacity-90">{home.location} • 定員{home.capacity}名</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {home.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/homes">
              <Button className="btn-primary px-8 py-3 text-lg">
                全てのホームを見る
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 声・体験談 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              皆様の声
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              利用者、支援者、職員の皆様からいただいた声をご紹介します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>
                  <p className="font-semibold">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたの支援が必要です
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            青少年の明るい未来のために、様々な形でご支援いただけます。
            一人でも多くの青少年が自立できるよう、皆様のご協力をお願いいたします。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donation">
              <Button className="bg-accent hover:bg-accent/90 px-8 py-3 text-lg">
                <Heart className="mr-2 w-5 h-5" />
                寄付で支援する
              </Button>
            </Link>
            <Link to="/jobs">
              <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
                <Briefcase className="mr-2 w-5 h-5" />
                求人情報を見る
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

