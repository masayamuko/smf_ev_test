import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>特定非営利活動法人<br />青少年の自立を支える福岡の会</h3>
            <div className="contact-info">
              <p><span style={{ display: 'inline-block', width: '16px', height: '16px', marginRight: '8px', background: 'currentColor', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>info@fukuoka-youth.org</p>
              <p><span style={{ display: 'inline-block', width: '16px', height: '16px', marginRight: '8px', background: 'currentColor', WebkitMask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat', mask: 'url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 24 24\' stroke=\'currentColor\'%3E%3Cpath stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'2\' d=\'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z\' /%3E%3C/svg%3E") center/contain no-repeat' }}></span>092-XXX-XXXX</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>法人について</h4>
            <ul>
              <li><a href="/#basic-info">概要</a></li>
              <li><a href="/#history">沿革</a></li>
              <li><Link to="/news">活動報告</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>自立援助ホーム</h4>
            <ul>
              <li><Link to="/homes/kanransya">かんらん舎</Link></li>
              <li><Link to="/homes/yui">結ホーム</Link></li>
              <li><Link to="/homes/leap">LEAP</Link></li>
              <li><Link to="/homes/switch">スイッチ</Link></li>
              <li><Link to="/homes/ties">TIES</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>支援・参加</h4>
            <ul>
              <li><Link to="/donation">寄付について</Link></li>
              <li><Link to="/jobs">求人情報</Link></li>
              <li><Link to="/contact">お問い合わせ</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <p>&copy; 2025 特定非営利活動法人 青少年の自立を支える福岡の会. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <Link to="/privacy">プライバシーポリシー</Link>
            <Link to="/terms">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;