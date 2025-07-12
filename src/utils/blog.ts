import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { Post, Lang } from '@/types'

// カスタム導入文の定義
const customExcerpts: Record<string, string> = {
  'why-create-second-self': '「なんで毎回同じ説明をしなきゃいけないんだろう？」そんな疑問から始まった「第二の自分」プロジェクト。3ヶ月使い続けた結果、僕の人生を大きく変える最高のパートナーが誕生しました。',
  'friends-eigo': '留学経験者が語る、海外ドラマ「フレンズ」を使った効果的な英語学習法。日常会話レベルの英語力を身につけた具体的な方法と、全シーズン5回視聴した筆者だからこそ伝えられる実践的なコツを詳しく解説。',
  'security': 'ゲストハウスやバックパッカーに泊まる筆者が、旅先での貴重品管理とセキュリティについて詳しく解説。南京錠の選び方から実践的な防犯対策まで、実際の体験談を交えて紹介。',
  'asus-zenbeame1': 'ASUSのプロジェクターとFire TV Stickの組み合わせで実現した、最高のホームシアター体験。コストパフォーマンス抜群の映画鑑賞環境を構築した方法を詳しく紹介。',
  'let-stay-travelers': '旅人たちの居場所を作るゲストハウスでの体験談。世界中の旅人との出会いと交流を通じて学んだ、人と人との繋がりの大切さについて。',
  'fukuoka-warabimochi': '福岡の隠れた名店で見つけた絶品わらび餅。地元民だからこそ知る、本当においしい福岡グルメの魅力を紹介。',
  'display-design': 'ディスプレイデザインの基本から応用まで。ユーザビリティを重視した効果的な画面設計のコツと実践例を解説。',
  'gr2-hokori': 'GR2の魅力と使いこなし方。コンパクトなボディに詰まった高性能カメラの真価を引き出す撮影テクニックを紹介。',
  'display-demelit': 'ディスプレイの選び方とデメリットについて。用途に応じた最適な画面サイズと解像度の選び方を詳しく解説。',
  'meisou-zabuton': '瞑想用の座布団選びと効果的な瞑想環境の作り方。心身のリラックスを促進する正しい姿勢と道具の選び方を紹介。',
  'kukou-omukae': '空港での出迎えサービスを活用した快適な旅行体験。初海外の方でも安心して使える空港送迎サービスの魅力と利用方法。',
  'bookscan-premium-tips': 'BookScan Premiumを使った効率的な書籍デジタル化のコツ。高品質なスキャン結果を得るための設定とテクニックを紹介。',
  'bookscan-tips': 'BookScanを使った書籍のデジタル化方法。手軽に本を電子化して持ち運びやすくする実践的なテクニックを解説。',
  'languageexchange-fukuoka': '福岡での言語交換イベント体験談。地元で開催される国際交流イベントを通じて、楽しく語学力を向上させる方法を紹介。',
  'zuca-prokurolux-travel': 'ZUCA ProとKroluxを使った快適な旅行体験。機能的でスタイリッシュな旅行用品の組み合わせで実現する理想の旅スタイル。',
  'guesthouse-nihonjin': 'ゲストハウスで働く日本人スタッフの視点から見た、外国人ゲストとの交流と文化の違いについて。',
  'westernliquor': '洋酒の選び方と楽しみ方。初心者でも安心して始められる、おいしい洋酒の世界への入門ガイド。',
  'kaigai-tomodachi-nimotsu': '海外の友達への荷物の送り方と注意点。国際郵便を活用した安全で確実な荷物配送の方法を詳しく解説。',
  'international-friends': '国際的な友達作りと文化交流の楽しさ。言語の壁を越えて築く深い友情と、異文化理解の重要性について。',
  'magnet_ubag': 'マグネット付きバッグの便利な使い方と活用法。日常生活をより快適にする、機能的でスタイリッシュなバッグの魅力を紹介。',
  'hide_uberlogo': 'Uberロゴを隠す方法とプライバシー保護の重要性。個人情報を守りながら、便利なサービスを安全に利用するためのテクニック。',
  'nihon-igai': '日本以外の国での生活体験談。海外での暮らしを通じて学んだ、文化の違いと適応のコツについて。',
  'esperanto-well-known': 'エスペラント語の魅力と学習方法。国際共通語として設計された人工言語の特徴と、世界平和への貢献について。'
}

export function getPosts(lang: Lang): Post[] {
  const postsDirectory = path.join(process.cwd(), 'src/posts', lang)
  
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    
    const posts = fileNames
      .filter((fileName) => fileName.endsWith('.md') && !fileName.startsWith('_'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)
        
        // カスタム導入文があれば使用、なければデフォルト
        const excerpt = customExcerpts[slug] || 
                       (content.substr(0, 120) + (content.length > 120 ? '...' : ''))
        
        return {
          slug,
          title: data.title || slug,
          category: data.category || 'Blog',
          date: validateDate(data.date) || validateDate(data.publishedAt) || '',
          excerpt,
          image: data.image || '', 
        }
      })
    
    // 日付で降順ソート（新しい順）
    return posts.sort((a, b) => (b.date > a.date ? 1 : -1))
  } catch (error) {
    console.error('Error reading posts:', error)
    return []
  }
}

function validateDate(date: any): string | null {
  if (typeof date === 'string' && date !== 'YYYY-MM-DD' && date.trim()) {
    return date
  }
  return null
}

export function getPostBySlug(lang: Lang, slug: string): Post | null {
  try {
    const fullPath = path.join(process.cwd(), 'src/posts', lang, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return {
      slug,
      title: data.title || slug,
      category: data.category || 'Blog',
      date: validateDate(data.date) || validateDate(data.publishedAt) || '',
      excerpt: customExcerpts[slug] || (content.substr(0, 120) + (content.length > 120 ? '...' : '')),
      image: data.image || '',
    }
  } catch (error) {
    console.error(`Error reading post ${lang}/${slug}:`, error)
    return null
  }
}

export function getPostContent(lang: Lang, slug: string): { data: any; content: string } | null {
  try {
    const fullPath = path.join(process.cwd(), 'src/posts', lang, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)
    
    return { data, content }
  } catch (error) {
    console.error(`Error reading post content ${lang}/${slug}:`, error)
    return null
  }
}