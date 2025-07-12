#!/usr/bin/env node

/**
 * 1つの記事をテスト移行するスクリプト
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

// テスト用：記事データを表示するだけ
function testMigration() {
  console.log('🧪 移行テスト開始');

  const testFile = path.join(__dirname, '../src/posts/ja/why-create-second-self.md');
  
  if (!fs.existsSync(testFile)) {
    console.error('❌ テストファイルが見つかりません');
    return;
  }

  const fileContents = fs.readFileSync(testFile, 'utf8');
  const { data, content } = matter(fileContents);

  console.log('📄 記事データ:');
  console.log('タイトル:', data.title);
  console.log('スラッグ:', data.slug);
  console.log('日付:', data.date);
  console.log('カテゴリ:', data.category);
  console.log('タグ:', data.tags);
  console.log('概要:', data.excerpt);
  console.log('注目記事:', data.featured);
  console.log('画像:', data.image);
  console.log('コンテンツ長:', content.length, '文字');

  // Sanity形式のJSONを出力
  const sanityDocument = {
    _type: 'blogPost',
    title: data.title || 'No Title',
    slug: {
      _type: 'slug',
      current: data.slug || 'test-post',
    },
    language: 'ja',
    publishedAt: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    excerpt: data.excerpt || '',
    category: data.category || 'Blog',
    readingTime: Math.ceil(content.length / 400) || 5, // 概算
    featured: data.featured || false,
    tags: data.tags || [],
    // contentはシンプルなテキストブロックとして
    content: [
      {
        _type: 'block',
        _key: 'content-block',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'content-span',
            text: content.substring(0, 200) + '...', // 最初の200文字
            marks: [],
          },
        ],
      },
    ],
  };

  console.log('\n🔄 Sanity形式:');
  console.log(JSON.stringify(sanityDocument, null, 2));

  console.log('\n✅ テスト完了');
  console.log('📌 実際の移行にはSanity Studioで手動作成をお勧めします');
}

testMigration();