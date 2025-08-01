# Google Analytics 分析メモ

## サイト情報

### masayamuko.com
- **ドメイン**: https://www.masayamuko.com/
- **GA4プロパティID**: `495479054`
- **認証情報パス**: `/Users/masaya/.config/gcloud/application_default_credentials.json`

## よく使う分析コマンド

### 人気ページTOP10取得
```bash
cd "/Users/masaya/Library/Mobile Documents/iCloud~md~obsidian/Documents"
source ga4_env/bin/activate
python3 get_top_pages.py
```

### 仮想環境の再構築（必要時）
```bash
rm -rf ga4_env
python3 -m venv ga4_env
source ga4_env/bin/activate
pip install google-analytics-data
```

## スクリプトファイル

### get_top_pages.py
- **場所**: `/Users/masaya/Library/Mobile Documents/iCloud~md~obsidian/Documents/get_top_pages.py`
- **機能**: GA4から人気ページTOP10を取得
- **データ**: ページビュー数、セッション数、エンゲージメントセッション数
- **期間**: デフォルト過去30日間

### 取得データ項目
- `pageTitle`: ページタイトル
- `pagePath`: ページパス
- `screenPageViews`: ページビュー数
- `sessions`: セッション数
- `engagedSessions`: エンゲージメントセッション数

## 認証設定

### Google Cloud認証
```bash
gcloud auth application-default login
```

### 必要なAPI
- Google Analytics Data API (GA4)
- Google Analytics Reporting API

## よく使う期間設定

### スクリプト内での期間変更
```python
# 過去7日間
results = get_top_pages(PROPERTY_ID, "7daysAgo", "today")

# 過去30日間（デフォルト）
results = get_top_pages(PROPERTY_ID, "30daysAgo", "today")

# 過去90日間
results = get_top_pages(PROPERTY_ID, "90daysAgo", "today")

# 特定期間
results = get_top_pages(PROPERTY_ID, "2024-01-01", "2024-01-31")
```

## トラブルシューティング

### 認証エラーの場合
```bash
gcloud auth application-default login
gcloud config set project YOUR_PROJECT_ID
```

### 仮想環境が壊れた場合
```bash
rm -rf ga4_env
python3 -m venv ga4_env
source ga4_env/bin/activate
pip install google-analytics-data
```

### プロパティIDが見つからない場合
1. https://analytics.google.com/ にアクセス
2. 管理⚙️ > プロパティ設定
3. プロパティIDをコピー

## メモ

- **最終更新**: 2025-07-25
- **よく見られるページ**: AI Study イベント、トップページ、韓国カブトムシ記事
- **Claude MCPサーバー**: 設定済みだがCLI版では未対応
- **デスクトップ版Claude**: MCP経由でのGA分析が可能