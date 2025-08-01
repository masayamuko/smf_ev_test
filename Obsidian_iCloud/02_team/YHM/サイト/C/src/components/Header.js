import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'ホーム', path: '/' },
    { 
      name: '利用をお考えの方へ', 
      path: '/for-users',
      icon: '🏠',
      description: '入居・相談'
    },
    { 
      name: '支援をお考えの方へ', 
      path: '/for-supporters',
      icon: '❤️',
      description: '寄付・ボランティア'
    },
    { 
      name: '働きたい方へ', 
      path: '/for-jobseekers',
      icon: '💼',
      description: '求人・採用'
    },
    { name: '法人について', path: '/about' },
    { name: 'お知らせ', path: '/news' },
    { name: 'お問い合わせ', path: '/contact' }
  ];

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-content">
              <h1>青少年の自立を支える福岡の会</h1>
              <span className="logo-tagline">あなたの目的に合わせたサポート</span>
            </div>
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <ul className="nav-list">
              {navigation.map((item) => (
                <li key={item.path} className="nav-item">
                  <Link 
                    to={item.path} 
                    className={`nav-link ${isActive(item.path) ? 'active' : ''} ${item.icon ? 'nav-link-featured' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon && <span className="nav-icon">{item.icon}</span>}
                    <div className="nav-text">
                      <span className="nav-name">{item.name}</span>
                      {item.description && <span className="nav-description">{item.description}</span>}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="メニューを開く"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;