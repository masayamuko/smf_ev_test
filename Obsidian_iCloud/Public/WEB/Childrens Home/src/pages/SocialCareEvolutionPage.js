import React from 'react';

const SocialCareEvolutionPage = () => {
  return (
    <div className="social-care-evolution-page" style={{ background: '#fafafa', minHeight: '100vh' }}>
      {/* noteスタイルのヘッダー */}
      <section style={{ 
        background: 'white', 
        padding: '4rem 0 3rem', 
        borderBottom: '1px solid #e5e5e5' 
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ 
              background: '#e8f4f8', 
              color: '#2c5f6b', 
              padding: '0.3rem 0.8rem', 
              borderRadius: '15px', 
              fontSize: '0.8rem',
              fontWeight: '600'
            }}>
              社会的養護
            </span>
          </div>
          <h1 style={{ 
            fontSize: '2.2rem', 
            fontWeight: '700', 
            lineHeight: '1.4', 
            marginBottom: '1rem',
            color: '#333'
          }}>
            時代が求める、もう一つの「家庭」のカタチ
          </h1>
          <p style={{ 
            fontSize: '1.1rem', 
            color: '#666', 
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            〜小規模で温かい自立援助ホームの役割〜
          </p>
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '1rem', 
            paddingTop: '1rem',
            borderTop: '1px solid #e5e5e5',
            fontSize: '0.9rem',
            color: '#888'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: '50%', 
                background: 'var(--primary-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                福
              </div>
              <span>特定非営利活動法人 青少年の自立を支える福岡の会</span>
            </div>
            <span>•</span>
            <span>2025年1月30日</span>
          </div>
        </div>
      </section>

      {/* noteスタイルのコンテンツエリア */}
      <section style={{ padding: '3rem 0' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', padding: '0 2rem' }}>
          <article style={{ 
            background: 'white', 
            padding: '3rem', 
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            lineHeight: '1.8',
            fontSize: '1rem',
            color: '#333'
          }}>
            <p style={{ marginBottom: '2rem' }}>
              近年、日本における社会的養護のあり方は、大きな転換期を迎えています。
            </p>
            
            <p style={{ marginBottom: '2rem' }}>
              かつて主流であった大規模な施設での養育から、より家庭に近い環境でのきめ細やかな支援へと、その重心は大きくシフトしています。
            </p>
            
            <p style={{ marginBottom: '3rem' }}>
              これは、子どもたちが愛着形成の安定した環境で育ち、一人ひとりの個性と発達段階に応じた支援を受けることの重要性が、社会全体で認識されてきたためです。
            </p>

            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              marginTop: '3rem',
              color: '#333'
            }}>
              社会的養護の現状と国の方向性
            </h2>
            
            <div style={{ 
              background: '#f8f9fa', 
              padding: '1.5rem', 
              borderRadius: '6px', 
              marginBottom: '2rem',
              borderLeft: '4px solid var(--primary-color)'
            }}>
              <h3 style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: '#333'
              }}>
                新しい社会的養育ビジョン（2017年）
              </h3>
              <p style={{ marginBottom: '1rem' }}>
                • 2029年までに原則として未就学児を施設養護から家庭的養護へ移行
              </p>
              <p style={{ marginBottom: '1rem' }}>
                • 学齢期の子どもたちもグループホームのような小規模環境での養育を推進
              </p>
              <p style={{ marginBottom: '0' }}>
                • 子どもの権利を中心に据えた支援体制の構築
              </p>
            </div>

            <h3 style={{ 
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1rem',
              marginTop: '2.5rem',
              color: '#333'
            }}>
              大規模施設の課題
            </h3>
            
            <p style={{ marginBottom: '1.5rem' }}>
              これまでの大規模施設では、以下のような課題が指摘されてきました：
            </p>
            
            <p style={{ marginBottom: '1rem' }}>
              • 画一的な支援になりがちで、個別のニーズに応えきれない
            </p>
            <p style={{ marginBottom: '1rem' }}>
              • 職員配置基準が十分とは言えず、きめ細やかな対応が困難
            </p>
            <p style={{ marginBottom: '1rem' }}>
              • 集団生活による心理的負担と、個人のプライバシー確保の難しさ
            </p>
            <p style={{ marginBottom: '3rem' }}>
              • 退所後の社会生活への移行時に、孤立感や生活能力の不足が生じやすい
            </p>

            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              marginTop: '3rem',
              color: '#333'
            }}>
              自立援助ホームが果たす「小規模・家庭的」な役割
            </h2>
            
            <div style={{ 
              background: '#FFF9F5', 
              padding: '1.5rem', 
              borderRadius: '6px', 
              marginBottom: '2rem',
              borderLeft: '4px solid var(--accent-color)'
            }}>
              <p style={{ marginBottom: '1.5rem' }}>
                このような国の方向性の中で、私たち自立援助ホームは、まさに<strong>「地域の中で育む、もう一つの家庭」</strong>としての役割を強く認識しています。
              </p>
              <p style={{ marginBottom: '0' }}>
                児童養護施設や里親家庭を退所する子どもたち、あるいは様々な事情で家庭での生活が困難になった15歳から原則20歳までの若者たちにとって、社会へ踏み出す最終段階を支える重要な居場所です。
              </p>
            </div>

            <h3 style={{ 
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1.5rem',
              marginTop: '2.5rem',
              color: '#333'
            }}>
              小規模な環境だからこそできること
            </h3>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--primary-color)'
              }}>
                個別支援の充実
              </h4>
              <p style={{ marginBottom: '2rem' }}>
                スタッフが一人ひとりの若者と深く関わり、それぞれの個性、悩み、夢に寄り添い、オーダーメイドの支援計画を立てることができます。
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--primary-color)'
              }}>
                生活能力の向上
              </h4>
              <p style={{ marginBottom: '2rem' }}>
                家庭的な雰囲気の中で、日々の料理、掃除、金銭管理など、生活に不可欠なスキルを実践的に学び、自立に向けた自信を育みます。
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h4 style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--primary-color)'
              }}>
                社会とのつながり
              </h4>
              <p style={{ marginBottom: '2rem' }}>
                地域の中に溶け込んだ生活を通して、近隣住民との交流、アルバイトや就職活動、学校生活など、社会との自然な接点を増やすことができます。
              </p>
            </div>
            
            <div style={{ marginBottom: '3rem' }}>
              <h4 style={{ 
                fontSize: '1.1rem',
                fontWeight: '600',
                marginBottom: '0.5rem',
                color: 'var(--primary-color)'
              }}>
                安心できる居場所
              </h4>
              <p style={{ marginBottom: '0' }}>
                大規模施設にはない温かい雰囲気の中で、心理的な安定を図り、過去の経験からくる心の傷を癒し、安心して未来へ進むための土台を築きます。
              </p>
            </div>

            <h2 style={{ 
              fontSize: '1.5rem', 
              fontWeight: '700', 
              marginBottom: '1.5rem',
              marginTop: '3rem',
              color: '#333'
            }}>
              現代の課題と私たちの挑戦
            </h2>
            
            <p style={{ marginBottom: '2rem' }}>
              しかしながら、社会的養護を取り巻く課題は依然として山積しています。特に、自立援助ホームにおいては、以下のような課題に直面しながらも、より良い支援を目指し日々挑戦しています。
            </p>

            <h3 style={{ 
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1rem',
              marginTop: '2.5rem',
              color: '#333'
            }}>
              地域資源との連携強化
            </h3>
            <p style={{ marginBottom: '2rem' }}>
              若者の就労先や学習機会、医療機関など、地域社会との連携をさらに深め、多角的なサポート体制を築く必要があります。
            </p>

            <h3 style={{ 
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1rem',
              marginTop: '2.5rem',
              color: '#333'
            }}>
              専門性の向上
            </h3>
            <p style={{ marginBottom: '2rem' }}>
              多様化する若者のニーズ（発達障がい、精神疾患、複雑なトラウマなど）に対応するため、職員の専門性の向上と研修機会の拡充が不可欠です。
            </p>

            <h3 style={{ 
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1rem',
              marginTop: '2.5rem',
              color: '#333'
            }}>
              退所後支援の継続
            </h3>
            <p style={{ marginBottom: '2rem' }}>
              自立援助ホームを退所した後も、若者たちが孤立することなく社会生活を継続できるよう、アフターケアや伴走支援の体制を強化していくことが求められています。
            </p>

            <h3 style={{ 
              fontSize: '1.2rem',
              fontWeight: '600',
              marginBottom: '1rem',
              marginTop: '2.5rem',
              color: '#333'
            }}>
              資金確保と広報活動
            </h3>
            <p style={{ marginBottom: '3rem' }}>
              小規模運営であるがゆえの資金面の課題や、自立援助ホームの存在や役割がまだ十分に認知されていないという課題に対し、積極的な広報と安定した運営基盤の確保が必要です。
            </p>

            <div style={{ 
              background: 'var(--primary-color)', 
              color: 'white', 
              padding: '2rem', 
              borderRadius: '8px', 
              textAlign: 'center',
              marginTop: '3rem'
            }}>
              <h2 style={{ 
                fontSize: '1.4rem',
                fontWeight: '700',
                marginBottom: '1rem' 
              }}>
                私たちの決意
              </h2>
              <p style={{ 
                fontSize: '1rem', 
                lineHeight: '1.8', 
                marginBottom: '1.5rem' 
              }}>
                私たちは、これらの課題に真摯に向き合いながら、子どもたちが心身ともに健やかに成長し、社会の中で自分らしく輝けるよう、これからも温かい「家庭」の場を提供し続けてまいります。
              </p>
              <a 
                href="/contact" 
                style={{ 
                  display: 'inline-block',
                  background: 'white', 
                  color: 'var(--primary-color)',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
              >
                私たちの活動を支援する
              </a>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default SocialCareEvolutionPage;