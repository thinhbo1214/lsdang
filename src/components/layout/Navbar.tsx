import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Search, Flag, Calendar, MapPin, BookOpen, Zap, Info } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { SearchModal } from '../ui/SearchModal';
import Modal from '../ui/Modal';
import ImagePlaceholder from '../ui/ImagePlaceholder';
import type { HistoricalEvent } from '../../types';

const navLinks = [
  { label: 'Trang Chủ', path: '/' },
  { label: 'Chống Pháp', path: '/chong-phap' },
  { label: 'Chống Mỹ', path: '/chong-my' },
  { label: 'Nhân Vật', path: '/nhan-vat' },
  { label: 'Bản Đồ', path: '/ban-do' },
  { label: 'Thư Viện', path: '/thu-vien' },
  { label: 'Trắc Nghiệm', path: '/trac-nghiem' },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/10'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-[#8B1A1A] rounded-full flex items-center justify-center group-hover:bg-[#C9922C] transition-colors shadow-md">
                <Flag size={16} className="text-white" />
              </div>
              <span className="text-white font-bold text-sm sm:text-base leading-tight">
                <span className="text-[#C9922C]">Việt Nam</span>
                <span className="hidden sm:inline"> – </span>
                <span className="text-white">Dấu Ấn Lịch Sử</span>
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link px-3 py-2 text-sm font-medium rounded transition-colors ${
                    isActive(link.path)
                      ? 'text-[#C9922C]'
                      : 'text-gray-300 hover:text-[#C9922C]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              {/* Search button with quick shortcut hint */}
              <button
                onClick={() => setSearchOpen(true)}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg px-3 py-1.5 text-gray-300 hover:text-[#C9922C] transition-all text-xs"
                aria-label="Tìm kiếm sự kiện"
              >
                <Search size={15} />
                <span className="hidden sm:inline">Tìm kiếm</span>
                <kbd className="hidden md:inline bg-black/40 text-[10px] px-1 py-0.5 rounded text-gray-400">Ctrl+K</kbd>
              </button>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-gray-300 hover:text-[#C9922C] hover:bg-white/10 rounded-lg transition-colors"
                aria-label="Chế độ sáng/tối"
                title={theme === 'dark' ? 'Chuyển sang chế độ sáng' : 'Chuyển sang chế độ tối'}
              >
                {theme === 'dark' ? <Sun size={18} className="text-[#C9922C]" /> : <Moon size={18} />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 text-gray-300 hover:text-[#C9922C] transition-colors"
                aria-label="Menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0A0A0A]/98 border-t border-white/10 backdrop-blur-md"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map(link => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.path)
                        ? 'bg-[#8B1A1A]/30 text-[#C9922C] font-semibold'
                        : 'text-gray-300 hover:bg-white/5 hover:text-[#C9922C]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Global Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectEvent={ev => setSelectedEvent(ev)}
      />

      {/* Global Event Detail Modal from search */}
      <Modal
        isOpen={!!selectedEvent}
        onClose={() => setSelectedEvent(null)}
        title={selectedEvent?.title}
        size="lg"
      >
        {selectedEvent && (
          <div className="p-6 space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-xs text-[#C9922C] font-bold">
                <Calendar size={14} />
                <span>{selectedEvent.date}</span>
              </div>
              <span className={`text-xs px-2 py-0.5 rounded text-white ${
                selectedEvent.category === 'french-war' ? 'bg-[#8B1A1A]' : 'bg-[#C9922C]'
              }`}>
                {selectedEvent.category === 'french-war' ? 'Kháng chiến chống Pháp' : 'Kháng chiến chống Mỹ'}
              </span>
              {selectedEvent.location && (
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <MapPin size={13} />
                  <span>{selectedEvent.location}</span>
                </div>
              )}
            </div>

            {selectedEvent.images.length > 0 && (
              <ImagePlaceholder
                caption={selectedEvent.images[0].caption}
                credit={selectedEvent.images[0].credit}
                aspectRatio="video"
                className="rounded-xl overflow-hidden"
              />
            )}

            <div className="bg-[#8B1A1A]/10 border-l-4 border-[#8B1A1A] p-4 rounded-r-lg">
              <p className="text-[#2C1A0E] dark:text-gray-200 font-semibold text-sm leading-relaxed italic">
                {selectedEvent.shortDesc}
              </p>
            </div>

            <div>
              <h4 className="font-bold text-[#8B1A1A] text-sm mb-1 flex items-center gap-2">
                <BookOpen size={16} /> Bối Cảnh & Nguyên Nhân
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{selectedEvent.background}</p>
            </div>

            <div>
              <h4 className="font-bold text-[#8B1A1A] text-sm mb-1 flex items-center gap-2">
                <Zap size={16} /> Diễn Biến
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{selectedEvent.development}</p>
            </div>

            <div>
              <h4 className="font-bold text-[#8B1A1A] text-sm mb-1 flex items-center gap-2">
                <Info size={16} /> Kết Quả & Ý Nghĩa Lịch Sử
              </h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{selectedEvent.result}</p>
            </div>

            <div className="border-t border-gray-200 dark:border-white/10 pt-4 text-xs text-gray-400">
              <span className="font-semibold">Nguồn tham khảo:</span> {selectedEvent.source}
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Navbar;
