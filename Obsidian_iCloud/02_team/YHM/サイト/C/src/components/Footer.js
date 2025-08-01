import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-main">
            <h3>青少年の自立を支える福岡の会</h3>
            <p>あなたの目的に合わせて、最適なサポートを提供します。</p>
            <div className="contact-info">
              <p>📧 info@fukuoka-youth.org</p>
              <p>📞 092-XXX-XXXX</p>
              <p>📍 福岡市南区○○○○○○</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>🏠 利用をお考えの方へ</h4>
            <ul>
              <li><Link to="/for-users">自立援助ホームとは</Link></li>
              <li><Link to="/for-users">入居までの流れ</Link></li>
              <li><Link to="/for-users">各ホーム紹介</Link></li>
              <li><Link to="/for-users">よくある質問</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>❤️ 支援をお考えの方へ</h4>
            <ul>
              <li><Link to="/for-supporters">寄付について</Link></li>
              <li><Link to="/for-supporters">ボランティア募集</Link></li>
              <li><Link to="/for-supporters">企業・団体支援</Link></li>
              <li><Link to="/for-supporters">支援者の声</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>💼 働きたい方へ</h4>
            <ul>
              <li><Link to="/for-jobseekers">求人情報</Link></li>
              <li><Link to="/for-jobseekers">職員インタビュー</Link></li>
              <li><Link to="/for-jobseekers">研修・キャリア</Link></li>
              <li><Link to="/for-jobseekers">応募方法</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 特定非営利活動法人 青少年の自立を支える福岡の会. All rights reserved.</p>
          </div>
          <div className="footer-actions">
            <Link to="/about" className="footer-btn">法人について</Link>
            <Link to="/contact" className="footer-btn">お問い合わせ</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;