export type Lang = 'ja' | 'en'

export interface Translation {
  title: {
    default: string
    template: string
  }
  description: string
  keywords: string[]
  openGraph: {
    title: string
    description: string
    locale: string
  }
  twitter: {
    title: string
    description: string
  }
}

export type Translations = Record<Lang, Translation>

export interface Post {
  slug: string
  title: string
  category: string
  date: string
  excerpt: string
  image?: string
}

export interface PageProps {
  params: {
    lang: string
    slug?: string
  }
}

export interface BlogPageProps {
  params: {
    lang: string
  }
}

export interface BlogPostPageProps {
  params: {
    lang: string
    slug: string
  }
}