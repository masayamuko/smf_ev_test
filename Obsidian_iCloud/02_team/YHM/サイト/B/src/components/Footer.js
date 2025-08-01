import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const homes = [
    { name: 'かんらん舎', path: '/homes/kanransya' },
    { name: '結ホーム', path: '/homes/yui' },
    { name: 'LEAP', path: '/homes/leap' },
    { name: 'スイッチ', path: '/homes/switch' },
    { name: 'TIES', path: '/homes/ties' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section footer-main">
            <h3>青少年の自立を支える福岡の会</h3>
            <p>5つの自立援助ホームで、青少年の自立を温かくサポートしています。</p>
            <div className="contact-info">
              <p>📧 info@fukuoka-youth.org</p>
              <p>📞 092-XXX-XXXX</p>
              <p>📍 福岡市南区○○○○○○</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>自立援助ホーム</h4>
            <ul className="homes-list">
              {homes.map((home) => (
                <li key={home.path}>
                  <Link to={home.path}>{home.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>サービス</h4>
            <ul>
              <li><Link to="/admission">入居・相談案内</Link></li>
              <li><Link to="/jobs">求人情報</Link></li>
              <li><Link to="/donation">寄付・支援</Link></li>
              <li><Link to="/news">お知らせ</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>法人情報</h4>
            <ul>
              <li><Link to="/about">法人について</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
              <li><Link to="/privacy">プライバシーポリシー</Link></li>
              <li><Link to="/terms">利用規約</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2024 特定非営利活動法人 青少年の自立を支える福岡の会. All rights reserved.</p>
          </div>
          <div className="footer-social">
            <p>私たちの活動をフォローしてください</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;