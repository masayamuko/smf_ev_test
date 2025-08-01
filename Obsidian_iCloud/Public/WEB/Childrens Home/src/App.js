import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import HomesPage from './pages/HomesPage';
import HomeDetailPage from './pages/HomeDetailPage';
import JobsPage from './pages/JobsPage';
import DonationPage from './pages/DonationPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import StoryPage from './pages/StoryPage';
import AdmissionFlowPage from './pages/AdmissionFlowPage';
import SocialCareEvolutionPage from './pages/SocialCareEvolutionPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/homes" element={<HomesPage />} />
            <Route path="/homes/:homeId" element={<HomeDetailPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/donation" element={<DonationPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/story" element={<StoryPage />} />
            <Route path="/admission-flow" element={<AdmissionFlowPage />} />
            <Route path="/social-care-evolution" element={<SocialCareEvolutionPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;