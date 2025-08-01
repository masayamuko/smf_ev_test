import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('お問い合わせありがとうございます。担当者より後日ご連絡いたします。');
  };

  return (
    <div className="contact-page">
      <section className="page-header">
        <div className="container">
          <h1>お問い合わせ</h1>
          <p>ご質問やご相談がございましたら、お気軽にお問い合わせください</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-2">
            <div>
              <h2>お問い合わせフォーム</h2>
              <div className="card">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">お名前 *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
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
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">件名 *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">お問い合わせ内容 *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn">送信する</button>
                </form>
              </div>
            </div>

            <div>
              <h2>法人情報</h2>
              <div className="card">
                <h3>特定非営利活動法人<br />青少年の自立を支える福岡の会</h3>
                <div className="contact-info">
                  <p><strong>📍 所在地</strong><br />〒815-0000 福岡市南区○○○○○○</p>
                  <p><strong>📞 電話番号</strong><br />092-XXX-XXXX</p>
                  <p><strong>📧 メールアドレス</strong><br />info@fukuoka-youth.org</p>
                  <p><strong>🕒 受付時間</strong><br />平日 9:00〜18:00（土日祝日を除く）</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;