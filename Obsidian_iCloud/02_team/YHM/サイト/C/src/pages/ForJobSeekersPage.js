import React from 'react';

const ForJobSeekersPage = () => {
  const jobs = [
    {
      title: '生活支援員',
      type: '正職員',
      salary: '月給 200,000円〜280,000円',
      requirements: ['社会福祉士、精神保健福祉士、保育士のいずれかの資格', '青少年支援に興味・関心がある方'],
      benefits: ['昇給年1回', '賞与年2回（計3.5ヶ月分）', '各種社会保険完備']
    },
    {
      title: '相談支援員',
      type: '正職員',
      salary: '月給 220,000円〜300,000円',
      requirements: ['社会福祉士または精神保健福祉士の資格必須', '相談支援業務経験3年以上'],
      benefits: ['昇給年1回', '賞与年2回（計4.0ヶ月分）', '専門研修参加支援']
    }
  ];

  return (
    <div className="for-jobseekers-page">
      <section className="page-header">
        <div className="container">
          <h1>💼 働きたい方へ</h1>
          <p>青少年の自立を支援する専門職として、一緒に働きませんか</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">なぜこの仕事を選ぶのか</h2>
          <div className="grid grid-3">
            <div className="feature-highlight">
              <span className="icon-lg">❤️</span>
              <h3>やりがいのある仕事</h3>
              <p>青少年の成長を間近で見守り、自立への道のりをサポートする、とてもやりがいのある仕事です。</p>
            </div>
            <div className="feature-highlight">
              <span className="icon-lg">🌱</span>
              <h3>成長できる環境</h3>
              <p>充実した研修制度とサポート体制で、専門性を高めながら成長することができます。</p>
            </div>
            <div className="feature-highlight">
              <span className="icon-lg">🤝</span>
              <h3>チームワーク</h3>
              <p>職員同士の連携を大切にし、みんなで支え合いながら働ける環境です。</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">募集職種</h2>
          <div className="grid grid-2">
            {jobs.map((job, index) => (
              <div key={index} className="card">
                <h3>{job.title}</h3>
                <div className="job-meta">
                  <span>{job.type}</span>
                  <span>{job.salary}</span>
                </div>
                
                <div className="job-details">
                  <h4>応募要件</h4>
                  <ul>
                    {job.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                  
                  <h4>待遇・福利厚生</h4>
                  <ul>
                    {job.benefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">職員の声</h2>
          <div className="grid grid-2">
            <div className="card">
              <h4>生活支援員 佐藤さん（入職3年目）</h4>
              <p>
                「最初は不安もありましたが、先輩職員の丁寧な指導と充実した研修制度のおかげで、
                安心して業務に取り組むことができています。青少年の成長を見守ることができる
                この仕事にとてもやりがいを感じています。」
              </p>
            </div>
            <div className="card">
              <h4>相談支援員 田中さん（入職5年目）</h4>
              <p>
                「一人ひとりの青少年と向き合い、その子の将来を一緒に考えることができる仕事です。
                時には困難な場面もありますが、チーム一丸となってサポートし合える職場環境があるので、
                とても働きやすいです。」
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">研修・キャリア支援</h2>
          <div className="grid grid-2">
            <div className="feature-highlight">
              <h3>新人研修</h3>
              <ul>
                <li>法人理念・支援方針の理解</li>
                <li>自立援助ホームの基礎知識</li>
                <li>支援技術の習得</li>
                <li>実践指導（OJT）</li>
              </ul>
            </div>
            <div className="feature-highlight">
              <h3>継続研修・キャリア支援</h3>
              <ul>
                <li>専門研修への参加支援</li>
                <li>外部研修・学会参加</li>
                <li>資格取得支援</li>
                <li>キャリアアップ支援</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">応募方法</h2>
          <div className="card">
            <h3>応募から入職までの流れ</h3>
            <div className="grid grid-3">
              <div className="feature-highlight">
                <h4>1. 応募</h4>
                <p>お問い合わせフォームまたはお電話でご応募ください。履歴書・職務経歴書をお送りいただきます。</p>
              </div>
              <div className="feature-highlight">
                <h4>2. 選考</h4>
                <p>書類選考後、面接と職場見学を行います。あなたの想いや経験をお聞かせください。</p>
              </div>
              <div className="feature-highlight">
                <h4>3. 入職</h4>
                <p>内定後、入職日を調整します。研修から始まり、段階的に業務に慣れていただきます。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>青少年の未来を一緒に支えませんか</h2>
          <p>
            私たちと一緒に、青少年の自立を支援する仕事に挑戦してみませんか。
            あなたの経験とスキルを活かして、社会に貢献できる仕事です。
          </p>
          <button className="btn btn-accent">応募・お問い合わせ</button>
        </div>
      </section>
    </div>
  );
};

export default ForJobSeekersPage;