import React, { useState } from 'react';

const ForSupportersPage = () => {
  const [donationAmount, setDonationAmount] = useState('');

  const presetAmounts = [1000, 3000, 5000, 10000, 30000, 50000];

  return (
    <div className="for-supporters-page">
      <section className="page-header">
        <div className="container">
          <h1>❤️ 支援をお考えの方へ</h1>
          <p>青少年の未来を支える様々な支援方法をご紹介します</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">なぜあなたの支援が必要なのか</h2>
          <div className="grid grid-2">
            <div className="feature-highlight">
              <h3>青少年への直接支援</h3>
              <p>
                自立援助ホームで生活する青少年が安心して成長し、将来への希望を持てるよう、
                生活用品の提供や教育機会の確保、就労支援など、多岐にわたるサポートが必要です。
              </p>
            </div>
            <div className="feature-highlight">
              <h3>持続可能な支援体制</h3>
              <p>
                5つの自立援助ホームを24時間体制で運営するためには、
                専門職員の人件費や施設の維持費など、継続的な資金が必要です。
                皆様のご支援により、安定した運営を続けることができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">支援方法を選択してください</h2>
          <div className="grid grid-3">
            <div className="card">
              <span className="icon-lg">💰</span>
              <h3>寄付による支援</h3>
              <p>単発寄付や継続寄付で、青少年の生活と成長を直接支援できます。</p>
              <ul>
                <li>単発寄付（クレジットカード・銀行振込）</li>
                <li>継続寄付（月額寄付）</li>
                <li>税制優遇措置あり</li>
              </ul>
            </div>
            <div className="card">
              <span className="icon-lg">🤝</span>
              <h3>ボランティア参加</h3>
              <p>あなたのスキルや時間を活かして、直接青少年をサポートできます。</p>
              <ul>
                <li>イベントのお手伝い</li>
                <li>専門スキルを活かした支援</li>
                <li>学習支援・相談相手</li>
              </ul>
            </div>
            <div className="card">
              <span className="icon-lg">🏢</span>
              <h3>企業・団体支援</h3>
              <p>法人として社会貢献活動に参加し、青少年の就労支援にもつながります。</p>
              <ul>
                <li>企業寄付・協賛</li>
                <li>就労体験機会の提供</li>
                <li>物品寄付</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">寄付のお申し込み</h2>
          <div className="card">
            <h3>寄付金額を選択</h3>
            <div className="donation-amounts">
              {presetAmounts.map((amount) => (
                <div
                  key={amount}
                  className={`amount-option ${donationAmount === amount ? 'selected' : ''}`}
                  onClick={() => setDonationAmount(amount)}
                >
                  {amount.toLocaleString()}円
                </div>
              ))}
              <div
                className={`amount-option ${donationAmount === 'custom' ? 'selected' : ''}`}
                onClick={() => setDonationAmount('custom')}
              >
                その他
              </div>
            </div>
            {donationAmount === 'custom' && (
              <input
                type="number"
                placeholder="金額を入力してください"
                style={{ marginTop: '1rem', width: '100%', padding: '1rem' }}
              />
            )}
            <div style={{ marginTop: '2rem', textAlign: 'center' }}>
              <button className="btn">寄付を申し込む</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">支援者の声</h2>
          <div className="grid grid-2">
            <div className="card">
              <h4>企業支援者様</h4>
              <p>
                「社会貢献活動の一環として継続的に支援させていただいています。
                青少年の自立支援という大切な活動に参加できることを嬉しく思います。
                定期的に活動報告をいただけるので、支援の効果を実感できます。」
              </p>
            </div>
            <div className="card">
              <h4>個人支援者様</h4>
              <p>
                「月額寄付で支援しています。少額でも継続することで、
                青少年の未来に貢献できていると感じています。
                職員の皆さんの熱意が伝わってくる活動報告がとても励みになります。」
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>あなたの支援が青少年の未来を変えます</h2>
          <p>
            どのような形でも構いません。あなたのできる範囲で、
            青少年の自立を支援する活動にご参加ください。
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn">寄付で支援</button>
            <button className="btn btn-accent">ボランティア参加</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForSupportersPage;