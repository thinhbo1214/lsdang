import React from 'react';
import { Link } from 'react-router-dom';
import { Flag, BookOpen, Map, Users, Image, HelpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[#8B1A1A] rounded-full flex items-center justify-center">
                <Flag size={16} className="text-white" />
              </div>
              <div>
                <div className="text-[#C9922C] font-bold text-sm">Việt Nam</div>
                <div className="text-white text-xs">Dấu Ấn Lịch Sử</div>
              </div>
            </div>
            <p className="text-xs leading-relaxed">
              Website giáo dục lịch sử Việt Nam, tái hiện hai cuộc kháng chiến 1945–1975 thông qua dòng thời gian, hình ảnh và câu chuyện lịch sử.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Khám Phá</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/chong-phap" className="hover:text-[#C9922C] transition-colors flex items-center gap-2"><BookOpen size={12} />Kháng chiến chống Pháp</Link></li>
              <li><Link to="/chong-my" className="hover:text-[#C9922C] transition-colors flex items-center gap-2"><BookOpen size={12} />Kháng chiến chống Mỹ</Link></li>
              <li><Link to="/ban-do" className="hover:text-[#C9922C] transition-colors flex items-center gap-2"><Map size={12} />Bản đồ lịch sử</Link></li>
              <li><Link to="/nhan-vat" className="hover:text-[#C9922C] transition-colors flex items-center gap-2"><Users size={12} />Nhân vật lịch sử</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Tư Liệu</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/thu-vien" className="hover:text-[#C9922C] transition-colors flex items-center gap-2"><Image size={12} />Thư viện hình ảnh</Link></li>
              <li><Link to="/trac-nghiem" className="hover:text-[#C9922C] transition-colors flex items-center gap-2"><HelpCircle size={12} />Trắc nghiệm lịch sử</Link></li>
            </ul>
          </div>

          {/* Sources */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Nguồn Tham Khảo</h4>
            <ul className="space-y-2 text-xs">
              <li>SGK Lịch sử lớp 12 – Bộ GD&ĐT</li>
              <li>Bảo tàng Lịch sử Quốc gia Việt Nam</li>
              <li>Bảo tàng Lịch sử Quân sự Việt Nam</li>
              <li>TTXVN – Thông tấn xã Việt Nam</li>
              <li>NXB Quân đội nhân dân</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-xs text-center">
          <p>© 2024 Việt Nam – Dấu Ấn Lịch Sử. Website giáo dục phi thương mại.</p>
          <p className="mt-1 text-gray-600">Tất cả tư liệu lịch sử được trích dẫn từ nguồn chính thống. Hình ảnh cần bổ sung từ bảo tàng và cơ quan lưu trữ.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
