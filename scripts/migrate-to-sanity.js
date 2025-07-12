#!/usr/bin/env node

/**
 * MarkdownファイルをSanityに移行するスクリプト
 */

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const { createClient } = require('@sanity/client');

// Sanity設定
const client = createClient({
  projectId: 'cf8dg6zr',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN, // 環境変数で設定
  apiVersion: '2023-12-01',
});

// Markdownコンテンツをブロックコンテンツに変換
function markdownToBlocks(markdown) {
  // 簡単な変換ロジック（段落ごとに分割）
  const blocks = [];
  const lines = markdown.split('\n');
  let currentParagraph = '';

  for (const line of lines) {
    if (line.trim() === '') {
      if (currentParagraph.trim()) {
        blocks.push({
          _type: 'block',
          _key: Math.random().toString(36).substr(2, 9),
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: Math.random().toString(36).substr(2, 9),
              text: currentParagraph.trim(),
              marks: [],
            },
          ],
        });
        currentParagraph = '';
      }
    } else if (line.startsWith('# ')) {
      if (currentParagraph.trim()) {
        blocks.push({
          _type: 'block',
          _key: Math.random().toString(36).substr(2, 9),
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: Math.random().toString(36).substr(2, 9),
              text: currentParagraph.trim(),
              marks: [],
            },
          ],
        });
        currentParagraph = '';
      }
      blocks.push({
        _type: 'block',
        _key: Math.random().toString(36).substr(2, 9),
        style: 'h1',
        children: [
          {
            _type: 'span',
            _key: Math.random().toString(36).substr(2, 9),
            text: line.substring(2).trim(),
            marks: [],
          },
        ],
      });
    } else if (line.startsWith('## ')) {
      if (currentParagraph.trim()) {
        blocks.push({
          _type: 'block',
          _key: Math.random().toString(36).substr(2, 9),
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: Math.random().toString(36).substr(2, 9),
              text: currentParagraph.trim(),
              marks: [],
            },
          ],
        });
        currentParagraph = '';
      }
      blocks.push({
        _type: 'block',
        _key: Math.random().toString(36).substr(2, 9),
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: Math.random().toString(36).substr(2, 9),
            text: line.substring(3).trim(),
            marks: [],
          },
        ],
      });
    } else if (line.startsWith('### ')) {
      if (currentParagraph.trim()) {
        blocks.push({
          _type: 'block',
          _key: Math.random().toString(36).substr(2, 9),
          style: 'normal',
          children: [
            {
              _type: 'span',
              _key: Math.random().toString(36).substr(2, 9),
              text: currentParagraph.trim(),
              marks: [],
            },
          ],
        });
        currentParagraph = '';
      }
      blocks.push({
        _type: 'block',
        _key: Math.random().toString(36).substr(2, 9),
        style: 'h3',
        children: [
          {
            _type: 'span',
            _key: Math.random().toString(36).substr(2, 9),
            text: line.substring(4).trim(),
            marks: [],
          },
        ],
      });
    } else if (line.startsWith('![')) {
      // 画像は一旦スキップ（手動で追加）
      continue;
    } else {
      currentParagraph += line + ' ';
    }
  }

  // 最後の段落を追加
  if (currentParagraph.trim()) {
    blocks.push({
      _type: 'block',
      _key: Math.random().toString(36).substr(2, 9),
      style: 'normal',
      children: [
        {
          _type: 'span',
          _key: Math.random().toString(36).substr(2, 9),
          text: currentParagraph.trim(),
          marks: [],
        },
      ],
    });
  }

  return blocks;
}

// 記事を移行する関数
async function migratePost(filePath, language = 'ja') {
  console.log(`📝 移行中: ${path.basename(filePath)}`);

  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);

  // Sanity用のドキュメント作成
  const document = {
    _type: 'blogPost',
    title: data.title || 'No Title',
    slug: {
      _type: 'slug',
      current: data.slug || path.basename(filePath, '.md'),
    },
    language: language,
    publishedAt: data.date ? new Date(data.date).toISOString() : new Date().toISOString(),
    excerpt: data.excerpt || '',
    category: data.category || 'Blog',
    readingTime: data.readingTime || 5,
    featured: data.featured || false,
    tags: data.tags || [],
    content: markdownToBlocks(content),
  };

  // 画像がある場合は追加
  if (data.image) {
    // 注意: 外部URL画像はSanityに直接アップロードできないため
    // mainImageは手動で追加する必要があります
    console.log(`  🖼️  画像URL: ${data.image}`);
  }

  try {
    const result = await client.create(document);
    console.log(`  ✅ 成功: ${result._id}`);
    return result;
  } catch (error) {
    console.error(`  ❌ エラー: ${error.message}`);
    return null;
  }
}

// メイン移行関数
async function migrateAllPosts() {
  console.log('🚀 Markdownファイル → Sanity移行を開始');

  const postsDir = path.join(__dirname, '../src/posts/ja');
  const files = fs.readdirSync(postsDir);
  
  const markdownFiles = files.filter(file => 
    file.endsWith('.md') && !file.startsWith('_')
  );

  console.log(`📁 ${markdownFiles.length}個のファイルを発見`);

  for (const file of markdownFiles) {
    const filePath = path.join(postsDir, file);
    await migratePost(filePath, 'ja');
    // API制限を避けるため少し待機
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('🎉 移行完了！');
  console.log('📌 注意: 画像は手動でSanity Studioにアップロードしてください');
}

// 実行
if (require.main === module) {
  if (!process.env.SANITY_AUTH_TOKEN) {
    console.error('❌ SANITY_AUTH_TOKEN環境変数が設定されていません');
    console.log('📝 Sanity管理画面でAPIトークンを取得してください:');
    console.log('   https://www.sanity.io/manage/personal/tokens');
    process.exit(1);
  }

  migrateAllPosts().catch(console.error);
}

module.exports = { migratePost, migrateAllPosts };