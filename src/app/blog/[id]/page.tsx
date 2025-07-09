import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { remark } from 'remark';
import html from 'remark-html';

interface BlogPostPageProps {
  params: {
    id: string;
  };
}

async function getPost(slug: string) {
  const postsDirectory = path.join(process.cwd(), 'src/posts');
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();
  return {
    slug,
    title: data.title || slug,
    category: data.category || 'Blog',
    date: data.date || '',
    author: data.author || '',
    contentHtml,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getPost(params.id);
  if (!post) notFound();
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-6">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              ブログ一覧に戻る
            </Link>
            <div className="flex items-center justify-between mb-4">
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
                {post.category || 'Blog'}
              </span>
              <time className="text-sm text-gray-500">{post.date || ''}</time>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{post.title}</h1>
            {post.author && <p className="text-gray-600 mb-4">著者: {post.author}</p>}
          </div>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link href="/blog" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200">
              他の記事を見る
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 