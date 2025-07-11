import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

export interface Post {
  id: string;
  title: string;
  slug: string;
  lang: string; // 言語を追加
  content: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string; // updatedAtを追加
  category: string;
  tags: string[];
  readingTime: number;
  author: string;
  featured?: boolean;
}

const postsDirectory = path.join(process.cwd(), 'src/posts')
const locales = ['ja', 'en']; // サポートする言語

export function getAllPostSlugs() {
  const paths: { params: { lang: string; slug: string } }[] = [];
  for (const lang of locales) {
    const langDir = path.join(postsDirectory, lang);
    if (!fs.existsSync(langDir)) {
      continue;
    }
    const fileNames = fs.readdirSync(langDir);
    for (const fileName of fileNames) {
      if (fileName.endsWith('.md') && fileName !== '_template.md') {
        const slug = fileName.replace(/\.md$/, '');
        paths.push({ params: { lang, slug } });
      }
    }
  }
  return paths;
}

export function getPostBySlug(lang: string, slug: string): Post | null {
  try {
    const fullPath = path.join(postsDirectory, lang, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    // 読了時間を計算（日本語の場合、1分間に400文字程度）
    const readingTime = Math.ceil(content.length / 400);

    return {
      id: slug,
      title: data.title || '',
      slug: data.slug || slug,
      lang: lang,
      content: content,
      excerpt: data.excerpt || content.substring(0, 200) + '...',
      publishedAt: data.publishedAt || new Date().toISOString().split('T')[0],
      updatedAt: data.updatedAt || data.publishedAt || new Date().toISOString().split('T')[0],
      category: data.category || 'general',
      tags: data.tags || [],
      readingTime: readingTime,
      author: data.author || 'Masaya',
      featured: data.featured || false
    };
  } catch (error) {
    console.error(`Error reading post ${lang}/${slug}:`, error);
    return null;
  }
}

export function getAllPosts(): Post[] {
  let allPostsData: Post[] = [];
  for (const lang of locales) {
    const langDir = path.join(postsDirectory, lang);
    if (!fs.existsSync(langDir)) {
      continue;
    }
    const fileNames = fs.readdirSync(langDir);
    const postsInLang = fileNames
      .filter(fileName => fileName.endsWith('.md') && fileName !== '_template.md')
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        return getPostBySlug(lang, slug);
      })
      .filter((post): post is Post => post !== null);
    allPostsData = allPostsData.concat(postsInLang);
  }

  return allPostsData.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostsByCategory(lang: string, category: string): Post[] {
  return getAllPosts().filter(post => post.lang === lang && post.category === category);
}

export function getFeaturedPosts(lang: string): Post[] {
  return getAllPosts().filter(post => post.lang === lang && post.featured);
}

export function getPostsByTag(lang: string, tag: string): Post[] {
  return getAllPosts().filter(post => post.lang === lang && post.tags.includes(tag));
}

// getSortedPostsDataは使用されていないため、今回は修正しません。
// export function getSortedPostsData() { ... }

export async function getPostData(lang: string, slug: string) {
  const fullPath = path.join(postsDirectory, lang, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id: slug,
    contentHtml,
    lang: lang,
    ...(matterResult.data as { publishedAt: string; updatedAt?: string; title: string; slug: string; excerpt: string; category: string; tags: string[]; readingTime: number; author: string; featured?: boolean; })
  };
}

export function getAllPostIds() {
  const paths: { params: { lang: string; slug: string } }[] = [];
  for (const lang of locales) {
    const langDir = path.join(postsDirectory, lang);
    if (!fs.existsSync(langDir)) {
      continue;
    }
    const fileNames = fs.readdirSync(langDir);
    for (const fileName of fileNames) {
      if (fileName.endsWith('.md') && fileName !== '_template.md') {
        const slug = fileName.replace(/\.md$/, '');
        paths.push({ params: { lang, slug } });
      }
    }
  }
  return paths;
}