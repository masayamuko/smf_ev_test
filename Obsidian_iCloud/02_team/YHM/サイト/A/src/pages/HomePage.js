import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const homes = [
    {
      id: 'kanransya',
      name: 'かんらん舎',
      description: '福岡市として初めての自立援助ホーム。2008年の開設以来、青少年の自立を支援しています。',
      established: '2008年',
      location: '福岡市南区'
    },
    {
      id: 'yui',
      name: '結ホーム',
      description: '絆を大切にする支援方針で、青少年一人ひとりの成長を丁寧にサポートします。',
      established: '2015年',
      location: '福岡市南区'
    },
    {
      id: 'leap',
      name: 'LEAP',
      description: '「飛び越える、上昇する」という意味を持つホーム。青少年の可能性を信じて支援します。',
      established: '2019年',
      location: '筑紫野市'
    }
  ];

  const stats = [
    { number: '16', label: '年間運営実績' },
    { number: '5', label: '自立援助ホーム' },
    { number: '50+', label: '支援した青少年' },
    { number: '24/7', label: '支援体制' }
  ];

  return (
    <div className="homepage">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="container">
          <h1>青少年の自立支援を通じて<br />希望ある未来を創造します</h1>
          <p>
            特定非営利活動法人 青少年の自立を支える福岡の会は、2008年の設立以来、
            家庭の支えが乏しい青少年の自立のために、複数の自立援助ホームを運営し、
            社会的養護を必要とする青少年の育ちと支援に尽力しています。
          </p>
          <div className="hero-actions">
            <Link to="/about" className="btn">法人について</Link>
            <Link to="/homes" className="btn btn-secondary">自立援助ホーム</Link>
          </div>
        </div>
      </section>

      {/* 統計セクション */}
      <section className="stats section">
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴セクション */}
      <section className="features section">
        <div className="container">
          <h2 className="section-title">私たちの取り組み</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">🏠</div>
              <h3>自立援助ホーム運営</h3>
              <p>福岡県内で5つの自立援助ホームを運営し、青少年の生活と自立を総合的にサポートしています。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💼</div>
              <h3>就労・就学支援</h3>
              <p>一人ひとりの適性や希望に合わせた就労支援や進学支援を行い、将来への道筋をサポートします。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>アフターケア</h3>
              <p>退所後も継続的な相談支援を行い、社会での自立生活を長期的にサポートします。</p>
            </div>
          </div>
        </div>
      </section>

      {/* 自立援助ホーム紹介 */}
      <section className="homes-preview section">
        <div className="container">
          <h2 className="section-title">自立援助ホーム</h2>
          <div className="grid grid-3">
            {homes.map((home) => (
              <div key={home.id} className="home-card">
                <div className="home-card-content">
                  <h3>{home.name}</h3>
                  <div className="home-meta">
                    <span>設立: {home.established}</span>
                    <span>所在地: {home.location}</span>
                  </div>
                  <p>{home.description}</p>
                  <Link to={`/homes/${home.id}`} className="btn">詳細を見る</Link>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/homes" className="btn">すべてのホームを見る</Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="cta-section">
        <div className="container">
          <h2>私たちの活動を支援してください</h2>
          <p>
            青少年の自立を支援するため、様々な形でのご支援をお待ちしています。
            あなたのご支援が、青少年の未来を変える力になります。
          </p>
          <div className="cta-actions">
            <Link to="/donation" className="btn btn-secondary">寄付で支援</Link>
            <Link to="/jobs" className="btn btn-secondary">職員として参加</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;