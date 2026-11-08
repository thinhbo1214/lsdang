import React from 'react';
import { motion } from 'framer-motion';
import { Compass, BookOpen, ChevronDown, Landmark } from 'lucide-react';

interface MuseumHeroProps {
  onExplore: () => void;
  onStartJourney: () => void;
  onGoToQuiz?: () => void;
}

export const MuseumHero: React.FC<MuseumHeroProps> = ({
  onExplore,
  onStartJourney,
}) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0706] text-[#F9F6F0]"
    >
      {/* Background Archival Photo with Cinematic Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src="/media/anh/1793932221999_5601981979445790988_g8682714676790492621_70c6c266429d0bc83d10f7caf95a9936.jpg"
          alt="Việt Nam Hành Trình Lịch Sử 1945 - 1975"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15] scale-105 transform motion-safe:animate-pulse-subtle"
        />

        {/* Vintage Vignette and Color Grade Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0C0A] via-[#0F0C0A]/70 to-[#0F0C0A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#290404]/80 via-transparent to-[#1F0C04]/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,7,6,0.85)_100%)]" />

        {/* Subtle Paper Texture Noise Overlay */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#F5E8C8_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
      </div>

      {/* Decorative Golden Corner Accents */}
      <div className="absolute top-24 left-8 w-12 h-12 border-t-2 border-l-2 border-[#C5A059]/40 pointer-events-none hidden md:block" />
      <div className="absolute top-24 right-8 w-12 h-12 border-t-2 border-r-2 border-[#C5A059]/40 pointer-events-none hidden md:block" />
      <div className="absolute bottom-16 left-8 w-12 h-12 border-b-2 border-l-2 border-[#C5A059]/40 pointer-events-none hidden md:block" />
      <div className="absolute bottom-16 right-8 w-12 h-12 border-b-2 border-r-2 border-[#C5A059]/40 pointer-events-none hidden md:block" />

      {/* Central Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 sm:py-32 text-center flex flex-col items-center">
        {/* Museum Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#800000]/60 border border-[#C5A059]/50 backdrop-blur-md shadow-lg shadow-black/50 mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-[#FFD700] animate-ping" />
          <Landmark size={14} className="text-[#FFD700]" />
          <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#F5E8C8]">
            Không Gian Triển Lãm Số • Bảo Tàng Lịch Sử Trực Tuyến
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black font-serif tracking-tight text-[#FAF8F5] uppercase leading-[1.1] mb-5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
        >
          VIỆT NAM – <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#E8B958] to-[#C5A059]">HÀNH TRÌNH LỊCH SỬ</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg sm:text-2xl md:text-3xl font-light text-[#EAD8BD] font-serif max-w-3xl mb-8 leading-snug drop-shadow-md"
        >
          <span className="font-bold text-[#FFD700] text-xl sm:text-3xl">1945–1975</span>
          <span className="mx-2 text-[#C5A059]">|</span>
          <span>Hành trình đấu tranh giành độc lập và thống nhất đất nước</span>
        </motion.p>

        {/* Narrative Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto leading-relaxed mb-10 font-sans"
        >
          Trưng bày chuyên sâu tái hiện sống động 30 năm trường kỳ kháng chiến gian khổ mà oanh liệt
          của toàn thể dân tộc Việt Nam qua hai cuộc kháng chiến chống thực dân Pháp (1945–1954)
          và đế quốc Mỹ cứu nước (1954–1975).
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full max-w-xl"
        >
          {/* Button 1: Khám phá lịch sử */}
          <button
            onClick={onExplore}
            className="flex-1 min-w-[200px] sm:min-w-[220px] px-6 py-4 rounded-xl bg-gradient-to-r from-[#800000] via-[#991515] to-[#800000] hover:from-[#9B1212] hover:to-[#B31717] text-[#FAF8F5] font-serif font-bold tracking-wide border border-[#C5A059] shadow-xl shadow-red-950/60 hover:shadow-red-800/80 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <Compass size={20} className="text-[#FFD700] group-hover:rotate-45 transition-transform" />
            <span>KHÁM PHÁ LỊCH SỬ</span>
          </button>

          {/* Button 2: Bắt đầu hành trình */}
          <button
            onClick={onStartJourney}
            className="flex-1 min-w-[200px] sm:min-w-[220px] px-6 py-4 rounded-xl bg-[#1C1613]/90 hover:bg-[#2A201A] text-[#FFD700] font-serif font-bold tracking-wide border border-[#C5A059]/60 hover:border-[#FFD700] shadow-lg shadow-black/50 transform hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <BookOpen size={20} className="text-[#FFD700] group-hover:scale-110 transition-transform" />
            <span>BẮT ĐẦU HÀNH TRÌNH</span>
          </button>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        onClick={onExplore}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 cursor-pointer text-gray-400 hover:text-[#FFD700] transition-colors"
      >
        <span className="text-[11px] uppercase tracking-widest text-[#C5A059]">Cuộn xuống triển lãm</span>
        <ChevronDown size={20} />
      </motion.div>
    </section>
  );
};
