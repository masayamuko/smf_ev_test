import React from 'react';
import { useParams, Link } from 'react-router-dom';

const HomeDetailPage = () => {
  const { homeId } = useParams();

  const homesData = {
    kanransya: {
      name: 'かんらん舎',
      subtitle: '福岡市初の自立援助ホーム',
      established: '2008年',
      location: '福岡市南区',
      capacity: '男性6名',
      manager: '施設長 山田 花子',
      phone: '092-XXX-XXXX',
      address: '福岡市南区○○○○○○',
      colors: { primary: '#8B4513', secondary: '#D2691E' },
      description: '2008年に福岡市として初めて開設された自立援助ホーム。長年の実績と経験を活かし、青少年一人ひとりの個性と状況に応じた丁寧な支援を行っています。',
      philosophy: '「自立への道のりを共に歩む」をモットーに、青少年が安心して成長できる環境を提供し、社会で自立して生活していくための基盤づくりをサポートします。',
      uniqueFeatures: [
        '福岡市初の自立援助ホームとしての15年以上の実績',
        '地域の企業・学校との強いネットワーク',
        '卒業生との継続的なつながりとピアサポート',
        '伝統的な支援手法と新しい理論の融合'
      ]
    },
    yui: {
      name: '結ホーム',
      subtitle: '絆を大切にする女性専用ホーム',
      established: '2015年',
      location: '福岡市南区',
      capacity: '女性6名',
      manager: '施設長 佐藤 太郎',
      phone: '092-XXX-XXXX',
      address: '福岡市南区○○○○○○',
      colors: { primary: '#FF69B4', secondary: '#FFB6C1' },
      description: '「結」は絆やつながりを意味します。女性の特性に配慮した支援環境で、一人ひとりの成長を丁寧にサポートしています。',
      philosophy: '女性としての自立と社会参加を支援し、それぞれの夢や目標に向かって歩む力を育みます。お互いを支え合う温かい家庭的な環境を大切にしています。',
      uniqueFeatures: [
        '女性特有のニーズに対応した専門的なケア',
        '美容・健康管理への丁寧な配慮',
        '女性職員による24時間安心サポート',
        'プライバシーを重視した個室環境'
      ]
    },
    leap: {
      name: 'LEAP',
      subtitle: '飛躍・上昇をテーマとしたホーム',
      established: '2019年',
      location: '筑紫野市',
      capacity: '男性6名',
      manager: '施設長 田中 次郎',
      phone: '092-XXX-XXXX',
      address: '筑紫野市○○○○○○',
      colors: { primary: '#32CD32', secondary: '#98FB98' },
      description: 'LEAPは「飛び越える、上昇する」という意味を持ちます。青少年の可能性を信じ、それぞれの夢や目標に向かって大きく飛躍できるよう支援します。',
      philosophy: '一人ひとりの可能性を最大限に引き出し、自分らしい人生を歩むための力を育てます。挑戦する気持ちを大切にし、失敗を恐れずに成長できる環境を提供します。',
      uniqueFeatures: [
        '個性と才能を発見・伸ばすプログラム',
        '豊かな自然環境を活かした体験活動',
        'スポーツ・芸術活動を通じた自己表現支援',
        '新しい支援理論を積極的に導入'
      ]
    },
    switch: {
      name: 'スイッチ',
      subtitle: '進学・学習支援に特化したホーム',
      established: '2023年',
      location: '太宰府市',
      capacity: '男性6名',
      manager: '施設長 鈴木 一郎',
      phone: '092-XXX-XXXX',
      address: '太宰府市○○○○○○',
      colors: { primary: '#4169E1', secondary: '#87CEEB' },
      description: '心の変化と選択をサポート。高卒資格取得や進学を目指す青年の就学支援に積極的に取り組む新しいホームです。',
      philosophy: '教育の力を信じ、学習を通じた自己実現を支援します。一人ひとりの学習ペースに合わせた環境で、将来への可能性を広げるお手伝いをします。',
      uniqueFeatures: [
        '充実した学習環境と最新の教材',
        '個別学習計画の作成と定期的な見直し',
        '大学・専門学校との連携プログラム',
        '進路選択から受験まで総合的にサポート'
      ]
    },
    ties: {
      name: 'TIES',
      subtitle: '新しいつながりを創造するホーム',
      established: '2025年開設予定',
      location: '福岡市南区',
      capacity: '女性6名',
      manager: '施設長 未定',
      phone: '092-XXX-XXXX（法人代表）',
      address: '福岡市南区○○○○○○（開設予定地）',
      colors: { primary: '#9370DB', secondary: '#DDA0DD' },
      description: '2025年2月開設予定の新しい自立援助ホーム。「TIES」は「つながり」を意味し、青少年と地域、青少年同士、そして過去・現在・未来をつなぐ支援を目指します。',
      philosophy: '最新の支援理論と豊富な経験を融合させ、一人ひとりの青少年が新しい人生のステージへと歩み出せるよう、革新的で温かい支援を提供します。',
      uniqueFeatures: [
        '最新のエビデンスに基づく支援手法',
        'デジタル技術を活用した新しいアプローチ',
        '地域コミュニティとの密接な連携',
        '卒業生ネットワークとの強いつながり'
      ]
    }
  };

  const home = homesData[homeId];

  if (!home) {
    return (
      <div className="container" style={{ padding: '2rem 0' }}>
        <h1>ホームが見つかりません</h1>
        <Link to="/homes" className="btn">ホーム一覧に戻る</Link>
      </div>
    );
  }

  return (
    <div className="home-detail-page">
      {/* パンくずナビ */}
      <nav className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb-list">
            <li><Link to="/">ホーム</Link></li>
            <li><Link to="/homes">自立援助ホーム</Link></li>
            <li>{home.name}</li>
          </ul>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <section 
        className="page-header"
        style={{ 
          background: `linear-gradient(135deg, ${home.colors.primary}, ${home.colors.secondary})` 
        }}
      >
        <div className="container">
          <h1>{home.name}</h1>
          <p>{home.subtitle}</p>
          <div className="hero-info">
            <span>設立: {home.established}</span>
            <span>定員: {home.capacity}</span>
            <span>所在地: {home.location}</span>
          </div>
        </div>
      </section>

      {/* ホーム紹介 */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h2>ホームの特色</h2>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>{home.description}</p>
              <h3>このホームならではの特徴</h3>
              <ul className="feature-list">
                {home.uniqueFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            <div className="card">
              <h2>支援の理念</h2>
              <blockquote style={{ 
                borderLeft: `4px solid ${home.colors.primary}`,
                paddingLeft: '1rem',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                lineHeight: '1.7'
              }}>
                {home.philosophy}
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* 一日の流れ（サンプル） */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">生活の様子</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>平日のスケジュール</h3>
              <div className="schedule">
                <div className="schedule-item">
                  <span className="time">6:30</span>
                  <span className="activity">起床・洗面</span>
                </div>
                <div className="schedule-item">
                  <span className="time">7:00</span>
                  <span className="activity">朝食</span>
                </div>
                <div className="schedule-item">
                  <span className="time">8:00</span>
                  <span className="activity">出勤・通学</span>
                </div>
                <div className="schedule-item">
                  <span className="time">18:00</span>
                  <span className="activity">帰宅</span>
                </div>
                <div className="schedule-item">
                  <span className="time">19:00</span>
                  <span className="activity">夕食</span>
                </div>
                <div className="schedule-item">
                  <span className="time">21:00</span>
                  <span className="activity">自由時間・入浴</span>
                </div>
                <div className="schedule-item">
                  <span className="time">23:00</span>
                  <span className="activity">消灯</span>
                </div>
              </div>
            </div>
            <div className="card">
              <h3>支援内容</h3>
              <div className="support-areas">
                <div className="support-item">
                  <h4 style={{ color: home.colors.primary }}>🏠 生活支援</h4>
                  <p>基本的な生活技術の習得、健康管理、金銭管理など</p>
                </div>
                <div className="support-item">
                  <h4 style={{ color: home.colors.primary }}>💼 就労・就学支援</h4>
                  <p>進路相談、就職活動サポート、職場との連携</p>
                </div>
                <div className="support-item">
                  <h4 style={{ color: home.colors.primary }}>❤️ 心理的支援</h4>
                  <p>日常的な相談、カウンセリング、メンタルケア</p>
                </div>
                <div className="support-item">
                  <h4 style={{ color: home.colors.primary }}>🤝 社会参加支援</h4>
                  <p>地域活動参加、人間関係構築、社会性向上</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 連絡先・相談 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">見学・相談のご案内</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>連絡先</h3>
              <div className="contact-details">
                <p><strong>住所:</strong> {home.address}</p>
                <p><strong>電話:</strong> {home.phone}</p>
                <p><strong>担当者:</strong> {home.manager}</p>
              </div>
              <div className="note" style={{ 
                background: `rgba(${home.colors.primary.slice(1).match(/.{2}/g).map(hex => parseInt(hex, 16)).join(', ')}, 0.1)`,
                padding: '1rem',
                borderRadius: '8px',
                marginTop: '1rem'
              }}>
                <p><strong>見学について:</strong></p>
                <p>事前予約制で見学を受け付けています。プライバシー保護のため、利用者の同意を得た上で実施しています。</p>
              </div>
            </div>
            <div className="card">
              <h3>入居までの流れ</h3>
              <ol className="steps">
                <li>お電話・メールでのお問い合わせ</li>
                <li>面談・ホーム見学</li>
                <li>入居の検討・準備</li>
                <li>入居判定会議</li>
                <li>入居手続き・生活開始</li>
              </ol>
              <div style={{ marginTop: '2rem' }}>
                <Link 
                  to="/admission" 
                  className="btn"
                  style={{ 
                    backgroundColor: home.colors.primary,
                    marginRight: '1rem'
                  }}
                >
                  入居相談
                </Link>
                <Link to="/contact" className="btn btn-secondary">お問い合わせ</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 他のホームも見る */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">他のホームも見てみませんか</h2>
          <div className="text-center">
            <p>それぞれのホームには異なる特色があります。あなたに最適な環境を見つけるために、他のホームもご覧ください。</p>
            <div style={{ marginTop: '2rem' }}>
              <Link to="/homes" className="btn btn-secondary">全ホーム一覧</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeDetailPage;