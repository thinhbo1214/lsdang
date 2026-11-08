import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar, MapPin, Info, X, BookOpen, Zap } from 'lucide-react';
import type { HistoricalEvent } from '../../types';
import ImagePlaceholder from '../ui/ImagePlaceholder';

interface TimelineProps {
  events: HistoricalEvent[];
  warTitle?: string;
  color: 'red' | 'gold';
}

const colorMap = {
  red: {
    bg: '#8B1A1A',
    accent: '#C9922C',
    light: '#8B1A1A/20',
    border: 'border-[#8B1A1A]/40',
    text: 'text-[#8B1A1A]',
    badge: 'bg-[#8B1A1A]',
    dot: 'bg-[#8B1A1A]',
  },
  gold: {
    bg: '#C9922C',
    accent: '#8B1A1A',
    light: '#C9922C/20',
    border: 'border-[#C9922C]/40',
    text: 'text-[#C9922C]',
    badge: 'bg-[#C9922C]',
    dot: 'bg-[#C9922C]',
  },
};

const Timeline: React.FC<TimelineProps> = ({ events, color }) => {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterYear, setFilterYear] = useState<number | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const cols = colorMap[color];
  const eventTitleColor = color === 'gold'
    ? 'text-[#205763] dark:text-[#89C7D0]'
    : 'text-[#2C1A0E] dark:text-gray-200';

  const years = Array.from(new Set(events.map(e => e.year))).sort();
  const filteredEvents = filterYear
    ? events.filter(e => e.year === filterYear)
    : events;

  const goTo = useCallback((idx: number) => {
    const clamped = Math.max(0, Math.min(idx, filteredEvents.length - 1));
    setCurrentIndex(clamped);
    // Scroll the timeline item into view
    const container = timelineRef.current;
    if (container) {
      const item = container.querySelectorAll('.timeline-item')[clamped] as HTMLElement;
      if (item) {
        item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [filteredEvents.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [filterYear]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedEvent) {
        if (e.key === 'Escape') setSelectedEvent(null);
        if (e.key === 'ArrowRight') {
          const idx = filteredEvents.findIndex(ev => ev.id === selectedEvent.id);
          if (idx < filteredEvents.length - 1) setSelectedEvent(filteredEvents[idx + 1]);
        }
        if (e.key === 'ArrowLeft') {
          const idx = filteredEvents.findIndex(ev => ev.id === selectedEvent.id);
          if (idx > 0) setSelectedEvent(filteredEvents[idx - 1]);
        }
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedEvent, filteredEvents]);

  return (
    <div className="w-full">
      {/* Filter by year */}
      <div className="flex flex-wrap gap-2 mb-8 px-4">
        <button
          onClick={() => setFilterYear(null)}
          className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
            !filterYear
              ? `text-white shadow-md`
              : 'bg-white/10 text-gray-400 hover:bg-white/20'
          }`}
          style={!filterYear ? { backgroundColor: cols.bg } : {}}
        >
          Tất cả
        </button>
        {years.map(year => (
          <button
            key={year}
            onClick={() => setFilterYear(filterYear === year ? null : year)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              filterYear === year
                ? 'text-white shadow-md'
                : 'bg-white/10 text-gray-400 hover:bg-white/20'
            }`}
            style={filterYear === year ? { backgroundColor: cols.bg } : {}}
          >
            {year}
          </button>
        ))}
      </div>

      {/* DESKTOP: Horizontal timeline */}
      <div className="hidden md:block">
        {/* Timeline track */}
        <div className="relative overflow-hidden px-4">
          {/* Navigation buttons */}
          <button
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#2C1A0E] hover:bg-[#8B1A1A] text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex >= filteredEvents.length - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-[#2C1A0E] hover:bg-[#8B1A1A] text-white rounded-full flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed shadow-lg"
          >
            <ChevronRight size={18} />
          </button>

          {/* Scrollable container */}
          <div
            ref={timelineRef}
            className="overflow-x-auto timeline-scroll pb-4"
            style={{ scrollbarWidth: 'thin' }}
          >
            <div className="relative min-w-max px-12">
              {/* Line */}
              <div className="absolute top-[88px] left-12 right-12 h-0.5 timeline-line" />

              {/* Events */}
              <div className="flex gap-0">
                {filteredEvents.map((event, idx) => (
                  <div
                    key={event.id}
                    className="timeline-item relative flex flex-col items-center"
                    style={{ width: '220px' }}
                  >
                    {/* Year label – alternate up/down */}
                    <div className={`h-16 flex items-${idx % 2 === 0 ? 'end' : 'start'} pb-2`}>
                      {idx % 2 === 0 && (
                        <span className="text-xs font-bold text-[#C9922C]">{event.date}</span>
                      )}
                    </div>

                    {/* Dot */}
                    <motion.button
                      whileHover={{ scale: 1.4 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => { setSelectedEvent(event); setCurrentIndex(idx); }}
                      className={`relative z-10 w-5 h-5 rounded-full border-4 border-[#F5E8C8] dark:border-[#0A0A0A] transition-all ${
                        currentIndex === idx ? 'timeline-dot-active' : ''
                      }`}
                      style={{ backgroundColor: event.significance === 'major' ? cols.bg : cols.accent }}
                    >
                      {event.significance === 'major' && (
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#C9922C] rounded-full" />
                      )}
                    </motion.button>

                    {/* Bottom: year label for even */}
                    <div className="h-16 flex items-start pt-2">
                      {idx % 2 !== 0 && (
                        <span className="text-xs font-bold text-[#C9922C]">{event.date}</span>
                      )}
                    </div>

                    {/* Event card below */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      onClick={() => { setSelectedEvent(event); setCurrentIndex(idx); }}
                      className={`mt-2 w-48 bg-white dark:bg-[#1a0a00] rounded-lg p-3 cursor-pointer border transition-all ${
                        currentIndex === idx
                          ? 'border-[#8B1A1A] shadow-md shadow-[#8B1A1A]/20'
                          : 'border-gray-100 dark:border-white/10 hover:border-[#C9922C]/50'
                      }`}
                    >
                      {event.images[0]?.url && (
                        <img
                          src={event.images[0].url}
                          alt={event.images[0].caption}
                          loading="lazy"
                          className="mb-2 h-24 w-full rounded-md object-cover"
                        />
                      )}
                      <div
                        className={`inline-block text-white text-xs px-2 py-0.5 rounded mb-2`}
                        style={{ backgroundColor: event.significance === 'major' ? cols.bg : '#555' }}
                      >
                        {event.significance === 'major' ? 'Sự kiện lớn' : 'Sự kiện'}
                      </div>
                      <p className={`${eventTitleColor} text-xs font-semibold leading-tight line-clamp-3`}>
                        {event.title}
                      </p>
                      <p className="text-gray-500 text-xs mt-1 line-clamp-2">{event.shortDesc}</p>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center gap-1 mt-4">
            {filteredEvents.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className="w-1.5 h-1.5 rounded-full transition-all"
                style={{
                  backgroundColor: idx === currentIndex ? cols.bg : '#d1d5db',
                  width: idx === currentIndex ? '16px' : '6px',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MOBILE: Vertical timeline */}
      <div className="md:hidden px-4">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-0.5"
            style={{ background: `linear-gradient(to bottom, ${cols.bg}, ${cols.accent}, ${cols.bg})` }}
          />

          <div className="space-y-4">
            {filteredEvents.map((event, idx) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: idx * 0.05 }}
                className="flex gap-4"
              >
                {/* Dot */}
                <div className="flex-shrink-0 relative z-10 mt-4">
                  <div
                    className="w-3 h-3 rounded-full border-2 border-white dark:border-[#0A0A0A]"
                    style={{ backgroundColor: event.significance === 'major' ? cols.bg : cols.accent }}
                  />
                </div>

                {/* Card */}
                <div
                  onClick={() => setSelectedEvent(event)}
                  className="flex-1 bg-white dark:bg-[#1a0a00] rounded-xl p-4 cursor-pointer border border-gray-100 dark:border-white/10 hover:border-[#C9922C]/50 transition-all card-hover"
                >
                  {event.images[0]?.url && (
                    <img
                      src={event.images[0].url}
                      alt={event.images[0].caption}
                      loading="lazy"
                      className="mb-3 h-36 w-full rounded-lg object-cover"
                    />
                  )}
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={12} className="text-[#C9922C]" />
                    <span className="text-[#C9922C] text-xs font-bold">{event.date}</span>
                    {event.significance === 'major' && (
                      <span className="text-white text-xs px-2 py-0.5 rounded ml-auto" style={{ backgroundColor: cols.bg }}>
                        Sự kiện lớn
                      </span>
                    )}
                  </div>
                  <h4 className={`${eventTitleColor} font-bold text-sm leading-tight mb-1`}>
                    {event.title}
                  </h4>
                  <p className="text-gray-500 text-xs line-clamp-2">{event.shortDesc}</p>
                  <button className="mt-2 text-[#8B1A1A] text-xs font-medium flex items-center gap-1 hover:gap-2 transition-all">
                    <Info size={12} /> Xem chi tiết
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedEvent(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            />

            <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={() => setSelectedEvent(null)}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-3xl bg-[#F5E8C8] dark:bg-[#1a0a00] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
              >
                {/* Header */}
                <div className="p-5 flex-shrink-0" style={{ backgroundColor: cols.bg }}>
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Calendar size={14} className={color === 'gold' ? 'text-[#2C1A0E]' : 'text-[#C9922C]'} />
                        <span className={`text-sm font-bold ${color === 'gold' ? 'text-[#2C1A0E]' : 'text-[#C9922C]'}`}>
                          {selectedEvent.date}
                        </span>
                        {selectedEvent.significance === 'major' && (
                          <span className={`text-xs px-2 py-0.5 rounded ${color === 'gold' ? 'bg-[#F5E8C8] text-[#2C1A0E]' : 'bg-[#C9922C] text-white'}`}>
                            Sự kiện lớn
                          </span>
                        )}
                      </div>
                      <h2 className={`font-black text-xl leading-tight ${color === 'gold' ? 'text-[#241506]' : 'text-white'}`}>
                        {selectedEvent.title}
                      </h2>
                    </div>
                    <button
                      onClick={() => setSelectedEvent(null)}
                      className={`p-1 flex-shrink-0 ${color === 'gold' ? 'text-[#2C1A0E]/70 hover:text-[#2C1A0E]' : 'text-white/70 hover:text-white'}`}
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {selectedEvent.location && (
                    <div className="flex items-center gap-1.5 mt-2">
                      <MapPin size={12} className={color === 'gold' ? 'text-[#2C1A0E]' : 'text-[#C9922C]'} />
                      <span className={`text-xs ${color === 'gold' ? 'text-[#2C1A0E]' : 'text-[#C9922C]/80'}`}>
                        {selectedEvent.location}
                      </span>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="overflow-y-auto flex-1 p-5 space-y-5">
                  {/* Image */}
                  {selectedEvent.images.length > 0 && (
                    <div>
                      <ImagePlaceholder
                        imageUrl={selectedEvent.images[0].url}
                        caption={selectedEvent.images[0].caption}
                        credit={selectedEvent.images[0].credit}
                        aspectRatio="video"
                        className="rounded-xl overflow-hidden"
                      />
                    </div>
                  )}

                  {/* Short desc */}
                  <div className="bg-[#8B1A1A]/10 border-l-4 border-[#8B1A1A] rounded-r-lg p-4">
                    <p className="text-[#2C1A0E] dark:text-gray-200 font-semibold text-sm leading-relaxed italic">
                      {selectedEvent.shortDesc}
                    </p>
                  </div>

                  {/* Sections */}
                  {[
                    { icon: <BookOpen size={16} />, title: 'Bối Cảnh & Nguyên Nhân', content: selectedEvent.background },
                    { icon: <Zap size={16} />, title: 'Diễn Biến', content: selectedEvent.development },
                    { icon: <Info size={16} />, title: 'Kết Quả & Ý Nghĩa Lịch Sử', content: selectedEvent.result },
                  ].map(section => (
                    <div key={section.title}>
                      <div className="flex items-center gap-2 mb-2">
                        <span style={{ color: cols.bg }}>{section.icon}</span>
                        <h4 className="font-bold text-[#2C1A0E] dark:text-gray-200 text-sm">{section.title}</h4>
                      </div>
                      <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">{section.content}</p>
                    </div>
                  ))}

                  {/* Tags */}
                  {selectedEvent.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {selectedEvent.tags.map(tag => (
                        <span key={tag} className="bg-[#2C1A0E]/10 dark:bg-white/10 text-[#2C1A0E] dark:text-gray-300 text-xs px-3 py-1 rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Source */}
                  <div className="border-t border-gray-200 dark:border-white/10 pt-4">
                    <p className="text-gray-400 text-xs">
                      <span className="font-semibold">Nguồn tham khảo:</span> {selectedEvent.source}
                    </p>
                  </div>
                </div>

                {/* Footer navigation */}
                <div className="border-t border-gray-200 dark:border-white/10 p-4 flex items-center justify-between flex-shrink-0 bg-white/50 dark:bg-black/20">
                  <button
                    onClick={() => {
                      const idx = filteredEvents.findIndex(e => e.id === selectedEvent.id);
                      if (idx > 0) setSelectedEvent(filteredEvents[idx - 1]);
                    }}
                    disabled={filteredEvents.findIndex(e => e.id === selectedEvent.id) === 0}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#8B1A1A] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft size={16} /> Sự kiện trước
                  </button>

                  <span className="text-xs text-gray-400">
                    {filteredEvents.findIndex(e => e.id === selectedEvent.id) + 1} / {filteredEvents.length}
                  </span>

                  <button
                    onClick={() => {
                      const idx = filteredEvents.findIndex(e => e.id === selectedEvent.id);
                      if (idx < filteredEvents.length - 1) setSelectedEvent(filteredEvents[idx + 1]);
                    }}
                    disabled={filteredEvents.findIndex(e => e.id === selectedEvent.id) === filteredEvents.length - 1}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#8B1A1A] transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Sự kiện tiếp <ChevronRight size={16} />
                  </button>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Timeline;
