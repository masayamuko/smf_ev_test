import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "wouter";

const LINE_ADD_URL = import.meta.env.VITE_LINE_ADD_URL || "https://line.me/";

const internRoles = [
    {
        title: "企画・ディレクション",
        emoji: "📋",
        description: "イベント全体の企画設計、スケジュール管理、関係者との調整を担当。プロジェクトマネジメントを実践的に学べます。",
    },
    {
        title: "広報・SNS運用",
        emoji: "📣",
        description: "InstagramやXでの情報発信、フライヤー作成、集客戦略の立案。マーケティングスキルが身につきます。",
    },
    {
        title: "当日運営スタッフ",
        emoji: "🎤",
        description: "司会進行、会場設営、受付対応、タイムキーピングなど、イベント運営の第一線で活躍できます。",
    },
    {
        title: "映像・デザイン",
        emoji: "🎬",
        description: "イベントの撮影・録画、ダイジェスト動画制作、配信素材のデザインなどクリエイティブ系の業務。",
    },
];

const benefits = [
    { emoji: "🌏", text: "国際交流の現場を間近で体験" },
    { emoji: "🤝", text: "多様な大学の学生・団体とのネットワーク" },
    { emoji: "📈", text: "イベント運営スキルの習得" },
    { emoji: "📝", text: "就活で使える実績づくり" },
    { emoji: "🏆", text: "Award当日の舞台裏を体感" },
    { emoji: "💡", text: "企画段階から関われる" },
];

export default function DemoIntern() {
    return (
        <div className="min-h-screen bg-white">
            {/* ─── HERO ─── */}
            <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 md:py-28">
                <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[var(--yellow)]/15 -translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[var(--turquoise)]/10 translate-x-1/3 translate-y-1/3" />

                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <Link href="/demo" className="inline-flex items-center gap-1 text-white/60 hover:text-white text-sm transition-colors">
                            ← プラットフォームに戻る
                        </Link>

                        <div>
                            <span className="inline-flex items-center gap-1 bg-[var(--yellow)] text-gray-900 rounded-full px-4 py-1.5 text-sm font-extrabold uppercase tracking-wider mb-4">
                                🔥 募集中
                            </span>
                            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mt-4">
                                第二回 福岡国際団体Award
                                <br />
                                <span className="bg-gradient-to-r from-[var(--yellow)] to-amber-300 bg-clip-text text-transparent">
                                    インターン募集
                                </span>
                            </h1>
                            <p className="text-lg text-white/70 mt-6 max-w-lg mx-auto leading-relaxed">
                                2026年開催予定の第二回Awardの運営メンバーを募集します。
                                国際交流イベントの舞台裏を一緒に作りませんか？
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Award とは ─── */}
            <section className="py-16 md:py-20 bg-gray-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-sm font-bold text-[var(--turquoise)] mb-2 tracking-wide uppercase">About the Award</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                福岡国際団体Awardとは？
                            </h2>
                        </div>

                        <Card className="p-8 md:p-10 border-0 shadow-lg rounded-2xl bg-white">
                            <div className="space-y-4 text-gray-700 leading-relaxed">
                                <p>
                                    福岡で活動する国際交流団体が一堂に会し、それぞれの活動内容をプレゼンテーション。
                                    来場者の投票によってトップ3を決定する、福岡初のアワードイベントです。
                                </p>
                                <p>
                                    2025年に第一回を開催し、5団体が参加。200名を超える来場者で盛り上がりました。
                                    第二回はさらに規模を拡大し、より多くの団体と出会える場を目指しています。
                                </p>
                            </div>
                            <div className="mt-6">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="rounded-xl border-2 border-gray-300 hover:border-[var(--turquoise)] hover:text-[var(--turquoise)] transition-all duration-200"
                                >
                                    <Link href="/demo/event-2025">第一回の様子を見る →</Link>
                                </Button>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* ─── 募集ポジション ─── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-sm font-bold text-[var(--yellow)] mb-2 tracking-wide uppercase">Positions</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                募集ポジション
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                            {internRoles.map((role) => (
                                <Card
                                    key={role.title}
                                    className="p-6 border-0 shadow-md rounded-2xl bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-4xl flex-shrink-0">{role.emoji}</span>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{role.title}</h3>
                                            <p className="text-sm text-gray-600 leading-relaxed">{role.description}</p>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 参加メリット ─── */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-teal-50 to-amber-50">
                <div className="container">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-sm font-bold text-[var(--turquoise)] mb-2 tracking-wide uppercase">Benefits</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                参加するメリット
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {benefits.map((b) => (
                                <Card key={b.text} className="p-5 border-0 shadow-sm rounded-2xl bg-white text-center">
                                    <span className="text-3xl block mb-2">{b.emoji}</span>
                                    <p className="text-sm font-semibold text-gray-800">{b.text}</p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── 募集要項 ─── */}
            <section className="py-16 md:py-20 bg-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-10">
                            <p className="text-sm font-bold text-[var(--pink)] mb-2 tracking-wide uppercase">Details</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
                                募集要項
                            </h2>
                        </div>

                        <Card className="p-8 border-0 shadow-lg rounded-2xl bg-white divide-y divide-gray-100">
                            <div className="pb-4">
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-bold text-gray-700">対象</span>
                                    <span className="text-gray-600">福岡近郊の大学生・専門学生</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-bold text-gray-700">期間</span>
                                    <span className="text-gray-600">2026年4月〜イベント終了まで</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-bold text-gray-700">頻度</span>
                                    <span className="text-gray-600">月2〜3回のミーティング + 各自作業</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-bold text-gray-700">報酬</span>
                                    <span className="text-gray-600">無償（交通費支給あり）</span>
                                </div>
                                <div className="flex justify-between items-center py-3">
                                    <span className="font-bold text-gray-700">応募方法</span>
                                    <span className="text-gray-600">LINEでメッセージを送信</span>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[var(--yellow)]/5" />

                <div className="container relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="inline-flex items-center gap-2 rounded-full bg-[var(--yellow)]/20 text-[var(--yellow)] px-4 py-1.5 text-sm font-bold mb-6 border border-[var(--yellow)]/30">
                            ✋ 応募する
                        </span>
                        <h3 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            一緒にAwardを
                            <br />
                            <span className="bg-gradient-to-r from-[var(--yellow)] to-amber-300 bg-clip-text text-transparent">
                                つくりましょう
                            </span>
                        </h3>
                        <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
                            LINEで「インターン希望」と送るだけでOK。
                            まずはカジュアルに話しましょう！
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                size="lg"
                                className="bg-[var(--yellow)] hover:bg-amber-400 text-gray-900 text-lg px-12 py-7 rounded-xl shadow-2xl shadow-yellow-500/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] font-bold"
                            >
                                <a href={LINE_ADD_URL} target="_blank" rel="noopener noreferrer">
                                    LINEで応募する →
                                </a>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 text-lg px-10 py-7 rounded-xl transition-all duration-300 hover:-translate-y-0.5 font-bold"
                            >
                                <Link href="/demo">← プラットフォームに戻る</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
