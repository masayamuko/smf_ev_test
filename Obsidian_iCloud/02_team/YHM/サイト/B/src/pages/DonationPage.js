import React from 'react';

const DonationPage = () => {
  return (
    <div className="donation-page">
      <section className="page-header">
        <div className="container">
          <h1>寄付・支援</h1>
          <p>青少年の未来を支えるあなたのご支援をお待ちしています</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">寄付について</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>なぜ寄付が必要なのか</h3>
              <p>自立援助ホームで生活する青少年が安心して成長し、将来への希望を持てるよう、様々な支援が必要です。</p>
            </div>
            <div className="card">
              <h3>寄付の使途</h3>
              <ul>
                <li>職員人件費（40%）</li>
                <li>施設運営費（25%）</li>
                <li>青少年支援費（20%）</li>
                <li>管理費（15%）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">その他の支援方法</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>ボランティア</h3>
              <p>イベントのお手伝いや専門スキルを活かしたボランティア活動にご参加いただけます。</p>
            </div>
            <div className="card">
              <h3>現物寄付</h3>
              <p>生活用品や学習用品など、青少年の生活に必要な物品のご寄付もお受けしています。</p>
            </div>
            <div className="card">
              <h3>企業連携</h3>
              <p>就労支援や職業体験の機会提供など、企業の皆様との連携も大歓迎です。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;