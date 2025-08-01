import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const JobsPage = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: '青少年の生活支援相談員',
      type: '正職員',
      location: 'スイッチ（太宰府市通古賀3-13-6 2F）',
      salary: '月給 200,000円以上',
      annualSalary: '年収 300万円〜350万円',
      description: '15〜20歳の青少年が暮らす自立援助ホームで、彼らの日常生活をサポートし、自立に向けた支援を行います。宿題を一緒にしたり、料理を作ったり、仕事探しを手伝うなど、生活全般のサポートが主な仕事です。',
      features: ['未経験OK', '完全週休2日制', '残業なし', '賞与年2回'],
      image: '/自立援助ホーム スイッチ.jpg',
      requirements: [
        '以下のいずれかの資格をお持ちの方',
        '・社会福祉士、精神保健福祉士',
        '・保育士、幼稚園教諭',
        '・小学校・中学校・高等学校教員免許',
        'または社会福祉施設で2年以上の実務経験がある方',
        '普通自動車運転免許（AT限定可）をお持ちの方優遇'
      ],
      benefits: [
        '基本給 200,000円以上',
        '処遇改善手当 20,000円/月',
        '資格手当 5,000円/月（社会福祉士等の資格保有者）',
        '家族手当（配偶者9,000円、18歳未満の子11,500円）',
        '住宅手当 最大27,000円',
        '交通費全額支給',
        '賞与年2回',
        '各種社会保険完備',
        '退職金制度あり'
      ],
      workStyle: [
        '勤務時間: 7:30〜22:00の間でシフト制（実働8時間）',
        '早出: 7:30〜16:30',
        '日勤: 9:00〜18:00',
        '遅出: 13:00〜22:00',
        '宿直あり（シフトによる）',
        '休日: 完全週休2日制',
        '残業: なし',
        '車通勤可（無料駐車場あり）'
      ]
    },
    {
      id: 2,
      title: '青少年の生活支援相談員',
      type: '正職員',
      location: 'TIES（福岡市南区若久4丁目33番1）',
      salary: '月給 200,000円以上',
      annualSalary: '年収 300万円〜350万円',
      description: '2025年開設予定の新しい自立援助ホーム「TIES」での勤務です。15〜20歳の青少年の生活支援を通じて、彼らの自立をサポートします。新しい施設で一緒にホームを作り上げていく仲間を募集しています。',
      features: ['新規開設', '未経験OK', '完全週休2日制', '残業なし'],
      image: 'https://res.cloudinary.com/dg3mdcuju/image/upload/v1753833761/IMG_2693_xt2vc1.jpg',
      requirements: [
        '以下のいずれかの資格をお持ちの方',
        '・社会福祉士、精神保健福祉士',
        '・保育士、幼稚園教諭',
        '・小学校・中学校・高等学校教員免許',
        'または社会福祉施設で2年以上の実務経験がある方',
        '※試用期間2ヶ月（日給8,500円、契約社員）'
      ],
      benefits: [
        '基本給 200,000円以上',
        '処遇改善手当 20,000円/月',
        '資格手当 5,000円/月（社会福祉士等の資格保有者）',
        '家族手当（配偶者9,000円、18歳未満の子11,500円）',
        '住宅手当 最大27,000円',
        '交通費全額支給',
        '賞与年2回',
        '各種社会保険完備',
        '退職金制度あり'
      ],
      workStyle: [
        '勤務時間: 7:30〜22:00の間でシフト制（実働8時間）',
        '早出: 7:30〜16:30',
        '日勤: 9:00〜18:00',
        '遅出: 13:00〜22:00',
        '宿直あり（シフトによる）',
        '休日: 完全週休2日制',
        '残業: なし',
        '車通勤可'
      ]
    }
  ];

  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    motivation: '',
    file: null
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setApplicationData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('応募ありがとうございます。担当者より後日ご連絡いたします。');
  };

  return (
    <div className="jobs-page">
      {/* ページヘッダー */}
      <section className="page-header job-hero">
        <div className="container">
          <h1>私たちと一緒に<br />青少年の未来を支えませんか</h1>
          <p>「子どもたちが自ら将来の夢や希望をもてるように」<br />何らかの事情で、家庭や学校での居場所をなくした青少年（15～20歳）に<br />安心して生活できる場を提供し、自立を支援するお仕事です。</p>
          <div className="job-highlights">
            <div className="highlight-item">
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '0.5rem'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.5 16.5c0 0.8 0.7 1.5 1.5 1.5s1.5-0.7 1.5-1.5-0.7-1.5-1.5-1.5-1.5 0.7-1.5 1.5zM6.5 9c0.8 0 1.5-0.7 1.5-1.5S7.3 6 6.5 6 5 6.7 5 7.5 5.7 9 6.5 9zM17 7.5c0-0.8-0.7-1.5-1.5-1.5S14 6.7 14 7.5s0.7 1.5 1.5 1.5S17 8.3 17 7.5zM12 1l3.09 6.26L22 8.27l-5 4.87 1.18 6.88L12 17.77l-6.18 2.25L7 13.14 2 8.27l6.91-1.01L12 1z" fill="white"/>
                </svg>
              </div>
              <span>未経験歓迎</span>
            </div>
            <div className="highlight-item">
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '0.5rem'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm0 13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v11.5z" fill="white"/>
                </svg>
              </div>
              <span>研修制度充実</span>
            </div>
            <div className="highlight-item">
              <div style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'linear-gradient(135deg, var(--primary-color), var(--accent-color))', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '0.5rem'
              }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white"/>
                </svg>
              </div>
              <span>やりがいのある仕事</span>
            </div>
          </div>
        </div>
      </section>

      {/* 私たちの仕事について */}
      <section style={{ 
        background: 'linear-gradient(135deg, #FFF9F5 0%, #F8F6F3 100%)', 
        padding: '60px 0' 
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* 哲学セクション */}
            <div style={{ 
              background: 'white', 
              padding: '3rem', 
              borderRadius: '16px', 
              marginBottom: '2rem',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
              borderLeft: '6px solid var(--accent-color)',
              textAlign: 'center'
            }}>
              <h2 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                color: 'var(--primary-color)', 
                marginBottom: '2rem'
              }}>
                マニュアルのない「見守る」お仕事
              </h2>
              <p style={{ 
                fontSize: '1.1rem', 
                lineHeight: '1.8', 
                color: '#555', 
                margin: '0 0 2rem 0'
              }}>
                私たちの仕事に、完璧なマニュアルはありません。15歳から20歳、思春期真っ只中。素直じゃない日もあります。
                でも、大切なのは彼らの「やりたい」が生まれる瞬間を待つこと。時に悩み、時に一緒に考えながら、
                料理の作り方、お金の使い方、人との関わり方を、少しずつ伝えていきます。
              </p>
              <div style={{ textAlign: 'center' }}>
                <p style={{ 
                  fontSize: '1rem', 
                  color: 'var(--primary-color)', 
                  margin: '0 0 1.5rem 0',
                  fontWeight: '600'
                }}>
                  ＼5人の青少年と、8人のスタッフの日常／
                </p>
                <Link 
                  to="/story" 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '1.2rem 2rem',
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '12px',
                    fontWeight: '700',
                    fontSize: '1rem',
                    boxShadow: '0 6px 20px rgba(230, 126, 80, 0.3)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(230, 126, 80, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(230, 126, 80, 0.3)';
                  }}
                >
                  <span style={{ fontSize: '1.2rem' }}>📖</span>
                  ある日の出来事を詳しく見る
                </Link>
              </div>
            </div>

            {/* まとめ */}
            <div style={{ 
              background: 'rgba(230, 126, 80, 0.1)', 
              padding: '2rem', 
              borderRadius: '12px',
              textAlign: 'center',
              border: '1px solid rgba(230, 126, 80, 0.2)'
            }}>
              <p style={{ 
                fontSize: '1rem', 
                color: 'var(--primary-color)', 
                margin: '0',
                fontWeight: '600',
                lineHeight: '1.6'
              }}>
                各ホーム4人の常勤職員と4人の宿直専門スタッフが<br />
                24時間365日、青少年たちの生活を支えています。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 募集職種 */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">求人情報</h2>
          <div className="jobs-list">
            {jobs.map((job) => (
              <div key={job.id} className="job-card-enhanced">
                <div className="job-card-image">
                  {job.image && <img src={job.image} alt={`${job.title}勤務地の外観`} />}
                  <div className="job-features">
                    {job.features.map((feature, index) => (
                      <span key={index} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
                
                <div className="job-content">
                  <div className="job-header">
                    <h3>{job.title}</h3>
                    <div className="job-salary">{job.salary}</div>
                  </div>
                  
                  {job.annualSalary && (
                    <div className="job-annual-salary" style={{ color: '#666', marginBottom: '0.5rem' }}>
                      {job.annualSalary}
                    </div>
                  )}
                  
                  <div className="job-location">
                    <span className="location-icon" style={{ display: 'inline-block', width: '16px', height: '16px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\' /%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M15 11a3 3 0 11-6 0 3 3 0 016 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\' /%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M15 11a3 3 0 11-6 0 3 3 0 016 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                    {job.location}
                  </div>
                  
                  <p className="job-description">{job.description}</p>
                  
                  <div className="job-actions">
                    <button 
                      className="btn btn-outline"
                      onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
                    >
                      {selectedJob === job.id ? '詳細を閉じる' : '詳細を見る'}
                    </button>
                    <button className="btn btn-primary">応募する</button>
                  </div>
                  
                  {selectedJob === job.id && (
                    <div className="job-details-expanded">
                      <div className="job-detail-grid">
                        <div className="job-detail-section">
                          <h4><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '8px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>応募要件</h4>
                          <ul>
                            {job.requirements.map((req, index) => (
                              <li key={index}>{req}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="job-detail-section">
                          <h4><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '8px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>待遇・福利厚生</h4>
                          <ul>
                            {job.benefits.map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="job-detail-section">
                          <h4><span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '8px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>働き方</h4>
                          <ul>
                            {job.workStyle.map((style, index) => (
                              <li key={index}>{style}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="job-apply-link" style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <a 
                          href="https://en-gage.net/nifty_saiyo428/" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn"
                          style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}
                        >
                          詳細を見る・応募する（外部サイト）
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>

      {/* 私たちが大切にしていること */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">私たちが大切にしていること</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h4>子どもたちと同じ目線に立つ</h4>
              <p>「施設」ではなく「ホーム」と呼び、温かい家庭的な環境で支援を行っています。</p>
            </div>
            <div className="feature-card">
              <h4>「やりたい」を尊重</h4>
              <p>子どもたちの「やりたい」という気持ちを大切にし、自主性を育む支援を心がけています。</p>
            </div>
            <div className="feature-card">
              <h4>卒業後も継続的な支援</h4>
              <p>ホームを出た後も継続的にサポートし、社会での自立を長期的に支えています。</p>
            </div>
            <div className="feature-card">
              <h4>チームで支える</h4>
              <p>職員同士の連携を大切にし、チーム全体で青少年を支える体制を整えています。</p>
            </div>
          </div>
        </div>
      </section>

      {/* スタッフの声 */}
      <section className="section" style={{ background: 'linear-gradient(135deg, #f0f8ff 0%, #e8f4f8 100%)', padding: '4rem 0' }}>
        <div className="container">
          <h2 className="section-title">スタッフの声</h2>
          <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#666', marginBottom: '3rem' }}>
            実際に働くスタッフの生の声をお聞きください
          </p>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '2rem',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {(() => {
              const staffVoices = [
                {
                  initial: 'A.S',
                  career: '社会福祉士・3年目',
                  voice: '成長を見守れる、やりがいのある職場です',
                  color: '#4f46e5'
                },
                {
                  initial: 'M.T',
                  career: '保育士・1年目',
                  voice: '温かい雰囲気で、安心して働ける職場です',
                  color: '#059669'
                },
                {
                  initial: 'K.Y',
                  career: '精神保健福祉士・5年目',
                  voice: '一人ひとりに寄り添える、深いやりがいがある仕事です',
                  color: '#dc2626'
                },
                {
                  initial: 'H.N',
                  career: '教員免許・2年目',
                  voice: 'チームワークが良く、学び合える職場です',
                  color: '#7c3aed'
                },
                {
                  initial: 'R.I',
                  career: '社会福祉士・4年目',
                  voice: '未経験でも丁寧に教えてもらえる、成長できる職場です',
                  color: '#ea580c'
                },
                {
                  initial: 'Y.K',
                  career: '宿直専門・6年目',
                  voice: '夜勤も安心、サポート体制が整った職場です',
                  color: '#0891b2'
                },
                {
                  initial: 'S.M',
                  career: '保育士・3年目',
                  voice: '子どもたちの笑顔が何よりの励みになる仕事です',
                  color: '#be185d'
                },
                {
                  initial: 'T.F',
                  career: '社会福祉士・7年目',
                  voice: '長く続けられる、働きやすい職場です',
                  color: '#166534'
                }
              ];
              
              return staffVoices.map((staff, index) => (
                <div 
                  key={index}
                  className="staff-voice-item"
                  style={{
                    position: 'relative',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.querySelector('.voice-bubble').style.opacity = '1';
                    e.currentTarget.querySelector('.voice-bubble').style.transform = 'translateY(-10px) scale(1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.querySelector('.voice-bubble').style.opacity = '0';
                    e.currentTarget.querySelector('.voice-bubble').style.transform = 'translateY(0) scale(0.8)';
                  }}
                >
                  {/* 吹き出し */}
                  <div 
                    className="voice-bubble"
                    style={{
                      position: 'absolute',
                      bottom: '100%',
                      left: '50%',
                      transform: 'translateX(-50%) translateY(0) scale(0.8)',
                      background: 'white',
                      padding: '1rem',
                      borderRadius: '12px',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                      minWidth: '200px',
                      maxWidth: '250px',
                      marginBottom: '15px',
                      opacity: '0',
                      transition: 'all 0.3s ease',
                      zIndex: '10',
                      border: `2px solid ${staff.color}`
                    }}
                  >
                    <p style={{ 
                      margin: '0', 
                      fontSize: '0.9rem', 
                      fontWeight: '600',
                      color: '#333',
                      lineHeight: '1.4'
                    }}>
                      「{staff.voice}」
                    </p>
                    {/* 吹き出しの矢印 */}
                    <div style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '0',
                      height: '0',
                      borderLeft: '8px solid transparent',
                      borderRight: '8px solid transparent',
                      borderTop: `8px solid ${staff.color}`
                    }}></div>
                  </div>
                  
                  {/* スタッフアイコン */}
                  <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: staff.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1rem',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                    border: '3px solid white'
                  }}>
                    {staff.initial}
                  </div>
                  
                  {/* 経歴 */}
                  <p style={{
                    margin: '0',
                    fontSize: '0.85rem',
                    color: '#666',
                    fontWeight: '500'
                  }}>
                    {staff.career}
                  </p>
                </div>
              ));
            })()}
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ 
              fontSize: '0.9rem', 
              color: '#888',
              fontStyle: 'italic'
            }}>
              ※アイコンにマウスを合わせると、スタッフの声が表示されます
            </p>
          </div>
        </div>
      </section>

      {/* 職場紹介 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">働きがいのある職場</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">
                <span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              </div>
              <h3>やりがいのある仕事</h3>
              <p>青少年の成長を間近で見守り、自立への道のりをサポートする、とてもやりがいのある仕事です。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              </div>
              <h3>成長できる環境</h3>
              <p>充実した研修制度とサポート体制で、専門性を高めながら成長することができます。</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <span style={{ display: 'inline-block', width: '24px', height: '24px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              </div>
              <h3>チームワーク</h3>
              <p>職員同士の連携を大切にし、みんなで支え合いながら働ける環境です。</p>
            </div>
          </div>

          {/* 仕事のポイント */}
          <div className="job-points" style={{ marginTop: '4rem' }}>
            <h3 style={{ color: 'var(--primary-color)', marginBottom: '2rem', fontSize: '1.4rem', textAlign: 'center' }}>
              ＜仕事のポイント＞
            </h3>
            <div className="point-cards" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
              <div className="point-card" style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', border: '2px solid var(--primary-color)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-block', width: '32px', height: '32px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                </div>
                <p style={{ lineHeight: '1.7' }}>
                  子どもたちと深く関わる仕事です！子どもたちには無限の可能性があるので、
                  成長を間近で見ることができます。
                </p>
              </div>
              <div className="point-card" style={{ background: 'var(--white)', padding: '2rem', borderRadius: '12px', border: '2px solid var(--primary-color)' }}>
                <div style={{ fontSize: '2rem', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <span style={{ display: 'inline-block', width: '32px', height: '32px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                </div>
                <p style={{ lineHeight: '1.7' }}>
                  資格を取得するために、働きながら通信制大学に通う職員もいます。
                  その場合は、シフトを調整するなどサポートを行ないます。
                  また、残業は、ほとんどありませんので、プライベートも充実させることができます。
                </p>
              </div>
            </div>

            <div className="onboarding-flow" style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: '12px' }}>
              <h3 style={{ color: 'var(--primary-color)', marginBottom: '1.5rem', fontSize: '1.4rem' }}>
                ＜入社後の流れ＞
              </h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
                入社後は、実務に携わりながら仕事を覚えていきましょう。
                分からないことがあれば、周りの先輩に相談できる環境があるので、
                未経験の方もご安心くださいね。
              </p>
            </div>
          </div>
        </div>
      </section>
      

      {/* 研修制度 */}
      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">研修制度</h2>
          <div className="grid grid-2">
            <div className="card">
              <h3>新人研修</h3>
              <ul>
                <li>法人理念・支援方針の理解</li>
                <li>自立援助ホームの基礎知識</li>
                <li>支援技術の習得</li>
                <li>実践指導（OJT）</li>
                <li>定期的な振り返り面談</li>
              </ul>
            </div>
            <div className="card">
              <h3>継続研修</h3>
              <ul>
                <li>専門研修への参加支援</li>
                <li>外部研修・学会参加</li>
                <li>資格取得支援</li>
                <li>ケース検討会</li>
                <li>スーパービジョン</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 応募フォーム */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">応募フォーム</h2>
          <div className="card">
            <form onSubmit={handleSubmit}>
              <div className="grid grid-2">
                <div className="form-group">
                  <label htmlFor="name">お名前 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={applicationData.name}
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
                    value={applicationData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-2">
                <div className="form-group">
                  <label htmlFor="phone">電話番号 *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={applicationData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="position">希望職種 *</label>
                  <select
                    id="position"
                    name="position"
                    value={applicationData.position}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">選択してください</option>
                    <option value="青少年の生活支援相談員（スイッチ）">青少年の生活支援相談員（スイッチ）</option>
                    <option value="青少年の生活支援相談員（TIES）">青少年の生活支援相談員（TIES）</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="experience">関連経験・資格</label>
                <textarea
                  id="experience"
                  name="experience"
                  value={applicationData.experience}
                  onChange={handleInputChange}
                  placeholder="関連する職歴や保有資格についてお書きください"
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="motivation">志望動機 *</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={applicationData.motivation}
                  onChange={handleInputChange}
                  placeholder="当法人を志望する理由をお書きください"
                  required
                ></textarea>
              </div>

              <div className="form-group">
                <label htmlFor="file">履歴書・職務経歴書</label>
                <input
                  type="file"
                  id="file"
                  name="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                />
                <small>PDF、Word形式でお送りください（任意）</small>
              </div>

              <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                <button type="submit" className="btn">応募する</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobsPage;