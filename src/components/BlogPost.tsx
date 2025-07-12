import ReactMarkdown from 'react-markdown'

interface BlogPostProps {
  content: string
}

export default function BlogPost({ content }: BlogPostProps) {
  return (
    <div className="max-w-none" style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif' 
    }}>
      <ReactMarkdown
        components={{
          h1: ({ children }) => null,
          h2: ({ children }) => (
            <h2 className="text-xl font-bold text-white bg-orange-600 px-4 py-3 mt-10 mb-6 rounded-md shadow-sm" 
                style={{ fontSize: '1.25rem', lineHeight: '1.4' }}>
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-lg font-bold text-orange-700 mt-8 mb-4 pb-2 border-b-2 border-orange-300" 
                style={{ fontSize: '1.125rem', lineHeight: '1.4' }}>
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="text-gray-800 mb-6" 
               style={{ fontSize: '1rem !important', lineHeight: '1.6 !important', marginBottom: '1.5rem !important' }}>
              {children}
            </p>
          ),
          ul: ({ children }) => (
            <ul className="list-disc list-inside text-gray-800 mb-6 ml-4" 
                style={{ fontSize: '1rem !important', lineHeight: '1.6 !important', marginBottom: '1.5rem !important' }}>
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside text-gray-800 mb-6 ml-4" 
                style={{ fontSize: '1rem !important', lineHeight: '1.6 !important', marginBottom: '1.5rem !important' }}>
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="mb-1" style={{ lineHeight: '1.6 !important', marginBottom: '0.5rem !important' }}>
              {children}
            </li>
          ),
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-gray-300 pl-6 italic text-gray-600 bg-gray-50 py-4" 
                        style={{ fontSize: '1rem !important', lineHeight: '1.6 !important', margin: '1.5rem 0 !important' }}>
              {children}
            </blockquote>
          ),
          code: ({ children }) => (
            <code className="bg-gray-100 text-gray-900 px-2 py-1 rounded text-sm font-mono">
              {children}
            </code>
          ),
          pre: ({ children }) => (
            <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4 text-sm">
              {children}
            </pre>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="text-blue-600 hover:text-blue-800 underline"
              target={href?.startsWith('http') ? '_blank' : undefined}
              rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
            >
              {children}
            </a>
          ),
          img: ({ src, alt }) => (
            <img
              src={src}
              alt={alt}
              className="w-full rounded-lg shadow-md my-6"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}