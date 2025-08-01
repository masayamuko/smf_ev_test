import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const homes = [
    {
      id: 'kanransya',
      name: 'かんらん舎',
      subtitle: '福岡市初の自立援助ホーム',
      established: '2008年',
      location: '福岡市南区',
      capacity: '男性6名',
      target: 'male',
      category: 'basic',
      status: 'active',
      description: '福岡市として初めての自立援助ホーム。15年以上の豊富な実績で、青少年の基本的な自立支援を行います。',
      features: [
        '福岡市初のホームとしての豊富な経験',
        '基本的な生活技術から就労支援まで',
        '地域との強いネットワーク',
        '卒業生との継続的なつながり'
      ],
      colors: {
        primary: '#8B4513',
        secondary: '#D2691E'
      }
    },
    {
      id: 'yui',
      name: '結ホーム',
      subtitle: '絆を大切にする女性専用ホーム',
      established: '2015年',
      location: '福岡市南区',
      capacity: '女性6名',
      target: 'female',
      category: 'basic',
      status: 'active',
      description: '「結」は絆やつながりを意味します。女性の特性に配慮した環境で、きめ細やかなサポートを提供します。',
      features: [
        '女性専用ホームとしての専門性',
        'プライバシーを重視した個室環境',
        '女性職員による24時間サポート',
        '美容・健康管理への配慮'
      ],
      colors: {
        primary: '#FF69B4',
        secondary: '#FFB6C1'
      }
    },
    {
      id: 'leap',
      name: 'LEAP',
      subtitle: '飛躍・上昇をテーマとしたホーム',
      established: '2019年',
      location: '筑紫野市',
      capacity: '男性6名',
      target: 'male',
      category: 'specialized',
      status: 'active',
      description: 'LEAPは「飛び越える、上昇する」という意味。青少年の可能性を信じ、新しいアプローチで支援します。',
      features: [
        '個性を活かした支援プログラム',
        '新しい支援理論の積極的な導入',
        '豊かな自然環境での生活',
        'スポーツや芸術活動を通じた成長支援'
      ],
      colors: {
        primary: '#32CD32',
        secondary: '#98FB98'
      }
    },
    {
      id: 'switch',
      name: 'スイッチ',
      subtitle: '進学・学習支援に特化',
      established: '2023年',
      location: '太宰府市',
      capacity: '男性6名',
      target: 'male',
      category: 'specialized',
      status: 'active',
      description: '心の変化と選択をサポート。高校卒業や進学を目指す青年の学習支援に特化したホームです。',
      features: [
        '進学・学習支援に特化した環境',
        '充実した学習設備と教材',
        '個別学習計画の作成と実行',
        '大学・専門学校との連携'
      ],
      colors: {
        primary: '#4169E1',
        secondary: '#87CEEB'
      }
    },
    {
      id: 'ties',
      name: 'TIES',
      subtitle: '新しいつながりを創造',
      established: '2025年開設予定',
      location: '福岡市南区',
      capacity: '女性6名',
      target: 'female',
      category: 'next-gen',
      status: 'opening',
      description: 'つながりを意味するTIES。最新の支援理論を取り入れた次世代型ホームとして2025年2月開設予定。',
      features: [
        '最新の支援理論を取り入れた革新的アプローチ',
        '地域との連携を重視したコミュニティ支援',
        'デジタル技術を活用した支援プログラム',
        '卒業生ネットワークとの強いつながり'
      ],
      colors: {
        primary: '#9370DB',
        secondary: '#DDA0DD'
      }
    }
  ];

  const categories = [
    { id: 'all', name: '全て', count: homes.length },
    { id: 'male', name: '男性向け', count: homes.filter(h => h.target === 'male').length },
    { id: 'female', name: '女性向け', count: homes.filter(h => h.target === 'female').length },
    { id: 'basic', name: '基本支援', count: homes.filter(h => h.category === 'basic').length },
    { id: 'specialized', name: '特化支援', count: homes.filter(h => h.category === 'specialized').length },
    { id: 'next-gen', name: '次世代型', count: homes.filter(h => h.category === 'next-gen').length }
  ];

  const filteredHomes = selectedCategory === 'all' 
    ? homes 
    : homes.filter(home => 
        home.target === selectedCategory || 
        home.category === selectedCategory
      );

  return (
    <div className="homes-page">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>自立援助ホーム</h1>
          <p>それぞれの特色を活かした5つのホームをご紹介します</p>
        </div>
      </section>

      {/* 自立援助ホームとは */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">自立援助ホームとは</h2>
          <div className="card">
            <p style={{ fontSize: '1.1rem', textAlign: 'center', marginBottom: '2rem' }}>
              15歳から20歳までの青少年が生活し、自立に向けた支援を受けることができる施設です。
            </p>
            <div className="grid grid-4">
              <div className="feature-item">
                <h4>🏠 安心できる住まい</h4>
                <p>プライバシーに配慮した個室環境</p>
              </div>
              <div className="feature-item">
                <h4>👥 24時間サポート</h4>
                <p>専門職員による継続的な支援</p>
              </div>
              <div className="feature-item">
                <h4>💼 就労・就学支援</h4>
                <p>将来に向けた具体的なサポート</p>
              </div>
              <div className="feature-item">
                <h4>🤝 アフターケア</h4>
                <p>退所後も継続的な相談支援</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* カテゴリフィルター */}
      <section className="section" style={{ background: 'var(--light-gray)', paddingTop: '40px', paddingBottom: '40px' }}>
        <div className="container">
          <div className="category-filters">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
                <span className="count">({category.count})</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ホーム一覧 */}
      <section className="section">
        <div className="container">
          <div className="homes-grid">
            {filteredHomes.map((home) => (
              <div key={home.id} className="home-detail-card">
                <div 
                  className="home-header"
                  style={{ 
                    background: `linear-gradient(135deg, ${home.colors.primary}, ${home.colors.secondary})` 
                  }}
                >
                  <div className="home-status">
                    <span className={`status-badge ${home.status}`}>
                      {home.status === 'active' ? '運営中' : '開設準備中'}
                    </span>
                  </div>
                  <h3>{home.name}</h3>
                  <p className="subtitle">{home.subtitle}</p>
                </div>
                
                <div className="home-content">
                  <div className="home-basic-info">
                    <div className="info-row">
                      <span className="label">設立:</span>
                      <span className="value">{home.established}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">所在地:</span>
                      <span className="value">{home.location}</span>
                    </div>
                    <div className="info-row">
                      <span className="label">定員:</span>
                      <span className="value">{home.capacity}</span>
                    </div>
                  </div>

                  <p className="home-description">{home.description}</p>

                  <div className="home-features-list">
                    <h4>特徴</h4>
                    <ul>
                      {home.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="home-actions">
                    <Link 
                      to={`/homes/${home.id}`} 
                      className="btn"
                      style={{ backgroundColor: home.colors.primary }}
                    >
                      詳細を見る
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* どのホームを選ぶべきか */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">どのホームを選ぶべきか迷っている方へ</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>選択のポイント</h3>
              <ul>
                <li><strong>性別</strong>：男性向け3ホーム、女性向け2ホーム</li>
                <li><strong>支援タイプ</strong>：基本支援、特化支援、次世代型</li>
                <li><strong>所在地</strong>：福岡市、筑紫野市、太宰府市</li>
                <li><strong>個人の目標</strong>：就労重視、進学重視、総合的支援</li>
              </ul>
            </div>
            <div className="card">
              <h3>相談・見学について</h3>
              <p>
                どのホームが最適かは、あなたの状況や希望によって異なります。
                まずは相談から始めて、実際に見学してから決めることも可能です。
              </p>
              <div style={{ marginTop: '1.5rem' }}>
                <Link to="/admission" className="btn" style={{ marginRight: '1rem' }}>入居相談</Link>
                <Link to="/contact" className="btn btn-secondary">お問い合わせ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomesPage;