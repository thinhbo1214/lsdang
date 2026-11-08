import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Calendar, MapPin, Users, Flag, ArrowRight } from 'lucide-react';
import { frenchWarEvents } from '../../data/frenchWarEvents';
import { americanWarEvents } from '../../data/americanWarEvents';
import { historicalFigures } from '../../data/historicalFigures';
import type { HistoricalEvent } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectEvent: (event: HistoricalEvent) => void;
}

const allEvents: HistoricalEvent[] = [...frenchWarEvents, ...americanWarEvents];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectEvent }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const cleanQuery = query.trim().toLowerCase();

  const matchedEvents = cleanQuery.length > 0
    ? allEvents.filter(e =>
        e.title.toLowerCase().includes(cleanQuery) ||
        e.shortDesc.toLowerCase().includes(cleanQuery) ||
        e.tags.some(t => t.toLowerCase().includes(cleanQuery)) ||
        (e.location && e.location.toLowerCase().includes(cleanQuery)) ||
        e.year.toString().includes(cleanQuery)
      ).slice(0, 6)
    : [];

  const matchedFigures = cleanQuery.length > 0
    ? historicalFigures.filter(f =>
        f.name.toLowerCase().includes(cleanQuery) ||
        (f.fullName && f.fullName.toLowerCase().includes(cleanQuery)) ||
        f.role.toLowerCase().includes(cleanQuery) ||
        f.bio.toLowerCase().includes(cleanQuery)
      ).slice(0, 3)
    : [];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-[#1a0a00] border border-[#C9922C]/40 rounded-2xl shadow-2xl overflow-hidden z-10 flex flex-col max-h-[80vh]"
          >
            {/* Search Input Bar */}
            <div className="p-4 border-b border-white/10 flex items-center gap-3 bg-[#2C1A0E]/60">
              <Search size={20} className="text-[#C9922C] flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="Tìm sự kiện, nhân vật, năm (vd: Điện Biên Phủ, 1975, Bác Hồ)..."
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none text-base"
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="text-gray-400 hover:text-white p-1 rounded-full"
                >
                  <X size={16} />
                </button>
              )}
              <button
                onClick={onClose}
                className="text-xs bg-white/10 hover:bg-white/20 text-gray-300 px-2 py-1 rounded transition-colors"
              >
                ESC
              </button>
            </div>

            {/* Search Results */}
            <div className="p-4 overflow-y-auto flex-1 space-y-6">
              {cleanQuery.length === 0 ? (
                <div className="py-8 text-center text-gray-400">
                  <Flag size={32} className="mx-auto mb-3 text-[#C9922C]/50" />
                  <p className="text-sm">Nhập từ khóa để tra cứu dữ liệu lịch sử 1945–1975</p>
                  <div className="mt-4 flex flex-wrap gap-2 justify-center">
                    {['Điện Biên Phủ', 'Tết Mậu Thân', '30/4/1975', 'Võ Nguyên Giáp', 'Hiệp định Genève'].map(tag => (
                      <button
                        key={tag}
                        onClick={() => setQuery(tag)}
                        className="text-xs bg-white/5 hover:bg-[#8B1A1A]/40 text-gray-300 hover:text-[#C9922C] border border-white/10 rounded-full px-3 py-1 transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              ) : matchedEvents.length === 0 && matchedFigures.length === 0 ? (
                <div className="py-10 text-center text-gray-400">
                  <p className="text-sm">Không tìm thấy kết quả nào cho &ldquo;<span className="text-white font-medium">{query}</span>&rdquo;</p>
                  <p className="text-xs text-gray-500 mt-1">Hãy thử tìm theo năm, địa danh hoặc tên chiến dịch</p>
                </div>
              ) : (
                <>
                  {/* Events */}
                  {matchedEvents.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-[#C9922C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Calendar size={13} /> Sự kiện lịch sử ({matchedEvents.length})
                      </h4>
                      <div className="space-y-2">
                        {matchedEvents.map(event => (
                          <div
                            key={event.id}
                            onClick={() => {
                              onSelectEvent(event);
                              onClose();
                            }}
                            className="p-3 bg-white/5 hover:bg-[#8B1A1A]/30 border border-white/5 hover:border-[#C9922C]/40 rounded-xl cursor-pointer transition-all flex items-start justify-between gap-3 group"
                          >
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold text-[#C9922C]">{event.date}</span>
                                <span className={`text-[10px] px-1.5 py-0.2 rounded text-white ${
                                  event.category === 'french-war' ? 'bg-[#8B1A1A]' : 'bg-[#C9922C]'
                                }`}>
                                  {event.category === 'french-war' ? 'Chống Pháp' : 'Chống Mỹ'}
                                </span>
                                {event.location && (
                                  <span className="text-[11px] text-gray-400 flex items-center gap-1 truncate">
                                    <MapPin size={10} /> {event.location}
                                  </span>
                                )}
                              </div>
                              <h5 className="text-sm font-semibold text-white group-hover:text-[#C9922C] transition-colors leading-snug line-clamp-1">
                                {event.title}
                              </h5>
                              <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                                {event.shortDesc}
                              </p>
                            </div>
                            <ArrowRight size={16} className="text-gray-500 group-hover:text-[#C9922C] group-hover:translate-x-1 transition-all flex-shrink-0 self-center" />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Figures */}
                  {matchedFigures.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold text-[#C9922C] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Users size={13} /> Nhân vật lịch sử ({matchedFigures.length})
                      </h4>
                      <div className="space-y-2">
                        {matchedFigures.map(fig => (
                          <div
                            key={fig.id}
                            onClick={() => {
                              navigate('/nhan-vat');
                              onClose();
                            }}
                            className="p-3 bg-white/5 hover:bg-[#C9922C]/20 border border-white/5 hover:border-[#C9922C]/40 rounded-xl cursor-pointer transition-all flex items-center justify-between gap-3 group"
                          >
                            <div>
                              <h5 className="text-sm font-bold text-white group-hover:text-[#C9922C] transition-colors">
                                {fig.name}
                              </h5>
                              <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">
                                {fig.role}
                              </p>
                            </div>
                            <span className="text-xs text-[#C9922C] flex items-center gap-1 group-hover:underline">
                              Xem tiểu sử <ArrowRight size={12} />
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Footer tips */}
            <div className="p-3 bg-[#0A0A0A]/60 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500">
              <span>Mẹo: Nhấn vào sự kiện để xem đầy đủ bối cảnh, diễn biến & ý nghĩa</span>
              <kbd className="bg-white/10 px-1.5 py-0.5 rounded text-[10px]">Phím tắt: Ctrl + K</kbd>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
