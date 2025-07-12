import { Metadata } from 'next'
import { Lang } from '@/types'
import { translations } from '@/constants/translations'
import { SITE_CONFIG, GOOGLE_VERIFICATION } from '@/constants'

export function generatePageMetadata(
  lang: Lang, 
  pageTitle?: string
): Metadata {
  const t = translations[lang] || translations.ja
  
  const title = pageTitle 
    ? t.title.template.replace('%s', pageTitle)
    : t.title.default

  return {
    title,
    description: t.description,
    keywords: t.keywords,
    authors: [{ name: SITE_CONFIG.author.name, url: SITE_CONFIG.author.url }],
    creator: SITE_CONFIG.author.name,
    publisher: SITE_CONFIG.author.name,
    metadataBase: new URL(SITE_CONFIG.url),
    alternates: {
      canonical: SITE_CONFIG.url,
    },
    openGraph: {
      title: pageTitle ? `${pageTitle} | ${t.openGraph.title}` : t.openGraph.title,
      description: t.openGraph.description,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      locale: t.openGraph.locale,
      type: 'website',
      images: [
        {
          url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
          width: 1200,
          height: 630,
          alt: `${SITE_CONFIG.name} - AI活用サポーター・クリエイター`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle ? `${pageTitle} | ${t.twitter.title}` : t.twitter.title,
      description: t.twitter.description,
      creator: SITE_CONFIG.author.twitter,
      images: [`${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: GOOGLE_VERIFICATION,
    },
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    manifest: '/manifest.json',
  }
}