# ビジュアルアイデンティティ設計

## 🎨 ビジュアルコンセプト

### コンセプト
「**やさしい成長**」- 初心者の不安を包み込み、成長への希望を育む

### ビジュアルキーワード
- **安心感**: 温かみのある色彩、やわらかい形状
- **成長**: 上向きの矢印、階段、芽吹き
- **つながり**: 手をつなぐ、橋、円
- **明るい未来**: 太陽、虹、広がる空間

## 🎨 カラーシステム

### プライマリーカラー

#### 安心ブルー（#2C5AA0）
- **RGB**: 44, 90, 160
- **CMYK**: 73, 44, 0, 37
- **用途**: メインロゴ、重要見出し、CTA
- **心理効果**: 信頼、安定、プロフェッショナル

#### 成長グリーン（#52B788）
- **RGB**: 82, 183, 136
- **CMYK**: 55, 0, 26, 28
- **用途**: アクセント、成功メッセージ、進捗表示
- **心理効果**: 成長、希望、新鮮さ

### セカンダリーカラー

#### 温かみオレンジ（#F4A261）
- **RGB**: 244, 162, 97
- **CMYK**: 0, 34, 60, 4
- **用途**: 特別オファー、注目ポイント
- **心理効果**: 親しみやすさ、活力

#### 優しいグレー（#6C757D）
- **RGB**: 108, 117, 125
- **CMYK**: 14, 6, 0, 51
- **用途**: 本文、補助情報
- **心理効果**: 落ち着き、バランス

### グラデーション
```
primary-gradient: linear-gradient(135deg, #2C5AA0 0%, #52B788 100%)
warm-gradient: linear-gradient(135deg, #F4A261 0%, #52B788 100%)
subtle-gradient: linear-gradient(135deg, #F8F9FA 0%, #E9ECEF 100%)
```

## 📝 タイポグラフィシステム

### 日本語フォントファミリー
```
font-family: 'Noto Sans JP', 'Hiragino Kaku Gothic ProN', 
             'Hiragino Sans', Meiryo, sans-serif;
```

#### フォントウェイト
- **Black (900)**: 大見出し、ロゴ
- **Bold (700)**: 中見出し、強調
- **Medium (500)**: 小見出し、ボタン
- **Regular (400)**: 本文、標準テキスト
- **Light (300)**: キャプション、注釈

### 英語フォントファミリー
```
font-family: 'Montserrat', 'Helvetica Neue', Arial, sans-serif;
```

### フォントサイズシステム
```css
/* Desktop */
--font-xl: 48px;    /* H1 */
--font-lg: 36px;    /* H2 */
--font-md: 24px;    /* H3 */
--font-base: 16px;  /* Body */
--font-sm: 14px;    /* Caption */
--font-xs: 12px;    /* Note */

/* Mobile */
--font-xl-mobile: 32px;
--font-lg-mobile: 24px;
--font-md-mobile: 20px;
--font-base-mobile: 16px;
--font-sm-mobile: 14px;
--font-xs-mobile: 12px;
```

### 行間設定
```css
--line-height-tight: 1.2;   /* 見出し */
--line-height-normal: 1.6;  /* 本文 */
--line-height-relaxed: 1.8; /* リード文 */
```

## 🖼️ アイコンシステム

### アイコンスタイル
- **スタイル**: アウトライン（線画）
- **線の太さ**: 2px
- **角**: 丸角（border-radius: 4px）
- **サイズ**: 16px, 24px, 32px, 48px

### カテゴリー別アイコン

#### ナビゲーション
- 🏠 ホーム
- 📚 プログラム
- 💬 相談
- 📞 お問い合わせ
- 👤 マイページ

#### サービス特徴
- ✅ 安心サポート
- 🌱 成長プログラム
- 🤝 仲間づくり
- 🌍 海外体験
- 📈 効果測定

#### プロセス
- 1️⃣ 相談
- 2️⃣ 計画
- 3️⃣ 準備
- 4️⃣ 出発
- 5️⃣ 成長

## 📐 レイアウトシステム

### グリッドシステム
```css
/* 12カラムグリッド */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col {
  padding: 0 15px;
}
```

### スペーシング
```css
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 32px;
--space-xxl: 48px;
```

### ブレイクポイント
```css
--mobile: 480px;
--tablet: 768px;
--desktop: 1024px;
--wide: 1200px;
```

## 🌟 UI要素スタイル

### ボタンデザイン

#### プライマリボタン
```css
.btn-primary {
  background: var(--primary-blue);
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  border: none;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #1e3f73;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(44, 90, 160, 0.3);
}
```

#### セカンダリボタン
```css
.btn-secondary {
  background: transparent;
  color: var(--primary-blue);
  border: 2px solid var(--primary-blue);
  padding: 10px 22px;
  border-radius: 8px;
}
```

### カードデザイン
```css
.card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 24px;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
```

## 📱 レスポンシブ対応

### モバイルファースト設計
```css
/* Mobile First */
.header {
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .header {
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .header {
    padding: 32px;
  }
}
```

## 🖼️ 写真・画像ガイドライン

### 写真スタイル
- **明度**: 明るく自然な光
- **色調**: 温かみのある色温度
- **構図**: 人物中心、笑顔重視
- **背景**: ぼかし効果、シンプル

### 避けるべき要素
- 暗い・重い印象
- 人工的すぎる照明
- 複雑すぎる背景
- 緊張した表情

### 推奨被写体
- 多様性のある人物
- 学習風景
- 海外風景
- コミュニケーション場面

## 🎯 アニメーション

### マイクロインタラクション
```css
/* フェードイン */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* 成長アニメーション */
@keyframes grow {
  from { transform: scale(0); }
  to { transform: scale(1); }
}
```

### 動きの原則
- **イージング**: ease-out（自然な減速）
- **時間**: 0.3s-0.5s（快適な速度）
- **目的**: ユーザビリティ向上
- **控えめ**: 過度なアニメーションは避ける

## 📋 実装チェックリスト

### デザイン要素
- [ ] カラーパレット適用
- [ ] フォント正しく読み込み
- [ ] アイコン統一性確認
- [ ] スペーシング一貫性
- [ ] レスポンシブ対応

### ユーザビリティ
- [ ] コントラスト比4.5:1以上
- [ ] フォントサイズ16px以上
- [ ] タッチターゲット44px以上
- [ ] 読み込み速度最適化

---
*ビジュアルアイデンティティは定期的にレビューし、ブランドの進化に合わせて更新します*