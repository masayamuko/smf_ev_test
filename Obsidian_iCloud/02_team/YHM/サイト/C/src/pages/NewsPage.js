import React from 'react';

const NewsPage = () => {
  const news = [
    {
      id: 1,
      date: '2024-12-15',
      category: 'お知らせ',
      title: 'TIES開設準備進行中',
      summary: '2025年2月開設予定の新しい自立援助ホーム「TIES」の準備が順調に進んでいます。最新の支援理論を取り入れた次世代型ホームとして期待されています。'
    },
    {
      id: 2,
      date: '2024-11-20',
      category: '活動報告',
      title: '秋の職員研修を実施しました',
      summary: '全職員を対象とした研修会を開催し、支援技術の向上を図りました。青少年の心理的支援とコミュニケーション技術について学びました。'
    },
    {
      id: 3,
      date: '2024-10-05',
      category: '報告書',
      title: '令和6年度上半期活動報告書を公開',
      summary: '今年度上半期の活動実績と成果をまとめた報告書を公開いたします。支援青少年数や就労達成者数などの詳細な実績を報告しています。'
    },
    {
      id: 4,
      date: '2024-09-12',
      category: 'イベント',
      title: '地域交流バーベキュー大会を開催',
      summary: '地域の皆様との交流を深めるバーベキュー大会を開催し、多くの方にご参加いただきました。青少年たちの成長を地域の方々に見ていただく良い機会となりました。'
    }
  ];

  return (
    <div className="news-page">
      <section className="page-header">
        <div className="container">
          <h1>活動報告・お知らせ</h1>
          <p>私たちの最新の活動や重要なお知らせをお伝えします</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-grid">
            {news.map((item) => (
              <article key={item.id} className="card">
                <div className="news-header">
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <span className={`news-category category-${item.category}`}>
                      {item.category}
                    </span>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">年次報告書</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>令和5年度 年次報告書</h3>
              <p>2023年度の活動実績と財務状況をまとめた報告書です。</p>
              <button className="btn btn-outline">PDFダウンロード</button>
            </div>
            <div className="card">
              <h3>令和4年度 年次報告書</h3>
              <p>2022年度の活動実績と財務状況をまとめた報告書です。</p>
              <button className="btn btn-outline">PDFダウンロード</button>
            </div>
            <div className="card">
              <h3>令和3年度 年次報告書</h3>
              <p>2021年度の活動実績と財務状況をまとめた報告書です。</p>
              <button className="btn btn-outline">PDFダウンロード</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;