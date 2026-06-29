import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const LINE_ADD_URL = import.meta.env.VITE_LINE_ADD_URL || "https://line.me/";
const CORDUROY_URL = "https://corduroy.co.jp";

/*
  学生運営メンバー募集LP（/join）
  コンセプト：AI・ITの力で福岡の国際系サークルをサポートし、海外に目を向ける学生を増やす。
  公開ブロッカー（公開前に確定して埋める）:
    1. 一次締切の日付  2. プラットフォーム正式名称（現状：福岡国際系団体プラットフォーム）
    3. 個人情報の利用目的・写真掲載・AI入力ルール（フォーム化する場合）
  ※ 待遇＝なし（無償）。学習支援として株式会社コールテンがChatGPT Plus＋月1AI研修を提供。
*/

const FORYOU = [
  "福岡の国際系サークルをサポートしたい",
  "ガクチカ（学生時代に打ち込んだ実績）がほしい",
  "AIやITを学んで、実践していきたい",
  "同じ熱量で動ける仲間がほしい",
];

// 活動内容：交流の場 / 学習の場 / 発信の場
const ACTIVITIES = [
  { emoji: "🤝", title: "交流の場", sub: "交流会の主催", desc: "国際系サークルが集まる交流会を主催。団体の垣根を越えたつながりをつくります。" },
  { emoji: "📚", title: "学習の場", sub: "AI・IT勉強会の主催", desc: "AI・ITを学び合う勉強会を主催。学んだことを運営の実践で活かします。" },
  { emoji: "📣", title: "発信の場", sub: "情報発信サイトの運営", desc: "団体紹介・イベント情報を発信するサイトを運営。いい活動を広く届けます。" },
];

const TAKEAWAYS = [
  { emoji: "✨", title: "AIスキル", desc: "自分専用に育てたAIを、運営実務（議事録・SNS下書き・情報整理）で使いこなす力。" },
  { emoji: "📁", title: "“つくった”実績", desc: "自分が作ったページ・企画・イベントを、そのままガクチカ・ポートフォリオに。" },
  { emoji: "🌏", title: "仲間と場", desc: "熱量の合う仲間、福岡の国際交流コミュニティとのつながり。" },
];

const FAQ = [
  { q: "AI、まったく触ったことなくても大丈夫？", a: "大丈夫です。月1回のAI研修付き。むしろ初めての人が主役です。" },
  { q: "どれくらいの時間がかかる？", a: "週1ミーティング＋自分のペースの作業。学業優先でOKな無理のない範囲です。" },
  { q: "文系でも参加できる？", a: "もちろん。プログラミングではなく「AI・ITとの付き合い方」を学びます。" },
  { q: "途中で合わなかったら？", a: "まずはカジュアル面談で話してから決められます。" },
];

export default function Join() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white/10 -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--yellow)]/15 translate-x-1/4 translate-y-1/4" />
        <div className="container relative z-10 py-24 md:py-32 text-center">
          <span className="inline-flex rounded-full bg-white/15 backdrop-blur-sm text-white px-5 py-1.5 text-sm font-bold tracking-widest mb-6 border border-white/20">
            学生運営メンバー募集
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            AI・ITの力で、
            <br />
            <span className="bg-gradient-to-r from-[var(--yellow)] to-amber-200 bg-clip-text text-transparent">
              福岡の国際系サークルをサポート。
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-white font-bold">
            海外に目を向ける学生を、福岡からもっと増やそう。
          </p>
          <p className="mt-3 text-base md:text-lg text-white/85 font-medium">
            学生運営メンバー募集 ／ AI・ITを学んで実践 ／ 未経験OK
          </p>
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-12 py-7 rounded-xl shadow-2xl font-bold transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="#join-cta">まず話を聞いてみる</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,60 C480,100 960,20 1440,60 L1440,80 L0,80 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* ─── こんな人へ ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">こんな人へ</h2>
            <ul className="space-y-px">
              {FORYOU.map((t) => (
                <li key={t} className="flex items-start gap-3 py-3.5 border-b border-gray-100">
                  <span className="mt-0.5 inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--turquoise)] text-white text-sm font-bold shrink-0">✓</span>
                  <span className="text-gray-800 text-lg">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── これは何をする活動？ ─── */}
      <section className="py-16 md:py-20 bg-teal-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">これは、何をする活動？</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              福岡の国際系サークル・団体の<strong className="text-[var(--turquoise)]">プラットフォームサイトの運営</strong>です。
              サイトの更新・SNS運用、そして年1回の福岡国際系学生団体アワード。
              運営を通じて、<strong className="text-[var(--turquoise)]">福岡の国際系サークルを盛り上げていくサポート</strong>の活動です。
            </p>
            <p className="mt-4 text-sm text-gray-500">
              ※ アワードに向けて、通年でゆるやかにつながりをつくっていきます。
            </p>
          </div>
        </div>
      </section>

      {/* ─── 活動内容（交流の場 / 学習の場 / 発信の場） ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">活動内容</h2>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {ACTIVITIES.map((a) => (
              <Card key={a.title} className="p-7 border-0 shadow-md rounded-2xl bg-white hover:shadow-xl transition-shadow text-center flex flex-col">
                <div className="text-4xl mb-3">{a.emoji}</div>
                <h3 className="font-extrabold text-xl text-gray-900">{a.title}</h3>
                <p className="text-sm font-bold text-[var(--turquoise)] mb-3">{a.sub}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
              </Card>
            ))}
          </div>

          {/* AI・ITは月1研修で学べる + 次回イベント告知 */}
          <div className="max-w-4xl mx-auto mt-12 rounded-2xl bg-gradient-to-br from-indigo-50 to-teal-50 border border-[var(--turquoise)]/20 p-8 md:p-10">
            <div className="text-center mb-6">
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--turquoise)]/10 text-[var(--turquoise)] px-4 py-1 text-sm font-bold mb-3">
                🤖 月1回・AI研修
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900">AI・ITは、月1回の研修で学べます</h3>
              <p className="mt-3 text-gray-700 leading-relaxed max-w-2xl mx-auto">
                運営メンバーには、<strong>月1回のAI研修</strong>を提供。AIやITを基礎から学び、議事録・SNS下書き・情報整理・サイト運営など、運営の実務でそのまま実践できます。
                研修を提供するのは、AI活用を支援する<strong>株式会社コールテン</strong>です。
              </p>
            </div>

            {/* 次回研修の告知 */}
            <div className="rounded-xl bg-white border border-gray-200 shadow-sm p-6">
              <p className="text-xs font-bold text-[var(--turquoise)] tracking-wider mb-3">次回 AI研修</p>
              <div className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-gray-800">
                <p className="flex items-center gap-2"><span className="text-xl">📅</span><span><strong>2026年7月6日（月）</strong> 18:00〜20:00</span></p>
                <p className="flex items-center gap-2"><span className="text-xl">📍</span><span>福岡市内・天神駅近く（会場詳細は後日ご案内）</span></p>
                <p className="flex items-center gap-2"><span className="text-xl">🏢</span><span>主催：株式会社コールテン</span></p>
                <p className="flex items-center gap-2"><span className="text-xl">🙌</span><span>興味がある方はぜひ（運営メンバー以外も歓迎）</span></p>
              </div>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Button asChild className="bg-[var(--turquoise)] hover:bg-teal-400 text-white font-bold rounded-xl px-6 py-5">
                  <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">LINEで参加を伝える</a>
                </Button>
                <Button asChild variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 font-bold rounded-xl px-6 py-5">
                  <a href={CORDUROY_URL} target="_blank" rel="noopener noreferrer">株式会社コールテンを見る →</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 持って帰れるもの ─── */}
      <section className="py-16 md:py-20 bg-teal-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">持って帰れるもの</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {TAKEAWAYS.map((t) => (
              <Card key={t.title} className="p-7 border-0 shadow-md rounded-2xl bg-white text-center">
                <div className="text-4xl mb-3">{t.emoji}</div>
                <h3 className="font-bold text-xl mb-2 text-gray-900">{t.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 募集要項 ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">募集要項</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
            <dl>
              {[
                { dt: "対象", dd: "福岡の大学生／国際交流に関心がある人／AI未経験歓迎" },
                { dt: "募集人数", dd: "第1期 3名（定員に達し次第終了）" },
                { dt: "一次締切", dd: "（決定後に記載）" },
                { dt: "活動形態", dd: "オンライン中心＋たまにリアル／週1ミーティング（30〜60分）" },
                { dt: "費用", dd: "無料（参加にあたっての費用はかかりません）" },
                { dt: "学習支援", dd: "株式会社コールテンが、ChatGPT有料プラン（Plus）の提供＋月1回のAI研修を提供" },
              ].map((row) => (
                <div key={row.dt} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4 px-6 py-4 border-b border-gray-100 last:border-0">
                  <dt className="font-bold text-[var(--turquoise)]">{row.dt}</dt>
                  <dd className="text-gray-800 m-0">{row.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-16 md:py-20 bg-teal-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">よくある質問</h2>
          <div className="max-w-2xl mx-auto space-y-3">
            {FAQ.map((f) => (
              <details key={f.q} className="rounded-xl border border-gray-200 bg-white px-5 py-4 group">
                <summary className="font-bold text-gray-900 cursor-pointer marker:text-[var(--turquoise)] group-open:text-[var(--turquoise)]">
                  {f.q}
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section id="join-cta" className="py-16 md:py-24 bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/10 translate-x-1/3 -translate-y-1/3" />
        <div className="container relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
            まずは、話を聞いてみませんか？
          </h2>
          <p className="text-lg text-white/85 mb-10">
            30分のカジュアル面談から。応募の前に、気軽に話せます。
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-12 py-7 rounded-xl shadow-2xl font-bold transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
              ✨ LINEで話を聞いてみる
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
