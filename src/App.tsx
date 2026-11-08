import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import HomePage from './pages/HomePage';
import FrenchWarPage from './pages/FrenchWarPage';
import AmericanWarPage from './pages/AmericanWarPage';
import FiguresPage from './pages/FiguresPage';
import MapPage from './pages/MapPage';
import MediaLibraryPage from './pages/MediaLibraryPage';
import QuizPage from './pages/QuizPage';

// Scroll to top on route change
const ScrollRestoration: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const AppContent: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFAF4] dark:bg-[#0A0A0A] transition-colors duration-300">
      <Navbar />
      <ScrollRestoration />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chong-phap" element={<FrenchWarPage />} />
          <Route path="/chong-my" element={<AmericanWarPage />} />
          <Route path="/nhan-vat" element={<FiguresPage />} />
          <Route path="/ban-do" element={<MapPage />} />
          <Route path="/thu-vien" element={<MediaLibraryPage />} />
          <Route path="/trac-nghiem" element={<QuizPage />} />
          <Route path="*" element={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl font-black text-[#8B1A1A] mb-4">404</div>
                <p className="text-gray-500 mb-6">Trang không tìm thấy</p>
                <a href="/" className="bg-[#8B1A1A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#a52020] transition-colors">
                  Về trang chủ
                </a>
              </div>
            </div>
          } />
        </Routes>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
