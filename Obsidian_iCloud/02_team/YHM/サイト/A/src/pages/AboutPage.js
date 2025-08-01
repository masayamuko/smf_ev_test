import React from 'react';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>法人について</h1>
          <p>私たちの理念と活動をご紹介します</p>
        </div>
      </section>

      {/* 理念・ビジョン */}
      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>理念</h2>
              <div className="card">
                <p>
                  すべての青少年が、安心して成長し、自立した大人として社会に参加できる環境を提供することを使命とし、
                  一人ひとりの個性と可能性を尊重した支援を行います。
                </p>
                <p>
                  私たちは、青少年が困難な状況を乗り越え、希望を持って未来に向かうことができるよう、
                  専門的な知識と温かい心でサポートします。
                </p>
              </div>
            </div>
            <div>
              <h2>ビジョン</h2>
              <div className="card">
                <p>
                  青少年が自分らしく生きることができる社会の実現を目指し、
                  地域や関係機関との連携を深めながら、継続的で質の高い支援を提供します。
                </p>
                <p>
                  また、社会的養護の重要性について広く社会に発信し、
                  理解と支援の輪を広げることで、すべての青少年にとって住みやすい社会を築きます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 代表挨拶 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">代表挨拶</h2>
          <div className="card">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h3>代表理事 田中 太郎</h3>
            </div>
            <p>
              特定非営利活動法人 青少年の自立を支える福岡の会のウェブサイトをご覧いただき、ありがとうございます。
            </p>
            <p>
              当法人は2008年の設立以来、家庭の支えが乏しい青少年の自立支援に取り組んでまいりました。
              社会的養護を必要とする青少年が、安心して生活し、将来への希望を持って成長できる環境を提供することが、
              私たちの使命だと考えています。
            </p>
            <p>
              現在、福岡県内で5つの自立援助ホームを運営し、多くの青少年の自立をサポートしています。
              一人ひとりの個性や状況に応じたきめ細やかな支援を心がけ、職員一同が専門性を高めながら、
              温かく寄り添う支援を実践しています。
            </p>
            <p>
              青少年の自立支援は、決して一人や一つの機関だけでできるものではありません。
              地域の皆様、関係機関、そして多くの支援者の方々のご理解とご協力があってこそ、
              実現できるものです。
            </p>
            <p>
              今後も、青少年が希望を持って未来に向かうことができるよう、
              より良い支援の在り方を追求し続けてまいります。
              皆様の温かいご支援を心よりお願い申し上げます。
            </p>
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
                <p>特定非営利活動法人として設立。福岡市初の自立援助ホーム「かんらん舎」を開設。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2015年</div>
              <div className="timeline-content">
                <h4>結ホーム開設</h4>
                <p>福岡市2番目の自立援助ホーム「結ホーム」を開設。絆を大切にする支援を開始。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2019年</div>
              <div className="timeline-content">
                <h4>LEAP開設</h4>
                <p>筑紫野市に「LEAP」を開設。飛躍をテーマとした新しい支援モデルを導入。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2023年</div>
              <div className="timeline-content">
                <h4>スイッチ開設</h4>
                <p>太宰府市に「スイッチ」を開設。進学支援に特化した新たな取り組みを開始。</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2025年</div>
              <div className="timeline-content">
                <h4>TIES開設予定</h4>
                <p>福岡市南区に5つ目のホーム「TIES」開設予定。新しいつながりを創造。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 組織概要 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">組織概要</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>基本情報</h3>
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
                <tr>
                  <th>電話番号</th>
                  <td>092-XXX-XXXX</td>
                </tr>
                <tr>
                  <th>メールアドレス</th>
                  <td>info@fukuoka-youth.org</td>
                </tr>
              </table>
            </div>
            <div className="card">
              <h3>事業内容</h3>
              <ul>
                <li>自立援助ホームの運営</li>
                <li>青少年の生活支援</li>
                <li>就労・就学支援</li>
                <li>アフターケア事業</li>
                <li>相談支援事業</li>
                <li>地域連携・啓発活動</li>
                <li>職員研修・人材育成</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;