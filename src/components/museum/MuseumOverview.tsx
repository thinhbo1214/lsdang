import React from 'react';
import { motion } from 'framer-motion';
import { Landmark, ArrowRight, Clock } from 'lucide-react';

interface MuseumOverviewProps {
  onSelectPeriod1: () => void;
  onSelectPeriod2: () => void;
}

export const MuseumOverview: React.FC<MuseumOverviewProps> = ({
  onSelectPeriod1,
  onSelectPeriod2,
}) => {
  const metrics = [
    {
      value: '30',
      unit: 'Năm',
      label: 'Trường kỳ kháng chiến',
      desc: '1945 – 1975: Toàn dân một lòng cứu nước',
    },
    {
      value: '02',
      unit: 'Cuộc',
      label: 'Kháng chiến vĩ đại',
      desc: 'Đánh bại thực dân Pháp & đế quốc Mỹ',
    },
    {
      value: '19',
      unit: 'Mốc son',
      label: 'Sự kiện & Chiến dịch',
      desc: 'Được tái hiện chuẩn xác và sinh động',
    },
    {
      value: '100%',
      unit: '',
      label: 'Non sông liền một dải',
      desc: 'Đại thắng mùa Xuân 30/04/1975 lịch sử',
    },
  ];

  return (
    <section id="tong-quan" className="py-20 bg-[#120F0D] text-[#FAF8F5] relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#C5A059] mb-3">
            <Landmark size={14} />
            <span>Lời Giới Thiệu Từ Bảo Tàng</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-[#FAF8F5] mb-5 tracking-tight">
            TỔNG QUAN <span className="text-[#C5A059]">30 NĂM KHÁNG CHIẾN</span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#C5A059] to-transparent mx-auto mb-6" />

          <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-sans">
            Giai đoạn 1945–1975 là trang sử vàng chói lọi nhất trong lịch sử dựng nước và giữ nước
            của dân tộc Việt Nam. Trải qua 30 năm chiến đấu kiên cường dưới sự lãnh đạo sáng suốt
            của Đảng và Chủ tịch Hồ Chí Minh, nhân dân Việt Nam đã lập nên những chiến công hiển hách,
            chấm dứt hoàn toàn ách thống trị của chủ nghĩa thực dân, bảo vệ toàn vẹn độc lập và
            thống nhất non sông gấm vóc.
          </p>
        </div>

        {/* 4 Museum Metric Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-b from-[#1E1814] to-[#16120F] border border-[#C5A059]/30 shadow-lg text-center group hover:border-[#FFD700]/60 transition-all hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-[#FFD700] mb-1">
                {metric.value}
                <span className="text-xs sm:text-sm font-sans font-normal text-[#C5A059] ml-1">
                  {metric.unit}
                </span>
              </div>
              <div className="text-sm sm:text-base font-bold text-[#F9F6F0] mb-1 font-serif">
                {metric.label}
              </div>
              <p className="text-xs text-gray-400 font-sans">
                {metric.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 2 Big Theme Presentation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Kháng chiến chống Pháp */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden bg-[#181310] border border-[#800000]/60 hover:border-[#C5A059] shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Image Banner */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src="/media/anh/1793932222106_5601981979445790988_g8682714676790492621_8fb472010b5396ae41be7c9b85e35a97.jpg"
                alt="Kháng chiến chống thực dân Pháp"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181310] via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#800000] text-[#FFD700] text-xs font-bold uppercase tracking-wider border border-[#C5A059]/40">
                Chuyên đề I
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#C5A059] text-xs uppercase tracking-widest font-semibold block mb-1">
                  Giai đoạn 1945 – 1954
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white leading-tight">
                  Kháng Chiến Chống Thực Dân Pháp
                </h3>
              </div>
            </div>

            {/* Content & Action */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                Tái hiện chặng đường 9 năm trường kỳ kháng chiến với 7 mốc son lịch sử: từ Ngày Tuyên ngôn Độc lập
                2/9/1945, Toàn quốc kháng chiến, Chiến dịch Việt Bắc, Chiến dịch Biên giới đến đỉnh cao
                Điện Biên Phủ và Hiệp định Genève 1954.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-[#C5A059] font-medium flex items-center gap-1.5">
                  <Clock size={14} /> 7 Mốc triển lãm chính
                </span>
                <button
                  onClick={onSelectPeriod1}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#800000] hover:bg-[#9E1414] text-[#FAF8F5] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Vào phòng trưng bày</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Kháng chiến chống Mỹ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative rounded-2xl overflow-hidden bg-[#181310] border border-[#800000]/60 hover:border-[#C5A059] shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Image Banner */}
            <div className="relative h-56 sm:h-64 overflow-hidden">
              <img
                src="/media/anh/1793932222187_5601981979445790988_g8682714676790492621_9fa38103129b31efd32bf1a2a8317cea.jpg"
                alt="Kháng chiến chống Mỹ cứu nước"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181310] via-black/40 to-transparent" />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#800000] text-[#FFD700] text-xs font-bold uppercase tracking-wider border border-[#C5A059]/40">
                Chuyên đề II
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#C5A059] text-xs uppercase tracking-widest font-semibold block mb-1">
                  Giai đoạn 1954 – 1975
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-serif text-white leading-tight">
                  Kháng Chiến Chống Đế Quốc Mỹ
                </h3>
              </div>
            </div>

            {/* Content & Action */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                Hành trình 21 năm đấu tranh gian khổ với 12 mốc son oanh liệt: Phong trào Đồng Khởi, đánh bại
                các chiến lược chiến tranh, Tổng tiến công Tết Mậu Thân 1968, Điện Biên Phủ trên không 1972,
                Hiệp định Paris 1973 và Chiến dịch Hồ Chí Minh lịch sử ngày 30/04/1975.
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <span className="text-xs text-[#C5A059] font-medium flex items-center gap-1.5">
                  <Clock size={14} /> 12 Mốc triển lãm chính
                </span>
                <button
                  onClick={onSelectPeriod2}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#800000] hover:bg-[#9E1414] text-[#FAF8F5] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                >
                  <span>Vào phòng trưng bày</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
