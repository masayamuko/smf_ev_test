import React from 'react';
import { Link } from 'react-router-dom';

const StoryPage = () => {
  const stories = [
    {
      id: 1,
      icon: '📚',
      time: '夕方5時',
      title: '「宿題、ちょっと見てくれる？」',
      character: '17歳のAくん',
      story: '17歳のAくん、めずらしく自分から声をかけてきました。「この問題、マジでわからん...」イライラしながらプリントを見せてきます。一緒にテーブルに向かい、ゆっくりと解き方を確認。30分後、「あ、わかった」小さくつぶやく声が聞こえました。',
      lesson: '勉強が苦手な子でも、適切なサポートがあれば理解できる瞬間があります。大切なのは諦めずに寄り添うこと。',
      category: '学習支援'
    },
    {
      id: 2,
      icon: '🍛',
      time: '週末の午後',
      title: '「カレー作るから、手伝って」',
      character: '19歳のBくん',
      story: '19歳のBくん、最近料理にハマっています。一緒にスーパーへ。「この肉高くない？」「でも美味しそうだし...」予算と相談しながら買い物するのも、大切な学びの時間。失敗して焦げちゃったけど、「次はもっとうまく作る」と言ってました。',
      lesson: '料理を通じて、金銭管理や計画性、失敗から学ぶ力を育みます。楽しみながら生活スキルを身につけられます。',
      category: '生活支援'
    },
    {
      id: 3,
      icon: '🌙',
      time: '深夜2時',
      title: '「眠れないんだけど...」',
      character: '18歳のCくん',
      story: '18歳のCくん、また昼夜逆転してしまいました。「朝起きるの無理...でもバイト行かなきゃ」葛藤している様子。一緒にお茶を飲みながら、少しずつ生活リズムを戻す計画を立てます。完璧じゃなくていい。一歩ずつ、彼のペースで。',
      lesson: '生活リズムの改善は時間がかかります。焦らず、本人のペースに合わせた支援が重要です。',
      category: '生活リズム支援'
    },
    {
      id: 4,
      icon: '💼',
      time: '月曜日の夜',
      title: '「バイト、もう辞めたい...」',
      character: '19歳のDくん',
      story: '19歳のDくん、コンビニバイトから帰ってきて、ため息。「店長がめっちゃ怒るんよ...俺、向いてないのかな」話を聞くと、レジ打ちのミスで怒られたとのこと。「でも先月より早くなってるよね」と伝えると、「そうかな...」と少し表情が和らぎました。',
      lesson: '働く中での挫折や困難は成長の機会。小さな進歩を認めて励ますことで、自信を育てます。',
      category: '就労支援'
    }
  ];

  return (
    <div className="story-page">
      {/* ページヘッダー */}
      <section className="page-header">
        <div className="container">
          <h1>ある日の、私たちのストーリー</h1>
          <p>＼5人の青少年と、8人のスタッフの日常／<br />
          自立援助ホームでの具体的な支援場面をご紹介します</p>
        </div>
      </section>

      {/* ストーリー詳細 */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {/* 導入文 */}
            <div style={{ 
              background: 'linear-gradient(135deg, #FFF9F5 0%, #F8F6F3 100%)',
              padding: '3rem',
              borderRadius: '16px',
              marginBottom: '4rem',
              textAlign: 'center'
            }}>
              <h2 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                color: 'var(--primary-color)',
                marginBottom: '1.5rem'
              }}>
                日常の中にある、小さな成長の瞬間
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.8',
                color: '#555',
                margin: '0'
              }}>
                朝7時。「おはよう」の声もあれば、気だるそうに起きてくる子も。15歳から20歳まで、各ホームに平均5人の青少年たちが暮らしています。
                学校へ急ぐ子、深夜逆転を少しずつ直そうとしている子、バイトの準備をする子。4人の常勤職員と4人の宿直専門スタッフが、それぞれのペースを見守ります。
              </p>
            </div>

            {/* ストーリーグリッド */}
            <div className="stories-grid" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))',
              gap: '2.5rem',
              marginBottom: '4rem'
            }}>
              {stories.map((story) => (
                <div key={story.id} className="story-card-detailed" style={{
                  background: 'white',
                  borderRadius: '16px',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                  overflow: 'hidden',
                  border: '1px solid #f0f0f0',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}>
                  {/* カードヘッダー */}
                  <div style={{
                    background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
                    padding: '2rem',
                    textAlign: 'center',
                    color: 'white'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{story.icon}</div>
                    <div style={{
                      fontSize: '0.9rem',
                      opacity: '0.9',
                      marginBottom: '0.5rem',
                      fontWeight: '600'
                    }}>{story.time}</div>
                    <h3 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      margin: '0',
                      lineHeight: '1.4'
                    }}>{story.title}</h3>
                  </div>

                  {/* カードコンテンツ */}
                  <div style={{ padding: '2rem' }}>
                    <div style={{
                      background: '#f8f9fa',
                      padding: '1rem 1.5rem',
                      borderRadius: '8px',
                      marginBottom: '1.5rem',
                      borderLeft: '4px solid var(--accent-color)'
                    }}>
                      <strong style={{
                        color: 'var(--primary-color)',
                        fontSize: '1rem'
                      }}>{story.character}</strong>
                    </div>

                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: '#444',
                      marginBottom: '2rem'
                    }}>{story.story}</p>

                    <div style={{
                      background: 'rgba(230, 126, 80, 0.1)',
                      padding: '1.5rem',
                      borderRadius: '12px',
                      border: '1px solid rgba(230, 126, 80, 0.2)'
                    }}>
                      <h4 style={{
                        fontSize: '0.9rem',
                        fontWeight: '700',
                        color: 'var(--primary-color)',
                        marginBottom: '0.8rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span>💡</span> 支援のポイント
                      </h4>
                      <p style={{
                        fontSize: '0.9rem',
                        lineHeight: '1.6',
                        color: '#555',
                        margin: '0'
                      }}>{story.lesson}</p>
                    </div>

                    <div style={{
                      marginTop: '1.5rem',
                      textAlign: 'center'
                    }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '0.5rem 1rem',
                        background: 'var(--primary-color)',
                        color: 'white',
                        borderRadius: '20px',
                        fontSize: '0.8rem',
                        fontWeight: '600'
                      }}>{story.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 職員からのメッセージ */}
            <div style={{
              background: 'white',
              padding: '3rem',
              borderRadius: '16px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
              border: '1px solid #f0f0f0',
              textAlign: 'center',
              marginBottom: '4rem'
            }}>
              <h3 style={{
                fontSize: '1.6rem',
                fontWeight: '700',
                color: 'var(--primary-color)',
                marginBottom: '2rem'
              }}>職員からのメッセージ</h3>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginBottom: '2rem'
              }}>
                <div style={{
                  padding: '2rem',
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>👥</div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: 'var(--primary-color)',
                    marginBottom: '1rem'
                  }}>深い関わりの仕事</h4>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    color: '#555',
                    margin: '0'
                  }}>
                    子どもたちと深く関わる仕事です！子どもたちには無限の可能性があるので、
                    成長を間近で見ることができます。
                  </p>
                </div>
                
                <div style={{
                  padding: '2rem',
                  background: '#f8f9fa',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef'
                }}>
                  <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📚</div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: 'var(--primary-color)',
                    marginBottom: '1rem'
                  }}>成長をサポート</h4>
                  <p style={{
                    fontSize: '0.95rem',
                    lineHeight: '1.7',
                    color: '#555',
                    margin: '0'
                  }}>
                    資格を取得するために、働きながら通信制大学に通う職員もいます。
                    その場合は、シフトを調整するなどサポートを行ないます。
                    また、残業は、ほとんどありませんので、プライベートも充実させることができます。
                  </p>
                </div>
              </div>
              
              <div style={{
                background: 'rgba(230, 126, 80, 0.1)',
                padding: '2rem',
                borderRadius: '12px',
                border: '1px solid rgba(230, 126, 80, 0.2)'
              }}>
                <p style={{
                  fontSize: '1.1rem',
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

            {/* CTA */}
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-color) 0%, var(--accent-color) 100%)',
              padding: '3rem',
              borderRadius: '16px',
              textAlign: 'center',
              color: 'white'
            }}>
              <h3 style={{
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '1.5rem'
              }}>あなたも私たちと一緒に働きませんか？</h3>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                marginBottom: '2rem',
                opacity: '0.9'
              }}>
                青少年の成長を支える、やりがいのある仕事です。<br />
                未経験の方も歓迎いたします。
              </p>
              <Link
                to="/jobs"
                style={{
                  display: 'inline-block',
                  padding: '1.2rem 2.5rem',
                  background: 'white',
                  color: 'var(--primary-color)',
                  textDecoration: 'none',
                  borderRadius: '12px',
                  fontWeight: '700',
                  fontSize: '1.1rem',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                  transition: 'transform 0.3s ease'
                }}
              >
                求人情報を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoryPage;