import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ForUsersPage from './pages/ForUsersPage';
import ForSupportersPage from './pages/ForSupportersPage';
import ForJobSeekersPage from './pages/ForJobSeekersPage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/for-users" element={<ForUsersPage />} />
            <Route path="/for-supporters" element={<ForSupportersPage />} />
            <Route path="/for-jobseekers" element={<ForJobSeekersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;