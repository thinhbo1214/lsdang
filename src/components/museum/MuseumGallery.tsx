import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Film, Image as ImageIcon, Play, ZoomIn, Landmark } from 'lucide-react';
import { museumMediaItems } from '../../data/museumExhibitionData';

interface MuseumGalleryProps {
  onOpenPhoto: (photo: { url: string; title: string; caption?: string; credit?: string }) => void;
  onOpenVideo: (video: { url: string; title: string; caption?: string; source?: string }) => void;
}

type CategoryFilter = 'all' | 'battlefield' | 'figure' | 'campaign' | 'documentary' | 'victory1975';

export const MuseumGallery: React.FC<MuseumGalleryProps> = ({
  onOpenPhoto,
  onOpenVideo,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<CategoryFilter>('all');

  const filterTabs: Array<{ id: CategoryFilter; label: string }> = [
    { id: 'all', label: 'Tất cả tư liệu' },
    { id: 'battlefield', label: 'Chiến trường khói lửa' },
    { id: 'figure', label: 'Nhân vật lịch sử' },
    { id: 'campaign', label: 'Chiến dịch trọng điểm' },
    { id: 'documentary', label: 'Phim tài liệu' },
    { id: 'victory1975', label: 'Ngày 30/04/1975' },
  ];

  const filteredItems = museumMediaItems.filter((item) => {
    if (selectedFilter === 'all') return true;
    return item.category === selectedFilter;
  });

  return (
    <section id="thu-vien" className="py-20 bg-[#0E0B0A] text-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-3">
            <Film size={14} />
            <span>Thư Viện Đa Phương Tiện</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-[#FAF8F5] tracking-tight mb-4">
            KHO TƯ LIỆU <span className="text-[#C5A059]">HÌNH ẢNH & THƯỚC PHIM</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mb-5" />

          <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
            Tuyển tập các tư liệu nguyên bản từ Bảo tàng Lịch sử Quốc gia, Bảo tàng Chứng tích Chiến tranh
            và Thông tấn xã Việt Nam. Nhấn vào hình ảnh để xem kích thước lớn hoặc chọn video để xem
            thước phim lịch sử nguyên bản.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filterTabs.map((tab) => {
            const isActive = selectedFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#800000] text-[#FFD700] font-bold border border-[#C5A059] shadow-md shadow-red-950/60 scale-105'
                    : 'bg-[#181310] text-gray-300 border border-white/10 hover:border-[#C5A059]/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Media Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                key={item.id}
                className="group rounded-xl overflow-hidden bg-[#16120F] border border-[#C5A059]/30 hover:border-[#FFD700] shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Media Preview Box */}
                <div className="relative aspect-video bg-black overflow-hidden">
                  {item.type === 'video' ? (
                    <video
                      src={item.url}
                      muted
                      preload="metadata"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                  ) : (
                    <img
                      src={item.url}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 group-hover:brightness-100"
                    />
                  )}

                  {/* Top Type Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm border border-white/10 text-[11px] font-semibold text-[#FFD700] flex items-center gap-1.5">
                    {item.type === 'video' ? (
                      <>
                        <Film size={12} />
                        <span>Phim tư liệu</span>
                      </>
                    ) : (
                      <>
                        <ImageIcon size={12} />
                        <span>Ảnh tư liệu</span>
                      </>
                    )}
                  </div>

                  {/* Year Badge */}
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-[#800000]/80 text-[#FAF8F5] text-[11px] font-bold border border-[#C5A059]/40">
                    {item.year}
                  </div>

                  {/* Center Play or Zoom overlay trigger */}
                  <div
                    onClick={() => {
                      if (item.type === 'video') {
                        onOpenVideo({
                          url: item.url,
                          title: item.title,
                          caption: item.caption,
                          source: item.source,
                        });
                      } else {
                        onOpenPhoto({
                          url: item.url,
                          title: item.title,
                          caption: item.caption,
                          credit: item.source,
                        });
                      }
                    }}
                    className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#800000] text-[#FFD700] border-2 border-[#FFD700] flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform">
                      {item.type === 'video' ? (
                        <Play size={20} className="fill-current ml-0.5" />
                      ) : (
                        <ZoomIn size={20} />
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold font-serif text-[#FAF8F5] group-hover:text-[#FFD700] transition-colors mb-2 line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-2 mb-3">
                      {item.caption}
                    </p>
                  </div>

                  <div className="pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-[#C5A059]">
                    <span className="flex items-center gap-1">
                      <Landmark size={12} /> {item.categoryLabel}
                    </span>
                    <button
                      onClick={() => {
                        if (item.type === 'video') {
                          onOpenVideo({
                            url: item.url,
                            title: item.title,
                            caption: item.caption,
                            source: item.source,
                          });
                        } else {
                          onOpenPhoto({
                            url: item.url,
                            title: item.title,
                            caption: item.caption,
                            credit: item.source,
                          });
                        }
                      }}
                      className="font-semibold hover:underline cursor-pointer"
                    >
                      {item.type === 'video' ? 'Phát video' : 'Phóng to'} &rarr;
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
