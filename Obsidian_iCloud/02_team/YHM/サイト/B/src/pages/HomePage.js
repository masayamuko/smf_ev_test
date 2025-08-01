import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const homes = [
    {
      id: 'kanransya',
      name: 'かんらん舎',
      subtitle: '福岡市初のホーム',
      established: '2008年',
      location: '福岡市南区',
      capacity: '男性6名',
      description: '福岡市として初めての自立援助ホーム。15年以上の豊富な経験で青少年の自立を支援します。',
      features: ['福岡市初の実績', '豊富な支援経験', '地域連携強化']
    },
    {
      id: 'yui',
      name: '結ホーム',
      subtitle: '絆を大切にする',
      established: '2015年',
      location: '福岡市南区',
      capacity: '女性6名',
      description: '女性専用ホームとして、きめ細やかな配慮で一人ひとりの成長を丁寧にサポートします。',
      features: ['女性専用', 'きめ細やかなケア', '個別サポート']
    },
    {
      id: 'leap',
      name: 'LEAP',
      subtitle: '飛躍・上昇を目指す',
      established: '2019年',
      location: '筑紫野市',
      capacity: '男性6名',
      description: '青少年の可能性を信じ、大きく飛躍できるよう新しいアプローチで支援します。',
      features: ['可能性重視', '新支援モデル', '個性重視']
    },
    {
      id: 'switch',
      name: 'スイッチ',
      subtitle: '進学支援に特化',
      established: '2023年',
      location: '太宰府市',
      capacity: '男性6名',
      description: '高校卒業資格取得や進学を目指す青年の学習支援に積極的に取り組みます。',
      features: ['進学支援', '学習環境', '将来設計']
    },
    {
      id: 'ties',
      name: 'TIES',
      subtitle: '新しいつながり',
      established: '2025年予定',
      location: '福岡市南区',
      capacity: '女性6名',
      description: '最新の支援理論で新しいつながりを創造する次世代型ホームです。',
      features: ['最新理論', '地域連携', '革新的支援']
    }
  ];

  const stats = [
    { number: '5', label: '自立援助ホーム' },
    { number: '30名', label: '支援定員' },
    { number: '15年', label: '運営実績' },
    { number: '100名+', label: '支援実績' }
  ];

  return (
    <div className="homepage">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>5つの自立援助ホームで<br />あなたを待っています</h1>
            <p>
              福岡県内で運営する5つの自立援助ホームが、それぞれの特色を活かしながら
              青少年の皆さんの自立をサポートしています。
              あなたに最適な環境で、新しい人生のスタートを切りませんか。
            </p>
            
            <div className="hero-homes">
              {homes.slice(0, 4).map((home) => (
                <div key={home.id} className="hero-home-card">
                  <h3>{home.name}</h3>
                  <p>{home.subtitle}</p>
                  <Link to={`/homes/${home.id}`} className="btn btn-outline">詳細</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 統計セクション */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ホーム紹介セクション */}
      <section className="home-showcase">
        <div className="container">
          <h2 className="section-title">各ホームの特色</h2>
          <div className="home-grid">
            {homes.map((home) => (
              <div key={home.id} className="home-feature-card">
                <div className="home-image-placeholder">
                  {home.name} 外観写真
                </div>
                <div className="home-card-content">
                  <h3>{home.name}</h3>
                  <div className="home-meta">
                    <span>設立: {home.established}</span>
                    <span>定員: {home.capacity}</span>
                    <span>{home.location}</span>
                  </div>
                  <p>{home.description}</p>
                  
                  <div className="home-features">
                    <h4>特徴</h4>
                    <ul>
                      {home.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div style={{ marginTop: '1.5rem' }}>
                    <Link to={`/homes/${home.id}`} className="btn">詳細を見る</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* どのホームが自分に合うか */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">どのホームが自分に合うか分からない？</h2>
          <div className="text-center">
            <p style={{ fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
              それぞれのホームには特色があります。
              あなたの状況や希望に最も適したホームをご提案いたします。
              まずはお気軽にご相談ください。
            </p>
            <Link to="/admission" className="btn" style={{ marginRight: '1rem' }}>入居相談</Link>
            <Link to="/contact" className="btn btn-secondary">お問い合わせ</Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="cta-section">
        <div className="container">
          <h2 className="section-title">私たちと一緒に歩みませんか</h2>
          <div className="cta-grid">
            <div className="cta-card">
              <h3>支援を受けたい方</h3>
              <p>自立に向けた第一歩を踏み出すお手伝いをします。</p>
              <Link to="/admission" className="btn btn-secondary">入居について</Link>
            </div>
            <div className="cta-card">
              <h3>寄付で支援したい方</h3>
              <p>青少年の未来を支える活動にご協力ください。</p>
              <Link to="/donation" className="btn btn-secondary">寄付について</Link>
            </div>
            <div className="cta-card">
              <h3>職員として働きたい方</h3>
              <p>一緒に青少年の自立を支援する仲間を募集中です。</p>
              <Link to="/jobs" className="btn btn-secondary">求人情報</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;