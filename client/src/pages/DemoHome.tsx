import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

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
            {/* DEMO badge */}
            <span className="inline-flex rounded-full bg-white/15 backdrop-blur-sm text-white px-5 py-1.5 text-sm font-bold tracking-widest uppercase border border-white/20">
              DEMO
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] text-white tracking-tight drop-shadow-lg">
              福岡国際交流
              <br />
              <span className="bg-gradient-to-r from-[var(--turquoise)] via-teal-300 to-emerald-300 bg-clip-text text-transparent">
                プラットフォーム
              </span>
            </h1>

            <p className="text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl mx-auto">
              福岡で活動する国際交流団体の情報と、最新の国際交流イベント情報を
              LINEでまとめて届けるための案内ページです。
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2.5 justify-center pt-2">
              <span className="rounded-full px-4 py-1.5 bg-white text-gray-900 text-sm font-bold shadow-lg">
                国際交流イベント情報
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
      <section className="py-16 md:py-20 bg-teal-50/50">
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
                  公式LINEを友だち追加するだけで、福岡の国際交流情報が届きます。
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-md rounded-2xl bg-white text-center">
                <div className="text-4xl mb-3">🌍</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">登録団体のイベント情報</h3>
                <p className="text-sm text-gray-600">
                  掲載団体が企画する国際交流イベントの情報や招待がLINEで届きます。
                </p>
              </Card>
              <Card className="p-6 border-0 shadow-md rounded-2xl bg-white text-center">
                <div className="text-4xl mb-3">🎉</div>
                <h3 className="font-bold text-lg mb-2 text-gray-900">最新のAward情報も</h3>
                <p className="text-sm text-gray-600">
                  福岡国際団体Awardの開催情報やインターン募集もいち早くキャッチ。
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
              <p className="text-sm font-bold text-[var(--turquoise)] mb-2 tracking-wide uppercase">Registered Groups</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                団体一覧
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
                福岡国際団体Award
                <br />
                <span className="bg-gradient-to-r from-[var(--yellow)] to-amber-300 bg-clip-text text-transparent">開催！</span>
              </h2>
              <p className="text-lg text-white/70 mt-4 max-w-xl mx-auto leading-relaxed">
                福岡で活動する国際交流団体が一堂に会し、
                活動内容をプレゼン。投票で上位団体を表彰するイベントです。
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Past Event */}
              <Card className="p-0 overflow-hidden border-0 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10">
                <div className="p-8 text-center">
                  <span className="text-sm font-bold text-white/50 uppercase tracking-wider">Past Event</span>
                  <h3 className="text-2xl font-extrabold text-white mt-2 mb-4">第一回 Award 2025</h3>
                  <p className="text-white/60 text-sm mb-6">
                    5団体が参加し、観客投票で結果を決定。
                    <br />盛況のうちに終了しました！
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-white/30 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 rounded-xl px-8 py-5 font-semibold"
                  >
                    <Link href="/event-2025">結果を見る →</Link>
                  </Button>
                </div>
              </Card>

              {/* Intern Recruitment */}
              <Card className="p-0 overflow-hidden border-0 rounded-2xl bg-gradient-to-br from-[var(--yellow)]/20 to-amber-500/10 border border-[var(--yellow)]/30">
                <div className="p-8 text-center">
                  <span className="inline-flex items-center gap-1 bg-[var(--yellow)] text-gray-900 rounded-full px-3 py-1 text-xs font-extrabold uppercase tracking-wider">
                    🔥 募集中
                  </span>
                  <h3 className="text-2xl font-extrabold text-white mt-3 mb-4">
                    第二回 Award 2026
                    <br />
                    <span className="text-[var(--yellow)]">インターン募集中</span>
                  </h3>
                  <p className="text-white/60 text-sm mb-6">
                    第二回の運営を一緒に作りませんか？
                    <br />企画・広報・当日運営まで、あなたの力を求めています！
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="bg-[var(--yellow)] hover:bg-amber-400 text-gray-900 text-lg px-10 py-6 rounded-xl shadow-xl shadow-yellow-500/20 hover:shadow-yellow-400/30 transition-all duration-300 hover:-translate-y-1 font-bold"
                  >
                    <Link href="/intern">詳細を見る →</Link>
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
              福岡の国際情報をGET
            </h3>
            <p className="text-lg text-white/80 mb-10 leading-relaxed max-w-xl mx-auto">
              団体掲載の相談、イベント情報、インターン募集など
              すべてLINEからお届けします。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-teal-700 hover:bg-gray-100 text-lg px-10 py-7 rounded-xl shadow-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 font-bold"
              >
                <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
                  ✨ 公式LINEを追加
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-10 py-7 rounded-xl transition-all duration-300 hover:-translate-y-0.5 font-bold"
              >
                <Link href="/event-2026">2026イベントLPを見る →</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
