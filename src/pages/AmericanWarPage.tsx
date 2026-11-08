import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/timeline/Timeline';
import { americanWarEvents } from '../data/americanWarEvents';

const AmericanWarPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFAF4] dark:bg-[#0A0A0A] pt-16">
      {/* Page Hero */}
      <div className="relative bg-gradient-to-br from-[#0A0A0A] via-[#0a0800] to-[#1a1000] py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #C9922C 0, #C9922C 1px, transparent 0, transparent 50%)' }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-[#C9922C]/20 border border-[#C9922C]/40 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#C9922C] text-sm font-semibold tracking-wide">1954 – 1975</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Kháng Chiến Chống
              <br />
              <span className="text-[#C9922C]">Mỹ Cứu Nước</span>
            </h1>
            <div className="w-20 h-1 bg-[#C9922C] mb-6" />
            <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
              21 năm đấu tranh kiên cường (1954–1975) – từ phong trào Đồng Khởi đến Đại thắng mùa Xuân 1975, thống nhất đất nước trong vinh quang ngày 30/4/1975.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 max-w-lg">
              {[
                { n: '21', l: 'Năm kháng chiến' },
                { n: `${americanWarEvents.length}`, l: 'Sự kiện lịch sử' },
                { n: '30/4/1975', l: 'Ngày thống nhất' },
              ].map(s => (
                <div key={s.l}>
                  <div className="text-2xl font-black text-[#C9922C]">{s.n}</div>
                  <div className="text-gray-500 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center px-6 mb-8">
            <h2 className="text-2xl font-black text-[#2C1A0E] dark:text-white">
              Dòng Thời Gian Kháng Chiến Chống Mỹ
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Nhấn vào từng sự kiện để xem chi tiết • Dùng mũi tên hoặc phím ← → để điều hướng
            </p>
          </div>

          <Timeline
            events={americanWarEvents}
            warTitle="Kháng chiến chống Mỹ"
            color="gold"
          />
        </div>
      </div>
    </div>
  );
};

export default AmericanWarPage;
