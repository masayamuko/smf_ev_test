import { notFound } from 'next/navigation'
import HomeJa from './components/pages/HomeJa'
import HomeEn from './components/pages/HomeEn'

// generateStaticParams: ビルド時に生成するパスを定義
export async function generateStaticParams() {
  return [
    { lang: 'ja' },
    { lang: 'en' }
  ]
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (lang === 'ja') {
    return <HomeJa lang={lang} />;
  } else if (lang === 'en') {
    return <HomeEn lang={lang} />;
  } else {
    // Fallback to Japanese if unsupported language
    return <HomeJa lang="ja" />;
  }
}