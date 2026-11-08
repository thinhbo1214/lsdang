import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  Menu,
  X,
  Award,
} from 'lucide-react';
import { victoryAudio } from '../../utils/celebrationAudio';

interface MuseumHeaderProps {
  onStartQuiz?: () => void;
}

export const MuseumHeader: React.FC<MuseumHeaderProps> = ({ onStartQuiz }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('tong-quan');
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMuted(victoryAudio.getMuted());

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy following the new order
      const sections = ['tong-quan', 'chuyen-de-1', 'chuyen-de-2', 'tong-ket-1975', 'thu-vien', 'trac-nghiem'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const muted = victoryAudio.toggleMute();
    setIsMuted(muted);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Sections ordered according to user instruction:
  // 1975 Thống Nhất -> Thư Viện Tư Liệu -> Thử Thách 10 Câu
  const navItems = [
    { id: 'tong-quan', label: 'Tổng quan' },
    { id: 'chuyen-de-1', label: 'Chống Pháp (1945–1954)' },
    { id: 'chuyen-de-2', label: 'Chống Mỹ (1954–1975)' },
    { id: 'tong-ket-1975', label: '1975 Thống nhất' },
    { id: 'thu-vien', label: 'Thư viện tư liệu' },
    { id: 'trac-nghiem', label: 'Thử thách 10 câu' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#120F0D]/95 backdrop-blur-md border-b border-[#C5A059]/30 shadow-xl shadow-black/40 py-2.5'
          : 'bg-gradient-to-b from-[#0A0807]/90 via-[#120F0D]/60 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Museum Brand / Logo */}
        <div
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 cursor-pointer group select-none"
        >
          <div className="relative w-10 h-10 rounded-full bg-gradient-to-br from-[#800000] via-[#5C0000] to-[#2B0000] border border-[#C5A059] flex items-center justify-center shadow-md shadow-red-950/60 group-hover:scale-105 transition-transform">
            <span className="text-[#FFD700] text-lg font-bold">★</span>
            <div className="absolute -inset-0.5 rounded-full border border-[#C5A059]/40 animate-pulse pointer-events-none" />
          </div>
          <div>
            <div className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
              Bảo tàng Lịch sử Trực tuyến
            </div>
            <div className="text-sm sm:text-base font-bold text-[#F9F6F0] font-serif tracking-wide group-hover:text-[#FFD700] transition-colors leading-tight">
              Việt Nam (1945 – 1975)
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#1A1512]/80 backdrop-blur-sm px-3 py-1.5 rounded-full border border-[#C5A059]/25 shadow-inner">
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  active
                    ? 'text-[#FFD700] bg-[#800000] shadow-sm shadow-[#800000]/60 font-semibold'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Header Tools */}
        <div className="flex items-center gap-2">
          {/* Sound Effect Toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-full border transition-all cursor-pointer ${
              isMuted
                ? 'bg-black/40 text-gray-400 border-white/10 hover:text-white'
                : 'bg-[#800000]/40 text-[#FFD700] border-[#C5A059]/40 hover:bg-[#800000]/60 shadow-sm'
            }`}
            title={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
          >
            {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="hidden sm:flex p-2 rounded-full bg-black/40 text-gray-300 border border-white/10 hover:text-white hover:border-[#C5A059]/40 transition-colors cursor-pointer"
            title={isFullscreen ? 'Thoát toàn màn hình' : 'Xem toàn màn hình'}
          >
            {isFullscreen ? <Minimize2 size={17} /> : <Maximize2 size={17} />}
          </button>

          {/* Quick Quiz CTA button */}
          <button
            onClick={onStartQuiz || (() => scrollTo('trac-nghiem'))}
            className="hidden md:flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#800000] to-[#A31212] hover:from-[#940000] hover:to-[#B81616] text-[#FFD700] border border-[#C5A059]/50 text-xs font-semibold shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <Award size={14} />
            <span>Thử thách 10 câu</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-[#1F1713] text-[#F5E8C8] border border-[#C5A059]/30 hover:bg-[#2B201A] transition-colors cursor-pointer"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#161210] border-b border-[#C5A059]/40 shadow-2xl px-5 py-4 space-y-2 mt-2"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between cursor-pointer ${
                  activeSection === item.id
                    ? 'bg-[#800000] text-[#FFD700] font-bold border border-[#C5A059]/50'
                    : 'text-gray-300 hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <span className="text-[#FFD700]">●</span>}
              </button>
            ))}

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={toggleSound}
                className="flex items-center gap-2 text-xs text-gray-300 hover:text-white cursor-pointer"
              >
                {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} className="text-[#C5A059]" />}
                <span>{isMuted ? 'Âm thanh: Đang tắt' : 'Âm thanh: Đang bật'}</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onStartQuiz) onStartQuiz();
                  else scrollTo('trac-nghiem');
                }}
                className="px-3 py-1 bg-[#800000] text-[#FFD700] rounded-full text-xs font-semibold cursor-pointer"
              >
                Làm bài trắc nghiệm
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
