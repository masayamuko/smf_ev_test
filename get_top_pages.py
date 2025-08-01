#!/usr/bin/env python3
"""
Google Analytics 4 (GA4) APIを使用して人気ページTOP10を取得するスクリプト
https://www.masayamuko.com/ の分析用
"""

import os
from google.analytics.data_v1beta import BetaAnalyticsDataClient
from google.analytics.data_v1beta.types import (
    DateRange,
    Dimension,
    Metric,
    RunReportRequest,
    OrderBy,
)

def get_top_pages(property_id, start_date="30daysAgo", end_date="today"):
    """
    GA4から人気ページTOP10を取得
    
    Args:
        property_id (str): GA4プロパティID (例: "123456789")
        start_date (str): 開始日 (例: "30daysAgo", "2024-01-01")
        end_date (str): 終了日 (例: "today", "2024-01-31")
    
    Returns:
        list: 人気ページのリスト
    """
    
    # 認証情報の確認
    credentials_path = "/Users/masaya/.config/gcloud/application_default_credentials.json"
    if not os.path.exists(credentials_path):
        print(f"認証情報が見つかりません: {credentials_path}")
        print("以下のコマンドで認証を行ってください:")
        print("gcloud auth application-default login")
        return None
    
    # GA4クライアントを初期化
    os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = credentials_path
    client = BetaAnalyticsDataClient()
    
    try:
        # レポートリクエストを作成
        request = RunReportRequest(
            property=f"properties/{property_id}",
            dimensions=[
                Dimension(name="pageTitle"),  # ページタイトル
                Dimension(name="pagePath"),   # ページパス
            ],
            metrics=[
                Metric(name="screenPageViews"),  # ページビュー数
                Metric(name="sessions"),         # セッション数
                Metric(name="engagedSessions"),  # エンゲージメントセッション数
            ],
            date_ranges=[DateRange(start_date=start_date, end_date=end_date)],
            order_bys=[
                OrderBy(
                    metric=OrderBy.MetricOrderBy(metric_name="screenPageViews"),
                    desc=True
                )
            ],
            limit=10,  # TOP10に制限
        )
        
        # APIを呼び出し
        response = client.run_report(request=request)
        
        # 結果を整形
        results = []
        print(f"\n🔥 {start_date}～{end_date} の人気ページTOP10")
        print("=" * 80)
        
        for i, row in enumerate(response.rows, 1):
            page_title = row.dimension_values[0].value or "タイトルなし"
            page_path = row.dimension_values[1].value
            page_views = int(row.metric_values[0].value)
            sessions = int(row.metric_values[1].value)
            engaged_sessions = int(row.metric_values[2].value)
            
            # フルURLを構築
            full_url = f"https://www.masayamuko.com{page_path}"
            
            results.append({
                "rank": i,
                "title": page_title,
                "path": page_path,
                "url": full_url,
                "page_views": page_views,
                "sessions": sessions,
                "engaged_sessions": engaged_sessions
            })
            
            print(f"{i:2d}. {page_title}")
            print(f"    📊 PV: {page_views:,} | セッション: {sessions:,} | エンゲージ: {engaged_sessions:,}")
            print(f"    🔗 {full_url}")
            print()
        
        return results
        
    except Exception as e:
        print(f"❌ エラーが発生しました: {e}")
        print("\n設定を確認してください:")
        print("1. GA4プロパティIDが正しいか")
        print("2. Google Cloud認証が有効か")
        print("3. Analytics Data API が有効化されているか")
        return None

def main():
    """メイン関数"""
    
    # GA4プロパティIDを設定してください
    # Google Analytics管理画面 > プロパティ > プロパティ設定 で確認できます
    PROPERTY_ID = "495479054"  # masayamuko.com のGA4プロパティID
    
    if PROPERTY_ID == "YOUR_GA4_PROPERTY_ID":
        print("❌ GA4プロパティIDが設定されていません")
        print("\n設定方法:")
        print("1. Google Analytics管理画面にアクセス")
        print("2. プロパティ > プロパティ設定を開く")
        print("3. プロパティIDをコピー（例: 123456789）")
        print("4. このスクリプトのPROPERTY_ID変数に設定")
        return
    
    # 過去30日間の人気ページを取得
    results = get_top_pages(PROPERTY_ID, "30daysAgo", "today")
    
    if results:
        print(f"\n✅ 取得完了: {len(results)}件のページデータ")

if __name__ == "__main__":
    main()