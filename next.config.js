const isDev = process.env.NODE_ENV === 'development'

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return [
      // 全ブログ記事の個別リダイレクト（SEO価値保持）
      {
        source: '/hide_uberlogo',
        destination: '/ja/blog/hide_uberlogo',
        permanent: true, // 301リダイレクト (SEO重要)
      },
      {
        source: '/hide_uberlogo/',
        destination: '/ja/blog/hide_uberlogo',
        permanent: true,
      },
      {
        source: '/display-design',
        destination: '/ja/blog/display-design',
        permanent: true,
      },
      {
        source: '/display-design/',
        destination: '/ja/blog/display-design',
        permanent: true,
      },
      {
        source: '/magnet_ubag',
        destination: '/ja/blog/magnet_ubag',
        permanent: true,
      },
      {
        source: '/magnet_ubag/',
        destination: '/ja/blog/magnet_ubag',
        permanent: true,
      },
      {
        source: '/asus-zenbeame1',
        destination: '/ja/blog/asus-zenbeame1',
        permanent: true,
      },
      {
        source: '/asus-zenbeame1/',
        destination: '/ja/blog/asus-zenbeame1',
        permanent: true,
      },
      {
        source: '/bookscan-premium-tips',
        destination: '/ja/blog/bookscan-premium-tips',
        permanent: true,
      },
      {
        source: '/bookscan-premium-tips/',
        destination: '/ja/blog/bookscan-premium-tips',
        permanent: true,
      },
      {
        source: '/bookscan-tips',
        destination: '/ja/blog/bookscan-tips',
        permanent: true,
      },
      {
        source: '/bookscan-tips/',
        destination: '/ja/blog/bookscan-tips',
        permanent: true,
      },
      {
        source: '/display-demelit',
        destination: '/ja/blog/display-demelit',
        permanent: true,
      },
      {
        source: '/display-demelit/',
        destination: '/ja/blog/display-demelit',
        permanent: true,
      },
      {
        source: '/esperanto-well-known',
        destination: '/ja/blog/esperanto-well-known',
        permanent: true,
      },
      {
        source: '/esperanto-well-known/',
        destination: '/ja/blog/esperanto-well-known',
        permanent: true,
      },
      {
        source: '/friends-eigo',
        destination: '/ja/blog/friends-eigo',
        permanent: true,
      },
      {
        source: '/friends-eigo/',
        destination: '/ja/blog/friends-eigo',
        permanent: true,
      },
      {
        source: '/fukuoka-warabimochi',
        destination: '/ja/blog/fukuoka-warabimochi',
        permanent: true,
      },
      {
        source: '/fukuoka-warabimochi/',
        destination: '/ja/blog/fukuoka-warabimochi',
        permanent: true,
      },
      {
        source: '/gr2-hokori',
        destination: '/ja/blog/gr2-hokori',
        permanent: true,
      },
      {
        source: '/gr2-hokori/',
        destination: '/ja/blog/gr2-hokori',
        permanent: true,
      },
      {
        source: '/guesthouse-nihonjin',
        destination: '/ja/blog/guesthouse-nihonjin',
        permanent: true,
      },
      {
        source: '/guesthouse-nihonjin/',
        destination: '/ja/blog/guesthouse-nihonjin',
        permanent: true,
      },
      {
        source: '/international-friends',
        destination: '/ja/blog/international-friends',
        permanent: true,
      },
      {
        source: '/international-friends/',
        destination: '/ja/blog/international-friends',
        permanent: true,
      },
      {
        source: '/kaigai-tomodachi-nimotsu',
        destination: '/ja/blog/kaigai-tomodachi-nimotsu',
        permanent: true,
      },
      {
        source: '/kaigai-tomodachi-nimotsu/',
        destination: '/ja/blog/kaigai-tomodachi-nimotsu',
        permanent: true,
      },
      {
        source: '/kukou-omukae',
        destination: '/ja/blog/kukou-omukae',
        permanent: true,
      },
      {
        source: '/kukou-omukae/',
        destination: '/ja/blog/kukou-omukae',
        permanent: true,
      },
      {
        source: '/languageexchange-fukuoka',
        destination: '/ja/blog/languageexchange-fukuoka',
        permanent: true,
      },
      {
        source: '/languageexchange-fukuoka/',
        destination: '/ja/blog/languageexchange-fukuoka',
        permanent: true,
      },
      {
        source: '/let-stay-travelers',
        destination: '/ja/blog/let-stay-travelers',
        permanent: true,
      },
      {
        source: '/let-stay-travelers/',
        destination: '/ja/blog/let-stay-travelers',
        permanent: true,
      },
      {
        source: '/meisou-zabuton',
        destination: '/ja/blog/meisou-zabuton',
        permanent: true,
      },
      {
        source: '/meisou-zabuton/',
        destination: '/ja/blog/meisou-zabuton',
        permanent: true,
      },
      {
        source: '/nihon-igai',
        destination: '/ja/blog/nihon-igai',
        permanent: true,
      },
      {
        source: '/nihon-igai/',
        destination: '/ja/blog/nihon-igai',
        permanent: true,
      },
      {
        source: '/security',
        destination: '/ja/blog/security',
        permanent: true,
      },
      {
        source: '/security/',
        destination: '/ja/blog/security',
        permanent: true,
      },
      {
        source: '/westernliquor',
        destination: '/ja/blog/westernliquor',
        permanent: true,
      },
      {
        source: '/westernliquor/',
        destination: '/ja/blog/westernliquor',
        permanent: true,
      },
      {
        source: '/why-create-second-self',
        destination: '/ja/blog/why-create-second-self',
        permanent: true,
      },
      {
        source: '/why-create-second-self/',
        destination: '/ja/blog/why-create-second-self',
        permanent: true,
      },
      {
        source: '/zuca-prokurolux-travel',
        destination: '/ja/blog/zuca-prokurolux-travel',
        permanent: true,
      },
      {
        source: '/zuca-prokurolux-travel/',
        destination: '/ja/blog/zuca-prokurolux-travel',
        permanent: true,
      },
      
      // 旧ブログURLから新しい多言語URLへのリダイレクト
      {
        source: '/blog/:slug*',
        destination: '/ja/blog/:slug*',
        permanent: true, // 301リダイレクト (SEO重要)
      },
      
      // その他の旧URLパターン
      {
        source: '/about',
        destination: '/ja/about',
        permanent: true,
      },
      {
        source: '/events/:path*',
        destination: '/ja/events/:path*',
        permanent: true,
      },
      {
        source: '/projects/:path*',
        destination: '/ja/projects/:path*',
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: isDev
              ? "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: *; font-src 'self'; connect-src 'self' vitals.vercel-insights.com;"
              : "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob: *; font-src 'self'; connect-src 'self' vitals.vercel-insights.com;",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig