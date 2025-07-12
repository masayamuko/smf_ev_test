import Link from 'next/link'

export default async function EventsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  
  const content = {
    ja: {
      title: "イベント開催日程",
      altText: "イベント背景",
      upcoming: "開催予定",
      details: "詳細を見る",
      backHome: "ホームに戻る",
      events: [
        {
          id: 'boardgame-night',
          title: 'ボドゲつくらNight',
          date: '7/23 19:00-',
          description: 'みんなの「作りたい」をAIと一緒に形にしてゆくボドゲ作りの夜',
          category: 'AI × ボードゲーム',
          location: '福岡',
          link: `/${lang}/events/boardgame`,
          status: 'upcoming',
          image: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1751450178/aibg04_xaad2j.jpg',
          highlights: [
            'AIを活用したボードゲーム制作体験',
            '初心者からでも楽しめるワークショップ形式',
            '作ったゲームは持ち帰り可能'
          ]
        },
        {
          id: 'ai-share',
          title: '生成AI活用シェア会',
          date: '7/15(火) 19:00-',
          description: '仕事だけでなく、遊びや生活でもどんなふうに生成AIを役立ててるかシェアし合う会',
          category: 'AI活用',
          location: '福岡',
          link: `/${lang}/events/ai-study`,
          status: 'upcoming',
          image: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1752363438/Masan_Dayo_AI_Profile_wca3om.png',
          highlights: [
            '仕事・生活でのAI活用事例をシェア',
            '参加者同士の情報交換とネットワーキング',
            '実践的なAI活用ヒント満載'
          ]
        }
      ]
    },
    en: {
      title: "Event Schedule",
      altText: "Event background",
      upcoming: "Upcoming",
      details: "View Details",
      backHome: "Back to Home",
      events: [
        {
          id: 'boardgame-night',
          title: 'Board Game Creation Night',
          date: '7/23 19:00-',
          description: 'An evening of board game creation where everyone\'s "want to create" takes shape with AI',
          category: 'AI × Board Games',
          location: 'Fukuoka',
          link: `/${lang}/events/boardgame`,
          status: 'upcoming',
          image: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1751450178/aibg04_xaad2j.jpg',
          highlights: [
            'AI-powered board game creation experience',
            'Workshop format enjoyable for beginners',
            'Take your created game home'
          ]
        },
        {
          id: 'ai-share',
          title: 'Generative AI Utilization Sharing Session',
          date: '7/15 (Tue) 19:00-',
          description: 'A gathering to share how generative AI is being utilized not only in work, but also in play and daily life',
          category: 'AI Utilization',
          location: 'Fukuoka',
          link: `/${lang}/events/ai-study`,
          status: 'upcoming',
          image: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1752363438/Masan_Dayo_AI_Profile_wca3om.png',
          highlights: [
            'Share AI use cases in work and daily life',
            'Networking and information exchange among participants',
            'Packed with practical AI utilization tips'
          ]
        }
      ]
    }
  };

  const t = content[lang as keyof typeof content] || content.ja;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden pt-24">
        <img 
          src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1752311488/masan_dayo__--ar_8952_--profile_njfaa7d_--v_7_7fd259a6-5956-43c0-bffa-5371c751281f_2_jbguxn.png" 
          alt={t.altText} 
          className="absolute inset-0 w-full h-full object-cover object-center z-0 brightness-75" 
        />
        <div className="relative z-10 w-full text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">{t.title}</h1>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section py-12 md:py-20">
        <div className="container-narrow">
          <div className="grid gap-12 md:grid-cols-2">
            {t.events.map((event) => (
              <Link 
                key={event.id} 
                href={event.link}
                className="block bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-200 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex flex-col group"
              >
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-64 md:h-80 object-cover"
                  />
                  {/* 左上に日付タグ */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </span>
                  </div>
                  {/* 右下に会場タグ */}
                  <div className="absolute bottom-4 right-4">
                    <span className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {event.location}
                    </span>
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col justify-between p-8 space-y-6">
                  {/* タイトル */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                    {event.title}
                  </h3>
                  
                  {/* イベント概要 */}
                  <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-4 rounded-xl border border-gray-200">
                    <ul className="space-y-2">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-700">
                          <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* 詳細ボタン */}
                  <div className="inline-block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-4 px-8 rounded-xl text-center text-lg md:text-xl group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 shadow-lg">
                    {t.details}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          {/* ホームに戻るボタン */}
          <div className="text-center mt-16">
            <Link 
              href={`/${lang}`} 
              className="inline-flex items-center gap-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              {t.backHome}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 