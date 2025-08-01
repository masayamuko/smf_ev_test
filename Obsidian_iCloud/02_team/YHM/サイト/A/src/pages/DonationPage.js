import React, { useState } from 'react';

const DonationPage = () => {
  const [donationType, setDonationType] = useState('single');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorInfo, setDonorInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  });

  const presetAmounts = [1000, 3000, 5000, 10000, 30000, 50000];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorInfo(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalAmount = amount === 'custom' ? customAmount : amount;
    alert(`寄付のお申し込みありがとうございます。金額: ${finalAmount}円`);
  };

  return (
    <div className="donation-page">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>寄付・支援</h1>
          <p>青少年の未来を支えるあなたのご支援をお待ちしています</p>
        </div>
      </section>

      {/* 寄付の必要性 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">なぜ寄付が必要なのか</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>青少年への支援</h3>
              <p>
                自立援助ホームで生活する青少年が安心して成長し、将来への希望を持てるよう、
                様々な支援が必要です。生活用品の提供や教育機会の確保、
                就労支援など、多岐にわたるサポートを行っています。
              </p>
            </div>
            <div className="card">
              <h3>施設の運営</h3>
              <p>
                5つの自立援助ホームを24時間体制で運営するためには、
                職員の人件費や施設の維持費、光熱費など多くの費用が必要です。
                皆様のご支援により、安定した運営を続けることができます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付の使途 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">寄付金の使途</h2>
          <div className="usage-chart">
            <div className="usage-item">
              <div className="usage-bar" style={{ width: '40%', background: 'var(--primary-color)' }}></div>
              <div className="usage-info">
                <h4>職員人件費（40%）</h4>
                <p>専門職員の配置と研修費用</p>
              </div>
            </div>
            <div className="usage-item">
              <div className="usage-bar" style={{ width: '25%', background: 'var(--secondary-color)' }}></div>
              <div className="usage-info">
                <h4>施設運営費（25%）</h4>
                <p>光熱費、通信費、設備維持費</p>
              </div>
            </div>
            <div className="usage-item">
              <div className="usage-bar" style={{ width: '20%', background: 'var(--accent-color)' }}></div>
              <div className="usage-info">
                <h4>青少年支援費（20%）</h4>
                <p>生活用品、教育費、就労支援費</p>
              </div>
            </div>
            <div className="usage-item">
              <div className="usage-bar" style={{ width: '15%', background: '#999' }}></div>
              <div className="usage-info">
                <h4>管理費（15%）</h4>
                <p>法人運営、広報、その他管理費</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付フォーム */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">寄付のお申し込み</h2>
          <div className="card">
            <form onSubmit={handleSubmit}>
              {/* 寄付タイプ選択 */}
              <div className="form-group">
                <label>寄付タイプ</label>
                <div className="radio-group">
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="donationType"
                      value="single"
                      checked={donationType === 'single'}
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    単発寄付
                  </label>
                  <label className="radio-option">
                    <input
                      type="radio"
                      name="donationType"
                      value="monthly"
                      checked={donationType === 'monthly'}
                      onChange={(e) => setDonationType(e.target.value)}
                    />
                    継続寄付（月額）
                  </label>
                </div>
              </div>

              {/* 金額選択 */}
              <div className="form-group">
                <label>寄付金額</label>
                <div className="donation-amounts">
                  {presetAmounts.map((presetAmount) => (
                    <div
                      key={presetAmount}
                      className={`amount-option ${amount === presetAmount ? 'selected' : ''}`}
                      onClick={() => setAmount(presetAmount)}
                    >
                      {presetAmount.toLocaleString()}円
                    </div>
                  ))}
                  <div
                    className={`amount-option ${amount === 'custom' ? 'selected' : ''}`}
                    onClick={() => setAmount('custom')}
                  >
                    その他
                  </div>
                </div>
                {amount === 'custom' && (
                  <input
                    type="number"
                    placeholder="金額を入力してください"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    style={{ marginTop: '1rem' }}
                  />
                )}
              </div>

              {/* 寄付者情報 */}
              <h3>寄付者情報</h3>
              <div className="grid grid-2">
                <div className="form-group">
                  <label htmlFor="name">お名前 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={donorInfo.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">メールアドレス *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={donorInfo.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-2">
                <div className="form-group">
                  <label htmlFor="phone">電話番号</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={donorInfo.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">住所（領収書送付先）</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={donorInfo.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">メッセージ（任意）</label>
                <textarea
                  id="message"
                  name="message"
                  value={donorInfo.message}
                  onChange={handleInputChange}
                  placeholder="応援メッセージをお聞かせください"
                ></textarea>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="btn">寄付を申し込む</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* 税制優遇 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">税制優遇について</h2>
          <div className="card">
            <p>
              当法人は特定非営利活動法人として、ご寄付に対して税制上の優遇措置を受けることができます。
            </p>
            <div className="grid grid-2">
              <div>
                <h4>個人の方</h4>
                <ul>
                  <li>所得税の寄付金控除が適用されます</li>
                  <li>住民税の寄付金控除が適用される場合があります</li>
                  <li>年間の寄付金額から2,000円を差し引いた額が控除対象です</li>
                </ul>
              </div>
              <div>
                <h4>法人の方</h4>
                <ul>
                  <li>一般損金算入限度額の範囲内で損金算入できます</li>
                  <li>特定公益増進法人への寄付として優遇措置があります</li>
                  <li>詳細は税理士等にご相談ください</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 支援者の声 */}
      <section className="section">
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

      {/* その他の支援方法 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">その他の支援方法</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>ボランティア</h3>
              <p>
                イベントのお手伝いや専門スキルを活かしたボランティア活動にご参加いただけます。
              </p>
            </div>
            <div className="card">
              <h3>現物寄付</h3>
              <p>
                生活用品や学習用品など、青少年の生活に必要な物品のご寄付もお受けしています。
              </p>
            </div>
            <div className="card">
              <h3>企業連携</h3>
              <p>
                就労支援や職業体験の機会提供など、企業の皆様との連携も大歓迎です。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;