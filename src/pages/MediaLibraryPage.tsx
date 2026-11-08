import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image, Video, Play, X } from 'lucide-react';
import { imageUrls as libraryImageUrls, videoUrls as libraryVideoUrls } from 'virtual:media-library-assets';

// Actual local video files copied from d:\hinhlsdang\video
const authenticVideos = [
  {
    id: 'vid-01',
    url: '/media/video/1793936565898_2964594915322034070_g8682714676790492621.mp4',
    title: 'Tuyên ngôn Độc lập 2/9/1945 tại Quảng trường Ba Đình',
    period: 'Kháng chiến chống Pháp',
    duration: 'Tư liệu lịch sử',
  },
  {
    id: 'vid-02',
    url: '/media/video/1793936565920_2964594915322034070_g8682714676790492621.mp4',
    title: 'Toàn quốc kháng chiến & Chiến trường Việt Bắc 1946–1947',
    period: 'Kháng chiến chống Pháp',
    duration: 'Tư liệu lịch sử',
  },
  {
    id: 'vid-03',
    url: '/media/video/1793936565942_2964594915322034070_g8682714676790492621.mp4',
    title: 'Chiến thắng Điện Biên Phủ 1954 lừng lẫy năm châu',
    period: 'Kháng chiến chống Pháp',
    duration: 'Tư liệu lịch sử',
  },
  {
    id: 'vid-04',
    url: '/media/video/1793936565981_2964594915322034070_g8682714676790492621.mp4',
    title: 'Tuyến lửa Trường Sơn & Chiến đấu chống chiến tranh cục bộ',
    period: 'Kháng chiến chống Mỹ',
    duration: 'Tư liệu lịch sử',
  },
  {
    id: 'vid-05',
    url: '/media/video/1793936566006_2964594915322034070_g8682714676790492621.mp4',
    title: 'Tổng tiến công và nổi dậy Tết Mậu Thân 1968',
    period: 'Kháng chiến chống Mỹ',
    duration: 'Tư liệu lịch sử',
  },
  {
    id: 'vid-06',
    url: '/media/video/1793936566047_2964594915322034070_g8682714676790492621.mp4',
    title: 'Điện Biên Phủ trên không 1972 & Hiệp định Paris 1973',
    period: 'Kháng chiến chống Mỹ',
    duration: 'Tư liệu lịch sử',
  },
  {
    id: 'vid-07',
    url: '/media/video/1793936566208_2964594915322034070_g8682714676790492621.mp4',
    title: 'Đại thắng mùa Xuân 30/4/1975 – Non sông thống nhất',
    period: 'Kháng chiến chống Mỹ',
    duration: 'Tư liệu lịch sử',
  }
];

// Sample authentic images from public/media/anh
const authenticPhotos = [
  {
    id: 'photo-01',
    url: '/media/anh/1793932221999_5601981979445790988_g8682714676790492621_70c6c266429d0bc83d10f7caf95a9936.jpg',
    caption: 'Bác Hồ đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình ngày 2/9/1945',
    warPeriod: 'french',
    category: 'ceremony'
  },
  {
    id: 'photo-02',
    url: '/media/anh/1793932222043_5601981979445790988_g8682714676790492621_b0e27a947d55944c1c05fe526966462c.jpg',
    caption: 'Quân và dân Thủ đô Hà Nội chiến đấu bảo vệ Tổ quốc những ngày đầu toàn quốc kháng chiến 1946',
    warPeriod: 'french',
    category: 'battlefield'
  },
  {
    id: 'photo-03',
    url: '/media/anh/1793932222068_5601981979445790988_g8682714676790492621_02bcc31cac7bf66e137935d5abdecd20.jpg',
    caption: 'Bộ đội ta phục kích địch trên đường số 4 – Chiến dịch Việt Bắc Thu – Đông 1947',
    warPeriod: 'french',
    category: 'battlefield'
  },
  {
    id: 'photo-04',
    url: '/media/anh/1793932222088_5601981979445790988_g8682714676790492621_44260a5399d0b7a91b172f2d8fabf12f.jpg',
    caption: 'Chủ tịch Hồ Chí Minh quan sát mặt trận trong Chiến dịch Biên giới Thu – Đông 1950',
    warPeriod: 'french',
    category: 'portrait'
  },
  {
    id: 'photo-05',
    url: '/media/anh/1793932222106_5601981979445790988_g8682714676790492621_8fb472010b5396ae41be7c9b85e35a97.jpg',
    caption: 'Kéo pháo vào trận địa chiến dịch Điện Biên Phủ 1954',
    warPeriod: 'french',
    category: 'battlefield'
  },
  {
    id: 'photo-06',
    url: '/media/anh/1793932222122_5601981979445790988_g8682714676790492621_2a244d3a3c15d133f3f69ea5dcf2bbe7.jpg',
    caption: 'Đội quân tóc dài và nhân dân Bến Tre trong phong trào Đồng Khởi 1960',
    warPeriod: 'american',
    category: 'battlefield'
  },
  {
    id: 'photo-07',
    url: '/media/anh/1793932222139_5601981979445790988_g8682714676790492621_56ff0d14bd5ee82ef2a7cb42ea53f393.jpg',
    caption: 'Đoàn xe vận tải quân sự vượt Trường Sơn chi viện tiền tuyến lớn miền Nam',
    warPeriod: 'american',
    category: 'battlefield'
  },
  {
    id: 'photo-08',
    url: '/media/anh/1793932222155_5601981979445790988_g8682714676790492621_232cfbe32437805aef524185084fcddd.jpg',
    caption: 'Các chiến sĩ biệt động và quân giải phóng trong Tổng tiến công Tết Mậu Thân 1968',
    warPeriod: 'american',
    category: 'battlefield'
  },
  {
    id: 'photo-09',
    url: '/media/anh/1793932222171_5601981979445790988_g8682714676790492621_4e93ccf1c5c13c0b278efb85bb880feb.jpg',
    caption: 'Bắn rơi máy bay B-52 trên bầu trời Hà Nội – Điện Biên Phủ trên không tháng 12/1972',
    warPeriod: 'american',
    category: 'battlefield'
  },
  {
    id: 'photo-10',
    url: '/media/anh/1793932222187_5601981979445790988_g8682714676790492621_9fa38103129b31efd32bf1a2a8317cea.jpg',
    caption: 'Xe tăng 390 húc đổ cổng chính Dinh Độc Lập trưa ngày 30/4/1975 lịch sử',
    warPeriod: 'american',
    category: 'battlefield'
  }
];

export const MediaLibraryPage: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const photos = Array.from(new Set([...libraryImageUrls, ...authenticPhotos.map(photo => photo.url)]));
  const videos = Array.from(new Set([...libraryVideoUrls, ...authenticVideos.map(video => video.url)]));

  return (
    <div className="min-h-screen bg-[#FDFAF4] dark:bg-[#0A0A0A] pt-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0A0A0A] via-[#1a0a00] to-[#2C1A0E] py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#C9922C] text-sm font-semibold tracking-widest uppercase">Thư Viện</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-3">
              Hình Ảnh & <span className="text-[#C9922C]">Video</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
        {/* SECTION 1: VIDEO TƯ LIỆU THỰC TẾ (PHÁT TRỰC TIẾP) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-[#2C1A0E] dark:text-white flex items-center gap-2">
              <Video size={24} className="text-[#8B1A1A]" />
              Video
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map(videoUrl => (
              <motion.button
                key={videoUrl}
                type="button"
                aria-label="Phát video"
                onClick={() => setSelectedVideo(videoUrl)}
                whileHover={{ y: -3 }}
                className="group relative aspect-video cursor-pointer bg-black rounded-xl overflow-hidden border border-white/10 hover:border-[#C9922C] transition-all shadow-md"
              >
                <video
                  src={videoUrl}
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  preload="metadata"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#8B1A1A]/90 group-hover:bg-[#C9922C] text-white group-hover:text-black flex items-center justify-center transition-colors shadow-xl">
                    <Play size={20} className="ml-1" />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* SECTION 2: BỘ SƯU TẬP ẢNH TƯ LIỆU */}
        <div>
          <h2 className="text-2xl font-black text-[#2C1A0E] dark:text-white flex items-center gap-2 mb-6">
            <Image size={24} className="text-[#C9922C]" />
            Ảnh
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {photos.map(photoUrl => (
              <motion.button
                key={photoUrl}
                type="button"
                aria-label="Mở ảnh"
                whileHover={{ y: -3 }}
                onClick={() => setSelectedPhoto(photoUrl)}
                className="group aspect-[4/3] cursor-pointer rounded-xl overflow-hidden bg-black border border-white/10 hover:border-[#C9922C] transition-all shadow-md"
              >
                <img
                  src={photoUrl}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={event => event.stopPropagation()}
              className="relative w-full max-w-5xl bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              <button
                type="button"
                aria-label="Đóng video"
                onClick={() => setSelectedVideo(null)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/70 p-2 text-white hover:bg-black"
              >
                <X size={20} />
              </button>

              <div className="aspect-video bg-black flex items-center justify-center">
                <video
                  src={selectedVideo}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Photo Lightbox Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-pointer"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={e => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-black rounded-xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-3 right-3 z-10 p-2 bg-black/60 hover:bg-black/90 text-white rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <img
                src={selectedPhoto}
                alt=""
                className="w-full max-h-[85vh] object-contain bg-black"
              />
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MediaLibraryPage;
