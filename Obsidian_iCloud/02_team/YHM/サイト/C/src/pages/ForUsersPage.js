import React from 'react';
import { Link } from 'react-router-dom';

const ForUsersPage = () => {
  const homes = [
    { id: 'kanransya', name: 'かんらん舎', type: '男性', location: '福岡市南区', feature: '福岡市初のホーム' },
    { id: 'yui', name: '結ホーム', type: '女性', location: '福岡市南区', feature: '絆を大切にする' },
    { id: 'leap', name: 'LEAP', type: '男性', location: '筑紫野市', feature: '可能性を重視' },
    { id: 'switch', name: 'スイッチ', type: '男性', location: '太宰府市', feature: '進学支援特化' },
    { id: 'ties', name: 'TIES', type: '女性', location: '福岡市南区', feature: '2025年開設予定' }
  ];

  return (
    <div className="for-users-page">
      <section className="page-header">
        <div className="container">
          <h1>🏠 利用をお考えの方へ</h1>
          <p>自立援助ホームでの生活をお考えの青少年の皆さんへ</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">自立援助ホームとは</h2>
          <div className="feature-highlight">
            <p style={{ fontSize: '1.2rem', textAlign: 'center', marginBottom: '2rem' }}>
              15歳から20歳までの青少年が生活し、自立に向けた支援を受けることができる施設です。
            </p>
            <div className="grid grid-4">
              <div className="card">
                <span className="icon-lg">🏠</span>
                <h3>安心できる住まい</h3>
                <p>プライバシーに配慮した個室環境で、安心して生活できます。</p>
              </div>
              <div className="card">
                <span className="icon-lg">👥</span>
                <h3>24時間サポート</h3>
                <p>専門職員が24時間体制で、あなたの成長をサポートします。</p>
              </div>
              <div className="card">
                <span className="icon-lg">💼</span>
                <h3>就労・就学支援</h3>
                <p>将来に向けた就職活動や進学の支援を行います。</p>
              </div>
              <div className="card">
                <span className="icon-lg">🤝</span>
                <h3>アフターケア</h3>
                <p>退所後も継続的な相談支援で、自立生活をサポートします。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">5つのホームから選択可能</h2>
          <p className="section-subtitle">
            それぞれのホームには特色があります。あなたに最適な環境を見つけてください。
          </p>
          <div className="grid grid-2">
            {homes.map((home) => (
              <div key={home.id} className="card">
                <h3>{home.name}</h3>
                <div className="home-info">
                  <span className="home-type">対象: {home.type}</span>
                  <span className="home-location">所在地: {home.location}</span>
                </div>
                <p className="home-feature">{home.feature}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-3">
            <p>どのホームが自分に合うか分からない場合は、まずはご相談ください。</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">入居までの流れ</h2>
          <div className="grid grid-3">
            <div className="feature-highlight">
              <h3>1. 相談・お問い合わせ</h3>
              <p>まずはお電話やメールでお気軽にご相談ください。あなたの状況や希望をお聞きします。</p>
            </div>
            <div className="feature-highlight">
              <h3>2. 面談・ホーム見学</h3>
              <p>実際にホームを見学していただき、生活環境や支援内容について詳しくご説明します。</p>
            </div>
            <div className="feature-highlight">
              <h3>3. 入居開始</h3>
              <p>入居が決まりましたら、新しい生活のスタートです。職員一同、全力でサポートします。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">よくある質問</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>Q. 費用はどのくらいかかりますか？</h3>
              <p>A. 食費や光熱費など実費相当分をご負担いただきます。詳細は個別にご相談させていただきます。</p>
            </div>
            <div className="card">
              <h3>Q. どのくらいの期間利用できますか？</h3>
              <p>A. 20歳まで利用可能です。個々の状況に応じて、自立に向けた計画を一緒に立てていきます。</p>
            </div>
            <div className="card">
              <h3>Q. 仕事や学校に通いながら利用できますか？</h3>
              <p>A. はい、可能です。むしろ就労や就学をしながらの利用を推奨しています。</p>
            </div>
            <div className="card">
              <h3>Q. 見学はできますか？</h3>
              <p>A. はい、事前予約制で見学を受け付けています。まずはお問い合わせください。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>まずはお気軽にご相談ください</h2>
          <p>
            一人で悩まず、まずは相談から始めてみませんか。
            あなたの状況に合わせて、最適なサポートをご提案します。
          </p>
          <Link to="/contact" className="btn btn-accent">相談・お問い合わせ</Link>
        </div>
      </section>
    </div>
  );
};

export default ForUsersPage;