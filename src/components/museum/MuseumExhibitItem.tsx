import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Calendar,
  ZoomIn,
  Play,
  Landmark,
  ShieldAlert,
  Award,
  Sparkles,
} from 'lucide-react';
import type { MuseumExhibit } from '../../data/museumExhibitionData';

interface MuseumExhibitItemProps {
  exhibit: MuseumExhibit;
  index: number;
  onOpenPhoto: (photo: { url: string; title: string; caption?: string; credit?: string; year?: number }) => void;
  onOpenVideo: (video: { url: string; title: string; caption?: string; source?: string }) => void;
}

export const MuseumExhibitItem: React.FC<MuseumExhibitItemProps> = ({
  exhibit,
  index,
  onOpenPhoto,
  onOpenVideo,
}) => {
  const [activeTab, setActiveTab] = useState<'summary' | 'context' | 'development' | 'meaning'>('summary');
  const isEven = index % 2 === 0;

  // Highlight special layout for Major Milestones (Điện Biên Phủ & 30/04/1975)
  if (exhibit.isHighlight) {
    return (
      <div id={`exhibit-${exhibit.order}`} className="scroll-mt-24 my-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-[#260505] via-[#1A0B09] to-[#120F0D] border-2 border-[#C5A059] shadow-2xl p-6 sm:p-10"
        >
          {/* Top Golden Crown Badge */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-[#C5A059]/40">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FFD700] text-[#800000] text-xs font-black uppercase tracking-wider shadow">
                ★ Gian Khánh Tiết Trọng Điểm ★
              </span>
              <span className="text-xs sm:text-sm text-[#F5E8C8] font-semibold">
                Mốc Lịch Sử Số {exhibit.order.toString().padStart(2, '0')} / 19
              </span>
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#FFD700] font-bold px-3 py-1 rounded-full bg-[#800000]/80 border border-[#C5A059]/50">
              <Calendar size={13} />
              <span>{exhibit.date}</span>
            </div>
          </div>

          {/* Monumental Title */}
          <div className="text-center max-w-4xl mx-auto mb-8">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif text-[#FFD700] tracking-tight mb-3 uppercase leading-tight drop-shadow-md">
              {exhibit.title}
            </h3>
            <p className="text-base sm:text-lg text-[#F5E8C8] italic font-serif max-w-2xl mx-auto">
              "{exhibit.tagline}"
            </p>
          </div>

          {/* Large Archival Image with Framed Gallery Aesthetic */}
          <div className="relative rounded-2xl overflow-hidden mb-8 border-2 border-[#C5A059]/70 group shadow-2xl bg-black">
            <img
              src={exhibit.image}
              alt={exhibit.title}
              className="w-full h-[320px] sm:h-[460px] md:h-[540px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />

            {/* Floating Action Buttons over Image */}
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              {exhibit.videoUrl && (
                <button
                  onClick={() =>
                    onOpenVideo({
                      url: exhibit.videoUrl!,
                      title: exhibit.videoTitle || exhibit.title,
                      caption: exhibit.imageCaption,
                      source: exhibit.source,
                    })
                  }
                  className="px-4 py-2 rounded-xl bg-[#800000]/90 hover:bg-[#A31212] text-white text-xs sm:text-sm font-bold flex items-center gap-2 border border-[#FFD700]/60 shadow-lg backdrop-blur-md transition-all hover:scale-105 cursor-pointer"
                >
                  <Play size={16} className="text-[#FFD700] fill-current" />
                  <span>Xem Phim Tư Liệu</span>
                </button>
              )}

              <button
                onClick={() =>
                  onOpenPhoto({
                    url: exhibit.image,
                    title: exhibit.title,
                    caption: exhibit.imageCaption,
                    credit: exhibit.imageCredit,
                    year: exhibit.year,
                  })
                }
                className="p-2.5 rounded-xl bg-black/70 hover:bg-black text-[#FFD700] border border-white/20 hover:border-[#FFD700] transition-all backdrop-blur-md cursor-pointer"
                title="Phóng to ảnh tư liệu"
              >
                <ZoomIn size={18} />
              </button>
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-4 left-4 max-w-xl text-left pointer-events-none hidden sm:block">
              <p className="text-xs sm:text-sm text-gray-200 font-sans leading-snug drop-shadow-md">
                {exhibit.imageCaption}
              </p>
              <span className="text-[11px] text-[#FFD700] font-medium block mt-0.5">
                Nguồn: {exhibit.imageCredit}
              </span>
            </div>
          </div>

          {/* Key Stats Chips */}
          {exhibit.stats && exhibit.stats.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              {exhibit.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-xl bg-[#120F0D]/90 border border-[#C5A059]/40 text-center"
                >
                  <div className="text-xs uppercase tracking-wider text-[#C5A059] font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white font-serif">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Exhibition Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-sm text-gray-300">
            {/* Box 1: Bối cảnh */}
            <div className="p-5 rounded-2xl bg-[#15110E] border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-[#FFD700] font-serif mb-2.5 flex items-center gap-2">
                  <ShieldAlert size={16} />
                  <span>Bối cảnh lịch sử</span>
                </h4>
                <p className="leading-relaxed font-sans text-gray-300 text-xs sm:text-sm">
                  {exhibit.background}
                </p>
              </div>
            </div>

            {/* Box 2: Diễn biến */}
            <div className="p-5 rounded-2xl bg-[#15110E] border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-[#FFD700] font-serif mb-2.5 flex items-center gap-2">
                  <Award size={16} />
                  <span>Diễn biến then chốt</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-sans">
                  {exhibit.development.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FFD700] font-bold mt-0.5">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Box 3: Ý nghĩa */}
            <div className="p-5 rounded-2xl bg-[#15110E] border border-white/10 flex flex-col justify-between">
              <div>
                <h4 className="text-base font-bold text-[#FFD700] font-serif mb-2.5 flex items-center gap-2">
                  <Sparkles size={16} />
                  <span>Kết quả & Ý nghĩa</span>
                </h4>
                <p className="leading-relaxed font-sans text-gray-300 text-xs sm:text-sm mb-4">
                  {exhibit.resultAndMeaning}
                </p>
              </div>

              {exhibit.quote && (
                <div className="p-3 rounded-xl bg-[#260505]/70 border border-[#C5A059]/40 italic text-xs text-[#F5E8C8]">
                  "{exhibit.quote.text}"
                  <span className="block not-italic font-bold text-[#FFD700] text-[11px] mt-1 text-right">
                    — {exhibit.quote.author}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Reference Citation Footer */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-gray-400">
            <span className="text-[#C5A059]">
              Nguồn tư liệu bảo tàng: {exhibit.source}
            </span>
            <span className="text-gray-500">
              Bảo tàng Chứng tích Chiến tranh & Bảo tàng Lịch sử Quân sự Việt Nam
            </span>
          </div>
        </motion.div>
      </div>
    );
  }

  // Standard Exhibition Card (Alternating Left / Right)
  return (
    <div id={`exhibit-${exhibit.order}`} className="scroll-mt-24 my-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden bg-[#16120F] border border-[#C5A059]/30 hover:border-[#C5A059]/70 transition-all shadow-xl p-5 sm:p-8"
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
            isEven ? '' : 'lg:flex-row-reverse'
          }`}
        >
          {/* Image Side (5 cols) */}
          <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="relative rounded-xl overflow-hidden border border-[#C5A059]/40 shadow-lg bg-black group">
              <img
                src={exhibit.image}
                alt={exhibit.title}
                className="w-full h-[260px] sm:h-[320px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Action buttons */}
              <div className="absolute bottom-3 right-3 flex items-center gap-2">
                {exhibit.videoUrl && (
                  <button
                    onClick={() =>
                      onOpenVideo({
                        url: exhibit.videoUrl!,
                        title: exhibit.videoTitle || exhibit.title,
                        caption: exhibit.imageCaption,
                        source: exhibit.source,
                      })
                    }
                    className="px-3 py-1.5 rounded-lg bg-[#800000] hover:bg-[#9B1212] text-white text-xs font-semibold flex items-center gap-1.5 border border-[#C5A059]/50 shadow transition-colors cursor-pointer"
                  >
                    <Play size={14} className="text-[#FFD700] fill-current" />
                    <span>Phim tài liệu</span>
                  </button>
                )}

                <button
                  onClick={() =>
                    onOpenPhoto({
                      url: exhibit.image,
                      title: exhibit.title,
                      caption: exhibit.imageCaption,
                      credit: exhibit.imageCredit,
                      year: exhibit.year,
                    })
                  }
                  className="p-1.5 rounded-lg bg-black/70 hover:bg-black text-[#C5A059] border border-white/20 hover:border-[#C5A059] transition-colors cursor-pointer"
                  title="Phóng to ảnh"
                >
                  <ZoomIn size={16} />
                </button>
              </div>

              {/* Caption */}
              <div className="absolute bottom-2.5 left-3 right-24 pointer-events-none">
                <p className="text-[11px] text-gray-300 font-sans line-clamp-1">
                  {exhibit.imageCaption}
                </p>
              </div>
            </div>

            {/* Credit Note */}
            <div className="flex items-center gap-1.5 text-[11px] text-[#C5A059] mt-2 px-1">
              <Landmark size={12} />
              <span>Nguồn ảnh: {exhibit.imageCredit}</span>
            </div>
          </div>

          {/* Text Content Side (7 cols) */}
          <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
            {/* Top Order & Date Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-[#800000] text-[#FFD700] text-xs font-bold uppercase tracking-wide border border-[#C5A059]/40">
                Mốc {exhibit.order.toString().padStart(2, '0')}
              </span>
              <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-[#241B15] text-[#F5E8C8] border border-white/10 font-medium">
                <Calendar size={12} className="text-[#C5A059]" />
                {exhibit.date}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black font-serif text-[#FAF8F5] leading-snug tracking-tight">
              {exhibit.title}
            </h3>

            {/* Tagline */}
            <p className="text-xs sm:text-sm text-[#C5A059] italic font-serif">
              "{exhibit.tagline}"
            </p>

            {/* Tabbed Interactive Reading */}
            <div className="flex items-center gap-1 border-b border-white/10 pb-2 pt-1 text-xs">
              <button
                onClick={() => setActiveTab('summary')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'summary'
                    ? 'bg-[#800000] text-[#FFD700] font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Tóm tắt
              </button>
              <button
                onClick={() => setActiveTab('context')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'context'
                    ? 'bg-[#800000] text-[#FFD700] font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Bối cảnh
              </button>
              <button
                onClick={() => setActiveTab('development')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'development'
                    ? 'bg-[#800000] text-[#FFD700] font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Diễn biến
              </button>
              <button
                onClick={() => setActiveTab('meaning')}
                className={`px-3 py-1 rounded-md transition-colors cursor-pointer ${
                  activeTab === 'meaning'
                    ? 'bg-[#800000] text-[#FFD700] font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                Ý nghĩa
              </button>
            </div>

            {/* Tab Content Box */}
            <div className="min-h-[110px] text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">
              {activeTab === 'summary' && (
                <p>{exhibit.shortDesc}</p>
              )}
              {activeTab === 'context' && (
                <p>{exhibit.background}</p>
              )}
              {activeTab === 'development' && (
                <ul className="space-y-1.5">
                  {exhibit.development.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-[#FFD700] font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {activeTab === 'meaning' && (
                <p>{exhibit.resultAndMeaning}</p>
              )}
            </div>

            {/* Quote if available */}
            {exhibit.quote && (
              <div className="p-3 rounded-lg bg-[#201712] border-l-2 border-[#C5A059] text-xs text-[#F5E8C8] italic">
                "{exhibit.quote.text}"
                <span className="block not-italic font-bold text-[#FFD700] text-[11px] mt-0.5">
                  — {exhibit.quote.author}
                </span>
              </div>
            )}

            {/* Source citation */}
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-gray-500">
              <span>Nguồn: {exhibit.source}</span>
              <span className="text-[#C5A059] hidden sm:inline">Phòng trưng bày lịch sử</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
