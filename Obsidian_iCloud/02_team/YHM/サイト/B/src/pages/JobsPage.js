import React from 'react';

const JobsPage = () => {
  return (
    <div className="jobs-page">
      <section className="page-header">
        <div className="container">
          <h1>求人情報</h1>
          <p>青少年の未来を一緒に支える仲間を募集しています</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">募集職種</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>生活支援員</h3>
              <p>自立援助ホームで生活する青少年の日常生活をサポートする職員を募集しています。</p>
              <ul>
                <li>月給 200,000円〜280,000円</li>
                <li>社会福祉士、精神保健福祉士、保育士のいずれかの資格</li>
                <li>昇給年1回、賞与年2回</li>
              </ul>
            </div>
            <div className="card">
              <h3>相談支援員</h3>
              <p>青少年やその家族からの相談に応じ、適切な支援計画を立案・実行する職員を募集しています。</p>
              <ul>
                <li>月給 220,000円〜300,000円</li>
                <li>社会福祉士または精神保健福祉士の資格必須</li>
                <li>相談支援業務経験3年以上</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsPage;