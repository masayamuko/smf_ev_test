import React from 'react';

const NewsPage = () => {
  const news = [
    {
      id: 1,
      date: '2024-12-15',
      category: 'お知らせ',
      title: 'TIES開設準備進行中',
      summary: '2025年2月開設予定の新しい自立援助ホーム「TIES」の準備が順調に進んでいます。'
    },
    {
      id: 2,
      date: '2024-11-20',
      category: '活動報告',
      title: '秋の職員研修を実施しました',
      summary: '全職員を対象とした研修会を開催し、支援技術の向上を図りました。'
    },
    {
      id: 3,
      date: '2024-10-05',
      category: '報告書',
      title: '令和6年度上半期活動報告書を公開',
      summary: '今年度上半期の活動実績と成果をまとめた報告書を公開いたします。'
    }
  ];

  return (
    <div className="news-page">
      <section className="page-header">
        <div className="container">
          <h1>お知らせ・活動報告</h1>
          <p>私たちの活動や最新情報をお伝えします</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="news-list">
            {news.map((item) => (
              <article key={item.id} className="card">
                <div className="news-header">
                  <div className="news-meta">
                    <span className="news-date">{item.date}</span>
                    <span className="news-category">{item.category}</span>
                  </div>
                  <h2>{item.title}</h2>
                  <p>{item.summary}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;