import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

const LINE_ADD_URL = import.meta.env.VITE_LINE_ADD_URL || "https://line.me/";

const groups = [
  {
    name: "鯉の会（西南学院大学）",
    category: "文化交流",
    description:
      "留学生と日本舞踊を通じて交流。伝統文化を軸にした国際理解を推進。",
  },
  {
    name: "国際交流 PARTNERS（久留米大学）",
    category: "地域交流",
    description:
      "久留米を拠点に、日本人学生と留学生の異文化交流の機会を企画。",
  },
  {
    name: "FIWC九州",
    category: "国際協力",
    description:
      "国内外の社会課題に向き合い、現地での協働を通じた活動を実践。",
  },
  {
    name: "九産大秋保ゼミ 国際協力班",
    category: "学術・調査",
    description:
      "フィールドワーク中心に多文化共生やフェアトレードの研究を展開。",
  },
  {
    name: "IFSAQ（九州大学）",
    category: "グローバルネットワーク",
    description:
      "森林学系学生の国際ネットワークを通じて越境的な学びと連携を促進。",
  },
];

export default function DemoHome() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_0%_0%,rgba(20,184,166,0.18),transparent_35%),radial-gradient(circle_at_100%_0%,rgba(251,191,36,0.2),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(244,114,182,0.16),transparent_40%),white]">
      <section className="relative overflow-hidden pt-16 pb-14 md:pt-24 md:pb-20">
        <div className="memphis-shape memphis-circle w-28 h-28 bg-[var(--turquoise)]/30 -top-8 left-6" />
        <div className="memphis-shape w-24 h-24 bg-[var(--yellow)]/35 top-8 right-10 rotate-12" />
        <div className="memphis-shape memphis-circle w-14 h-14 bg-[var(--pink)]/35 bottom-8 left-[40%]" />
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-black text-white px-4 py-1 text-sm font-bold tracking-wide">
                DEMO
              </span>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] text-gray-900">
                福岡国際交流プラットフォーム
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                福岡で活動する国際交流団体の情報と、最新の国際交流イベント情報を
                LINEでまとめて届けるための案内ページです。
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[var(--turquoise)] hover:bg-[var(--turquoise)]/90 text-base px-6 py-5"
                >
                  <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
                    LINEを追加する
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/demo/event-2026">2026イベントLPを見る</Link>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="rounded-full px-3 py-1 bg-black text-white">
                  団体掲載希望受付
                </span>
                <span className="rounded-full px-3 py-1 bg-white border border-black/10">
                  イベント情報配信
                </span>
                <span className="rounded-full px-3 py-1 bg-white border border-black/10">
                  福岡ローカル特化
                </span>
              </div>
            </div>

            <Card className="p-6 md:p-8 border-black/10 bg-white/90 backdrop-blur-sm shadow-xl">
              <h2 className="text-2xl font-bold mb-4">LINE追加でできること</h2>
              <ul className="space-y-3 text-gray-700">
                <li>福岡の国際交流団体情報を受け取れる</li>
                <li>国際交流イベントの開催情報が届く</li>
                <li>イベントの先行案内・募集開始を確認できる</li>
                <li>団体掲載希望や問い合わせの窓口として使える</li>
              </ul>
              <div className="mt-6 rounded-xl bg-gradient-to-r from-[var(--turquoise)]/15 to-[var(--yellow)]/20 p-4 border border-black/5">
                <p className="font-semibold text-gray-900">主なCV</p>
                <p className="text-sm text-gray-700">
                  1. LINE登録 2. イベントLP遷移
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-white/85 border-y border-black/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-end justify-between gap-4 mb-6 flex-wrap">
              <h2 className="text-3xl font-bold">掲載予定の団体例</h2>
              <Button asChild variant="outline">
                <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
                  掲載相談をLINEで送る
                </a>
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {groups.map((group) => (
                <Card key={group.name} className="p-5 border-black/10 h-full">
                  <p className="text-xs font-bold text-[var(--turquoise)] mb-2">
                    {group.category}
                  </p>
                  <p className="font-semibold text-gray-900 mb-2">{group.name}</p>
                  <p className="text-sm text-gray-700">{group.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">このページの導線設計</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 border-black/10">
                <h3 className="text-2xl font-bold mb-3">CV 1: LINE登録</h3>
                <p className="text-gray-700 mb-4">
                  ユーザー向けに団体・イベント情報を継続配信するメイン導線です。
                </p>
                <Button asChild className="bg-[var(--pink)] hover:bg-[var(--pink)]/90 text-white">
                  <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
                    LINE追加へ進む
                  </a>
                </Button>
              </Card>

              <Card className="p-6 border-black/10">
                <h3 className="text-2xl font-bold mb-3">CV 2: イベント告知LP</h3>
                <p className="text-gray-700 mb-4">
                  開催予定イベントのLPへ遷移し、参加予約・詳細確認へ繋げます。
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Button asChild variant="outline">
                    <Link href="/demo/event-2025">過去イベントLP</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link href="/demo/event-2026">2026イベントLP</Link>
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <Card className="p-8 md:p-10 border-black/10 bg-[linear-gradient(135deg,rgba(20,184,166,0.08),rgba(244,114,182,0.1),rgba(251,191,36,0.12))]">
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                次のアクション
              </h3>
              <p className="text-gray-700 mb-6">
                団体掲載の相談、イベント告知の依頼、国際交流に関する問い合わせは
                LINEから受け付けます。まずは公式LINEに登録してください。
              </p>
              <div className="flex gap-3 flex-wrap">
                <Button
                  asChild
                  size="lg"
                  className="bg-[var(--turquoise)] hover:bg-[var(--turquoise)]/90"
                >
                  <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
                    公式LINEを追加
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/demo/event-2026">2026イベントLPを見る</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
