import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    message: ''
  });

  const categories = [
    { value: 'inquiry', label: '利用に関するお問い合わせ' },
    { value: 'support', label: '支援・寄付に関するお問い合わせ' },
    { value: 'job', label: '求人・採用に関するお問い合わせ' },
    { value: 'other', label: 'その他' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。後日担当者よりご連絡いたします。');
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>📞 お問い合わせ</h1>
          <p>どんなことでもお気軽にご相談ください</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2 className="section-title">お問い合わせフォーム</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">お名前 *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">メールアドレス *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">電話番号</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">お問い合わせ内容 *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                  >
                    <option value="">選択してください</option>
                    {categories.map((cat) => (
                      <option key={cat.value} value={cat.value}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">メッセージ *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-accent">
                  送信する
                </button>
              </form>
            </div>

            <div>
              <h2 className="section-title">お電話でのお問い合わせ</h2>
              <div className="card">
                <h3>受付時間</h3>
                <p>平日 9:00～18:00</p>
                <p>土日祝日 10:00～17:00</p>
                
                <h3 style={{ marginTop: '2rem' }}>電話番号</h3>
                <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--primary-color)' }}>
                  092-XXX-XXXX
                </p>
                
                <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
                  ※緊急時は24時間対応いたします
                </p>
              </div>

              <div className="card" style={{ marginTop: '2rem' }}>
                <h3>所在地</h3>
                <p>
                  〒815-0000<br />
                  福岡市南区○○○○○○<br />
                  特定非営利活動法人<br />
                  青少年の自立を支える福岡の会
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--light-gray)' }}>
        <div className="container">
          <h2 className="section-title">お問い合わせの種類</h2>
          <div className="grid grid-3">
            <div className="feature-highlight">
              <span className="icon-lg">🏠</span>
              <h3>利用をお考えの方</h3>
              <p>自立援助ホームの利用に関するご相談、見学のお申し込みなど</p>
            </div>
            <div className="feature-highlight">
              <span className="icon-lg">❤️</span>
              <h3>支援をお考えの方</h3>
              <p>寄付、ボランティア、企業支援に関するお問い合わせなど</p>
            </div>
            <div className="feature-highlight">
              <span className="icon-lg">💼</span>
              <h3>働きたい方</h3>
              <p>求人情報、採用に関するお問い合わせ、職場見学のお申し込みなど</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">プライバシーポリシー</h2>
          <div className="card">
            <p>
              お客様からお預かりした個人情報は、お問い合わせへの回答や、
              ご連絡のためにのみ使用し、第三者に開示することはございません。
              詳細については、当法人のプライバシーポリシーをご確認ください。
            </p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>私たちがお待ちしています</h2>
          <p>
            どんな小さなことでも構いません。まずはお気軽にお声をおかけください。
            一緒に青少年の未来を支えていきましょう。
          </p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;