import React, { useState } from 'react'
import { MapPin, Clock, DollarSign, Users, Heart, Star, ArrowRight, Send } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
// import jobImage from '../assets/YJGnGQKoHo24.jpg'

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null)

  const jobs = [
    {
      id: 1,
      title: '生活支援員',
      location: '福岡市内各ホーム',
      type: '正社員',
      salary: '月給 22万円〜28万円',
      experience: '未経験歓迎',
      description: '自立援助ホームで生活する青少年の日常生活をサポートする仕事です。一人ひとりに寄り添い、自立に向けた支援を行います。',
      requirements: [
        '高校卒業以上',
        '普通自動車免許（AT限定可）',
        '青少年支援に関心のある方',
        '夜勤対応可能な方'
      ],
      benefits: [
        '社会保険完備',
        '退職金制度',
        '研修制度充実',
        '資格取得支援',
        '有給休暇取得推奨'
      ],
      schedule: 'シフト制（早番・遅番・夜勤）',
      urgent: true
    },
    {
      id: 2,
      title: '相談員（ソーシャルワーカー）',
      location: '法人本部・各ホーム',
      type: '正社員',
      salary: '月給 25万円〜32万円',
      experience: '経験者優遇',
      description: '青少年やその家族からの相談に応じ、適切な支援計画を立案・実行する専門職です。関係機関との連携も重要な業務です。',
      requirements: [
        '社会福祉士または精神保健福祉士',
        '相談援助業務経験2年以上',
        '普通自動車免許',
        'PCスキル（Word、Excel）'
      ],
      benefits: [
        '社会保険完備',
        '退職金制度',
        '専門研修参加支援',
        '学会参加費補助',
        '資格更新費用補助'
      ],
      schedule: '平日 9:00-18:00（土日祝休み）',
      urgent: false
    },
    {
      id: 3,
      title: '事務職員',
      location: '法人本部（福岡市）',
      type: '正社員',
      salary: '月給 18万円〜24万円',
      experience: '未経験歓迎',
      description: '法人運営に関わる事務全般を担当します。経理、人事、総務など幅広い業務に携わり、法人の基盤を支える重要な役割です。',
      requirements: [
        '高校卒業以上',
        'PCスキル（Word、Excel必須）',
        '簿記3級以上歓迎',
        'コミュニケーション能力'
      ],
      benefits: [
        '社会保険完備',
        '退職金制度',
        '研修制度',
        '資格取得支援',
        '残業少なめ'
      ],
      schedule: '平日 9:00-17:30（土日祝休み）',
      urgent: false
    },
    {
      id: 4,
      title: '調理員（パート）',
      location: '各ホーム',
      type: 'パート',
      salary: '時給 950円〜1,200円',
      experience: '未経験歓迎',
      description: 'ホームで生活する青少年の食事作りを担当します。栄養バランスを考えた温かい食事を提供し、青少年の健康をサポートします。',
      requirements: [
        '調理経験歓迎（家庭料理レベルでOK）',
        '食品衛生責任者歓迎',
        '週3日以上勤務可能な方',
        '早朝・夕方勤務可能な方'
      ],
      benefits: [
        '労災保険',
        '交通費支給',
        '制服貸与',
        '食事補助',
        '時間相談可'
      ],
      schedule: '早番 6:00-10:00 / 夕番 16:00-20:00',
      urgent: true
    }
  ]

  const testimonials = [
    {
      name: '田中 美咲さん',
      position: '生活支援員（入職3年目）',
      content: '最初は不安でしたが、先輩職員の丁寧な指導と研修制度のおかげで、安心して働けています。子どもたちの成長を見守ることができ、とてもやりがいを感じています。',
      rating: 5
    },
    {
      name: '佐藤 健太さん',
      position: '相談員（入職5年目）',
      content: '専門性を活かしながら、青少年の人生に深く関わることができる貴重な仕事です。チームワークが良く、職員同士で支え合いながら業務に取り組んでいます。',
      rating: 5
    },
    {
      name: '山田 花子さん',
      position: '調理員（入職2年目）',
      content: 'パートでも働きやすい環境で、時間の融通も利きます。子どもたちが「美味しい」と言ってくれる時が一番嬉しいです。家庭的な雰囲気で働けています。',
      rating: 5
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: '充実した研修制度',
      description: '入職時研修から専門研修まで、スキルアップをサポートします。'
    },
    {
      icon: Users,
      title: 'チームワーク重視',
      description: '職員同士の連携を大切にし、相談しやすい環境を作っています。'
    },
    {
      icon: Star,
      title: 'ワークライフバランス',
      description: '有給取得推奨、残業削減など働きやすい環境づくりに取り組んでいます。'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="hero-gradient text-white section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                求人情報
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                青少年の未来を一緒に支えませんか？
                私たちと一緒に働く仲間を募集しています。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
                  募集職種を見る
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button className="btn-accent px-8 py-3 text-lg">
                  <Send className="mr-2 w-5 h-5" />
                  応募・お問い合わせ
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <Users className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-primary font-semibold">一緒に働きませんか</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 働く魅力 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              私たちと働く魅力
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              青少年の成長を支える、やりがいのある職場環境をご紹介します。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="card-hover text-center">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* 募集職種 */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              募集職種
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              現在募集中の職種をご紹介します。詳細はお気軽にお問い合わせください。
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job) => (
              <Card key={job.id} className="card-hover overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{job.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <Badge variant={job.type === '正社員' ? 'default' : 'secondary'}>
                          {job.type}
                        </Badge>
                      </div>
                    </div>
                    {job.urgent && (
                      <Badge className="bg-accent text-white">
                        急募
                      </Badge>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      <span className="font-medium">{job.salary}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span className="text-sm">{job.schedule}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-medium text-sm mb-2">応募要件</h4>
                      <ul className="text-xs space-y-1">
                        {job.requirements.slice(0, 2).map((req, index) => (
                          <li key={index} className="flex items-start space-x-1">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm mb-2">待遇・福利厚生</h4>
                      <ul className="text-xs space-y-1">
                        {job.benefits.slice(0, 2).map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-1">
                            <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => setSelectedJob(job)}
                      className="flex-1"
                    >
                      詳細を見る
                    </Button>
                    <Button size="sm" className="flex-1">
                      応募する
                      <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 職員の声 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              職員の声
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              実際に働いている職員の生の声をお聞きください。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 応募の流れ */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              応募の流れ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              応募から入職までの流れをご説明します。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: '応募', description: 'お電話またはメールでご応募ください。履歴書をお送りいただきます。' },
              { step: '2', title: '書類選考', description: '履歴書を拝見し、書類選考を行います。結果は1週間以内にご連絡します。' },
              { step: '3', title: '面接', description: '面接を実施します。職場見学も同時に行い、雰囲気を感じていただけます。' },
              { step: '4', title: '入職', description: '面接結果をお伝えし、入職日を調整します。研修からスタートします。' }
            ].map((item, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            一緒に働きませんか？
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            青少年の未来を支える、やりがいのある仕事です。
            まずはお気軽にお問い合わせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 px-8 py-3 text-lg">
              <Send className="mr-2 w-5 h-5" />
              応募・お問い合わせ
            </Button>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              <Users className="mr-2 w-5 h-5" />
              職場見学を申し込む
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default JobsPage

