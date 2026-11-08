import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Trophy,
  Volume2,
  VolumeX,
  RotateCcw,
  BookOpen,
  Play,
  Pause,
  X,
  Music,
} from 'lucide-react';
import { CelebrationFireworks } from '../ui/CelebrationFireworks';
import { victoryAudio } from '../../utils/celebrationAudio';

interface MuseumCelebrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  score: number; // 0 - 10
  correctCount: number;
  wrongCount: number;
  onRestartQuiz: () => void;
  onBackToMuseum: () => void;
}

export const MuseumCelebrationModal: React.FC<MuseumCelebrationModalProps> = ({
  isOpen,
  onClose,
  score,
  correctCount,
  wrongCount,
  onRestartQuiz,
  onBackToMuseum,
}) => {
  const [isAudioMuted, setIsAudioMuted] = useState(false);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(false);

  const isPerfectScore = score === 10;
  const percentage = Math.round((score / 10) * 100);

  useEffect(() => {
    let unsubscribe = () => {};

    if (isOpen) {
      document.body.style.overflow = 'hidden';

      unsubscribe = victoryAudio.subscribe((playing, muted) => {
        setIsPlayingMusic(playing);
        setIsAudioMuted(muted);
      });

      // Auto attempt to play celebratory music
      victoryAudio
        .playCelebrationSong()
        .then((played) => {
          if (played) {
            setIsPlayingMusic(true);
            setAudioBlocked(false);
          } else {
            setAudioBlocked(true);
          }
        })
        .catch(() => {
          setAudioBlocked(true);
        });
    }

    return () => {
      document.body.style.overflow = 'auto';
      unsubscribe();
      victoryAudio.stopCelebrationSong();
    };
  }, [isOpen]);

  const handleToggleSound = () => {
    const muted = victoryAudio.toggleMute();
    setIsAudioMuted(muted);
  };

  const handleTogglePlayMusic = () => {
    victoryAudio.togglePlayCelebrationSong().then(() => {
      setAudioBlocked(false);
    });
  };

  const handleReplayMusic = () => {
    victoryAudio.stopCelebrationSong();
    victoryAudio.playCelebrationSong().then(() => {
      setIsPlayingMusic(true);
      setAudioBlocked(false);
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/95 backdrop-blur-md">
        {/* Fullscreen Canvas Fireworks & Confetti */}
        <CelebrationFireworks />

        {/* Cinematic Ambient Radial Lights */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(128,0,0,0.4)_0%,rgba(10,8,7,0.9)_80%)] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-[#FFD700]/15 to-transparent pointer-events-none" />

        {/* Modal Container */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.85, opacity: 0, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 280 }}
          className="relative max-w-3xl w-full my-auto rounded-3xl bg-gradient-to-b from-[#280808] via-[#1A120E] to-[#120F0D] border-2 border-[#C5A059] shadow-[0_0_70px_rgba(255,215,0,0.3)] p-6 sm:p-10 z-10 text-center text-[#FAF8F5] overflow-hidden"
        >
          {/* Close button top right */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors z-20 cursor-pointer"
            title="Đóng (Về bảo tàng)"
          >
            <X size={20} />
          </button>

          {/* Golden Trophy / Star Header */}
          <div className="relative inline-block mb-4">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-[#FFD700] via-[#C5A059] to-[#800000] p-1 shadow-2xl flex items-center justify-center border-2 border-[#FFD700]"
            >
              <Trophy size={42} className="text-[#1A0B09] fill-current" />
            </motion.div>
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FFD700] opacity-75" />
              <span className="relative inline-flex rounded-full h-4 w-4 bg-[#FFD700]" />
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-serif text-[#FFD700] tracking-tight uppercase leading-tight mb-3 drop-shadow-lg">
            CHÚC MỪNG BẠN ĐÃ HOÀN THÀNH HÀNH TRÌNH LỊCH SỬ!
          </h2>

          {/* Result Subtitle */}
          <div className="mb-6">
            {isPerfectScore ? (
              <p className="text-base sm:text-xl font-bold text-[#F5E8C8] font-serif tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#FFF3D1] to-[#FFD700]">
                ★ XUẤT SẮC! BẠN ĐÃ CHINH PHỤC TOÀN BỘ THỬ THÁCH LỊCH SỬ! ★
              </p>
            ) : (
              <p className="text-sm sm:text-base text-gray-300 font-sans max-w-xl mx-auto">
                Bạn đã nỗ lực hoàn thành xuất sắc 10 câu hỏi thử thách về 30 năm kháng chiến.
                Hãy ôn lại những mốc son lịch sử để đạt điểm số tuyệt đối nhé!
              </p>
            )}
          </div>

          {/* Score Display Card */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto mb-6">
            <div className="p-3.5 rounded-xl bg-[#140D0B] border border-[#C5A059]/40 shadow-inner">
              <div className="text-2xl sm:text-3xl font-black font-serif text-[#FFD700]">
                {score}/10
              </div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 mt-0.5">
                Điểm số
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#140D0B] border border-emerald-500/40 shadow-inner">
              <div className="text-2xl sm:text-3xl font-black font-serif text-emerald-400">
                {correctCount}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 mt-0.5">
                Số câu đúng
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#140D0B] border border-red-500/40 shadow-inner">
              <div className="text-2xl sm:text-3xl font-black font-serif text-red-400">
                {wrongCount}
              </div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 mt-0.5">
                Số câu sai
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#140D0B] border border-[#C5A059]/40 shadow-inner">
              <div className="text-2xl sm:text-3xl font-black font-serif text-[#F5E8C8]">
                {percentage}%
              </div>
              <div className="text-[11px] uppercase tracking-wider text-gray-400 mt-0.5">
                Tỷ lệ chính xác
              </div>
            </div>
          </div>

          {/* Commemorative Photo of 30/04/1975 */}
          <div className="relative rounded-2xl overflow-hidden max-w-md mx-auto mb-6 border border-[#C5A059]/50 shadow-xl">
            <img
              src="/media/anh/1793932222187_5601981979445790988_g8682714676790492621_9fa38103129b31efd32bf1a2a8317cea.jpg"
              alt="Kỷ niệm 30/04/1975"
              className="w-full h-36 object-cover object-center filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-2.5">
              <span className="text-[11px] text-[#FFD700] font-serif font-medium text-left">
                Kỷ niệm Đại thắng mùa Xuân 30/04/1975 – Non sông liền một dải
              </span>
            </div>
          </div>

          {/* Dedicated Victory Music Player (Như Có Bác Trong Ngày Đại Thắng) */}
          <div className="mb-8 p-4 rounded-2xl bg-[#140D0B]/90 border border-[#C5A059]/60 max-w-md mx-auto shadow-xl">
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-2.5 text-left">
                <div className={`w-9 h-9 rounded-full bg-[#800000] border border-[#FFD700] flex items-center justify-center shrink-0 ${isPlayingMusic ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }}>
                  <Music size={16} className="text-[#FFD700]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white font-serif tracking-wide line-clamp-1">
                    {victoryAudio.songTitle}
                  </div>
                  <div className="text-[11px] text-[#C5A059]">
                    {victoryAudio.songAuthor}
                  </div>
                </div>
              </div>

              {/* Animated Equalizer when playing */}
              {isPlayingMusic && (
                <div className="flex items-end gap-1 h-4 shrink-0">
                  <span className="w-1 h-3 bg-[#FFD700] animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1 h-4 bg-[#FFD700] animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1 h-2 bg-[#FFD700] animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="w-1 h-3.5 bg-[#FFD700] animate-bounce" style={{ animationDelay: '450ms' }} />
                </div>
              )}
            </div>

            {/* Controls */}
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs pt-2 border-t border-white/10">
              <button
                onClick={handleTogglePlayMusic}
                className="px-3.5 py-1.5 rounded-lg bg-[#800000] hover:bg-[#A31212] text-[#FFD700] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer border border-[#C5A059]/40"
              >
                {isPlayingMusic ? <Pause size={13} /> : <Play size={13} className="fill-current" />}
                <span>{isPlayingMusic ? 'Tạm dừng nhạc' : 'Phát bài hát'}</span>
              </button>

              <button
                onClick={handleReplayMusic}
                className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Phát lại từ đầu"
              >
                <RotateCcw size={13} />
                <span>Phát lại</span>
              </button>

              <button
                onClick={handleToggleSound}
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                title={isAudioMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
              >
                {isAudioMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
              </button>

              {audioBlocked && (
                <button
                  onClick={handleTogglePlayMusic}
                  className="px-3 py-1.5 rounded-lg bg-[#FFD700] text-[#800000] font-bold animate-pulse flex items-center gap-1 cursor-pointer"
                >
                  <Play size={13} className="fill-current" />
                  <span>BẬT NHẠC CHÚC MỪNG</span>
                </button>
              )}
            </div>
          </div>

          {/* Action Buttons Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onRestartQuiz}
              className="px-6 py-3 rounded-xl bg-[#800000] hover:bg-[#9E1414] text-[#FFD700] font-serif font-bold text-sm border border-[#C5A059] flex items-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <RotateCcw size={16} />
              <span>Làm lại bài kiểm tra</span>
            </button>

            <button
              onClick={onBackToMuseum}
              className="px-6 py-3 rounded-xl bg-[#1C1613] hover:bg-[#2A201A] text-gray-200 hover:text-white font-serif font-bold text-sm border border-white/20 hover:border-[#C5A059] flex items-center gap-2 transition-all cursor-pointer"
            >
              <BookOpen size={16} className="text-[#C5A059]" />
              <span>Quay lại phòng triển lãm</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
