# Claude開発メモ

## 応答ルール

**重要:** 応答は基本的に日本語で行うこと

## エラー対策・注意事項

### Next.js App Router vs Pages Router 競合問題

**問題:** 古いPages Router形式のファイルとApp Routerが競合して、古いデザインが表示される

**原因:**
- Next.js 13では同じルートに対してPages RouterとApp Routerの両方がある場合、Pages Routerが優先される
- `pages/ja/blog/index.tsx` (Pages Router) が `src/app/[lang]/blog/page.tsx` (App Router) より優先されていた

**解決方法:**
```bash
# 古いpagesディレクトリを完全削除
rm -rf pages/
```

**予防策:**
1. プロジェクト開始時にNext.jsのルーティング方式を統一する（App Routerのみ使用）
2. 定期的に不要なファイル・ディレクトリがないかチェック
3. ルーティングの競合がないか確認コマンド:
   ```bash
   # 重複ルートがないかチェック
   find . -name "*.tsx" -o -name "*.ts" | grep -E "(pages/|src/app/)" | sort
   ```

**影響範囲:**
- すべてのNext.jsプロジェクトで発生可能
- 特にPages RouterからApp Routerに移行中のプロジェクトで注意

### iCloud同期によるnode_modules破損問題

**問題:** iCloud Documents内のプロジェクトでnode_modulesが破損

**解決方法:**
```bash
# 破損したnode_modulesを移動
mv node_modules node_modules_corrupted_$(date +%s)
rm -f package-lock.json
npm install
```

**予防策:**
- iCloud Documents外でのプロジェクト開発を推奨
- .gitignoreにnode_modulesが含まれていることを確認

### 言語対応ページの同期

**重要:** ページを編集する際は、言語対応版も必ず同期すること

**対象ファイル構造:**
- `/src/app/[lang]/ページ名/page.tsx` - 言語対応版（日本語・英語両対応）
- `/src/app/ページ名/page.tsx` - 非言語対応版

**注意点:**
1. `/career`, `/about` など単独ページを編集した場合
2. 必ず `/ja/career`, `/en/career` の言語対応版も同時に更新する
3. 日本語コンテンツは `content.ja` オブジェクト内
4. 英語コンテンツは `content.en` オブジェクト内に記述

**更新手順:**
1. 単独ページの編集内容を確認
2. `/src/app/[lang]/ページ名/page.tsx` の該当箇所を更新
3. 日本語・英語両方のコンテンツを適切に同期
4. プッシュ前に両バージョンの整合性を確認

## 開発環境

- Next.js 13.5.6 (App Router使用)
- TypeScript
- Tailwind CSS
- React Markdown

### 🚨 GitHubプッシュ時の上位ディレクトリ誤プッシュ問題

**問題:** 特定のディレクトリのみプッシュしたいのに、上位ディレクトリ全体がプッシュされる

**原因:**
- 対象ディレクトリが既存のGitリポジトリのサブディレクトリになっている
- 上位ディレクトリに`.git`フォルダが存在し、git操作がそれを参照する

**例:**
```
iCloud/                  ← .gitがここにある（既存リポジトリ）
  └── Projects/
      └── MyApp/         ← ここだけプッシュしたい
```

**事前確認方法:**
```bash
# 現在のディレクトリでGitリポジトリの状況を確認
pwd
git status
git remote -v

# 上位ディレクトリにGitリポジトリがないかチェック
find .. -name ".git" -type d 2>/dev/null
```

**解決方法:**

1. **方法1: 新しい独立リポジトリの作成（推奨）**
```bash
# 対象ディレクトリに移動
cd /path/to/target/directory

# 既存のGit履歴を削除（注意：この操作は元に戻せません）
rm -rf .git

# 新しいGitリポジトリを初期化
git init

# 適切な.gitignoreを作成
echo "node_modules/" > .gitignore
echo ".cache/" >> .gitignore
echo "build/" >> .gitignore

# ファイルをステージング
git add .

# 初期コミット
git commit -m "Initial commit: Project Name"

# リモートリポジトリを追加
git remote add origin https://github.com/username/repository.git

# プッシュ
git push -u origin main
```

2. **方法2: 既存リポジトリから特定ディレクトリを分離**
```bash
# 新しい場所にディレクトリをコピー
cp -r /path/to/current/directory /path/to/new/location

# 新しい場所で方法1を実行
```

**予防策:**
1. **プロジェクト開始前の確認**
   ```bash
   # 新規プロジェクト作成時は必ずGit状況を確認
   git status
   # "not a git repository"と表示されることを確認
   ```

2. **ディレクトリ構造の整理**
   - 各プロジェクトは独立したディレクトリに配置
   - 上位ディレクトリをGitリポジトリにしない

3. **プッシュ前の最終確認**
   ```bash
   # ステージングされているファイルを確認
   git status
   
   # ルートディレクトリの確認
   git rev-parse --show-toplevel
   ```

**緊急対処法（誤プッシュ後）:**
```bash
# 新しいクリーンなリポジトリで強制上書き
git push -f origin main
```

**⚠️ 注意事項:**
- `rm -rf .git`は元に戻せないので、重要なコミット履歴がある場合は事前にバックアップ
- 強制プッシュ(`-f`)はチーム開発では慎重に使用
- 大きなファイルがプッシュされた場合、GitHub LFSの利用を検討

## ビルド・デプロイコマンド

```bash
# 開発サーバー起動
npm run dev

# プロダクションビルド
npm run build

# 依存関係の問題が発生した場合
rm -rf node_modules package-lock.json && npm install
```