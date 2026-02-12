import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

const LINE_ADD_URL = import.meta.env.VITE_LINE_ADD_URL || "https://line.me/";

const groups = [
  "鯉の会（西南学院大学）",
  "国際交流 PARTNERS（久留米大学）",
  "FIWC九州（Friends International Work Camp）",
  "九産大秋保ゼミ 国際協力班（九州産業大学）",
  "IFSAQ（九州大学）",
];

export default function DemoHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--turquoise)]/10 via-white to-[var(--yellow)]/20">
      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <span className="inline-flex rounded-full bg-black text-white px-4 py-1 text-sm font-bold">
                DEMO
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                福岡国際交流プラットフォーム
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                福岡の国際交流団体・国際交流イベント情報をまとめて受け取れるプラットフォームです。
                LINE登録を中心に、イベント告知と団体掲載を進めます。
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-[var(--turquoise)] hover:bg-[var(--turquoise)]/90">
                  <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
                    LINEを追加する
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/demo/event-2026">2026イベントLPを見る</Link>
                </Button>
              </div>
            </div>

            <Card className="p-6 border-black/10">
              <h2 className="text-xl font-bold mb-4">LINE追加でできること</h2>
              <ul className="space-y-3 text-gray-700">
                <li>福岡の国際交流団体情報を受け取れる</li>
                <li>国際交流イベントの開催情報が届く</li>
                <li>イベントの先行案内・募集開始を確認できる</li>
                <li>団体掲載希望や問い合わせの窓口として使える</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section className="section bg-white/80 border-y border-black/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">掲載予定の団体例</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {groups.map((group) => (
                <Card key={group} className="p-5 border-black/10">
                  <p className="font-semibold text-gray-800">{group}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-black/10">
              <h3 className="text-2xl font-bold mb-3">CV 1: LINE登録</h3>
              <p className="text-gray-700 mb-4">
                ユーザー向けに国際交流情報を届けるメイン導線です。
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
                開催予定イベントのLPへ遷移し、参加予約・詳細確認に繋げます。
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
      </section>
    </div>
  );
}
