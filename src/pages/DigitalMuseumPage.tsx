import React, { useState } from 'react';
import {
  Shield,
  Flag,
  Calendar,
  Clock,
} from 'lucide-react';

import { MuseumHeader } from '../components/museum/MuseumHeader';
import { MuseumHero } from '../components/museum/MuseumHero';
import { MuseumOverview } from '../components/museum/MuseumOverview';
import { MuseumExhibitItem } from '../components/museum/MuseumExhibitItem';
import { MuseumGallery } from '../components/museum/MuseumGallery';
import { MuseumSummary1975 } from '../components/museum/MuseumSummary1975';
import { MuseumQuizSection } from '../components/museum/MuseumQuizSection';
import { MuseumCelebrationModal } from '../components/museum/MuseumCelebrationModal';
import { MuseumFooter } from '../components/museum/MuseumFooter';
import { ImageLightboxModal } from '../components/museum/ImageLightboxModal';
import { VideoPlayerModal } from '../components/museum/VideoPlayerModal';

import { museumExhibits } from '../data/museumExhibitionData';

export const DigitalMuseumPage: React.FC = () => {
  // Modal States
  const [photoModal, setPhotoModal] = useState<{
    isOpen: boolean;
    url: string | null;
    title: string;
    caption?: string;
    credit?: string;
    year?: string | number;
  }>({
    isOpen: false,
    url: null,
    title: '',
  });

  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    url: string | null;
    title: string;
    caption?: string;
    source?: string;
  }>({
    isOpen: false,
    url: null,
    title: '',
  });

  const [celebrationModal, setCelebrationModal] = useState<{
    isOpen: boolean;
    score: number;
    correctCount: number;
    wrongCount: number;
  }>({
    isOpen: false,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
  });

  // State to control when quiz questions reveal
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  // 19 exhibits: 7 French + 12 American
  const frenchExhibits = museumExhibits.filter((ex) => ex.period === 'french');
  const americanExhibits = museumExhibits.filter((ex) => ex.period === 'american');

  // Navigation handlers
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartQuiz = () => {
    setIsQuizStarted(true);
    scrollTo('trac-nghiem');
  };

  const handleOpenPhoto = (photo: {
    url: string;
    title: string;
    caption?: string;
    credit?: string;
    year?: string | number;
  }) => {
    setPhotoModal({
      isOpen: true,
      url: photo.url,
      title: photo.title,
      caption: photo.caption,
      credit: photo.credit,
      year: photo.year,
    });
  };

  const handleOpenVideo = (video: {
    url: string;
    title: string;
    caption?: string;
    source?: string;
  }) => {
    setVideoModal({
      isOpen: true,
      url: video.url,
      title: video.title,
      caption: video.caption,
      source: video.source,
    });
  };

  const handleFinishQuiz = (score: number, correctCount: number, wrongCount: number) => {
    setCelebrationModal({
      isOpen: true,
      score,
      correctCount,
      wrongCount,
    });
  };

  return (
    <div className="min-h-screen bg-[#0E0B0A] text-[#FAF8F5] selection:bg-[#800000] selection:text-[#FFD700]">
      {/* 1. Header */}
      <MuseumHeader onStartQuiz={handleStartQuiz} />

      {/* 2. Full-Width Hero Section */}
      <MuseumHero
        onExplore={() => scrollTo('tong-quan')}
        onStartJourney={() => scrollTo('chuyen-de-1')}
        onGoToQuiz={handleStartQuiz}
      />

      {/* 3. Overview of 30-year resistance */}
      <MuseumOverview
        onSelectPeriod1={() => scrollTo('chuyen-de-1')}
        onSelectPeriod2={() => scrollTo('chuyen-de-2')}
      />

      {/* 4. CHUYÊN ĐỀ 1: KHÁNG CHIẾN CHỐNG PHÁP (1945–1954) */}
      <section id="chuyen-de-1" className="py-20 bg-[#14100E] relative border-t border-[#C5A059]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Theme 1 Big Banner Header */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#2B0505] via-[#1C0D09] to-[#120F0D] border-2 border-[#800000] shadow-2xl p-8 sm:p-14 mb-16 relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#800000] text-[#FFD700] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/40">
                <Shield size={14} />
                <span>Chuyên Đề Triển Lãm I (1945 – 1954)</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-serif text-[#FFD700] tracking-tight uppercase leading-tight">
                KHÁNG CHIẾN CHỐNG THỰC DÂN PHÁP
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                9 năm trường kỳ kháng chiến (1945–1954) là bản hùng ca bất tử của tinh thần "Thà hy sinh tất cả
                chứ nhất định không chịu mất nước". Từ Quảng trường Ba Đình rực rỡ cờ hoa ngày 2/9/1945, quân và dân
                ta đã kiên cường vượt qua muôn vàn gian khổ để làm nên chiến thắng Điện Biên Phủ "lừng lẫy năm châu,
                chấn động địa cầu".
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs text-[#C5A059] font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> 1945 – 1954
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> 7 Mốc lịch sử tuần tự
                </span>
              </div>
            </div>
          </div>

          {/* 7 Exhibits of French War */}
          <div className="space-y-6">
            {frenchExhibits.map((exhibit, idx) => (
              <MuseumExhibitItem
                key={exhibit.id}
                exhibit={exhibit}
                index={idx}
                onOpenPhoto={handleOpenPhoto}
                onOpenVideo={handleOpenVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. CHUYÊN ĐỀ 2: KHÁNG CHIẾN CHỐNG MỸ (1954–1975) */}
      <section id="chuyen-de-2" className="py-20 bg-[#100D0B] relative border-t-2 border-[#800000]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Theme 2 Big Banner Header */}
          <div className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#290808] via-[#1A0F0B] to-[#100D0B] border-2 border-[#800000] shadow-2xl p-8 sm:p-14 mb-16 relative">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#800000] text-[#FFD700] text-xs font-bold uppercase tracking-widest border border-[#C5A059]/40">
                <Flag size={14} />
                <span>Chuyên Đề Triển Lãm II (1954 – 1975)</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black font-serif text-[#FFD700] tracking-tight uppercase leading-tight">
                KHÁNG CHIẾN CHỐNG ĐẾ QUỐC MỸ CỨU NƯỚC
              </h2>

              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                21 năm kháng chiến chống Mỹ (1954–1975) là cuộc chiến tranh giải phóng dân tộc vĩ đại và ác liệt nhất
                trong lịch sử. Với chân lý sáng ngời "Không có gì quý hơn độc lập, tự do", nhân dân hai miền Nam – Bắc
                đã kề vai sát cánh, lần lượt đánh bại mọi chiến lược chiến tranh của đế quốc sừng sỏ nhất thế giới,
                tiến tới Đại thắng mùa Xuân 1975 thống nhất non sông.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs text-[#C5A059] font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> 1954 – 1975
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock size={14} /> 12 Mốc lịch sử tuần tự
                </span>
              </div>
            </div>
          </div>

          {/* 12 Exhibits of American War */}
          <div className="space-y-6">
            {americanExhibits.map((exhibit, idx) => (
              <MuseumExhibitItem
                key={exhibit.id}
                exhibit={exhibit}
                index={idx}
                onOpenPhoto={handleOpenPhoto}
                onOpenVideo={handleOpenVideo}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Phần Tổng Kết: "1975 – NON SÔNG LIỀN MỘT DẢI" (ĐẶT TRƯỚC THƯ VIỆN THEO YÊU CẦU) */}
      <MuseumSummary1975
        onStartQuiz={handleStartQuiz}
        onOpenPhoto={handleOpenPhoto}
        onGoToGallery={() => scrollTo('thu-vien')}
      />

      {/* 7. Thư viện tư liệu ảnh & phim (ĐẶT SAU THỐNG NHẤT 1975 THEO YÊU CẦU) */}
      <MuseumGallery onOpenPhoto={handleOpenPhoto} onOpenVideo={handleOpenVideo} />

      {/* 8. Bài kiểm tra trắc nghiệm 10 câu (CHỈ HIỂN THỊ CÂU HỎI KHI BẤM BẮT ĐẦU) */}
      <MuseumQuizSection
        isStarted={isQuizStarted}
        onStartQuiz={() => setIsQuizStarted(true)}
        onFinishQuiz={handleFinishQuiz}
      />

      {/* 9. Màn hình chúc mừng & Pháo hoa & NHẠC "NHƯ CÓ BÁC TRONG NGÀY ĐẠI THẮNG" CHỈ VANG LÊN SAU 10 CÂU */}
      <MuseumCelebrationModal
        isOpen={celebrationModal.isOpen}
        onClose={() => setCelebrationModal((prev) => ({ ...prev, isOpen: false }))}
        score={celebrationModal.score}
        correctCount={celebrationModal.correctCount}
        wrongCount={celebrationModal.wrongCount}
        onRestartQuiz={() => {
          setCelebrationModal((prev) => ({ ...prev, isOpen: false }));
          setIsQuizStarted(true);
          scrollTo('trac-nghiem');
        }}
        onBackToMuseum={() => {
          setCelebrationModal((prev) => ({ ...prev, isOpen: false }));
          setIsQuizStarted(false);
          scrollTo('hero');
        }}
      />

      {/* Lightbox Photo Modal */}
      <ImageLightboxModal
        isOpen={photoModal.isOpen}
        onClose={() => setPhotoModal((prev) => ({ ...prev, isOpen: false }))}
        imageUrl={photoModal.url}
        title={photoModal.title}
        caption={photoModal.caption}
        credit={photoModal.credit}
        year={photoModal.year}
      />

      {/* Video Player Modal */}
      <VideoPlayerModal
        isOpen={videoModal.isOpen}
        onClose={() => setVideoModal((prev) => ({ ...prev, isOpen: false }))}
        videoUrl={videoModal.url}
        title={videoModal.title}
        caption={videoModal.caption}
        source={videoModal.source}
      />

      {/* 10. Footer */}
      <MuseumFooter />
    </div>
  );
};
