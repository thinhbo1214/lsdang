import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const scrollToContent = () => {
    document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero" />

      {/* Decorative overlay pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(201,146,44,0.3) 40px,
            rgba(201,146,44,0.3) 41px
          )`,
        }}
      />

      {/* Star decorations */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-[#C9922C] rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-[#C9922C] rounded-full opacity-40 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-[#C9922C] rounded-full opacity-50 animate-pulse" style={{ animationDelay: '0.5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Year badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-[#C9922C]/20 border border-[#C9922C]/40 rounded-full px-4 py-2 mb-8"
        >
          <div className="w-2 h-2 bg-[#C9922C] rounded-full animate-pulse" />
          <span className="text-[#C9922C] text-sm font-medium tracking-widest">1945 — 1975</span>
          <div className="w-2 h-2 bg-[#C9922C] rounded-full animate-pulse" />
        </motion.div>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white mb-4 leading-tight"
        >
          <span className="text-[#C9922C] text-shadow-gold">VIỆT NAM</span>
          <br />
          <span className="text-white/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            DẤU ẤN LỊCH SỬ
          </span>
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-32 h-0.5 bg-gradient-to-r from-transparent via-[#C9922C] to-transparent mx-auto my-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-300 text-lg sm:text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Hành trình đấu tranh giành độc lập và thống nhất đất nước
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-500 text-sm mb-12 max-w-2xl mx-auto"
        >
          Hai cuộc kháng chiến thần thánh của dân tộc Việt Nam qua dòng thời gian, hình ảnh tư liệu và câu chuyện lịch sử
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            to="/chong-phap"
            className="group relative overflow-hidden bg-[#8B1A1A] hover:bg-[#a52020] text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 w-full sm:w-auto text-center shadow-lg hover:shadow-[#8B1A1A]/40 hover:shadow-xl hover:-translate-y-1"
          >
            <span className="relative z-10">Khám phá kháng chiến chống Pháp</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            to="/chong-my"
            className="group relative overflow-hidden bg-transparent border-2 border-[#C9922C] hover:bg-[#C9922C] text-[#C9922C] hover:text-white font-bold px-8 py-4 rounded-lg transition-all duration-300 w-full sm:w-auto text-center hover:-translate-y-1"
          >
            <span className="relative z-10">Khám phá kháng chiến chống Mỹ</span>
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto"
        >
          {[
            { number: '30', label: 'Năm kháng chiến' },
            { number: '22', label: 'Sự kiện lịch sử' },
            { number: '6', label: 'Nhân vật tiêu biểu' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-black text-[#C9922C]">{stat.number}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToContent}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-[#C9922C] transition-colors"
        aria-label="Cuộn xuống"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;
