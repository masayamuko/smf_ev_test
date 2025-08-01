import React, { useState } from 'react'
import { Heart, CreditCard, Banknote, Users, Target, ArrowRight, Check, Gift, Calendar } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
// import donationImage from '../assets/HwiKGAKoHo24.jpg'
// import supportImage from '../assets/YJGnGQKoHo24.jpg'

const DonationPage = () => {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const [donationType, setDonationType] = useState('monthly')

  const donationAmounts = [
    { amount: 1000, description: '1ヶ月の食材費の一部' },
    { amount: 3000, description: '1人の1日の生活費' },
    { amount: 5000, description: '学習教材・参考書代' },
    { amount: 10000, description: '職業訓練・資格取得支援' },
    { amount: 30000, description: '1人の1ヶ月の生活費' },
    { amount: 50000, description: '進学・就職準備支援' }
  ]

  const usageExamples = [
    {
      icon: Users,
      title: '生活支援',
      description: '食事、住居、衣類など基本的な生活に必要な支援',
      percentage: 40
    },
    {
      icon: Target,
      title: '自立支援',
      description: '就労支援、職業訓練、資格取得などの自立に向けた支援',
      percentage: 30
    },
    {
      icon: Heart,
      title: '心理的支援',
      description: 'カウンセリング、メンタルヘルスケアなどの心理的支援',
      percentage: 20
    },
    {
      icon: Gift,
      title: '教育・文化活動',
      description: '学習支援、文化活動、レクリエーションなどの支援',
      percentage: 10
    }
  ]

  const supportMethods = [
    {
      title: '継続寄付（マンスリーサポーター）',
      description: '毎月一定額をご寄付いただく継続的な支援です。安定した運営の基盤となります。',
      benefits: ['税制優遇あり', '年次報告書送付', '感謝状贈呈', 'イベント招待'],
      minAmount: '月額1,000円〜',
      recommended: true
    },
    {
      title: '単発寄付',
      description: 'お好きなタイミングで、お好きな金額をご寄付いただけます。',
      benefits: ['税制優遇あり', '寄付証明書発行', '活動報告送付'],
      minAmount: '1,000円〜',
      recommended: false
    },
    {
      title: '物品寄付',
      description: '生活用品、学習用品、食材などの物品でのご支援も受け付けています。',
      benefits: ['事前相談制', '配送料負担なし', '感謝状贈呈'],
      minAmount: '事前相談',
      recommended: false
    }
  ]

  const successStories = [
    {
      title: 'Aさん（19歳）の場合',
      story: '高校中退後、ホームに入居。職業訓練を受けながら調理師免許を取得し、現在は地元のレストランで働いています。',
      support: '職業訓練費、資格取得費、就職活動支援'
    },
    {
      title: 'Bさん（18歳）の場合',
      story: 'ホームでの生活を通じて高校を卒業。大学進学を目指し、現在は予備校に通いながらアルバイトをしています。',
      support: '学習支援、進学準備費、生活費'
    },
    {
      title: 'Cさん（20歳）の場合',
      story: 'IT関連の専門学校を卒業後、システム開発会社に就職。現在は一人暮らしをしながら自立した生活を送っています。',
      support: '専門学校学費、就職活動支援、一人暮らし準備費'
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
                寄付・支援
              </h1>
              <p className="text-xl opacity-90 leading-relaxed">
                あなたの温かいご支援が、青少年の明るい未来を創ります。
                一人ひとりの自立を支える力になってください。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-accent hover:bg-accent/90 px-8 py-3 text-lg">
                  <Heart className="mr-2 w-5 h-5" />
                  今すぐ寄付する
                </Button>
                <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
                  支援方法を見る
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center">
                  <Heart className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-primary font-semibold">支援の輪を広げよう</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付の必要性 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              なぜ寄付が必要なのか
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              自立援助ホームの運営には、行政からの補助金だけでは十分ではありません。
              青少年一人ひとりに寄り添った質の高い支援を継続するために、皆様のご支援が必要です。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">30名</div>
                <div className="text-lg font-medium mb-4">現在の利用者数</div>
                <p className="text-muted-foreground text-sm">
                  5つのホームで30名の青少年が生活し、自立に向けて頑張っています。
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">月15万円</div>
                <div className="text-lg font-medium mb-4">1人あたりの支援費</div>
                <p className="text-muted-foreground text-sm">
                  生活費、教育費、就労支援費など、1人あたり月約15万円の費用がかかります。
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-primary mb-2">60%</div>
                <div className="text-lg font-medium mb-4">自己資金の割合</div>
                <p className="text-muted-foreground text-sm">
                  運営費の約60%を寄付や自己資金で賄っており、皆様のご支援が不可欠です。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 寄付の使途 */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              寄付金の使途
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              皆様からのご寄付は、以下のような支援に活用させていただいています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {usageExamples.map((usage, index) => {
              const Icon = usage.icon
              return (
                <Card key={index} className="card-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold">{usage.title}</h3>
                          <span className="text-2xl font-bold text-primary">{usage.percentage}%</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {usage.description}
                        </p>
                        <div className="mt-3">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full transition-all duration-500"
                              style={{ width: `${usage.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {donationAmounts.map((item, index) => (
              <Card 
                key={index} 
                className={`card-hover cursor-pointer transition-all ${
                  selectedAmount === item.amount ? 'ring-2 ring-primary bg-primary/5' : ''
                }`}
                onClick={() => setSelectedAmount(item.amount)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-2">
                    {item.amount.toLocaleString()}円
                  </div>
                  <p className="text-xs text-muted-foreground leading-tight">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 支援方法 */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              支援方法
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              様々な方法でご支援いただけます。あなたに合った支援方法をお選びください。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportMethods.map((method, index) => (
              <Card key={index} className={`card-hover relative ${method.recommended ? 'ring-2 ring-accent' : ''}`}>
                {method.recommended && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-accent text-white px-4 py-1">
                      おすすめ
                    </Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">{method.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {method.description}
                  </p>
                  <div className="text-lg font-semibold text-primary mb-4">
                    {method.minAmount}
                  </div>
                  <ul className="space-y-2 mb-6">
                    {method.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                        <Check className="w-4 h-4 text-green-500" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${method.recommended ? 'btn-accent' : 'btn-primary'}`}>
                    この方法で支援する
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 成功事例 */}
      <section className="section-padding bg-secondary/20">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              支援による成果
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              皆様のご支援により、多くの青少年が自立を果たしています。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-primary">{story.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {story.story}
                  </p>
                  <div className="border-t pt-4">
                    <h4 className="font-medium text-sm mb-2">支援内容</h4>
                    <p className="text-xs text-muted-foreground">
                      {story.support}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 寄付フォーム */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                寄付のお申し込み
              </h2>
              <p className="text-lg text-muted-foreground">
                以下のフォームからお申し込みいただけます。
              </p>
            </div>
            
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">寄付タイプを選択</h3>
                    <div className="space-y-3">
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="radio" 
                          name="donationType" 
                          value="monthly"
                          checked={donationType === 'monthly'}
                          onChange={(e) => setDonationType(e.target.value)}
                          className="text-primary"
                        />
                        <div>
                          <div className="font-medium">継続寄付（月額）</div>
                          <div className="text-sm text-muted-foreground">毎月自動で寄付</div>
                        </div>
                      </label>
                      <label className="flex items-center space-x-3 cursor-pointer">
                        <input 
                          type="radio" 
                          name="donationType" 
                          value="onetime"
                          checked={donationType === 'onetime'}
                          onChange={(e) => setDonationType(e.target.value)}
                          className="text-primary"
                        />
                        <div>
                          <div className="font-medium">単発寄付</div>
                          <div className="text-sm text-muted-foreground">今回のみ寄付</div>
                        </div>
                      </label>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">寄付金額を選択</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[1000, 3000, 5000, 10000].map((amount) => (
                        <button
                          key={amount}
                          onClick={() => setSelectedAmount(amount)}
                          className={`p-3 border rounded-lg text-center transition-all ${
                            selectedAmount === amount 
                              ? 'border-primary bg-primary text-white' 
                              : 'border-gray-300 hover:border-primary'
                          }`}
                        >
                          {amount.toLocaleString()}円
                        </button>
                      ))}
                    </div>
                    <div className="mt-4">
                      <input
                        type="number"
                        placeholder="その他の金額を入力"
                        className="w-full p-3 border border-gray-300 rounded-lg"
                        onChange={(e) => setSelectedAmount(parseInt(e.target.value))}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className="text-lg font-medium">
                        {donationType === 'monthly' ? '月額' : '寄付金額'}
                      </div>
                      <div className="text-3xl font-bold text-primary">
                        {selectedAmount ? `${selectedAmount.toLocaleString()}円` : '金額を選択してください'}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">税制優遇対象</div>
                      <div className="text-sm font-medium">寄付控除あり</div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="btn-accent flex-1 py-3 text-lg">
                      <CreditCard className="mr-2 w-5 h-5" />
                      クレジットカードで寄付
                    </Button>
                    <Button variant="outline" className="flex-1 py-3 text-lg">
                      <Banknote className="mr-2 w-5 h-5" />
                      銀行振込で寄付
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            あなたの支援が未来を変える
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            一人でも多くの青少年が希望を持って自立できるよう、
            皆様の温かいご支援をお待ちしています。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-accent hover:bg-accent/90 px-8 py-3 text-lg">
              <Heart className="mr-2 w-5 h-5" />
              今すぐ寄付する
            </Button>
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-3 text-lg">
              <Calendar className="mr-2 w-5 h-5" />
              説明会に参加する
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DonationPage

