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
      {/* ヒーローセクション */}
      <section style={{
        background: 'linear-gradient(135deg, #E67E50 0%, #F4A460 50%, #FFDAB9 100%)',
        color: 'white',
        padding: '120px 0',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.1)',
          zIndex: 1
        }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}><span style={{ display: 'inline-block', width: '64px', height: '64px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
            <h1 style={{ 
              fontSize: '3.5rem', 
              fontWeight: '700', 
              marginBottom: '2rem',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              lineHeight: '1.2'
            }}>
              あなたの想いが<br />青少年の未来を変える
            </h1>
            <p style={{ 
              fontSize: '1.3rem', 
              marginBottom: '3rem',
              opacity: '0.95',
              lineHeight: '1.7',
              fontWeight: '400'
            }}>
              家庭で暮らせない青少年が、希望を持って自立できるよう<br />
              あなたの温かいご支援をお待ちしています
            </p>
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <a href="#donation-form" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1.2rem 2.5rem',
                background: 'white',
                color: 'var(--primary-color)',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '700',
                fontSize: '1.1rem',
                boxShadow: '0 8px 25px rgba(0,0,0,0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}>
                <span style={{ display: 'inline-block', width: '24px', height: '24px', marginRight: '8px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                今すぐ寄付する
              </a>
              <a href="#usage" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '1.2rem 2.5rem',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                fontSize: '1.1rem',
                border: '2px solid rgba(255,255,255,0.5)',
                backdropFilter: 'blur(10px)',
                transition: 'background 0.3s ease'
              }}>
                <span style={{ fontSize: '1.3rem' }}>📊</span>
                使い道を見る
              </a>
            </div>
          </div>
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
      <section id="usage" style={{ 
        background: 'linear-gradient(135deg, #f8fafb 0%, #e8f2f5 100%)', 
        padding: '100px 0' 
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: 'var(--primary-color)', 
              marginBottom: '1rem' 
            }}>
              寄付金の使途
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              皆様からの大切なご寄付は、青少年の支援に直接活用されています
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem', 
            maxWidth: '1000px', 
            margin: '0 auto' 
          }}>
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              position: 'relative'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}><span style={{ display: 'inline-block', width: '32px', height: '32px', background: 'currentColor', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: 'var(--primary-color)', 
                marginBottom: '0.5rem' 
              }}>55%</div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: 'var(--primary-color)' 
              }}>人件費・支援体制</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                専門職員の配置と研修費用<br />
                24時間体制での支援提供と職員の専門性向上
              </p>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}><span style={{ display: 'inline-block', width: '48px', height: '48px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: '#22c55e', 
                marginBottom: '0.5rem' 
              }}>15%</div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: '#22c55e' 
              }}>施設運営・管理費</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                施設維持費、光熱費、法人運営費<br />
                安心安全な環境維持と透明性の高い運営
              </p>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}><span style={{ display: 'inline-block', width: '48px', height: '48px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span></div>
              <div style={{ 
                fontSize: '3rem', 
                fontWeight: '700', 
                color: '#d97706', 
                marginBottom: '0.5rem' 
              }}>30%</div>
              <h4 style={{ 
                fontSize: '1.3rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: '#d97706' 
              }}>青少年支援費</h4>
              <p style={{ color: '#666', lineHeight: '1.6' }}>
                生活用品、教育費、就労支援費<br />
                一人ひとりの自立に向けた直接支援
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 寄付フォーム */}
      <section id="donation-form" style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: 'var(--primary-color)', 
              marginBottom: '1rem' 
            }}>
              寄付のお申し込み
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              あなたの温かいご支援が、青少年の未来を支えます
            </p>
          </div>
          
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto', 
            background: 'white', 
            padding: '3rem', 
            borderRadius: '20px', 
            boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
            border: '1px solid #f0f0f0'
          }}>
            <form onSubmit={handleSubmit}>
              {/* 寄付タイプ選択 */}
              <div style={{ marginBottom: '3rem' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  color: 'var(--primary-color)', 
                  marginBottom: '1.5rem' 
                }}>
                  寄付タイプ
                </label>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.8rem',
                    padding: '1.2rem 2rem',
                    background: donationType === 'single' ? 'var(--primary-color)' : '#f8f9fa',
                    color: donationType === 'single' ? 'white' : '#333',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: donationType === 'single' ? '2px solid var(--primary-color)' : '2px solid #e9ecef',
                    flex: '1',
                    minWidth: '200px',
                    justifyContent: 'center',
                    fontWeight: '600'
                  }}>
                    <input
                      type="radio"
                      name="donationType"
                      value="single"
                      checked={donationType === 'single'}
                      onChange={(e) => setDonationType(e.target.value)}
                      style={{ margin: 0 }}
                    />
                    <span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '8px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                    単発寄付
                  </label>
                  <label style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.8rem',
                    padding: '1.2rem 2rem',
                    background: donationType === 'monthly' ? 'var(--primary-color)' : '#f8f9fa',
                    color: donationType === 'monthly' ? 'white' : '#333',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: donationType === 'monthly' ? '2px solid var(--primary-color)' : '2px solid #e9ecef',
                    flex: '1',
                    minWidth: '200px',
                    justifyContent: 'center',
                    fontWeight: '600'
                  }}>
                    <input
                      type="radio"
                      name="donationType"
                      value="monthly"
                      checked={donationType === 'monthly'}
                      onChange={(e) => setDonationType(e.target.value)}
                      style={{ margin: 0 }}
                    />
                    <span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '8px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
                    継続寄付（月額）
                  </label>
                </div>
              </div>

              {/* 金額選択 */}
              <div style={{ marginBottom: '3rem' }}>
                <label style={{ 
                  display: 'block', 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  color: 'var(--primary-color)', 
                  marginBottom: '1.5rem' 
                }}>
                  寄付金額
                </label>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
                  gap: '1rem', 
                  marginBottom: '1.5rem' 
                }}>
                  {presetAmounts.map((presetAmount) => (
                    <div
                      key={presetAmount}
                      style={{
                        padding: '1.5rem 1rem',
                        background: amount === presetAmount ? 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)' : 'white',
                        color: amount === presetAmount ? 'white' : 'var(--primary-color)',
                        border: amount === presetAmount ? '2px solid var(--primary-color)' : '2px solid #e9ecef',
                        borderRadius: '12px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontWeight: '700',
                        fontSize: '1.1rem',
                        boxShadow: amount === presetAmount ? '0 4px 15px rgba(230, 126, 80, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
                      }}
                      onClick={() => setAmount(presetAmount)}
                    >
                      ¥{presetAmount.toLocaleString()}
                    </div>
                  ))}
                  <div
                    style={{
                      padding: '1.5rem 1rem',
                      background: amount === 'custom' ? 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)' : 'white',
                      color: amount === 'custom' ? 'white' : 'var(--primary-color)',
                      border: amount === 'custom' ? '2px solid var(--primary-color)' : '2px solid #e9ecef',
                      borderRadius: '12px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontWeight: '700',
                      fontSize: '1.1rem',
                      boxShadow: amount === 'custom' ? '0 4px 15px rgba(230, 126, 80, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)'
                    }}
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
                    style={{ 
                      width: '100%',
                      padding: '1.2rem',
                      border: '2px solid #e9ecef',
                      borderRadius: '12px',
                      fontSize: '1.1rem',
                      fontWeight: '600',
                      textAlign: 'center'
                    }}
                  />
                )}
              </div>

              {/* 寄付者情報 */}
              <div style={{ marginBottom: '3rem' }}>
                <h3 style={{ 
                  fontSize: '1.3rem', 
                  fontWeight: '600', 
                  color: 'var(--primary-color)', 
                  marginBottom: '1.5rem',
                  paddingBottom: '0.5rem',
                  borderBottom: '2px solid #f0f0f0'
                }}>
                  寄付者情報
                </h3>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label htmlFor="name" style={{ 
                      display: 'block', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#333', 
                      marginBottom: '0.5rem' 
                    }}>
                      お名前 <span style={{ color: '#e74c3c' }}>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={donorInfo.name}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" style={{ 
                      display: 'block', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#333', 
                      marginBottom: '0.5rem' 
                    }}>
                      メールアドレス <span style={{ color: '#e74c3c' }}>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={donorInfo.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                  <div>
                    <label htmlFor="phone" style={{ 
                      display: 'block', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#333', 
                      marginBottom: '0.5rem' 
                    }}>
                      電話番号
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={donorInfo.phone}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div>
                    <label htmlFor="address" style={{ 
                      display: 'block', 
                      fontSize: '1rem', 
                      fontWeight: '600', 
                      color: '#333', 
                      marginBottom: '0.5rem' 
                    }}>
                      住所（領収書送付先）
                    </label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={donorInfo.address}
                      onChange={handleInputChange}
                      style={{
                        width: '100%',
                        padding: '1rem',
                        border: '2px solid #e9ecef',
                        borderRadius: '8px',
                        fontSize: '1rem',
                        transition: 'border-color 0.3s ease',
                        outline: 'none'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" style={{ 
                    display: 'block', 
                    fontSize: '1rem', 
                    fontWeight: '600', 
                    color: '#333', 
                    marginBottom: '0.5rem' 
                  }}>
                    応援メッセージ（任意）
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={donorInfo.message}
                    onChange={handleInputChange}
                    placeholder="青少年への応援メッセージをお聞かせください"
                    style={{
                      width: '100%',
                      padding: '1rem',
                      border: '2px solid #e9ecef',
                      borderRadius: '8px',
                      fontSize: '1rem',
                      transition: 'border-color 0.3s ease',
                      outline: 'none',
                      minHeight: '120px',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>

              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button 
                  type="submit" 
                  style={{
                    padding: '1.5rem 3rem',
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '50px',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    boxShadow: '0 8px 25px rgba(230, 126, 80, 0.3)',
                    minWidth: '200px'
                  }}
                >
                  <span style={{ display: 'inline-block', width: '20px', height: '20px', marginRight: '8px', background: 'white', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>寄付を申し込む
                </button>
                <p style={{ 
                  marginTop: '1rem', 
                  fontSize: '0.9rem', 
                  color: '#666',
                  textAlign: 'center'
                }}>
                  ※ 送信後、担当者よりご連絡いたします
                </p>
              </div>
            </form>
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
      <section style={{ 
        background: 'linear-gradient(135deg, #f8fafb 0%, #e8f2f5 100%)', 
        padding: '100px 0' 
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              fontWeight: '700', 
              color: 'var(--primary-color)', 
              marginBottom: '1rem' 
            }}>
              その他の支援方法
            </h2>
            <p style={{ 
              fontSize: '1.2rem', 
              color: '#666', 
              maxWidth: '600px', 
              margin: '0 auto' 
            }}>
              寄付以外にも、様々な形で青少年の支援にご参加いただけます
            </p>
          </div>
          
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
            gap: '2rem', 
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}>
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2.5rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}>🙋‍♀️</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: 'var(--primary-color)' 
              }}>ボランティア</h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.7', 
                marginBottom: '1.5rem' 
              }}>
                イベントのお手伝いや専門スキルを活かしたボランティア活動にご参加いただけます。
              </p>
              <div style={{ 
                padding: '1rem', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                fontSize: '0.9rem', 
                color: '#666' 
              }}>
                <strong>例：</strong> イベント運営、学習支援、専門技術指導
              </div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2.5rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}>📦</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: 'var(--primary-color)' 
              }}>現物寄付</h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.7', 
                marginBottom: '1.5rem' 
              }}>
                生活用品や学習用品など、青少年の生活に必要な物品のご寄付もお受けしています。
              </p>
              <div style={{ 
                padding: '1rem', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                fontSize: '0.9rem', 
                color: '#666' 
              }}>
                <strong>例：</strong> 文房具、衣類、家電製品、図書
              </div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '2.5rem', 
              borderRadius: '16px', 
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              border: '1px solid #f0f0f0',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <div style={{ 
                width: '80px', 
                height: '80px', 
                background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '2.5rem', 
                margin: '0 auto 1.5rem',
                color: 'white'
              }}>🏢</div>
              <h3 style={{ 
                fontSize: '1.5rem', 
                fontWeight: '700', 
                marginBottom: '1rem', 
                color: 'var(--primary-color)' 
              }}>企業連携</h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.7', 
                marginBottom: '1.5rem' 
              }}>
                就労支援や職業体験の機会提供など、企業の皆様との連携も大歓迎です。
              </p>
              <div style={{ 
                padding: '1rem', 
                background: '#f8f9fa', 
                borderRadius: '8px', 
                fontSize: '0.9rem', 
                color: '#666' 
              }}>
                <strong>例：</strong> インターンシップ、職場体験、研修機会提供
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <p style={{ 
              fontSize: '1.1rem', 
              color: '#666', 
              marginBottom: '2rem' 
            }}>
              詳しくはお気軽にお問い合わせください
            </p>
            <a href="/contact" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.8rem',
              padding: '1.2rem 2.5rem',
              background: 'white',
              color: 'var(--primary-color)',
              textDecoration: 'none',
              borderRadius: '50px',
              fontWeight: '700',
              fontSize: '1.1rem',
              border: '2px solid var(--primary-color)',
              boxShadow: '0 6px 20px rgba(230, 126, 80, 0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}>
              <span style={{ display: 'inline-block', width: '24px', height: '24px', marginRight: '8px', background: 'var(--primary-color)', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>
              お問い合わせ
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;