import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Countdown from "@/components/Countdown";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[var(--turquoise)]"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dg3mdcuju/image/upload/v1761205455/kokusaihead_djjuiq.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "auto 90%",
        }}
      >
        {/* Memphis Decorations */}
        <div className="memphis-shape memphis-circle w-32 h-32 bg-[var(--yellow)] top-20 left-10 opacity-80" />
        <div className="memphis-shape memphis-circle w-24 h-24 bg-[var(--pink)] top-40 right-20 opacity-70" />
        <div className="memphis-shape memphis-circle w-16 h-16 bg-[var(--orange)] bottom-32 left-1/4 opacity-60" />
        <div className="memphis-shape w-20 h-20 bg-[var(--yellow)] top-1/3 right-1/3 rotate-45 opacity-50" />
        <div className="memphis-shape w-12 h-12 bg-[var(--pink)] bottom-20 right-1/4 rotate-12 opacity-70" />

        {/* Subtle gradient overlay from left for readability on large screens */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[var(--turquoise)] via-[var(--turquoise)]/70 to-transparent"></div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-white space-y-6 max-w-xl">
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium">
                  2025年12月3日(水)
                </div>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold tracking-wide">
                  福岡市後援
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-sm">
                福岡海外系<br />
                大学サークル<br />
                アワード2025
              </h1>

              <p className="text-xl md:text-2xl font-medium leading-relaxed">
                海外系サークルの活動を一気に知れる！<br />
                福岡の学生が世界とつながる、特別な一夜。
              </p>

              <div className="space-y-3 text-lg">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📅</span>
                  <span>2025年12月3日（水）18:00-20:30</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span>アクロス福岡 円形ホール</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">💰</span>
                  <span>入場無料・事前予約優先</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-[var(--yellow)] text-black hover:bg-[var(--yellow)]/90 text-lg px-8 py-6 font-bold"
                  onClick={() => setIsFormOpen(true)}
                >
                  今すぐ無料で予約する
                </Button>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Countdown Section (Moved Here) */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-[var(--turquoise)]/10 via-white to-[var(--yellow)]/10 border-t border-black/5 overflow-hidden">
        {/* subtle background accents */}
        <div className="memphis-shape memphis-circle w-20 h-20 bg-[var(--pink)] top-6 left-6 opacity-20" />
        <div className="memphis-shape w-16 h-16 bg-[var(--orange)] bottom-6 right-10 rotate-12 opacity-20" />
        <div className="container relative z-10">
          <Countdown
            heading="イベント当日まで残り、、、"
            targetISO="2025-12-04T00:00:00+09:00"
          />
        </div>
      </section>

      {/* Features Section (Moved Here) */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🌏</div>
              <h3 className="text-2xl font-bold text-[var(--turquoise)]">
                福岡の海外系サークルが一堂に集結
              </h3>
              <p className="text-gray-700 leading-relaxed">
                福岡の海外系サークルがこの日だけ一堂に集結。
                留学支援・国際ボランティア・語学交流・文化体験など、
                多彩な活動を一度に比較して知れます。
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">🏆</div>
              <h3 className="text-2xl font-bold text-[var(--pink)]">
                優秀な活動には豪華賞金！
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-bold">🏆 1位：賞金5万円＋トロフィー＋賞状</p>
                <p className="font-bold">🥈 2位：賞金3万円＋賞状</p>
                <p className="font-bold">🥉 3位：賞金2万円＋賞状</p>
                <p className="font-bold">🎖️ 4・5位：記念品＋賞状</p>
              </div>
              <p className="text-gray-700">
                みんなの投票で順位が決まるので、あなたの一票が、学生たちの活動を後押しします。
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-[var(--orange)]">
                発表後はサークルブースで直接交流
              </h3>
              <p className="text-gray-700 leading-relaxed">
                発表後はブース交流で直接話せます。
                活動の雰囲気や参加方法、必要な英語力など、
                気になることをその場で質問できます。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="section relative overflow-hidden bg-gradient-to-br from-[var(--turquoise)]/10 to-white border-t border-black/5"
      >
        {/* Subtle top separator to distinguish from previous section */}
        <div className="pointer-events-none absolute -top-4 left-0 w-full h-8 bg-gradient-to-b from-[var(--turquoise)]/15 to-transparent" />
        {/* Memphis Decorations */}
        <div className="memphis-shape w-16 h-16 bg-[var(--pink)] top-10 right-10 rotate-45 opacity-30" />
        <div className="memphis-shape memphis-circle w-24 h-24 bg-[var(--orange)] bottom-20 left-10 opacity-20" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              いろんな活動から刺激を受けよう！
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl">
                福岡にはたくさんの海外系サークルが活動していますが、それぞれの活動内容や思いはまだまだ多く知られていません。いろんな活動から刺激をうけ、同じ興味を持つもの同士繋がりましょう！
              </p>
            </div>
          </div>
          {/* Integrated: 登壇団体・サークル（5団体） — Uniform Grid Layout */}
          <div className="max-w-7xl mx-auto mt-12">
            <div className="flex flex-wrap justify-center gap-6">
              {([
                {
                  name: "鯉の会（西南学院大学）",
                  img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764040955/IMG_1660_djg8xc.jpg",
                  desc:
                    "西南学院大学のサークル『Japanese Traditional Dance・鯉の会』。留学生と共に日本舞踊を習い、お稽古の通訳も担当。目標は年に一度の大濠公園能楽堂での舞台披露。稽古後は先生の手作りごはんを皆でいただき交流を深め、日本文化を通して国際的なつながりを広げています。まさに、伝統とグローバル化の融合を実現しているサークルです。",
                  instagram: "https://www.instagram.com/jtd__koinokai/"
                },
                {
                  name: "国際交流 PARTNERS（久留米大学）",
                  img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764041404/IMG_1638_xjkwy9.jpg",
                  desc:
                    "久留米大学の国際交流サークル。久留米を中心に、日本人学生と留学生の交流を通して異文化理解の輪を広げる活動を展開。久留米市の全日本語学校との同時交流企画にも携わりました。",
                  instagram: "https://www.instagram.com/kurume.partners?igsh=MTN3MmtrbGJkZ3l3Zw=="
                },
                {
                  name: "FIWC九州（Friends International Work Camp）",
                  img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764041417/CleanShot_2025-11-25_at_12.29.09_2x_t00hdy.png",
                  desc:
                    "福岡の学生が主体となり、国内外で活動する国際協力学生団体。世界の貧困や偏見、国内の社会問題に一人ひとりが向き合い、現地に足を運び、現地の人々と共に活動しています。",
                  instagram: "https://www.instagram.com/fiwckyushu?igsh=MTV5Y20yNDkwcHgxMA%3D%3D&utm_source=qr",
                  website: "https://fiwc9kyushu.wixsite.com/fiwc-kyusyu?fbclid=PAdGRleAOFXKJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQIY2FsbHNpdGUCMTUAAaduWUHNE75VAyoB_355oFVHqJOy8LxN3LTh45s00LMO-BpLLMDJ50S9rzKGRg_aem_iDM-FN3XTUVzRWEj-Tg4rg"
                },
                {
                  name: "九産大秋保ゼミ 国際協力班（九州産業大学）",
                  img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764040955/IMG_1932_gsxkzg.jpg",
                  desc:
                    "フィールドワークを中心とした研究方法でグローバルな社会課題にアプローチ。多文化共生、国際協力、フェアトレードなどのテーマごとにグループに分かれ、現場での調査と得られた知見の発信に取り組んでいます。",
                },
                {
                  name: "IFSAQ（九州大学）",
                  img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764040955/IMG_1952_oubtsz.jpg",
                  desc:
                    "IFSAは世界各国の森林学系学生を結ぶ国際ネットワーク（64か国・141大学）。九州大学でも有志10名が発起人となり、教育・協力・持続可能な森林管理の促進を目指す支部『IFSAQ』の設立総会を開催。学年・研究分野を超えた国際交流の場を広げています。",
                  instagram: "https://www.instagram.com/ifsaq_kyushu?igsh=MXRmZmpyY2pvaTV4NA%3D%3D&utm_source=qr",
                  website: "https://sites.google.com/view/ifsaq-ifsalocalcommitteekyushu/%E3%83%9B%E3%83%BC%E3%83%A0"
                },
              ] as { name: string; img?: string; desc: string; note?: string; instagram?: string; website?: string }[]).map((g, i) => {
                const initial = g.name?.charAt(0) ?? "?";
                return (
                  <div key={i} className="group h-full w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                    <div className="h-full p-[1px] rounded-2xl bg-gradient-to-r from-[var(--turquoise)]/30 via-[var(--pink)]/30 to-[var(--yellow)]/30">
                      <Card className="h-full p-6 rounded-2xl bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl flex flex-col">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center gap-3">
                            {/* Avatar fallback if no image */}
                            {!g.img && (
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--turquoise)] to-[var(--pink)] text-white flex items-center justify-center font-bold shrink-0">
                                {initial}
                              </div>
                            )}
                            <h3 className="text-lg font-bold leading-tight">{g.name}</h3>
                          </div>
                          {g.note && (
                            <span className="ml-2 inline-block rounded-full bg-gray-900 text-white text-xs px-2 py-1 shrink-0">{g.note}</span>
                          )}
                        </div>

                        {g.img && (
                          <div className="mb-4 aspect-[16/9] w-full rounded-xl overflow-hidden bg-gray-100 shrink-0">
                            <img
                              src={g.img}
                              alt={`${g.name} イメージ`}
                              className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                            />
                          </div>
                        )}

                        {g.desc && (
                          <p className={`${g.desc.length > 150 ? 'text-xs' : 'text-sm'} text-gray-700 leading-relaxed flex-grow mb-3`}>
                            {g.desc}
                          </p>
                        )}

                        {(g.instagram || g.website) && (
                          <div className="pt-3 border-t border-gray-100 flex gap-2">
                            {g.instagram && (
                              <Button asChild variant="outline" className="flex-1 border-pink-300 hover:bg-pink-50">
                                <a href={g.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                  </svg>
                                  Instagram
                                </a>
                              </Button>
                            )}
                            {g.website && (
                              <Button asChild variant="outline" className="flex-1 border-blue-300 hover:bg-blue-50">
                                <a href={g.website} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                  </svg>
                                  HP
                                </a>
                              </Button>
                            )}
                          </div>
                        )}
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="text-center mt-8 text-gray-600">上記５団体が登壇予定です。</p>
          </div >
        </div >
      </section >


      {/* Judging/Award Flow (New) */}
      < section className="section bg-white" >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">会場のみんなで優秀な活動に投票しよう！</h2>

          <div className="max-w-4xl mx-auto">
            {/* Flow visualization */}
            <div className="bg-gray-50 rounded-2xl p-8 mb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-xl border-2 border-gray-300">
                    1
                  </div>
                  <h3 className="font-bold text-lg mb-2">団体プレゼン</h3>
                  <p className="text-sm text-gray-600">各団体が活動内容を発表</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-xl border-2 border-gray-300">
                    2
                  </div>
                  <h3 className="font-bold text-lg mb-2">参加者投票</h3>
                  <p className="text-sm text-gray-600">会場の皆さんが投票</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gray-200 flex items-center justify-center text-gray-700 font-bold text-xl border-2 border-gray-300">
                    3
                  </div>
                  <h3 className="font-bold text-lg mb-2">審査員講評</h3>
                  <p className="text-sm text-gray-600">審査員がフィードバック</p>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-700 font-semibold mb-2">
                  <span className="inline-block px-3 py-1 bg-white rounded-full text-sm mr-2">↻</span>
                  このサイクルを５団体分繰り返します
                </p>
              </div>
            </div>

            <div className="text-center bg-gray-50 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">最後に表彰式</h3>
              <p className="text-gray-600">
                全団体の発表と投票が終了後、結果発表と表彰を行います
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Voting Section (Judges) */}
      < section className="py-12 md:py-16 bg-gradient-to-br from-[var(--yellow)]/10 to-[var(--pink)]/10 relative overflow-hidden" >
        <div className="memphis-shape w-20 h-20 bg-[var(--turquoise)] top-20 left-20 rotate-12 opacity-20" />

        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            審査員のご紹介
          </h2>
          <div className="max-w-3xl mx-auto text-center text-gray-700 space-y-4 mb-8">
            <p className="text-lg md:text-xl">
              大学教授、高校教員、NPO職員、元国連職員などなど教育関係に携わる5名の審査員にお願いしております。
            </p>
          </div>

          {/* Floating tags animation */}
          <div className="relative max-w-5xl mx-auto h-48 md:h-56">
            <style>{`
              @keyframes float1 {
                0%, 100% { transform: translate(0, 0) rotate(-3deg); }
                50% { transform: translate(30px, -30px) rotate(3deg); }
              }
              @keyframes float2 {
                0%, 100% { transform: translate(0, 0) rotate(2deg); }
                50% { transform: translate(-25px, 25px) rotate(-2deg); }
              }
              @keyframes float3 {
                0%, 100% { transform: translate(0, 0) rotate(-2deg); }
                50% { transform: translate(25px, 30px) rotate(2deg); }
              }
              @keyframes float4 {
                0%, 100% { transform: translate(0, 0) rotate(3deg); }
                50% { transform: translate(-30px, -25px) rotate(-3deg); }
              }
              @keyframes float5 {
                0%, 100% { transform: translate(0, 0) rotate(-1deg); }
                50% { transform: translate(20px, -35px) rotate(1deg); }
              }
              .float-tag-1 { animation: float1 6s ease-in-out infinite; }
              .float-tag-2 { animation: float2 7s ease-in-out infinite; }
              .float-tag-3 { animation: float3 8s ease-in-out infinite; }
              .float-tag-4 { animation: float4 6.5s ease-in-out infinite; }
              .float-tag-5 { animation: float5 7.5s ease-in-out infinite; }
            `}</style>

            {[
              { label: "#大学教授", class: "float-tag-1", top: "10%", left: "25%", color: "text-blue-400" },
              { label: "#高校教員", class: "float-tag-2", top: "20%", left: "60%", color: "text-green-400" },
              { label: "#NPO職員", class: "float-tag-3", top: "55%", left: "30%", color: "text-purple-400" },
              { label: "#元国連職員", class: "float-tag-4", top: "60%", left: "65%", color: "text-orange-400" },
              { label: "#教育関係者", class: "float-tag-5", top: "35%", left: "45%", color: "text-pink-400" },
            ].map((tag, i) => (
              <div
                key={i}
                className={`absolute ${tag.class} flex flex-col items-center gap-1`}
                style={{ top: tag.top, left: tag.left }}
              >
                {/* Person icon */}
                <svg className={`w-16 h-16 md:w-20 md:h-20 ${tag.color}`} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                {/* Hashtag label */}
                <span className="text-xs md:text-sm font-bold text-gray-700 bg-white px-3 py-1 rounded-full shadow-md border border-gray-200 whitespace-nowrap">
                  {tag.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Schedule Section */}
      < section className="section bg-gradient-to-br from-[var(--turquoise)]/5 to-[var(--yellow)]/5" >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            当日のタイムスケジュール
          </h2>

          <div className="max-w-3xl mx-auto">
            <div className="relative ms-6">
              {/* vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>
              <ul className="space-y-5">
                {[
                  { time: "17:30", title: "開場", desc: "会場に到着したら、受付でお名前をお伝えください。" },
                  { time: "18:30", title: "開会（主催者挨拶・大会趣旨紹介）", desc: "イベントの趣旨と流れをご説明します。" },
                  { time: "18:40", title: "各サークルプレゼン", desc: "各サークルが活動内容や魅力をプレゼンテーションします。" },
                  { time: "19:40", title: "結果発表・表彰", desc: "観客投票の結果を発表し、優秀なサークルを表彰します。" },
                  { time: "20:00", title: "第二部：交流会", desc: "各サークルのブースを回って、直接話を聞くことができます。" },
                  { time: "20:30", title: "閉会", desc: "イベント終了です。お疲れさまでした！" }
                ].map((item, index) => (
                  <li key={index} className="relative pl-10 group cursor-pointer transition-all duration-300 hover:scale-105">
                    {/* node dot */}
                    <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-[var(--turquoise)] group-hover:scale-150 group-hover:bg-[var(--pink)] transition-all duration-300"></span>
                    <div className="flex items-baseline gap-3 p-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-[var(--turquoise)]/10 group-hover:to-[var(--pink)]/10 transition-all duration-300">
                      <span className="w-14 text-sm font-semibold text-[var(--turquoise)] tabular-nums group-hover:text-[var(--pink)] group-hover:text-base transition-all duration-300">
                        {item.time}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-xl transition-all duration-300">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section >

      {/* Operations Team */}
      < section className="section bg-gradient-to-br from-white via-[var(--turquoise)]/5 to-white relative overflow-hidden" >
        {/* Decorative background elements */}
        < div className="absolute top-20 right-10 w-64 h-64 bg-[var(--pink)]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-[var(--turquoise)]/10 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">実行委員会</h2>
          <p className="text-center text-gray-600 text-base md:text-lg mb-16 max-w-3xl mx-auto">
            ボランティアの学生チームが主体となって、イベントを作成し、NPO法人スマイリーフラワーズのサポートを受けて活動しています。
          </p>

          {/* Creative flowing layout */}
          <div className="max-w-7xl mx-auto">
            {[
              {
                name: "Yuta Nakao",
                role: "企画・統括",
                img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764043024/1_adje6v.png",
                bio: "元九州国際大学。第１期実行委員会のリーダー。全体を統括してこの会を主催するに至りました。",
                gradient: "from-[var(--turquoise)] to-[var(--pink)]",
                position: "left"
              },
              {
                name: "Kyoka Murao",
                role: "運営・渉外",
                img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764043025/2_cir9wp.png",
                bio: "筑紫女学園大学2年生。大学・団体との連携や登壇調整を担当。参加者目線の導線づくりを行いました。",
                gradient: "from-[var(--pink)] to-[var(--yellow)]",
                position: "center"
              },
              {
                name: "Azumi Koga",
                role: "デザイン・広報",
                img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764043025/3_armevv.png",
                bio: "ヨークビル大学(カナダ)１年生。会をスムーズに進行するための素材やイベント当日の設計を主に担当しました。",
                gradient: "from-[var(--yellow)] to-[var(--turquoise)]",
                position: "right"
              },
            ].map((m, i) => (
              <div
                key={i}
                className={`
                  flex flex-col md:flex-row items-center gap-8 mb-16 last:mb-0
                  ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}
                `}
              >
                {/* Image container with creative shape */}
                <div className="relative w-full md:w-1/2 group">
                  {/* Floating gradient background */}
                  <div className={`absolute -inset-4 bg-gradient-to-br ${m.gradient} opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500 rounded-3xl`} />

                  {/* Main image container - diagonal cut */}
                  <div className="relative w-48 h-48 mx-auto">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500" />
                    <div className="relative h-full rounded-3xl overflow-hidden border-4 border-white shadow-2xl transform -rotate-3 group-hover:-rotate-6 transition-transform duration-500">
                      <img
                        src={m.img}
                        alt={m.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      {/* Overlay gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${m.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />
                    </div>
                  </div>
                </div>

                {/* Text content */}
                <div className={`w-full md:w-1/2 ${i % 2 === 1 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <div className="inline-block">
                    <div className={`inline-block px-4 py-1 rounded-full bg-gradient-to-r ${m.gradient} text-white text-xs font-bold tracking-wider mb-3`}>
                      {m.role}
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                    {m.name}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                    {m.bio}
                  </p>

                  {/* Decorative line */}
                  <div className={`mt-6 h-1 w-20 bg-gradient-to-r ${m.gradient} ${i % 2 === 1 ? 'md:ml-auto' : 'md:mr-auto'} mx-auto rounded-full`} />
                </div>
              </div>
            ))}
          </div>

          {/* Volunteer Recruitment Button */}
          <div className="mt-16 text-center">
            <Button
              asChild
              className="bg-gradient-to-r from-[var(--turquoise)] to-[var(--pink)] hover:from-[var(--turquoise)]/90 hover:to-[var(--pink)]/90 text-white px-8 py-6 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <a href="#team-recruitment">第2回主催メンバーとなる<br />学生ボランティア募集【２０２６年春開催】</a>
            </Button>
          </div>
        </div>
      </section >

      {/* Next Event (Moved Here) */}
      < section id="next-event" className="section bg-white" >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <svg className="w-10 h-10 text-[var(--turquoise)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              次回開催の予告
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Block - Schedule */}
            <div className="bg-gradient-to-br from-[var(--turquoise)]/5 to-[var(--pink)]/5 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--turquoise)]"></span>
                次回日程（仮）
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--turquoise)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">開催予定日</p>
                    <p className="text-gray-600">2026年6月15日（仮）18:00-20:30</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--turquoise)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">会場</p>
                    <p className="text-gray-600">アクロス福岡 円形ホール（調整中）</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Block - Team Recruitment */}
            <div id="team-recruitment" className="bg-gradient-to-br from-[var(--yellow)]/5 to-[var(--turquoise)]/5 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--pink)]"></span>
                主催チーム募集
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--pink)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">対象</p>
                    <p className="text-gray-600">学生（高校生・大学生など）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--pink)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">応募方法</p>
                    <p className="text-gray-600">フォーム（準備中）または本ページ下部の連絡先へ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[var(--pink)] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">募集期限</p>
                    <p className="text-gray-600">2025年12月末（仮）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="section bg-gradient-to-r from-[var(--turquoise)] to-[var(--pink)] text-white relative overflow-hidden" >
        <div className="memphis-shape memphis-circle w-32 h-32 bg-white/20 top-10 right-10" />
        <div className="memphis-shape w-24 h-24 bg-white/10 bottom-10 left-10 rotate-45" />

        <div className="container text-center relative z-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            さあ、新しい世界への一歩を踏み出そう。
          </h2>
          <p className="text-xl md:text-2xl mb-8">
            あなたの「やってみたい」が、ここから始まります。<br />
            海外に興味があるなら、まずはこのイベントから。
          </p>
          <p className="text-lg mb-8">
            入場無料・事前予約優先<br />
            席に限りがありますので、お早めにご予約ください。
          </p>
          <Button
            size="lg"
            className="bg-white text-[var(--turquoise)] hover:bg-gray-100 text-xl px-12 py-8 font-bold"
            onClick={() => setIsFormOpen(true)}
          >
            今すぐ無料で予約する
          </Button>
        </div>
      </section >

      {/* Venue Highlight: ACROS Fukuoka */}
      < section className="section bg-white" >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            アクセス
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: Tilted overlapping photos + text */}
            <div>
              <div className="relative h-[320px] md:h-[360px]">
                {/* Back photo */}
                <img
                  src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1762849504/IMG_4134_myon4z.jpg"
                  alt="アクロス福岡 円形ホール（後ろの写真）"
                  loading="lazy"
                  className="absolute z-0 left-2 top-4 w-4/5 md:w-3/4 h-56 md:h-72 object-cover rounded-xl shadow-xl rotate-[-6deg] transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:-translate-y-1 hover:translate-x-1 cursor-pointer"
                />
                {/* Front photo */}
                <img
                  src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1762849508/CleanShot_2025-11-11_at_17.18.10_2x_nvxhoc.png"
                  alt="アクロス福岡 円形ホール（手前の写真）"
                  loading="lazy"
                  className="absolute z-10 right-2 bottom-6 w-3/4 md:w-2/3 h-56 md:h-72 object-cover rounded-xl shadow-2xl rotate-[5deg] ring-4 ring-white/70 transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 cursor-pointer"
                />
              </div>
              <p className="mt-4 text-gray-700 text-sm">
                写真はイメージです。実際のレイアウトと異なる場合があります。
              </p>
            </div>

            {/* Right: Google Maps embed */}
            <div>
              <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg border">
                <iframe
                  title="アクロス福岡（Googleマップ）"
                  src="https://www.google.com/maps?q=%E3%82%A2%E3%82%AF%E3%83%AD%E3%82%B9%E7%A6%8F%E5%B2%A1&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="mt-3 text-sm text-gray-600">
                <p>〒810-0001 福岡県福岡市中央区天神1丁目1-1</p>
                <p>会場: アクロス福岡 円形ホール</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Footer */}
      < footer className="bg-gray-900 text-white py-12" >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">主催者情報</h3>
              <p className="text-lg font-bold mb-2">実行委員会</p>
              <div className="mb-4 space-y-1">
                <p className="text-gray-400">後援</p>
                <p className="text-gray-300 ml-4">NPO法人スマイリーフラワーズ</p>
                <p className="text-gray-300 ml-4">福岡市</p>
              </div>
              <p className="text-lg font-semibold mb-2 mt-6">NPO法人スマイリーフラワーズ</p>
              <div className="space-y-2 text-gray-400">
                <p>📞 TEL: 092-791-4360</p>
                <p>📧 Email: info@smileyflowers.net</p>
                <p>🌐 Web: www.smileyflowers.net/</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">イベント情報</h3>
              <div className="space-y-2 text-gray-400">
                <p>📅 2025年12月3日（水）18:00-20:30</p>
                <p>📍 アクロス福岡 円形ホール</p>
                <p>〒810-0001 福岡県福岡市中央区天神1丁目1-1</p>
                <p>💰 入場無料・事前予約優先</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2025 NPO法人国際教育支援機構スマイリーフラワーズ All Rights Reserved.</p>
          </div>
        </div>
      </footer >

      {/* Reservation Form Modal */}
      {
        isFormOpen && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">事前予約フォーム</h3>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="text-gray-500 hover:text-gray-700 text-2xl"
                >
                  ×
                </button>
              </div>

              <p className="text-gray-700 mb-6">
                以下のフォームに必要事項をご入力の上、送信してください。<br />
                ご予約完了後、確認メールをお送りいたします。
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">お名前 *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--turquoise)] focus:border-transparent"
                    placeholder="例）山田 太郎"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">ふりがな *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--turquoise)] focus:border-transparent"
                    placeholder="例）やまだ たろう"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">メールアドレス *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--turquoise)] focus:border-transparent"
                    placeholder="例）example@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">電話番号</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--turquoise)] focus:border-transparent"
                    placeholder="例）090-1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">所属 *</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--turquoise)] focus:border-transparent" required>
                    <option value="">選択してください</option>
                    <option value="大学生">大学生</option>
                    <option value="高校生">高校生</option>
                    <option value="社会人">社会人</option>
                    <option value="その他">その他</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">学校名・学年</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--turquoise)] focus:border-transparent"
                    placeholder="例）福岡大学 1年"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">参加人数 *</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--turquoise)] focus:border-transparent" required>
                    <option value="1">1名</option>
                    <option value="2">2名</option>
                    <option value="3">3名</option>
                    <option value="4">4名</option>
                    <option value="5+">5名以上</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">このイベントを知ったきっかけ</label>
                  <div className="space-y-2">
                    {["Instagram", "Twitter", "TikTok", "LINE", "友人からの紹介", "大学の掲示板", "その他"].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span>{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">ご質問・ご要望</label>
                  <textarea
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--turquoise)] focus:border-transparent"
                    rows={4}
                    placeholder="ご質問やご要望がございましたら、ご記入ください。"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className="flex-1 bg-[var(--turquoise)] hover:bg-[var(--turquoise)]/90 text-white font-bold py-3"
                  >
                    予約を完了する
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsFormOpen(false)}
                    className="px-8"
                  >
                    キャンセル
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        )
      }
    </div >
  );
}
