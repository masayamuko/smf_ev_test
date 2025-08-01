import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>法人について</h1>
          <p>私たちの理念と取り組みをご紹介します</p>
        </div>
      </section>

      {/* 法人概要 */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div className="card">
              <h2>法人概要</h2>
              <p>
                特定非営利活動法人 青少年の自立を支える福岡の会は、2008年の設立以来、
                家庭の支えが乏しい青少年の自立支援に取り組んできました。
              </p>
              <p>
                現在、福岡県内で5つの自立援助ホームを運営し、
                それぞれの特色を活かした支援を提供しています。
              </p>
              <table className="info-table">
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
                  <td>福岡市南区○○○○○○</td>
                </tr>
                <tr>
                  <th>運営施設</th>
                  <td>自立援助ホーム 5施設</td>
                </tr>
              </table>
            </div>
            <div className="card">
              <h2>理念・活動方針</h2>
              <p>
                <strong>「一人ひとりの個性を尊重し、自立への道のりを共に歩む」</strong>
              </p>
              <p>
                私たちは、青少年が自分らしく生きることができる社会の実現を目指し、
                以下の方針で活動しています：
              </p>
              <ul>
                <li>個別性を重視した支援の提供</li>
                <li>各ホームの特色を活かした多様な選択肢の提供</li>
                <li>地域や関係機関との密接な連携</li>
                <li>継続的な支援とアフターケアの充実</li>
                <li>職員の専門性向上と研修の推進</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5つのホームの位置づけ */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">5つのホームの役割</h2>
          <p className="text-center mb-2">
            それぞれのホームが異なる特色を持ち、青少年の多様なニーズに対応します
          </p>
          <div className="grid grid-2">
            <div className="card">
              <h3>性別・対象別の配慮</h3>
              <div className="home-category">
                <h4>男性向けホーム</h4>
                <ul>
                  <li><strong>かんらん舎</strong> - 基本的な自立支援</li>
                  <li><strong>LEAP</strong> - 可能性重視の支援</li>
                  <li><strong>スイッチ</strong> - 進学・学習支援</li>
                </ul>
              </div>
              <div className="home-category">
                <h4>女性向けホーム</h4>
                <ul>
                  <li><strong>結ホーム</strong> - 女性特有の配慮</li>
                  <li><strong>TIES</strong> - 次世代型支援（開設予定）</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <h3>支援の専門性</h3>
              <div className="support-types">
                <div className="support-type">
                  <h4>基本的自立支援</h4>
                  <p>かんらん舎・結ホーム</p>
                  <small>生活技術習得から就労支援まで総合的にサポート</small>
                </div>
                <div className="support-type">
                  <h4>特化型支援</h4>
                  <p>LEAP・スイッチ</p>
                  <small>個性や進路に応じた専門的なサポート</small>
                </div>
                <div className="support-type">
                  <h4>次世代型支援</h4>
                  <p>TIES（開設予定）</p>
                  <small>最新理論を取り入れた革新的なサポート</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 沿革 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">沿革</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">2008年</div>
              <div className="timeline-content">
                <h4>法人設立・かんらん舎開設</h4>
                <p>福岡市初の自立援助ホーム「かんらん舎」を開設。男性青少年への基本的な自立支援を開始。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015年</div>
              <div className="timeline-content">
                <h4>結ホーム開設</h4>
                <p>女性専用ホーム「結ホーム」を開設。女性特有のニーズに配慮した支援を開始。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019年</div>
              <div className="timeline-content">
                <h4>LEAP開設</h4>
                <p>筑紫野市に「LEAP」を開設。可能性重視の新しい支援モデルを導入。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023年</div>
              <div className="timeline-content">
                <h4>スイッチ開設</h4>
                <p>太宰府市に「スイッチ」を開設。進学支援に特化した専門的なサポートを開始。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025年</div>
              <div className="timeline-content">
                <h4>TIES開設予定</h4>
                <p>福岡市南区に「TIES」開設予定。最新理論を取り入れた次世代型ホーム。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 支援の流れ */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">支援の流れ</h2>
          <div className="grid grid-3">
            <div className="card">
              <h3>1. 相談・マッチング</h3>
              <p>
                個々の状況や希望を丁寧に聞き取り、
                最適なホームをご提案します。
                5つのホームそれぞれの特色を説明し、
                本人が選択できるようサポートします。
              </p>
            </div>
            <div className="card">
              <h3>2. 入居・生活支援</h3>
              <p>
                選択されたホームで生活を開始。
                各ホームの特色を活かした個別支援計画を作成し、
                日常生活から就労・就学まで幅広くサポートします。
              </p>
            </div>
            <div className="card">
              <h3>3. 自立・アフターケア</h3>
              <p>
                自立に向けた準備が整った段階で退所。
                退所後も継続的な相談支援を行い、
                地域での生活を長期的にサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 運営体制 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">運営体制</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>組織体制</h3>
              <ul>
                <li><strong>理事会</strong> - 法人運営の意思決定</li>
                <li><strong>事務局</strong> - 法人全体の管理・調整</li>
                <li><strong>各ホーム</strong> - 個別支援の実施</li>
                <li><strong>専門委員会</strong> - 支援方針の検討</li>
              </ul>
            </div>
            <div className="card">
              <h3>職員体制</h3>
              <ul>
                <li><strong>管理職</strong> - 各ホーム施設長</li>
                <li><strong>生活支援員</strong> - 日常生活サポート</li>
                <li><strong>相談員</strong> - 個別相談・計画作成</li>
                <li><strong>事務職員</strong> - 運営サポート</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;