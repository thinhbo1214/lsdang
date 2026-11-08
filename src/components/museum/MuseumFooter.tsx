import React from 'react';
import { Landmark, ShieldCheck, ChevronUp } from 'lucide-react';

export const MuseumFooter: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0807] text-[#FAF8F5] border-t-2 border-[#C5A059]/40 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#800000] border border-[#FFD700] flex items-center justify-center shadow-lg">
                <span className="text-[#FFD700] text-lg font-bold">★</span>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#C5A059]">
                  Bảo Tàng Lịch Sử Trực Tuyến
                </div>
                <div className="text-lg font-black font-serif text-white tracking-wide">
                  VIỆT NAM (1945 – 1975)
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
              Dự án số hóa và tái hiện trực quan 30 năm kháng chiến trường kỳ vì độc lập, tự do
              và thống nhất non sông gấm vóc. Thiết kế theo chuẩn mực bảo tàng hiện đại, phục vụ
              học sinh, sinh viên và nhân dân cả nước tìm hiểu lịch sử hào hùng của dân tộc.
            </p>

            <div className="p-3.5 rounded-xl bg-[#140F0D] border border-white/5 text-xs text-[#C5A059] flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#FFD700] shrink-0" />
              <span>Dự án giáo dục lịch sử phi thương mại – Tôn trọng tính chính xác lịch sử.</span>
            </div>
          </div>

          {/* Col 2: Fast Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold font-serif text-[#FFD700] uppercase tracking-wider mb-2">
              Các Phòng Triển Lãm
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-300 font-sans">
              <li>
                <a href="#tong-quan" className="hover:text-[#FFD700] transition-colors">
                  • Lời giới thiệu tổng quan 30 năm
                </a>
              </li>
              <li>
                <a href="#chuyen-de-1" className="hover:text-[#FFD700] transition-colors">
                  • Chuyên đề I: Chống Pháp (1945–1954)
                </a>
              </li>
              <li>
                <a href="#chuyen-de-2" className="hover:text-[#FFD700] transition-colors">
                  • Chuyên đề II: Chống Mỹ (1954–1975)
                </a>
              </li>
              <li>
                <a href="#thu-vien" className="hover:text-[#FFD700] transition-colors">
                  • Thư viện ảnh & phim tài liệu
                </a>
              </li>
              <li>
                <a href="#tong-ket-1975" className="hover:text-[#FFD700] transition-colors">
                  • 1975 – Non sông liền một dải
                </a>
              </li>
              <li>
                <a href="#trac-nghiem" className="hover:text-[#FFD700] transition-colors">
                  • Bài kiểm tra kiến thức 10 câu
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Reliable Sources & Archive Credits */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold font-serif text-[#FFD700] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Landmark size={15} />
              <span>Nguồn Tư Liệu Lưu Trữ</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-gray-400 font-sans">
              <li>• Bảo tàng Chứng tích Chiến tranh (baotangchungtichchientranh.vn)</li>
              <li>• Bảo tàng Lịch sử Quốc gia Việt Nam</li>
              <li>• Bảo tàng Lịch sử Quân sự Việt Nam</li>
              <li>• Bảo tàng Chiến thắng Lịch sử Điện Biên Phủ</li>
              <li>• Thông tấn xã Việt Nam (TTXVN) & Điện ảnh QĐND</li>
              <li>• Sách giáo khoa Lịch sử lớp 12 – Bộ Giáo dục và Đào tạo</li>
              <li>• Văn kiện Đảng Toàn tập & Lịch sử Quân đội Nhân dân Việt Nam</li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div>
            © 1945 – 1975 – 2026 Việt Nam – Hành Trình Lịch Sử. Bản quyền tư liệu thuộc về các cơ quan lưu trữ quốc gia.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#C5A059] hover:text-[#FFD700] transition-colors cursor-pointer"
          >
            <span>Lên đầu trang</span>
            <ChevronUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};
