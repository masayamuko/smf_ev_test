import Link from 'next/link';
import { getPosts } from '@/utils/blog';
import { Lang } from '@/types';

export default async function BlogPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const posts = getPosts(lang as Lang);
  
  const content = {
    ja: {
      title: "BLOG",
      readMore: "続きを読む",
      noArticles: "記事が見つかりません。"
    },
    en: {
      title: "BLOG",
      readMore: "Read More",
      noArticles: "No articles found."
    }
  };

  const t = content[lang as keyof typeof content] || content.ja;
  
  console.log('Blog posts from Markdown:', posts);
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat w-full flex items-center justify-center pt-20"
        style={{
          height: "320px", // 必要に応じて調整
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.7),rgba(255,255,255,0.7)), url('https://res.cloudinary.com/dg3mdcuju/image/upload/v1752078463/masan_dayo_AI_--ar_21_--profile_njfaa7d_--v_7_1091e879-2178-4ba6-b54e-c9254483d644_2_spq5e3.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center center",
        }}
      >
        <div className="text-center w-full">
          <h1 className="text-4xl md:text-6xl font-bold leading-relaxed text-balance text-black drop-shadow-lg">
            {t.title}
          </h1>
          <div className="w-32 h-1 bg-black mx-auto drop-shadow-sm"></div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-12 bg-orange-50">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts && posts.length > 0 ? posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/${lang}/blog/${post.slug}`}
                className="block bg-orange-100/80 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group border border-orange-200 h-full"
              >
                {/* サムネイル画像（frontmatterにimageがあれば） */}
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="inline-block bg-orange-300 text-orange-900 text-xs font-semibold px-2.5 py-0.5 rounded">
                      {post.category}
                    </span>
                    <time className="text-xs text-orange-700">{post.date}</time>
                  </div>
                  <h2 className="text-lg font-bold text-orange-900 mb-2 group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-orange-800 text-sm mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                  <div className="inline-flex items-center text-orange-700 hover:text-white font-semibold bg-orange-200 hover:bg-orange-500 transition-colors rounded px-4 py-2">
                    {t.readMore}
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            )) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">{t.noArticles}</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 