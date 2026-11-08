import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizData } from '../data/quizData';
import { CelebrationFireworks } from '../components/ui/CelebrationFireworks';
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  ChevronRight,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Music
} from 'lucide-react';

type QuizState = 'intro' | 'playing' | 'result';

export const QuizPage: React.FC = () => {
  const [state, setState] = useState<QuizState>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<{ correct: boolean; selected: number }[]>([]);

  // Audio player state for the uploaded victory song
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const currentQ = quizData[currentIdx];
  const isLast = currentIdx === quizData.length - 1;

  // Auto-play the victory song when reaching result
  useEffect(() => {
    if (state === 'result') {
      const audio = audioRef.current;
      if (audio) {
        audio.currentTime = 0;
        audio.volume = 0.85;
        audio.play().then(() => {
          setIsPlayingMusic(true);
        }).catch(() => {
          // In case of browser autoplay policy restrictions, user can click play
          setIsPlayingMusic(false);
        });
      }
    } else {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlayingMusic(false);
      }
    }
  }, [state]);

  const toggleMusicPlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlayingMusic) {
      audio.pause();
      setIsPlayingMusic(false);
    } else {
      audio.play().then(() => setIsPlayingMusic(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSelect = (optIdx: number) => {
    if (answered) return;
    setSelected(optIdx);
    setAnswered(true);
    const correct = optIdx === currentQ.correctAnswer;
    if (correct) setScore(s => s + 1);
    setAnswers(prev => [...prev, { correct, selected: optIdx }]);
  };

  const handleNext = () => {
    if (isLast) {
      setState('result');
    } else {
      setCurrentIdx(i => i + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleRestart = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setState('intro');
    setCurrentIdx(0);
    setSelected(null);
    setAnswered(false);
    setScore(0);
    setAnswers([]);
  };

  const pct = Math.round((score / quizData.length) * 100);
  const grade = pct >= 80 ? 'Xuất sắc – Anh hùng Lịch sử' : pct >= 60 ? 'Khá – Nắm vững lịch sử' : 'Cần ôn tập thêm';

  return (
    <div className="min-h-screen bg-[#FDFAF4] dark:bg-[#0A0A0A] pt-16 selection:bg-[#C9922C] selection:text-black">
      {/* Hidden audio element for the uploaded victory song */}
      <audio
        ref={audioRef}
        src="/audio/nhac-dai-thang.mp3"
        preload="auto"
        onEnded={() => setIsPlayingMusic(false)}
      />

      {/* Header */}
      <div className="bg-gradient-to-br from-[#0A0A0A] via-[#1a0a00] to-[#2C1A0E] py-14 px-6 relative overflow-hidden">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="text-[#C9922C] text-xs sm:text-sm font-semibold tracking-widest uppercase">
            Kiểm Tra Tri Thức Lịch Sử
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-white mt-2">
            10 Câu Hỏi Trắc Nghiệm Mốc Son Lịch Sử
          </h1>
          <p className="text-gray-400 text-xs sm:text-sm mt-2 max-w-xl mx-auto">
            Hành trình 30 năm kháng chiến gian khổ và vẻ vang (1945–1975)
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10">
        <AnimatePresence mode="wait">
          {/* ======================================================== */}
          {/* STAGE 1: INTRO                                           */}
          {/* ======================================================== */}
          {state === 'intro' && (
            <motion.div
              key="intro"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="bg-white dark:bg-[#1a0a00] rounded-3xl p-8 border border-gray-100 dark:border-[#C9922C]/30 shadow-xl"
            >
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-[#8B1A1A] to-[#C9922C] flex items-center justify-center text-3xl shadow-lg">
                  🏆
                </div>
                <h2 className="text-2xl font-black text-[#2C1A0E] dark:text-white mb-2">
                  Thử Thách 10 Câu Hỏi Lịch Sử
                </h2>
                <p className="text-gray-500 text-sm">
                  Kiểm tra sự hiểu biết của bạn về hai cuộc kháng chiến chống Pháp và chống Mỹ (1945–1975).
                </p>
              </div>

              <div className="bg-[#F5E8C8] dark:bg-[#2C1A0E]/50 rounded-2xl p-5 mb-8 text-sm space-y-2.5 text-gray-700 dark:text-gray-300 border border-[#C9922C]/20">            
                <p className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span>Hoàn thành 10 câu sẽ có bất ngờ</span>
                </p>
              </div>

              <button
                onClick={() => setState('playing')}
                className="w-full bg-gradient-to-r from-[#8B1A1A] to-[#C9922C] hover:brightness-110 text-white font-black py-4 rounded-2xl transition-all text-base shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Bắt đầu làm bài (10 câu)</span>
                <ChevronRight size={18} />
              </button>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* STAGE 2: PLAYING                                         */}
          {/* ======================================================== */}
          {state === 'playing' && currentQ && (
            <motion.div
              key={`q-${currentIdx}`}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
            >
              {/* Progress */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2 text-xs">
                  <span className="font-bold text-[#C9922C] uppercase tracking-wider">
                    Câu {currentIdx + 1} / 10
                  </span>
                  <span className="text-gray-500 font-semibold">
                    Đúng: <span className="text-green-500 font-bold">{score}</span> / {currentIdx + (answered ? 1 : 0)}
                  </span>
                </div>
                <div className="h-2.5 bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#8B1A1A] to-[#C9922C] rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentIdx + 1) / 10) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Question card */}
              <div className="bg-white dark:bg-[#1a0a00] rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-[#C9922C]/30 shadow-xl space-y-6">
                {/* Period Badge */}
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-3 py-1 rounded-full text-white font-bold ${
                    currentQ.period === 'french' ? 'bg-[#8B1A1A]' : 'bg-[#C9922C] text-black'
                  }`}>
                    {currentQ.period === 'french' ? 'Kháng chiến chống Pháp' : 'Kháng chiến chống Mỹ'}
                  </span>
                </div>

                <h3 className="text-[#2C1A0E] dark:text-white font-black text-lg sm:text-xl leading-relaxed">
                  {currentQ.question}
                </h3>

                {/* 4 Options */}
                <div className="space-y-3">
                  {currentQ.options.map((opt, i) => {
                    const isCorrect = i === currentQ.correctAnswer;
                    const isSelected = i === selected;

                    let optStyle = 'border-gray-200 dark:border-white/10 hover:border-[#C9922C]/60 hover:bg-gray-50 dark:hover:bg-white/5';

                    if (answered) {
                      if (isCorrect) {
                        // Highlight the correct answer in green (whether user picked it or not)
                        optStyle = 'border-green-500 bg-green-50 dark:bg-green-950/40 text-green-900 dark:text-green-200 font-bold ring-2 ring-green-500/50';
                      } else if (isSelected && !isCorrect) {
                        // User chose wrong answer
                        optStyle = 'border-red-500 bg-red-50 dark:bg-red-950/40 text-red-900 dark:text-red-200 font-bold ring-2 ring-red-500/50';
                      } else {
                        // Other wrong options
                        optStyle = 'border-gray-200 dark:border-white/5 opacity-40';
                      }
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => handleSelect(i)}
                        disabled={answered}
                        className={`w-full text-left p-4 rounded-2xl border-2 transition-all flex items-start gap-3.5 cursor-pointer disabled:cursor-default ${optStyle}`}
                      >
                        <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 text-xs font-bold transition-colors ${
                          answered && isCorrect ? 'border-green-500 bg-green-500 text-white' :
                          answered && isSelected && !isCorrect ? 'border-red-500 bg-red-500 text-white' :
                          'border-gray-300 dark:border-gray-600 text-gray-500'
                        }`}>
                          {answered && isCorrect ? (
                            <CheckCircle size={14} className="text-white" />
                          ) : answered && isSelected && !isCorrect ? (
                            <XCircle size={14} className="text-white" />
                          ) : (
                            String.fromCharCode(65 + i)
                          )}
                        </div>
                        <span className="text-sm sm:text-base leading-snug">{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation & Clear correct answer display when wrong */}
                {answered && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-2xl border-l-4 ${
                      selected === currentQ.correctAnswer
                        ? 'bg-green-50 dark:bg-green-950/30 border-green-500 text-green-900 dark:text-green-200'
                        : 'bg-red-50 dark:bg-red-950/30 border-red-500 text-red-900 dark:text-red-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1.5 font-black text-sm">
                      {selected === currentQ.correctAnswer ? (
                        <>
                          <CheckCircle size={18} className="text-green-500" />
                          <span>CHÍNH XÁC!</span>
                        </>
                      ) : (
                        <>
                          <XCircle size={18} className="text-red-500" />
                          <span>
                            CHƯA ĐÚNG! Đáp án chính xác là: {String.fromCharCode(65 + currentQ.correctAnswer)} – {currentQ.options[currentQ.correctAnswer]}
                          </span>
                        </>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed mt-1">
                      {currentQ.explanation}
                    </p>
                  </motion.div>
                )}

                {/* Next button */}
                {answered && (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onClick={handleNext}
                    className="w-full bg-gradient-to-r from-[#8B1A1A] to-[#C9922C] hover:brightness-110 text-white font-black py-4 rounded-2xl transition-colors flex items-center justify-center gap-2 text-base shadow-xl cursor-pointer"
                  >
                    <span>{isLast ? 'Hoàn thành 10 câu & Xem kết quả 🎉' : 'Câu tiếp theo'}</span>
                    <ChevronRight size={18} />
                  </motion.button>
                )}
              </div>
            </motion.div>
          )}

          {/* ======================================================== */}
          {/* STAGE 3: RESULT & CELEBRATION                            */}
          {/* ======================================================== */}
          {state === 'result' && (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative bg-gradient-to-b from-[#2a0e05] via-[#1a0802] to-black border-2 border-[#C9922C] rounded-3xl p-8 shadow-[0_0_80px_rgba(201,146,44,0.35)] text-center space-y-6"
            >
              {/* Pháo bông particle fireworks animation */}
              <CelebrationFireworks />

              {/* Trophy icon */}
              <div className="relative inline-block">
                <motion.div
                  animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-[#8B1A1A] via-[#C9922C] to-[#ffd700] p-1 shadow-2xl flex items-center justify-center"
                >
                  <Trophy size={48} className="text-black" />
                </motion.div>
                <div className="absolute -top-1 -right-1 text-2xl animate-bounce">⭐</div>
              </div>

              <div>
                <span className="text-xs uppercase tracking-widest text-[#C9922C] font-bold px-4 py-1 rounded-full bg-[#C9922C]/20 border border-[#C9922C]/40">
                  VINH DANH HOÀN THÀNH 10 CÂU HỎI
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-3">
                  {grade}
                </h2>
                <p className="text-[#C9922C] font-bold text-sm sm:text-base mt-1">
                  Khúc Khải Hoàn Ca – Tự Hào 30 Năm Lịch Sử Dân Tộc (1945–1975)
                </p>
              </div>

              {/* Audio Player Bar: Playing uploaded song */}
              <div className="bg-black/60 border border-[#C9922C]/40 rounded-2xl p-4 flex items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex items-end gap-1 h-5">
                    <span className={`w-1 bg-[#C9922C] ${isPlayingMusic ? 'animate-[bounce_0.6s_infinite]' : ''} h-4`} />
                    <span className={`w-1 bg-[#8B1A1A] ${isPlayingMusic ? 'animate-[bounce_0.8s_infinite]' : ''} h-5`} />
                    <span className={`w-1 bg-[#C9922C] ${isPlayingMusic ? 'animate-[bounce_0.5s_infinite]' : ''} h-3`} />
                    <span className={`w-1 bg-[#ffd700] ${isPlayingMusic ? 'animate-[bounce_0.7s_infinite]' : ''} h-5`} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                      <Music size={14} className="text-[#C9922C]" />
                      Như Có Bác Trong Ngày Đại Thắng
                    </p>
                    <p className="text-[11px] text-gray-400">Bài ca chiến thắng hào hùng</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={toggleMusicPlay}
                    className="p-2.5 bg-[#C9922C] hover:bg-[#ffd700] text-black font-bold rounded-xl transition-colors shadow-lg flex items-center gap-1.5 text-xs"
                    title={isPlayingMusic ? 'Tạm dừng nhạc' : 'Phát nhạc'}
                  >
                    {isPlayingMusic ? <Pause size={14} /> : <Play size={14} />}
                    <span className="hidden sm:inline">{isPlayingMusic ? 'Tạm dừng' : 'Phát nhạc'}</span>
                  </button>

                  <button
                    onClick={toggleMute}
                    className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors"
                    title={isMuted ? 'Bật tiếng' : 'Tắt tiếng'}
                  >
                    {isMuted ? <VolumeX size={14} className="text-red-400" /> : <Volume2 size={14} className="text-[#C9922C]" />}
                  </button>
                </div>
              </div>

              {/* Score circle */}
              <div className="grid grid-cols-3 gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-green-400">{score} / 10</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Số câu chính xác</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-[#C9922C]">{pct}%</div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Tỷ lệ am hiểu</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-black text-yellow-300">
                    {score >= 8 ? 'Xuất Sắc' : score >= 6 ? 'Khá' : 'Cần cố gắng'}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Xếp loại</div>
                </div>
              </div>

              {/* Answer review list */}
              <div className="text-left bg-black/40 rounded-2xl p-4 max-h-48 overflow-y-auto scrollbar-thin border border-white/5">
                <p className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">Chi tiết 10 câu trả lời:</p>
                {answers.map((ans, i) => (
                  <div key={i} className="flex items-center gap-2 py-1.5 border-b border-white/5 text-xs">
                    {ans.correct ? (
                      <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                    ) : (
                      <XCircle size={15} className="text-red-400 flex-shrink-0" />
                    )}
                    <span className="text-gray-300 line-clamp-1">
                      Câu {i + 1}: {quizData[i]?.question}
                    </span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <button
                onClick={handleRestart}
                className="w-full bg-gradient-to-r from-[#8B1A1A] to-[#C9922C] hover:brightness-110 text-white font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl cursor-pointer"
              >
                <RotateCcw size={16} /> Làm lại bài kiểm tra
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default QuizPage;
