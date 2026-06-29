import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const LINE_ADD_URL = import.meta.env.VITE_LINE_ADD_URL || "https://line.me/";

/*
  学生運営メンバー募集LP（/join）
  ※ /demo/intern（アワード運営インターン）とは別の、プラットフォーム運営側の個人募集。
  公開ブロッカー（公開前に必ず確定して埋める）:
    1. 報酬（無給/有給/交通費）＋労働性の整理
    2. プラットフォームの正式名称
    3. 募集期間・一次締切の日付
    4. 個人情報の利用目的・写真掲載・AI入力ルール（フォーム周り）
  ※ 内容は smf-hours/join.astro（企画書v2準拠）から移植し、プラットフォームのteal基調に合わせて再構成。
*/

const FORYOU = [
  "国際系サークルにいるけど、もう一歩踏み込みたい",
  "大学のうちに「自分でつくった」経験がほしい",
  "AIが気になってるけど、まだ触れてない",
  "同じ熱量で動ける仲間がほしい",
];

const ACTIVITIES = [
  { emoji: "🤝", title: "集まる場をつくる", desc: "国際系サークルの交流会を企画（学期に1回ペース）。代表・幹部が集まり、刺激し合う場を主催します。" },
  { emoji: "📣", title: "まとめて発信する", desc: "各団体の活動を月2本ペースでSNS／サイトで紹介。団体インタビューでいい活動を広く届けます。" },
  { emoji: "🏆", title: "イベントを動かす", desc: "12月の福岡国際系学生団体アワードに向けた企画・運営。登壇団体のオファーなどアワードチームと連携します。" },
  { emoji: "🤖", title: "運営にAIを使う", desc: "議事録・SNS下書き・情報整理をAIで効率化。AIを相棒に、少人数でも大きく動かします。" },
];

const TAKEAWAYS = [
  { emoji: "✨", title: "AIスキル", desc: "自分専用に育てたAIを、運営実務（議事録・SNS下書き・情報整理）で使いこなす力。" },
  { emoji: "📁", title: "“つくった”実績", desc: "自分が作ったページ・企画・イベントを、そのままポートフォリオに。" },
  { emoji: "🌏", title: "仲間と場", desc: "熱量の合う仲間、福岡の国際交流コミュニティとのつながり。" },
];

const FAQ = [
  { q: "AI、まったく触ったことなくても大丈夫？", a: "大丈夫です。無料の基礎講座付き。むしろ初めての人が主役です。" },
  { q: "どれくらいの時間がかかる？", a: "週1ミーティング＋自分のペースの作業。学業優先でOKな無理のない範囲です。" },
  { q: "文系でも参加できる？", a: "もちろん。プログラミングではなく「AIとの付き合い方」を学びます。" },
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
            福岡の国際交流を、
            <br />
            <span className="bg-gradient-to-r from-[var(--yellow)] to-amber-200 bg-clip-text text-transparent">
              見る側から動かす側へ。
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 font-medium">
            学生運営メンバー募集 ／ AIを使った運営も学べる ／ 未経験OK
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
              福岡の国際系サークル・団体の「団体一覧」「イベント情報」「交流会」「アワード」をつなぐ、
              Web＋コミュニティのプラットフォーム。それを、
              <strong className="text-[var(--turquoise)]">AIを相棒に学生チームで運営</strong>します。
              年1回の福岡国際系学生団体アワード（12月）に向けて、通年でつながりをつくっていく活動です。
            </p>
          </div>
        </div>
      </section>

      {/* ─── 活動内容（4本柱） ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">活動内容</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
            {ACTIVITIES.map((a) => (
              <Card key={a.title} className="p-6 border-0 shadow-md rounded-2xl bg-white hover:shadow-xl transition-shadow text-center flex flex-col">
                <div className="text-4xl mb-3">{a.emoji}</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">{a.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{a.desc}</p>
              </Card>
            ))}
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

      {/* ─── ここで学べるAI ─── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">ここは、AIを相棒にできる活動です</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              運営に入る人には、まず<strong className="text-[var(--turquoise)]">AIの基礎講座（無料）</strong>をやります。
              プロンプトの作り方、議事録やSNS下書きでの使い方、「自分専用に育てたChatGPT」のつくり方まで。
              AIは初めてでも大丈夫。むしろ、これから学びたい人が主役です。
            </p>
          </div>
        </div>
      </section>

      {/* ─── 募集要項 ─── */}
      <section className="py-16 md:py-20 bg-teal-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-10">募集要項</h2>
          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <dl>
              {[
                { dt: "対象", dd: "福岡の大学生／国際交流に関心がある人／AI未経験歓迎" },
                { dt: "募集人数", dd: "第1期 3名（定員に達し次第終了）" },
                { dt: "一次締切", dd: "（決定後に記載）" },
                { dt: "活動形態", dd: "オンライン中心＋たまにリアル／週1ミーティング（30〜60分）" },
                { dt: "待遇", dd: "（決定後に記載）" },
                { dt: "学習支援", dd: "AI基礎講座を無料で提供" },
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
      <section className="py-16 md:py-20 bg-white">
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
