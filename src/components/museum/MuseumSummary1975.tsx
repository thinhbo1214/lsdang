import React from 'react';
import { motion } from 'framer-motion';
import { Award, Sparkles, ChevronRight, Film, ArrowDown } from 'lucide-react';

interface MuseumSummary1975Props {
  onStartQuiz: () => void;
  onOpenPhoto: (photo: { url: string; title: string; caption?: string; credit?: string; year?: number }) => void;
  onGoToGallery?: () => void;
}

export const MuseumSummary1975: React.FC<MuseumSummary1975Props> = ({
  onStartQuiz,
  onOpenPhoto,
  onGoToGallery,
}) => {
  return (
    <section id="tong-ket-1975" className="py-24 bg-gradient-to-b from-[#120F0D] via-[#240606] to-[#0F0C0A] text-[#FAF8F5] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#800000]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border-2 border-[#C5A059] bg-[#160E0B]/90 backdrop-blur-md p-8 sm:p-14 shadow-2xl relative overflow-hidden"
        >
          {/* Top Banner Tag */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#800000] text-[#FFD700] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/50 shadow-md">
              <Sparkles size={14} />
              Tổng Kết Hành Trình 30 Năm Kháng Chiến
            </span>
          </div>

          {/* Section Monumental Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black font-serif text-center text-[#FFD700] tracking-tight uppercase mb-6 leading-tight drop-shadow-md">
            1975 – NON SÔNG LIỀN MỘT DẢI
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-transparent via-[#FFD700] to-transparent mx-auto mb-10" />

          {/* Centerpiece Image & Historical Summary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
            {/* Historical Photo of 30/04/1975 */}
            <div className="lg:col-span-6">
              <div
                onClick={() =>
                  onOpenPhoto({
                    url: '/media/anh/1793932222187_5601981979445790988_g8682714676790492621_9fa38103129b31efd32bf1a2a8317cea.jpg',
                    title: 'Đại thắng Mùa Xuân 30/04/1975 – Non sông thu về một mối',
                    caption: 'Xe tăng 390 húc tung cổng Dinh Độc Lập lúc 10h45 ngày 30/4/1975, mở đầu cho giờ phút hòa bình và thống nhất dân tộc.',
                    credit: 'Bảo tàng Chứng tích Chiến tranh',
                    year: 1975,
                  })
                }
                className="relative rounded-2xl overflow-hidden border-2 border-[#C5A059] shadow-2xl group cursor-pointer"
              >
                <img
                  src="/media/anh/1793932222187_5601981979445790988_g8682714676790492621_9fa38103129b31efd32bf1a2a8317cea.jpg"
                  alt="Xe tăng 390 tại Dinh Độc Lập ngày 30/04/1975"
                  className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="text-xs sm:text-sm text-gray-200 font-sans leading-snug">
                    Xe tăng 390 húc tung cánh cổng chính Dinh Độc Lập trưa ngày 30/4/1975 lịch sử.
                  </p>
                  <span className="text-[11px] text-[#FFD700] font-semibold mt-1 block">
                    Nhấn vào ảnh để xem kích thước lớn
                  </span>
                </div>
              </div>
            </div>

            {/* Historical Summary Text */}
            <div className="lg:col-span-6 space-y-4 text-gray-300 font-sans text-sm sm:text-base leading-relaxed">
              <p className="first-letter:text-4xl first-letter:font-serif first-letter:font-bold first-letter:text-[#FFD700] first-letter:mr-2 first-letter:float-left">
                Đại thắng mùa Xuân 1975 là một trong những trang sử oanh liệt và vẻ vang nhất trong hàng nghìn
                năm dựng nước và giữ nước của dân tộc Việt Nam. Chiến dịch Hồ Chí Minh lịch sử đã kết thúc
                thắng lợi trọn vẹn 30 năm chiến tranh giải phóng dân tộc và bảo vệ Tổ quốc (1945–1975).
              </p>

              <p>
                Thắng lợi vĩ đại này đã quét sạch hoàn toàn bóng quân xâm lược trên toàn bộ bờ cõi Việt Nam,
                chấm dứt vĩnh viễn ách thống trị kéo dài hơn một thế kỷ của chủ nghĩa thực dân cũ và mới,
                hoàn thành trọn vẹn mục tiêu độc lập dân tộc và thống nhất đất nước mà Chủ tịch Hồ Chí Minh
                và muôn triệu người con ưu tú của Tổ quốc đã hy sinh xương máu để giành lấy.
              </p>

              <div className="p-4 rounded-xl bg-[#280A0A]/80 border border-[#C5A059]/50 text-xs sm:text-sm text-[#F5E8C8] italic font-serif">
                "Thắng lợi của nhân dân ta trong sự nghiệp kháng chiến chống Mỹ, cứu nước mãi mãi được ghi vào
                lịch sử dân tộc như một trong những trang chói lọi nhất, một biểu tượng sáng ngời về sự toàn thắng
                của chủ nghĩa anh hùng cách mạng và trí tuệ con người."
                <span className="block not-italic font-bold text-[#FFD700] text-xs mt-1 text-right">
                  — Báo cáo Chính trị tại Đại hội Đảng toàn quốc lần thứ IV
                </span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="text-center pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4">
            {onGoToGallery && (
              <button
                onClick={onGoToGallery}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-[#1C1613] hover:bg-[#281F1A] text-[#FAF8F5] text-sm font-serif font-bold tracking-wide border border-[#C5A059]/60 hover:border-[#FFD700] shadow-lg transition-all cursor-pointer"
              >
                <Film size={18} className="text-[#C5A059]" />
                <span>Xem Thư Viện Tư Liệu Ảnh & Phim</span>
                <ArrowDown size={16} className="text-[#C5A059]" />
              </button>
            )}

            <button
              onClick={onStartQuiz}
              className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 rounded-xl bg-gradient-to-r from-[#800000] via-[#A81616] to-[#800000] hover:from-[#9C1313] hover:to-[#BD1A1A] text-[#FAF8F5] text-sm sm:text-base font-serif font-black tracking-wide border-2 border-[#FFD700] shadow-xl shadow-red-950/80 hover:scale-105 transition-all cursor-pointer group"
            >
              <Award size={20} className="text-[#FFD700] group-hover:rotate-12 transition-transform" />
              <span>KIỂM TRA KIẾN THỨC (10 CÂU HỎI)</span>
              <ChevronRight size={18} className="text-[#FFD700] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
