import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '../components/timeline/Timeline';
import { frenchWarEvents } from '../data/frenchWarEvents';

const FrenchWarPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDFAF4] dark:bg-[#0A0A0A] pt-16">
      {/* Page Hero */}
      <div className="relative bg-gradient-to-br from-[#0A0A0A] via-[#1a0500] to-[#2C1A0E] py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #8B1A1A 0, #8B1A1A 1px, transparent 0, transparent 50%)' }} />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-block bg-[#8B1A1A]/30 border border-[#8B1A1A]/50 rounded-full px-4 py-1.5 mb-4">
              <span className="text-[#C9922C] text-sm font-semibold tracking-wide">1945 – 1954</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Kháng Chiến Chống
              <br />
              <span className="text-[#C9922C]">Thực Dân Pháp</span>
            </h1>
            <div className="w-20 h-1 bg-[#8B1A1A] mb-6" />
            <p className="text-gray-400 text-lg max-w-3xl leading-relaxed">
              9 năm trường kỳ kháng chiến (1945–1954) – từ bản Tuyên ngôn Độc lập lịch sử đến chiến thắng Điện Biên Phủ lừng lẫy, kết thúc bằng Hiệp định Genève công nhận độc lập, chủ quyền của Việt Nam.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-6 mt-10 max-w-lg">
              {[
                { n: '9', l: 'Năm kháng chiến' },
                { n: `${frenchWarEvents.length}`, l: 'Sự kiện lịch sử' },
                { n: '7/5/1954', l: 'Ngày chiến thắng' },
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
              Dòng Thời Gian Kháng Chiến Chống Pháp
            </h2>
            <p className="text-gray-500 text-sm mt-2">
              Nhấn vào từng sự kiện để xem chi tiết • Dùng mũi tên hoặc phím ← → để điều hướng
            </p>
          </div>

          <Timeline
            events={frenchWarEvents}
            warTitle="Kháng chiến chống Pháp"
            color="red"
          />
        </div>
      </div>
    </div>
  );
};

export default FrenchWarPage;
