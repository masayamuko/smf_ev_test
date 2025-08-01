import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <h1>法人について</h1>
          <p>私たちの理念と活動をご紹介します</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">私たちの使命</h2>
          <div className="feature-highlight">
            <p style={{ fontSize: '1.3rem', textAlign: 'center', marginBottom: '2rem' }}>
              すべての青少年が安心して成長し、自立した大人として社会に参加できる環境を提供することを使命とし、
              一人ひとりの個性と可能性を尊重した支援を行います。
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">活動内容</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>自立援助ホーム運営</h3>
              <p>福岡県内で5つの自立援助ホームを運営し、青少年の生活と自立を総合的にサポートしています。</p>
              <ul>
                <li>かんらん舎（福岡市南区）</li>
                <li>結ホーム（福岡市南区）</li>
                <li>LEAP（筑紫野市）</li>
                <li>スイッチ（太宰府市）</li>
                <li>TIES（福岡市南区・2025年開設予定）</li>
              </ul>
            </div>
            <div className="card">
              <h3>支援サービス</h3>
              <p>青少年の自立に必要な様々な支援を総合的に提供しています。</p>
              <ul>
                <li>生活支援・居住支援</li>
                <li>就労支援・就学支援</li>
                <li>相談支援・カウンセリング</li>
                <li>アフターケア・継続支援</li>
                <li>地域連携・ネットワーク構築</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">法人概要</h2>
          <div className="card">
            <div className="grid grid-2">
              <div>
                <h3>基本情報</h3>
                <div className="info-table-container">
                  <table className="info-table">
                    <tr>
                      <th>法人名</th>
                      <td>特定非営利活動法人 青少年の自立を支える福岡の会</td>
                    </tr>
                    <tr>
                      <th>設立年月日</th>
                      <td>2008年4月1日</td>
                    </tr>
                    <tr>
                      <th>代表者</th>
                      <td>代表理事 田中 太郎</td>
                    </tr>
                    <tr>
                      <th>所在地</th>
                      <td>〒815-0000 福岡市南区○○○○○○</td>
                    </tr>
                  </table>
                </div>
              </div>
              <div>
                <h3>実績</h3>
                <div className="stats-grid">
                  <div className="stat-card">
                    <span className="stat-number">16年</span>
                    <span className="stat-label">運営実績</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">5つ</span>
                    <span className="stat-label">自立援助ホーム</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">30名</span>
                    <span className="stat-label">支援定員</span>
                  </div>
                  <div className="stat-card">
                    <span className="stat-number">100名+</span>
                    <span className="stat-label">支援実績</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">沿革</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2008年</div>
              <div className="timeline-content">
                <h4>法人設立・かんらん舎開設</h4>
                <p>特定非営利活動法人として設立。福岡市初の自立援助ホーム「かんらん舎」を開設。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015年</div>
              <div className="timeline-content">
                <h4>結ホーム開設</h4>
                <p>福岡市2番目の自立援助ホーム「結ホーム」を開設。女性専用ホームとして運営開始。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019年</div>
              <div className="timeline-content">
                <h4>LEAP開設</h4>
                <p>筑紫野市に「LEAP」を開設。新しい支援モデルを導入。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023年</div>
              <div className="timeline-content">
                <h4>スイッチ開設</h4>
                <p>太宰府市に「スイッチ」を開設。進学支援に特化した支援を開始。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025年</div>
              <div className="timeline-content">
                <h4>TIES開設予定</h4>
                <p>福岡市南区に5つ目のホーム「TIES」開設予定。最新の支援理論を導入。</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;