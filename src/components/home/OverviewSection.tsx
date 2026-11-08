import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import { frenchWarEvents } from '../../data/frenchWarEvents';
import { americanWarEvents } from '../../data/americanWarEvents';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const OverviewSection: React.FC = () => {
  const frenchMajor = frenchWarEvents.filter(e => e.significance === 'major').slice(0, 2);
  const americanMajor = americanWarEvents.filter(e => e.significance === 'major').slice(0, 2);

  return (
    <section id="overview" className="py-20 bg-[#FDFAF4] dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#C9922C] text-sm font-semibold tracking-widest uppercase mb-3">
            Tổng Quan Lịch Sử
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#2C1A0E] dark:text-[#F5E8C8] mb-4">
            30 Năm Đấu Tranh Giải Phóng Dân Tộc
          </h2>
          <div className="w-16 h-1 bg-[#8B1A1A] mx-auto mb-6" />
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg">
            Từ bản Tuyên ngôn Độc lập năm 1945 đến ngày thống nhất đất nước 30/4/1975, dân tộc Việt Nam đã trải qua hai cuộc kháng chiến trường kỳ, kiên cường chống lại hai đế quốc lớn nhất thế giới.
          </p>
        </motion.div>

        {/* Two war cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* French War */}
          <motion.div
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-[#8B1A1A]/30 bg-gradient-to-br from-[#2C1A0E] to-[#1a0500] p-8 card-hover cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#8B1A1A]/20 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="inline-block bg-[#8B1A1A]/40 border border-[#8B1A1A]/60 rounded-lg px-3 py-1 text-[#C9922C] text-xs font-semibold tracking-wide mb-4">
                1945 – 1954
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Kháng Chiến Chống Thực Dân Pháp
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                9 năm kháng chiến trường kỳ, từ Toàn quốc kháng chiến đến Chiến thắng Điện Biên Phủ lừng lẫy, kết thúc bằng Hiệp định Genève.
              </p>

              {/* Key events */}
              <div className="space-y-2 mb-6">
                {frenchMajor.map(event => (
                  <div key={event.id} className="flex items-center gap-3">
                    <Calendar size={12} className="text-[#C9922C] flex-shrink-0" />
                    <span className="text-gray-400 text-xs">{event.date} – {event.title.split('–')[0].trim()}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3">
                  <Calendar size={12} className="text-[#C9922C] flex-shrink-0" />
                  <span className="text-gray-500 text-xs">và {frenchWarEvents.length - 2} sự kiện khác...</span>
                </div>
              </div>

              <Link
                to="/chong-phap"
                className="inline-flex items-center gap-2 bg-[#8B1A1A] hover:bg-[#a52020] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Xem dòng thời gian <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>

          {/* American War */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-2xl border border-[#C9922C]/30 bg-gradient-to-br from-[#1a1000] to-[#0a0800] p-8 card-hover cursor-pointer"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#C9922C]/10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 transition-transform duration-500" />

            <div className="relative z-10">
              <div className="inline-block bg-[#C9922C]/20 border border-[#C9922C]/40 rounded-lg px-3 py-1 text-[#C9922C] text-xs font-semibold tracking-wide mb-4">
                1954 – 1975
              </div>
              <h3 className="text-2xl font-black text-white mb-3">
                Kháng Chiến Chống Mỹ Cứu Nước
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                21 năm đấu tranh kiên cường, từ Đồng Khởi đến Đại thắng mùa Xuân 1975, thống nhất đất nước trong vinh quang.
              </p>

              <div className="space-y-2 mb-6">
                {americanMajor.map(event => (
                  <div key={event.id} className="flex items-center gap-3">
                    <Calendar size={12} className="text-[#C9922C] flex-shrink-0" />
                    <span className="text-gray-400 text-xs">{event.date} – {event.title.split('–')[0].split('(')[0].trim()}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3">
                  <Calendar size={12} className="text-[#C9922C] flex-shrink-0" />
                  <span className="text-gray-500 text-xs">và {americanWarEvents.length - 2} sự kiện khác...</span>
                </div>
              </div>

              <Link
                to="/chong-my"
                className="inline-flex items-center gap-2 bg-[#C9922C] hover:bg-[#e0a030] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
              >
                Xem dòng thời gian <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Key numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '9', label: 'Năm chống Pháp', sub: '1945–1954', color: '#8B1A1A' },
            { number: '21', label: 'Năm chống Mỹ', sub: '1954–1975', color: '#C9922C' },
            { number: '54', label: 'Ngày Điện Biên Phủ', sub: '13/3–7/5/1954', color: '#8B1A1A' },
            { number: '30/4', label: 'Ngày thống nhất', sub: '1975', color: '#C9922C' },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white dark:bg-white/5 rounded-xl p-5 text-center border border-gray-100 dark:border-white/10"
            >
              <div className="text-4xl font-black mb-1" style={{ color: item.color }}>{item.number}</div>
              <div className="text-[#2C1A0E] dark:text-gray-200 font-semibold text-sm">{item.label}</div>
              <div className="text-gray-400 text-xs mt-1">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OverviewSection;
