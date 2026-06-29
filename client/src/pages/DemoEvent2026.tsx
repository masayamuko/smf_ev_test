import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import Countdown from "@/components/Countdown";
import imgOym from "@/assets/award2026/teams/oym.jpg";
import imgSakura from "@/assets/award2026/teams/sakura.jpg";
import imgRyo from "@/assets/award2026/teams/ryo.jpg";
import imgFitcore from "@/assets/award2026/teams/fitcore.jpg";
import imgIfsaq from "@/assets/award2026/teams/ifsaq.jpg";
import imgC3 from "@/assets/award2026/teams/c3.jpg";
import imgFiwc from "@/assets/award2026/teams/fiwc.jpg";

export default function DemoEvent2026() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-indigo-600"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dg3mdcuju/image/upload/v1761205455/kokusaihead_djjuiq.png")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right top",
          backgroundSize: "auto 90%",
        }}
      >
        {/* Memphis Decorations */}
        <div className="memphis-shape memphis-circle w-32 h-32 bg-amber-400 top-20 left-10 opacity-80" />
        <div className="memphis-shape memphis-circle w-24 h-24 bg-emerald-400 top-40 right-20 opacity-70" />
        <div className="memphis-shape memphis-circle w-16 h-16 bg-violet-400 bottom-32 left-1/4 opacity-60" />
        <div className="memphis-shape w-20 h-20 bg-amber-400 top-1/3 right-1/3 rotate-45 opacity-50" />
        <div className="memphis-shape w-12 h-12 bg-emerald-400 bottom-20 right-1/4 rotate-12 opacity-70" />

        {/* Subtle gradient overlay from left for readability on large screens */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-700 via-indigo-600/70 to-transparent"></div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="text-white space-y-6 max-w-xl">
              <p className="text-lg md:text-xl font-bold tracking-wide text-amber-300 drop-shadow-sm">
                “やってみたい”が、世界を広げる
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight drop-shadow-sm">
                Fukuoka<br />
                国際系学生<br />
                AWARD 2026
              </h1>

              <p className="text-base md:text-lg font-bold tracking-wide">
                若者の挑戦 <span className="text-amber-300">×</span> 国際交流 <span className="text-amber-300">×</span> つながり
              </p>

              <div className="space-y-4">
                {/* 日付：数字を大きく、年月日(土)は小さく */}
                <div className="flex items-end gap-3">
                  <span className="text-2xl leading-none mb-1">📅</span>
                  <div className="font-bold leading-none flex items-end flex-wrap">
                    <span className="text-5xl md:text-6xl">6</span>
                    <span className="text-base mx-0.5 mb-1">月</span>
                    <span className="text-5xl md:text-6xl">13</span>
                    <span className="text-base mx-0.5 mb-1">日</span>
                    <span className="text-lg md:text-xl ml-1 mb-1">（土）</span>
                  </div>
                </div>
                {/* 時間：開場を含め2行 */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🕐</span>
                  <div className="leading-tight">
                    <p className="text-2xl md:text-3xl font-bold tracking-wide">13:30〜16:30</p>
                    <p className="text-sm text-white/80">12:30 開場</p>
                  </div>
                </div>
                {/* 会場：アクロス福岡だけ大きく */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <div className="leading-tight">
                    <p className="text-2xl md:text-3xl font-bold">アクロス福岡</p>
                    <p className="text-sm text-white/80">7階 大会議室</p>
                  </div>
                </div>
                {/* 対象 */}
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎓</span>
                  <span className="text-base md:text-lg">対象：高校生・大学生・社会人・留学生</span>
                </div>
              </div>

              {/* 観覧無料・途中参加OK 丸バッジ（チラシ準拠） */}
              <div className="flex items-center gap-3 pt-1">
                <div className="w-[72px] h-[72px] rounded-full bg-orange-500 text-white flex flex-col items-center justify-center font-bold leading-none shadow-lg ring-2 ring-white/70 text-center">
                  <span className="text-base">観覧</span>
                  <span className="text-base mt-1">無料</span>
                </div>
                <div className="w-[72px] h-[72px] rounded-full bg-teal-500 text-white flex flex-col items-center justify-center font-bold leading-none shadow-lg ring-2 ring-white/70 text-center">
                  <span className="text-sm">途中</span>
                  <span className="text-sm mt-1">参加OK</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button
                  size="lg"
                  className="bg-amber-400 text-black hover:bg-amber-500 text-lg px-8 py-6 font-bold"
                  asChild
                >
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSf_K_wfxi43O-ieic5Xn53gP2WWh4nl1P9BJxhoGy43kz6TlA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    観覧を事前予約する（無料）
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="border-0 text-white bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 shadow-lg text-lg px-8 py-6 font-bold"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/fukuoka.international.award613/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    最新情報（Instagram）
                  </a>
                </Button>
              </div>
            </div>

            {/* Right: Logo (transparent via Cloudinary background removal) */}
            <div className="flex items-center justify-center mt-8 lg:mt-0">
              <div className="relative">
                <div className="absolute -inset-8 bg-white/30 rounded-full blur-3xl" />
                <img
                  src="https://res.cloudinary.com/dg3mdcuju/image/upload/e_background_removal/f_webp,q_auto:eco/v1778293063/corduroy/smf/award2026/logo.jpg"
                  alt="Fukuoka国際系学生 AWARD 2026 ロゴ"
                  className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Overview / Value Section */}
      <section className="relative pt-16 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-white via-sky-50/60 to-white overflow-hidden border-t border-black/5">
        {/* Flags garland (flyer signature) */}
        <FlagGarland />

        {/* soft sky accents */}
        <div className="pointer-events-none absolute -top-10 right-[-40px] w-72 h-72 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-60px] left-[-40px] w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-bold tracking-[0.2em] mb-5">
              ABOUT
            </span>
            <h2 className="text-2xl md:text-4xl font-bold leading-relaxed text-gray-900">
              国際をテーマに活動する学生団体が、<br className="hidden md:block" />
              福岡に集結。
            </h2>
            <p className="mt-5 text-lg md:text-xl text-gray-700 leading-relaxed">
              それぞれの想いと経験を発信し、つながり、<br className="hidden md:block" />
              未来を広げる一日です。
            </p>
          </div>

          {/* 3 value pillars：知る・つながる・広がる */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-14">
            {[
              { emoji: "🔎", title: "知る", color: "from-sky-500 to-cyan-400", desc: "留学・海外インターン・国際ボランティアなど、多彩な海外活動を一度に知れる。" },
              { emoji: "🤝", title: "つながる", color: "from-emerald-500 to-teal-400", desc: "同じ志を持つ学生・団体・留学生と、その場で直接つながれる。" },
              { emoji: "🚀", title: "広がる", color: "from-orange-500 to-amber-400", desc: "「やってみたい」が動き出す。あなたの世界が、ここから広がる。" },
            ].map((v, i) => (
              <div key={i} className="relative rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-shadow p-7 text-center">
                <div className={`w-14 h-14 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${v.color} text-white text-2xl flex items-center justify-center shadow-md`}>
                  {v.emoji}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>

          {/* 信頼ストリップ：主催・後援・助成 */}
          <div className="mt-14 max-w-4xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-center">
              {[
                { label: "主催", value: "NPO法人スマイリーフラワーズ" },
                { label: "後援", value: "福岡市／よかとピア国際交流財団" },
                { label: "助成", value: "よかとピア国際交流財団" },
              ].map((t, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="inline-block px-3 py-1 rounded-md bg-gray-900 text-white text-sm font-bold shrink-0">{t.label}</span>
                  <span className="text-base md:text-lg text-gray-800 font-semibold">{t.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Countdown Section (Moved Here) */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-indigo-100 via-white to-amber-50 border-t border-black/5 overflow-hidden">
        {/* subtle background accents */}
        <div className="memphis-shape memphis-circle w-20 h-20 bg-emerald-400 top-6 left-6 opacity-20" />
        <div className="memphis-shape w-16 h-16 bg-violet-400 bottom-6 right-10 rotate-12 opacity-20" />
        <div className="container relative z-10">
          <Countdown
            heading="イベント当日まで残り、、、"
            targetISO="2026-06-13T13:30:00+09:00"
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
              <h3 className="text-2xl font-bold text-indigo-600">
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
              <h3 className="text-2xl font-bold text-emerald-600">
                優秀な活動には豪華賞金！
              </h3>
              <div className="space-y-2 text-gray-700">
                <p className="font-bold">🥇 ベストオーディエンス賞：5万円＋賞状</p>
                <p className="font-bold">🥈 特別審査員賞：3万円＋賞状</p>
                <p className="font-bold">🌸 スマフラ奨励賞：1万円＋賞状</p>
              </div>
              <p className="text-gray-700">
                みんなの投票で順位が決まるので、あなたの一票が、学生たちの活動を後押しします。
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="p-8 text-center space-y-4 hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-violet-600">
                発表後は発表者と直接交流
              </h3>
              <p className="text-gray-700 leading-relaxed">
                発表後は発表者と直接話せます。
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
        className="section relative overflow-hidden bg-gradient-to-br from-indigo-50 to-white border-t border-black/5"
      >
        {/* Subtle top separator to distinguish from previous section */}
        <div className="pointer-events-none absolute -top-4 left-0 w-full h-8 bg-gradient-to-b from-indigo-100 to-transparent" />
        {/* Memphis Decorations */}
        <div className="memphis-shape w-16 h-16 bg-emerald-400 top-10 right-10 rotate-45 opacity-30" />
        <div className="memphis-shape memphis-circle w-24 h-24 bg-violet-400 bottom-20 left-10 opacity-20" />

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
          {/* 登壇団体（確定ラインナップ） */}
          <div className="max-w-7xl mx-auto mt-12">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-bold tracking-wider mb-3">
                第1部・登壇団体
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">出演団体が決定しました！</h3>
            </div>

            {/* 高校生の部 */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-emerald-500 text-white text-sm font-bold shrink-0">高校生</span>
                <span className="h-px flex-grow bg-emerald-200" />
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "福岡未来創造キャンプ\nOn Your Mark！", img: imgOym, desc: "高校生が主体となり、未来を切り拓く挑戦を後押しするキャンプ型プログラム。" },
                  { name: "SAKURA（雙葉高校）", img: imgSakura, desc: "雙葉高校の生徒による国際交流・社会貢献活動に取り組むチーム。" },
                ].map((g, i) => (
                  <div key={i} className="group h-full w-full md:w-[calc(50%-0.75rem)]">
                    <div className="h-full p-[1px] rounded-2xl bg-gradient-to-r from-emerald-300 via-indigo-300 to-amber-300">
                      <Card className="h-full rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl flex flex-col">
                        <div className="aspect-[16/7] w-full overflow-hidden bg-gray-100">
                          <img src={g.img} alt={`${g.name.replace("\n", " ")} の活動写真`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-indigo-400 text-white flex items-center justify-center font-bold shrink-0">
                              {g.name.charAt(0)}
                            </div>
                            <h4 className="text-lg font-bold leading-tight whitespace-pre-line">{g.name}</h4>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed flex-grow">{g.desc}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 大学生の部 */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-lg bg-indigo-600 text-white text-sm font-bold shrink-0">大学生</span>
                <span className="h-px flex-grow bg-indigo-200" />
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                {[
                  { name: "国際寮RA", org: "西南学院大学", img: imgRyo, desc: "国際寮のレジデント・アシスタントとして、留学生と日本人学生の共生をつくる。" },
                  { name: "FIT CORE", org: "福岡大学", img: imgFitcore, desc: "福岡大学を拠点に国際交流・地域連携に取り組む学生団体。" },
                  { name: "IFSAQ", org: "九州大学", img: imgIfsaq, desc: "九州大学の国際交流を推進する学生コミュニティ。" },
                  { name: "プロジェクト創発団体C³", org: "西南学院大学", img: imgC3, desc: "西南学院大学発、課題解決型のプロジェクトを生み出す創発チーム。" },
                  { name: "FIWC", org: "九大・西南大・福大", img: imgFiwc, desc: "大学を越えて活動する国際ワークキャンプ（FIWC）の福岡チーム。" },
                ].map((g, i) => (
                  <div key={i} className="group h-full w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
                    <div className="h-full p-[1px] rounded-2xl bg-gradient-to-r from-indigo-300 via-emerald-300 to-amber-300">
                      <Card className="h-full rounded-2xl overflow-hidden bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-xl flex flex-col">
                        <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                          <img src={g.img} alt={`${g.name} の活動写真`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]" />
                        </div>
                        <div className="p-6 flex flex-col flex-grow">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-emerald-400 text-white flex items-center justify-center font-bold shrink-0">
                              {g.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="text-lg font-bold leading-tight">{g.name}</h4>
                              <p className="text-xs text-gray-500">{g.org}</p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed flex-grow">{g.desc}</p>
                        </div>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 第2部 ブース出展団体 */}
            <div className="mt-16">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-1 rounded-full bg-amber-400 text-black text-sm font-bold tracking-wider mb-3">
                  第2部・ブース出展団体
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">交流会で直接話せる団体</h3>
                <p className="mt-3 text-gray-600">国際的な活動団体のブースで、直接話を聞いて新しいつながりを見つけよう。</p>
              </div>
              <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "GSC Fukuoka Hub" },
                  { name: "福岡県留学生会（FOSA）" },
                  { name: "九州大学アフリカン学生（ASKU）" },
                  { name: "福岡ベトナム青年学生協会（VYSAF）" },
                  { name: "冨永陽仁", note: "書道を通して愛を世界中で交換" },
                  { name: "NPO法人国際教育支援機構\nスマイリーフラワーズ" },
                ].map((b, i) => (
                  <div key={i} className="rounded-xl bg-white border border-gray-200 shadow-sm p-5 flex items-start gap-3 hover:shadow-md transition-shadow">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-emerald-400 text-white flex items-center justify-center font-bold shrink-0 text-sm">
                      {b.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 leading-tight whitespace-pre-line">{b.name}</p>
                      {b.note && <p className="text-xs text-gray-500 mt-1">{b.note}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-bold">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_K_wfxi43O-ieic5Xn53gP2WWh4nl1P9BJxhoGy43kz6TlA/viewform" target="_blank" rel="noopener noreferrer">
                  観覧を事前予約する（無料）
                </a>
              </Button>
            </div>
          </div >
        </div >
      </section >

      {/* Entry / Recruitment Section */}
      <section id="entry" className="section bg-gradient-to-br from-amber-50 via-white to-indigo-50 relative overflow-hidden">
        <div className="memphis-shape memphis-circle w-32 h-32 bg-amber-300 top-10 right-10 opacity-30" />
        <div className="memphis-shape w-24 h-24 bg-emerald-300 bottom-10 left-10 rotate-12 opacity-30" />

        <div className="container relative z-10">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1 rounded-full bg-amber-400 text-black text-sm font-bold tracking-wider mb-4">
              イベント内容
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              2部構成で、知って・つながる一日。
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              第1部は学生団体のプレゼンと表彰、第2部はブースをまわる交流会です。
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
            {/* イベント内容（第1部・第2部） */}
            <div className="grid md:grid-cols-2">
              <div className="p-6 md:p-10 bg-gradient-to-br from-indigo-50 to-white border-b md:border-b-0 md:border-r border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center text-2xl">🎤</span>
                  <h3 className="text-xl md:text-2xl font-bold text-indigo-700">第1部：Award・表彰</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  学生団体によるプレゼンテーションを実施。海外ボランティアや国際交流など、それぞれの活動や思いを発表します。
                  <strong className="text-indigo-700">来場者投票＋審査員評価</strong>で受賞団体が決定します。
                </p>
              </div>
              <div className="p-6 md:p-10 bg-gradient-to-br from-amber-50 to-white">
                <div className="flex items-center gap-2 mb-3">
                  <span className="inline-flex items-center justify-center text-2xl">🤝</span>
                  <h3 className="text-xl md:text-2xl font-bold text-amber-600">第2部：交流会</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  国際的な活動団体のブースで直接話を聞き、新しいつながりを見つけられます。
                </p>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                  {["ブース団体", "登壇団体", "留学生", "参加者同士"].map((t) => (
                    <li key={t} className="px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-medium">{t}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 賞 */}
            <div className="p-6 md:p-10 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="inline-block w-1 h-7 bg-amber-500 rounded-full" />
                受賞団体には賞金・賞状を授与
              </h3>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="rounded-xl p-5 bg-gradient-to-br from-amber-100 to-amber-50 border border-amber-200 text-center">
                  <div className="text-3xl mb-2">🥇</div>
                  <div className="font-bold text-gray-900">ベストオーディエンス賞</div>
                  <div className="mt-2 text-amber-700 font-bold text-lg">賞金 5万円</div>
                  <div className="text-sm text-gray-600">＋賞状</div>
                </div>
                <div className="rounded-xl p-5 bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 text-center">
                  <div className="text-3xl mb-2">🥈</div>
                  <div className="font-bold text-gray-900">特別審査員賞</div>
                  <div className="mt-2 text-gray-700 font-bold text-lg">賞金 3万円</div>
                  <div className="text-sm text-gray-600">＋賞状</div>
                </div>
                <div className="rounded-xl p-5 bg-gradient-to-br from-pink-100 to-pink-50 border border-pink-200 text-center">
                  <div className="text-3xl mb-2">🌸</div>
                  <div className="font-bold text-gray-900">スマフラ奨励賞</div>
                  <div className="mt-2 text-pink-700 font-bold text-lg">賞金 1万円</div>
                  <div className="text-sm text-gray-600">＋賞状</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 md:p-10 bg-gradient-to-br from-indigo-600 to-emerald-500 text-white border-t border-white/10">
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <p className="text-sm opacity-90 mb-1">ご来場について</p>
                  <p className="text-3xl md:text-4xl font-bold">観覧無料・途中参加OK</p>
                  <p className="mt-3 text-white/90">
                    事前予約でスムーズに入場できます。ご質問は<strong>Instagram DM</strong>または<strong>お電話</strong>へお気軽に。
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Button asChild size="lg" className="bg-amber-400 text-black hover:bg-amber-500 text-lg py-6 font-bold">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSf_K_wfxi43O-ieic5Xn53gP2WWh4nl1P9BJxhoGy43kz6TlA/viewform" target="_blank" rel="noopener noreferrer">
                      観覧を事前予約する（無料）
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-white/10 border-white/50 text-white hover:bg-white/20 text-lg py-6 font-bold">
                    <a href="tel:0927914360">📞 092-791-4360 へ電話</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Section — 非公開（今回開催の予定なし。復活させる場合は false → true） */}
      {false && (
        <section className="section bg-gradient-to-br from-white via-indigo-50/40 to-white">
          <div className="container">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1 rounded-full bg-indigo-600 text-white text-sm font-bold tracking-wider mb-4">
                KEYNOTE
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
                特別 基調講演
              </h2>
              <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
                国際交流・キャリアの第一線で活動するゲストによる、学生のための特別講演を予定しています。
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="rounded-2xl bg-white shadow-xl border border-indigo-100 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-0">
                  <div className="md:col-span-1 bg-gradient-to-br from-indigo-600 to-emerald-500 p-8 flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="text-5xl mb-2">🎤</div>
                      <p className="font-bold">SPECIAL GUEST</p>
                      <p className="text-sm opacity-90 mt-2">登壇者・演題は<br />調整中です</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-8">
                    <p className="text-sm text-indigo-700 font-bold mb-2">講演内容（予定）</p>
                    <p className="text-lg text-gray-800 leading-relaxed">
                      国際交流の最前線で活躍するゲストをお招きし、これからの時代に必要な「世界とつながる力」をテーマに、学生のみなさまへメッセージをお届けします。
                    </p>
                    <p className="mt-4 text-sm text-gray-500">
                      ※ 登壇者・タイトル・所属の詳細は決まり次第、本ページにて発表いたします。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}


      {/* Judging/Award Flow (New) */}
      < section className="section bg-gradient-to-br from-white via-indigo-50 to-amber-50" >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-600">
            会場のみんなで優秀な活動に投票しよう！
          </h2>

          <div className="max-w-4xl mx-auto">
            {/* Flow visualization */}
            <div className="bg-gradient-to-br from-white via-white to-amber-50 rounded-2xl p-8 mb-8 border border-indigo-100 shadow-sm">
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl border-2 border-indigo-200">
                    1
                  </div>
                  <h3 className="font-bold text-lg mb-2">団体プレゼン</h3>
                  <p className="text-sm text-gray-600">各団体が活動内容を発表</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold text-xl border-2 border-emerald-200">
                    2
                  </div>
                  <h3 className="font-bold text-lg mb-2">参加者投票</h3>
                  <p className="text-sm text-gray-600">会場の皆さんが投票</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 font-bold text-xl border-2 border-violet-200">
                    3
                  </div>
                  <h3 className="font-bold text-lg mb-2">審査員講評</h3>
                  <p className="text-sm text-gray-600">審査員がフィードバック</p>
                </div>
              </div>

              <div className="text-center pt-6 border-t border-gray-200">
                <p className="text-gray-700 font-semibold mb-2">
                  <span className="inline-block px-3 py-1 bg-indigo-100 rounded-full text-sm mr-2 text-indigo-600">↻</span>
                  このサイクルを５団体分繰り返します
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-br from-white via-indigo-50 to-amber-50 rounded-xl p-6 border border-indigo-100 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">最後に表彰式 <span role="img" aria-label="trophy">🏆</span></h3>
              <p className="text-gray-600 mb-3">
                全団体の発表と投票が終了後、結果発表と表彰を行います
              </p>
              <div className="space-y-1 text-gray-700">
                <p className="font-bold">🥇 ベストオーディエンス賞：賞金5万円</p>
                <p className="font-bold">🥈 特別審査員賞：賞金3万円</p>
                <p className="font-bold">🌸 スマフラ奨励賞：賞金1万円</p>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* Voting Section (Judges) */}
      < section className="py-12 md:py-16 bg-gradient-to-br from-amber-100/50 to-emerald-100/50 relative overflow-hidden" >
        <div className="memphis-shape w-20 h-20 bg-indigo-400 top-20 left-20 rotate-12 opacity-20" />

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
      < section className="section bg-gradient-to-br from-indigo-50/50 to-amber-50/50" >
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
                  { time: "12:30", title: "開場", desc: "会場に到着したら、受付でお名前をお伝えください。" },
                  { time: "13:30", title: "開会（主催者挨拶・大会趣旨紹介）", desc: "イベントの趣旨と流れをご説明します。" },
                  { time: "13:40", title: "登壇団体プレゼン", desc: "各団体が活動の魅力と取り組みをプレゼンテーションします。" },
                  { time: "15:30", title: "投票・審査員講評", desc: "会場の参加者投票と、審査員からのフィードバックです。" },
                  { time: "16:00", title: "結果発表・表彰", desc: "ベストオーディエンス賞・特別審査員賞・スマフラ奨励賞を発表します。" },
                  { time: "16:15", title: "交流タイム", desc: "登壇団体・参加者・審査員が直接話せる交流の時間です。" },
                  { time: "16:30", title: "閉会", desc: "イベント終了です。お疲れさまでした！" }
                ].map((item, index) => (
                  <li key={index} className="relative pl-10 group cursor-pointer transition-all duration-300 hover:scale-105">
                    {/* node dot */}
                    <span className="absolute left-[-5px] top-2 h-2.5 w-2.5 rounded-full bg-indigo-500 group-hover:scale-150 group-hover:bg-emerald-500 transition-all duration-300"></span>
                    <div className="flex items-baseline gap-3 p-3 rounded-lg group-hover:bg-gradient-to-r group-hover:from-indigo-50 group-hover:to-emerald-50 transition-all duration-300">
                      <span className="w-14 text-sm font-semibold text-indigo-500 tabular-nums group-hover:text-emerald-500 group-hover:text-base transition-all duration-300">
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
      < section className="section bg-gradient-to-br from-white via-indigo-50/50 to-white relative overflow-hidden" >
        {/* Decorative background elements */}
        < div className="absolute top-20 right-10 w-64 h-64 bg-emerald-300/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">実行委員会</h2>
          <p className="text-center text-gray-600 text-base md:text-lg mb-16 max-w-3xl mx-auto">
            NPO法人スマイリーフラワーズが学生インターンと共に実行委員会を作って主催・運営しています。
          </p>

          {/* Creative flowing layout */}
          <div className="max-w-7xl mx-auto">
            {[
              {
                name: "Kyoka Murao",
                role: "企画・統括",
                img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764043025/2_cir9wp.png",
                bio: "筑紫女学園大学3年生。大学・団体との連携や登壇調整を担当。参加者目線の導線づくりを行いました。",
                gradient: "from-indigo-500 to-emerald-500",
                position: "left"
              },
              {
                name: "メンバー募集中",
                role: "運営・渉外",
                img: "",
                bio: "第2回開催に向けて一緒にイベントを作るメンバーを募集しています！",
                gradient: "from-emerald-500 to-amber-500",
                position: "center"
              },
              {
                name: "メンバー募集中",
                role: "デザイン・広報",
                img: "",
                bio: "第2回開催に向けて一緒にイベントを作るメンバーを募集しています！",
                gradient: "from-amber-500 to-indigo-500",
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
                      {m.img ? (
                        <img
                          src={m.img}
                          alt={m.name}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center text-4xl text-gray-400 font-bold transform group-hover:scale-110 transition-transform duration-700">
                          ?
                        </div>
                      )}
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
              className="bg-gradient-to-r from-indigo-600 to-emerald-500 hover:from-indigo-600/90 hover:to-emerald-500/90 text-white px-8 py-10 md:py-12 text-xl leading-relaxed whitespace-normal font-bold shadow-lg hover:shadow-xl transition-all duration-300 min-h-[88px]"
            >
              <a href="/demo/intern">運営メンバー募集中</a>
            </Button>
          </div>
        </div>
      </section >

      {/* Next Event (Moved Here) */}
      < section id="next-event" className="section bg-white" >
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              次回開催の予告
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Block - Schedule */}
            <div className="bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                次回日程（仮）
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-indigo-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">開催予定日</p>
                    <p className="text-gray-600">2026年12月（仮）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-indigo-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">会場</p>
                    <p className="text-gray-600">未定</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Block - Team Recruitment */}
            <div id="team-recruitment" className="bg-gradient-to-br from-amber-50 to-indigo-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                主催チーム募集
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">対象</p>
                    <p className="text-gray-600">学生（高校生・大学生など）</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">応募方法</p>
                    <p className="text-gray-600">フォーム（準備中）または本ページ下部の連絡先へ</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">募集期限</p>
                    <p className="text-gray-600">2026年12月末（仮）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="section bg-gradient-to-r from-indigo-600 to-emerald-500 text-white relative overflow-hidden" >
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
            className="bg-white text-indigo-600 hover:bg-gray-100 text-xl px-12 py-8 font-bold"
            asChild
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf_K_wfxi43O-ieic5Xn53gP2WWh4nl1P9BJxhoGy43kz6TlA/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              今すぐ無料で予約する
            </a>
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
                  src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1772687619/across_out.jpg"
                  alt="アクロス福岡 外観"
                  loading="lazy"
                  className="absolute z-0 left-2 top-4 w-4/5 md:w-3/4 h-56 md:h-72 object-cover rounded-xl shadow-xl rotate-[-6deg] transition-transform duration-300 ease-out will-change-transform hover:scale-105 hover:-translate-y-1 hover:translate-x-1 cursor-pointer"
                />
                {/* Front photo */}
                <img
                  src="https://res.cloudinary.com/dg3mdcuju/image/upload/v1772687618/across_kaigiD.jpg"
                  alt="アクロス福岡 大会議室"
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
                <p>会場: アクロス福岡 大会議室（アクロス7F）</p>
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
              <div className="mb-4 space-y-1">
                <p className="text-gray-400">主催</p>
                <p className="text-gray-300 ml-4">NPO法人国際教育支援機構 スマイリーフラワーズ</p>
              </div>
              <div className="mb-4 space-y-1">
                <p className="text-gray-400">企画</p>
                <p className="text-gray-300 ml-4">学生実行委員会</p>
              </div>
              <div className="mb-4 space-y-1">
                <p className="text-gray-400">後援</p>
                <p className="text-gray-300 ml-4">福岡市／よかとピア国際交流財団／筑紫女学園大学 英語学科</p>
              </div>
              <div className="mb-4 space-y-1">
                <p className="text-gray-400">助成</p>
                <p className="text-gray-300 ml-4">よかとピア国際交流財団</p>
              </div>
              <p className="text-lg font-semibold mb-2 mt-6">お問い合わせ</p>
              <div className="space-y-2 text-gray-400">
                <p>📞 TEL: 092-791-4360</p>
                <p>📧 Email: info@smileyflowers.net</p>
                <p>🌐 Web: www.smileyflowers.net/</p>
                <p>📷 Instagram: <a href="https://www.instagram.com/fukuoka.international.award613/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white underline">@FUKUOKA.INTERNATIONAL.AWARD613</a></p>
                <p>🏢 事務所: 福岡市中央区大名2-10-1-A601</p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">イベント情報</h3>
              <div className="space-y-2 text-gray-400">
                <p>📅 2026年6月13日（土）13:30〜16:30</p>
                <p>📍 アクロス福岡 7階 大会議室</p>
                <p>〒810-0001 福岡県福岡市中央区天神1丁目1-1</p>
                <p>📝 登壇団体 応募締切：2026年5月13日（火）</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>© 2026 NPO法人国際教育支援機構スマイリーフラワーズ All Rights Reserved.</p>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="例）やまだ たろう"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">メールアドレス *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="例）example@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">電話番号</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="例）090-1234-5678"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">所属 *</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required>
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="例）福岡大学 1年"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">参加人数 *</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent" required>
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

/* 国旗ガーランド（チラシ象徴のデコ） */
function FlagGarland() {
  // dir: 'h'=横帯 / 'v'=縦帯 / 'dot'=白地に中央円
  const flags: { dir: "h" | "v" | "dot"; colors: string[]; dot?: string }[] = [
    { dir: "dot", colors: ["#ffffff"], dot: "#BC002D" }, // 日本
    { dir: "h", colors: ["#B22234", "#ffffff", "#3C3B6E"] }, // USA
    { dir: "v", colors: ["#FF0000", "#ffffff", "#FF0000"] }, // カナダ
    { dir: "h", colors: ["#000000", "#DD0000", "#FFCE00"] }, // ドイツ
    { dir: "v", colors: ["#0055A4", "#ffffff", "#EF4135"] }, // フランス
    { dir: "h", colors: ["#FF9933", "#ffffff", "#138808"] }, // インド
    { dir: "dot", colors: ["#ffffff"], dot: "#CD2E3A" }, // 韓国
    { dir: "v", colors: ["#009246", "#ffffff", "#CE2B37"] }, // イタリア
    { dir: "h", colors: ["#009C3B", "#FFDF00", "#009C3B"] }, // ブラジル
    { dir: "h", colors: ["#012169", "#ffffff", "#C8102E"] }, // UK系
    { dir: "h", colors: ["#AA151B", "#F1BF00", "#AA151B"] }, // スペイン
    { dir: "h", colors: ["#DA251D", "#DA251D", "#DA251D"] }, // ベトナム
    { dir: "h", colors: ["#007A4D", "#ffffff", "#000000"] }, // 南ア
    { dir: "h", colors: ["#CE1126", "#ffffff", "#000000"] }, // エジプト
  ];
  const W = 1200, dip = 26, N = flags.length, fw = 22, fh = 14;
  const bands = (f: typeof flags[number]) => {
    if (f.dir === "dot") {
      return (
        <g>
          <rect width={fw} height={fh} fill={f.colors[0]} />
          <circle cx={fw / 2} cy={fh / 2} r={fh * 0.32} fill={f.dot} />
        </g>
      );
    }
    const n = f.colors.length;
    return (
      <g>
        {f.colors.map((c, k) =>
          f.dir === "h" ? (
            <rect key={k} x={0} y={(fh / n) * k} width={fw} height={fh / n} fill={c} />
          ) : (
            <rect key={k} x={(fw / n) * k} y={0} width={fw / n} height={fh} fill={c} />
          )
        )}
      </g>
    );
  };
  return (
    <div className="pointer-events-none absolute top-0 left-0 w-full z-20" aria-hidden="true">
      <svg viewBox={`0 0 ${W} 56`} width="100%" preserveAspectRatio="xMidYMid slice" className="block">
        <path d={`M0 6 Q ${W / 2} ${6 + dip} ${W} 6`} fill="none" stroke="rgba(100,116,139,.55)" strokeWidth={1.5} />
        {flags.map((f, i) => {
          const t = (i + 0.5) / N;
          const x = t * W;
          const y = (1 - t) * (1 - t) * 6 + 2 * (1 - t) * t * (6 + dip) + t * t * 6;
          return (
            <g key={i} transform={`translate(${x}, ${y})`}>
              <line x1={0} y1={0} x2={0} y2={5} stroke="rgba(100,116,139,.6)" strokeWidth={0.8} />
              <g transform={`translate(${-fw / 2}, 5)`}>
                {bands(f)}
                <rect width={fw} height={fh} fill="none" stroke="rgba(0,0,0,.18)" strokeWidth={0.6} />
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
