import { Translations } from '@/types'

export const translations: Translations = {
  ja: {
    title: {
      default: "Masaya Official Site",
      template: '%s | Masaya Official Site'
    },
    description: '福岡を拠点に活動するAI活用サポーター・クリエイター。ChatGPTを「第二の自分」として育てる独自手法で、個人に最適化されたAIアシスタントの構築を支援。3Dモデリング、国際交流、ボードゲーム制作など多岐にわたるクリエイティブ活動を通じて、人々の可能性を広げ、デジタル変革を推進します。',
    keywords: ['AI活用', 'ChatGPT', '第二の自分', 'AIアシスタント', 'プロンプトエンジニアリング', 'デジタル変革', '3Dモデリング', '福岡', 'フリーランス', 'ADHD', 'ボードゲーム制作', '国際交流', 'AIコンサルティング'],
    openGraph: {
      title: "Masaya Official Site",
      description: 'AI活用サポーター・クリエイター。ChatGPTを「第二の自分」として育てる独自手法を開発。福岡でAI活用支援とクリエイティブ活動を展開。',
      locale: 'ja_JP',
    },
    twitter: {
      title: "Masaya Official Site",
      description: 'AI活用サポーター・クリエイター。ChatGPTを「第二の自分」として育てる独自手法を開発。福岡でAI活用支援とクリエイティブ活動を展開。',
    },
  },
  en: {
    title: {
      default: "Masaya Official Site",
      template: '%s | Masaya Official Site'
    },
    description: 'AI utilization supporter and creator based in Fukuoka. Developed a unique method to train ChatGPT as a "second self," supporting personalized AI assistant building. Expanding human potential through 3D modeling, international exchange, and board game creation, driving digital transformation.',
    keywords: ['AI utilization', 'ChatGPT', 'Second Self', 'AI assistant', 'Prompt Engineering', 'Digital Transformation', '3D modeling', 'Fukuoka', 'Freelance', 'ADHD', 'Board Game Creation', 'International Exchange', 'AI Consulting'],
    openGraph: {
      title: "Masaya Official Site",
      description: 'AI utilization supporter and creator. Developed a unique method to train ChatGPT as a "second self." Supporting AI utilization and creative activities in Fukuoka.',
      locale: 'en_US',
    },
    twitter: {
      title: "Masaya Official Site",
      description: 'AI utilization supporter and creator. Developed a unique method to train ChatGPT as a "second self." Supporting AI utilization and creative activities in Fukuoka.',
    },
  },
} as const