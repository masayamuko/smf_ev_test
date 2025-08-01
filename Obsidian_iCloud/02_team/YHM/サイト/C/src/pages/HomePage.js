import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const targetUsers = [
    {
      id: 'users',
      path: '/for-users',
      icon: '🏠',
      title: '利用をお考えの方へ',
      subtitle: '自立援助ホームでの生活をお考えの方',
      description: '15歳から20歳までの青少年が安心して生活し、自立に向けた支援を受けることができます。まずはお気軽にご相談ください。',
      features: [
        '5つのホームから選択可能',
        '24時間の専門職員サポート',
        '就労・就学支援',
        '個別の自立計画'
      ],
      className: 'for-users'
    },
    {
      id: 'supporters',
      path: '/for-supporters',
      icon: '❤️',
      title: '支援をお考えの方へ',
      subtitle: '寄付やボランティアで支援したい方',
      description: '青少年の自立を支える活動にご協力ください。様々な形でのご支援をお待ちしています。',
      features: [
        '寄付による資金的支援',
        'ボランティア活動参加',
        '企業・団体での連携',
        '物品寄付'
      ],
      className: 'for-supporters'
    },
    {
      id: 'jobseekers',
      path: '/for-jobseekers',
      icon: '💼',
      title: '働きたい方へ',
      subtitle: '職員として青少年支援に携わりたい方',
      description: '青少年の自立を支援する専門職として、一緒に働いてみませんか。やりがいのある仕事があなたを待っています。',
      features: [
        '生活支援員の募集',
        '相談員の募集',
        '充実した研修制度',
        '働きやすい環境'
      ],
      className: 'for-jobseekers'
    }
  ];

  const stats = [
    { number: '16年', label: '運営実績' },
    { number: '5つ', label: '自立援助ホーム' },
    { number: '30名', label: '支援定員' },
    { number: '100名+', label: '支援実績' }
  ];

  return (
    <div className="homepage">
      {/* ヒーローセクション */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>あなたの目的は何ですか？</h1>
            <p className="hero-subtitle">
              私たちは青少年の自立支援を通じて、より良い社会を築くために活動しています。
              利用者、支援者、職員として、それぞれの立場で私たちと一緒に歩んでいきませんか。
            </p>
          </div>
        </div>
      </section>

      {/* ターゲット選択セクション */}
      <section className="target-selection">
        <div className="container">
          <h2 className="section-title">あなたの目的に合わせた情報をご案内します</h2>
          <p className="section-subtitle">
            以下の3つのカテゴリーから、あなたの目的に最も近いものをお選びください
          </p>
          
          <div className="target-cards">
            {targetUsers.map((target) => (
              <div key={target.id} className={`target-card ${target.className}`}>
                <span className="target-icon">{target.icon}</span>
                <h3>{target.title}</h3>
                <p className="subtitle">{target.subtitle}</p>
                <p>{target.description}</p>
                
                <div className="features-preview">
                  <ul>
                    {target.features.map((feature, index) => (
                      <li key={index}>✓ {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <Link to={target.path} className="btn">
                  詳しく見る
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 統計セクション */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">実績・数字で見る私たちの活動</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 法人紹介セクション */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">私たちについて</h2>
          <div className="grid grid-2">
            <div className="feature-highlight">
              <h3>理念・使命</h3>
              <p>
                すべての青少年が安心して成長し、自立した大人として社会に参加できる環境を提供することを使命とし、
                一人ひとりの個性と可能性を尊重した支援を行います。
              </p>
            </div>
            <div className="feature-highlight">
              <h3>活動内容</h3>
              <p>
                福岡県内で5つの自立援助ホームを運営し、15歳から20歳までの青少年の生活支援、
                就労・就学支援、相談支援、アフターケアを総合的に提供しています。
              </p>
            </div>
          </div>
          <div className="text-center mt-3">
            <Link to="/about" className="btn btn-outline">法人について詳しく</Link>
          </div>
        </div>
      </section>

      {/* 最新情報セクション */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">最新情報</h2>
          <div className="grid grid-3">
            <div className="card">
              <h4>2024.12.15</h4>
              <h3>TIES開設準備進行中</h3>
              <p>2025年2月開設予定の新しい自立援助ホーム「TIES」の準備が順調に進んでいます。</p>
            </div>
            <div className="card">
              <h4>2024.11.20</h4>
              <h3>職員研修を実施</h3>
              <p>全職員を対象とした研修会を開催し、支援技術の向上を図りました。</p>
            </div>
            <div className="card">
              <h4>2024.10.05</h4>
              <h3>上半期活動報告</h3>
              <p>令和6年度上半期の活動実績と成果をまとめた報告書を公開いたします。</p>
            </div>
          </div>
          <div className="text-center mt-3">
            <Link to="/news" className="btn btn-outline">すべてのお知らせ</Link>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className="cta-section">
        <div className="container">
          <h2>まずは一歩から始めませんか</h2>
          <p>
            どのような形でも構いません。青少年の未来を支える活動に、
            あなたも参加してみませんか。私たちがサポートします。
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/for-users" className="btn">利用相談</Link>
            <Link to="/for-supporters" className="btn btn-accent">支援参加</Link>
            <Link to="/for-jobseekers" className="btn">求人応募</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;