import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";
// AWARD2026 登壇団体の写真（チラシからの切り出し・仮。後日、各団体の元写真で差し替え）
import imgOym from "@/assets/award2026/teams/oym.jpg";
import imgSakura from "@/assets/award2026/teams/sakura.jpg";
import imgRyo from "@/assets/award2026/teams/ryo.jpg";
import imgFitcore from "@/assets/award2026/teams/fitcore.jpg";
import imgC3 from "@/assets/award2026/teams/c3.jpg";

const LINE_ADD_URL = import.meta.env.VITE_LINE_ADD_URL || "https://line.me/";

type AwardBadge = {
  rank: 1 | 2 | 3;
  year: number;
};

const groups = [
  {
    name: "鯉の会（西南学院大学）",
    category: "文化交流",
    img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764040955/IMG_1660_djg8xc.jpg",
    description:
      "留学生と日本舞踊を通じて交流。伝統文化を軸にした国際理解を推進。",
    award: { rank: 1, year: 2025 } as AwardBadge,
  },
  {
    name: "国際交流 PARTNERS（久留米大学）",
    category: "地域交流",
    img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764041404/IMG_1638_xjkwy9.jpg",
    description:
      "久留米を拠点に、日本人学生と留学生の異文化交流の機会を企画。",
    award: { rank: 2, year: 2025 } as AwardBadge,
  },
  {
    name: "FIWC九州",
    category: "国際協力",
    img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764041417/CleanShot_2025-11-25_at_12.29.09_2x_t00hdy.png",
    description:
      "国内外の社会課題に向き合い、現地での協働を通じた活動を実践。",
    award: { rank: 3, year: 2025 } as AwardBadge,
  },
  {
    name: "九産大秋保ゼミ 国際協力班",
    category: "学術・調査",
    img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764040955/IMG_1932_gsxkzg.jpg",
    description:
      "フィールドワーク中心に多文化共生やフェアトレードの研究を展開。",
  },
  {
    name: "IFSAQ（九州大学）",
    category: "グローバルネットワーク",
    img: "https://res.cloudinary.com/dg3mdcuju/image/upload/v1764040955/IMG_1952_oubtsz.jpg",
    description:
      "森林学系学生の国際ネットワークを通じて越境的な学びと連携を促進。",
  },
  // ── AWARD 2026 登壇団体（高校生2・大学生5のうち、IFSAQ/FIWCは上記に既出のため残り5団体） ──
  {
    name: "On Your Mark！（福岡未来創造キャンプ）",
    category: "高校生・挑戦",
    img: imgOym,
    description:
      "高校生が主体となり、未来を切り拓く挑戦を後押しするキャンプ型プログラム。",
  },
  {
    name: "SAKURA（雙葉高校）",
    category: "高校生・国際交流",
    img: imgSakura,
    description:
      "雙葉高校の生徒による国際交流・社会貢献活動に取り組むチーム。",
  },
  {
    name: "国際寮RA（西南学院大学）",
    category: "留学生支援",
    img: imgRyo,
    description:
      "国際寮のレジデント・アシスタントとして、留学生と日本人学生の共生をつくる。",
  },
  {
    name: "FIT CORE（福岡大学）",
    category: "国際交流",
    img: imgFitcore,
    description:
      "福岡大学を拠点に国際交流・地域連携に取り組む学生団体。",
  },
  {
    name: "プロジェクト創発団体C³（西南学院大学）",
    category: "課題解決",
    img: imgC3,
    description:
      "西南学院大学発、課題解決型のプロジェクトを生み出す創発チーム。",
  },
];

const badgeColors: Record<number, { bg: string; border: string; text: string; shadow: string }> = {
  1: {
    bg: "linear-gradient(135deg, #FFD700, #FFA500)",
    border: "#DAA520",
    text: "#7B3F00",
    shadow: "0 2px 8px rgba(255, 215, 0, 0.5)",
  },
  2: {
    bg: "linear-gradient(135deg, #E8E8E8, #B0B0B0)",
    border: "#A0A0A0",
    text: "#3A3A3A",
    shadow: "0 2px 8px rgba(192, 192, 192, 0.5)",
  },
  3: {
    bg: "linear-gradient(135deg, #E8A06B, #CD7F32)",
    border: "#A0622E",
    text: "#4A2800",
    shadow: "0 2px 8px rgba(205, 127, 50, 0.5)",
  },
};

function AwardBadgeComponent({ rank, year }: AwardBadge) {
  const style = badgeColors[rank];
  const rankLabel = rank === 1 ? "🥇" : rank === 2 ? "🥈" : "🥉";
  return (
    <div
      className="absolute top-3 right-3 z-10 flex flex-col items-center justify-center rounded-lg px-2.5 py-1.5 font-bold"
      style={{
        background: style.bg,
        border: `2px solid ${style.border}`,
        color: style.text,
        boxShadow: style.shadow,
      }}
    >
      <span className="text-lg leading-none">{rankLabel}</span>
      <span className="text-[10px] font-extrabold tracking-wider leading-tight mt-0.5">{year}</span>
    </div>
  );
}

export default function DemoHome() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden min-h-[70vh] flex items-center">
        {/* Background photo collage */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1 opacity-30">
          {groups.slice(0, 3).map((g) => (
            <div key={g.name} className="overflow-hidden">
              <img src={g.img} alt="" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/85 via-gray-900/80 to-gray-900/90" />
        {/* Color accent overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--turquoise)]/20 via-transparent to-[var(--pink)]/10" />

        <div className="container relative z-10 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] text-white tracking-tight drop-shadow-lg">
              福岡国際系団体
              <br />
              <span className="bg-gradient-to-r from-[var(--turquoise)] via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                プラットフォーム
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
              福岡で活動する国際系団体の情報と、福岡のイベント情報・国際系イベント情報を
              LINEでお届けする案内ページです。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 justify-center pt-2">
              <span className="rounded-full px-4 py-1.5 bg-white text-gray-900 text-sm font-bold shadow-lg">
                国際系イベント情報
              </span>
              <span className="rounded-full px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 border border-white/20 text-sm font-medium">
                団体掲載受付中
              </span>
              <span className="rounded-full px-4 py-1.5 bg-white/10 backdrop-blur-sm text-white/90 border border-white/20 text-sm font-medium">
                福岡ローカル特化
              </span>
            </div>
          </div>
        </div>

        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0,60 C480,100 960,20 1440,60 L1440,80 L0,80 Z" fill="#f0fdfa" />
          </svg>
        </div>
      </section>

      {/* ─── 福岡での国際系情報が届く SECTION ─── */}
      {/* 背景色は Hero の波(divider) fill #f0fdfa = teal-50 と完全一致させ、継ぎ目の横線を消す */}
      <section className="py-16 md:py-20 bg-teal-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <p className="text-sm font-bold text-[var(--turquoise)] mb-2 tracking-wide uppercase">Receive Info</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                福岡での国際系情報が届く
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 border-0 shadow-md rounded-2xl bg-white text-center">
                <div className="text-4xl mb-3">📱</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">LINEに登録するだけ</h3>
                <p className="text-sm text-gray-600">
                  公式LINEを友だち追加するだけで、福岡の国際系情報が届きます。
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-md rounded-2xl bg-white text-center">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">掲載団体のイベント情報</h3>
                <p className="text-sm text-gray-600">
                  掲載団体が企画する国際系イベントの情報や招待がLINEで届きます。
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-md rounded-2xl bg-white text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">最新のアワード情報も</h3>
                <p className="text-sm text-gray-600">
                  年1回、福岡国際系学生団体のアワードを開催。開催情報やインターン募集もいち早くキャッチ。
                </p>
              </Card>
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[var(--turquoise)] hover:bg-teal-400 text-white text-lg px-12 py-7 rounded-xl shadow-2xl shadow-teal-500/30 hover:shadow-teal-400/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] font-bold"
            >
              <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
                ✨ LINE登録で情報を受け取る
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── 団体一覧 SECTION ─── */}
      <section className="py-16 md:py-20 bg-white relative">
        <div className="container relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section header */}
            <div className="text-center mb-10">
              <p className="text-sm font-bold text-[var(--turquoise)] mb-2 tracking-wide uppercase">Groups in Fukuoka</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                福岡の国際系団体一覧
              </h2>
            </div>

            {/* 4-column grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {groups.map((group) => (
                <Card
                  key={group.name}
                  className="group relative p-0 border-0 overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-2xl"
                >
                  {/* Image with award badge */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                    {group.award && (
                      <AwardBadgeComponent rank={group.award.rank} year={group.award.year} />
                    )}
                    <img
                      src={group.img}
                      alt={`${group.name} の写真`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 pt-8">
                      <span className="text-xs font-bold text-white/90 bg-[var(--turquoise)] px-2 py-0.5 rounded-md">
                        {group.category}
                      </span>
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="p-4">
                    <p className="font-bold text-gray-900 text-sm md:text-base mb-1.5 leading-snug">
                      {group.name}
                    </p>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-2">
                      {group.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            {/* ── 団体掲載受付中 sub-section ── */}
            <div className="mt-12 rounded-2xl bg-gradient-to-r from-teal-50 to-emerald-50 border-2 border-[var(--turquoise)]/20 p-8 md:p-10">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[var(--turquoise)]/10 text-[var(--turquoise)] px-4 py-1 text-sm font-bold mb-3">
                    📋 受付中
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
                    団体掲載受付中
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    LINEに登録して「団体掲載希望」とメッセージを送るだけ！
                    あなたの団体も一覧に掲載して、活動を多くの人に届けましょう。
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Button
                    asChild
                    size="lg"
                    className="bg-[var(--turquoise)] hover:bg-teal-400 text-white text-lg px-10 py-7 rounded-xl shadow-xl shadow-teal-500/20 hover:shadow-teal-400/30 transition-all duration-300 hover:-translate-y-1 font-bold whitespace-nowrap"
                  >
                    <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
                      LINEで掲載依頼 →
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 福岡国際団体Award SECTION ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-[var(--turquoise)]/10 -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[var(--yellow)]/10 translate-x-1/3 translate-y-1/3" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)]/20 text-[var(--yellow)] px-4 py-1.5 text-sm font-bold mb-4 border border-[var(--yellow)]/30">
                🏆 Award
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                福岡国際系学生団体アワード
                <br />
                <span className="bg-gradient-to-r from-[var(--yellow)] to-amber-300 bg-clip-text text-transparent">開催</span>
              </h2>
              <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto leading-relaxed">
                年1回、福岡で活動する国際系学生団体が一堂に会し、
                活動内容をプレゼン。来場者投票と審査員評価で表彰するイベントです。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* アーカイブ（過去の開催） */}
              <Card className="p-0 overflow-hidden border-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="p-8 text-left">
                  <span className="text-sm font-bold text-white/50 uppercase tracking-wider">Archive</span>
                  <h3 className="text-2xl font-extrabold text-white mt-2 mb-5">過去の開催</h3>
                  <div className="space-y-3">
                    <Link
                      href="/demo/event-2025"
                      className="flex items-center justify-between rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-4 transition-colors group"
                    >
                      <div>
                        <p className="text-xs text-white/50">2025</p>
                        <p className="font-bold text-white">第1回 AWARD 2025</p>
                      </div>
                      <span className="text-white/60 group-hover:text-white transition-colors">→</span>
                    </Link>
                    <Link
                      href="/demo/event-2026"
                      className="flex items-center justify-between rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 px-5 py-4 transition-colors group"
                    >
                      <div>
                        <p className="text-xs text-white/50">2026 ・ 参加者満足度 94.5%</p>
                        <p className="font-bold text-white">第2回 AWARD 2026</p>
                      </div>
                      <span className="text-white/60 group-hover:text-white transition-colors">→</span>
                    </Link>
                  </div>
                </div>
              </Card>

              {/* 次回（第3回）＋ 主催チーム募集 */}
              <Card className="p-0 overflow-hidden border-0 rounded-2xl bg-gradient-to-br from-[var(--yellow)]/20 to-amber-500/10 border border-[var(--yellow)]/30">
                <div className="p-8 text-center flex flex-col h-full">
                  <span className="inline-flex items-center gap-1 bg-[var(--yellow)] text-gray-900 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider self-center">
                    🔥 主催チーム募集中
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-3 mb-2">
                    第3回 AWARD
                    <br />
                    <span className="text-[var(--yellow)]">2027年12月 開催予定</span>
                  </h3>
                  <p className="text-white/60 text-sm mb-6 flex-grow">
                    次回開催を一緒に作る運営メンバーを募集中。
                    インターン・運営メンバー・主催チームとして、企画・広報・当日運営まで、あなたの力を求めています！
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[var(--yellow)] hover:bg-amber-400 text-gray-900 text-lg px-10 py-6 rounded-xl shadow-xl shadow-yellow-500/20 hover:shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-1 font-bold"
                  >
                    <Link href="/demo/intern">募集の詳細を見る →</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA SECTION ─── */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-teal-800 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-white/5 -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3" />

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white/90 px-4 py-1.5 text-sm font-semibold mb-6 backdrop-blur-sm">
              🚀 まずはここから
            </span>
            <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              公式LINEに登録して
              <br />
              福岡の国際系の情報をGET
            </h3>
            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
              団体掲載の相談、イベント情報、インターン募集など
              すべてLINEからお届けします。
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-12 py-7 rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 font-bold"
              >
                <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
                  ✨ 公式LINEを追加
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 運営メンバー / About SECTION ─── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm font-bold text-[var(--turquoise)] mb-2 tracking-wide uppercase">About Us</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-5">
              運営メンバー
            </h2>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto mb-10">
              このプラットフォームは、NPO法人国際教育支援機構スマイリーフラワーズと
              学生による実行委員会が運営しています。福岡の国際系団体をつなぎ、
              情報発信・イベント・アワードを通じて「知る・つながる・広がる」場をつくっています。
            </p>

            {/* メンバー紹介（プレースホルダ。後日プロフィールを差し替え） */}
            <div className="grid sm:grid-cols-3 gap-5 mb-10">
              {["企画・統括", "運営・渉外", "デザイン・広報"].map((role, i) => (
                <div key={i} className="rounded-2xl border border-gray-100 shadow-sm p-6 bg-white">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-gradient-to-br from-teal-400 to-emerald-400" />
                  <p className="font-bold text-gray-900">運営メンバー</p>
                  <p className="text-xs text-gray-500 mt-1">{role}</p>
                </div>
              ))}
            </div>

            {/* TODO: リンク先は別途制作中のLPに差し替え（現在は未掲載のためプレースホルダ） */}
            <Button
              asChild
              size="lg"
              className="bg-[var(--turquoise)] hover:bg-teal-400 text-white text-lg px-10 py-6 rounded-xl shadow-lg shadow-teal-500/20 transition-all duration-300 hover:-translate-y-0.5 font-bold"
            >
              <a href="#">運営チームの活動を見る →</a>
            </Button>
            <p className="text-xs text-gray-400 mt-3">※ 活動紹介ページは準備中です</p>
          </div>
        </div>
      </section>
    </div>
  );
}
