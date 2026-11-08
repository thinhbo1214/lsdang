import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Award,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RotateCcw,
  Sparkles,
  Play,
  ShieldCheck,
} from 'lucide-react';
import { museumQuiz10, type MuseumQuizItem } from '../../data/museumExhibitionData';
import { victoryAudio } from '../../utils/celebrationAudio';

interface MuseumQuizSectionProps {
  onFinishQuiz: (score: number, correctCount: number, wrongCount: number) => void;
  isStarted?: boolean;
  onStartQuiz?: () => void;
}

export const MuseumQuizSection: React.FC<MuseumQuizSectionProps> = ({
  onFinishQuiz,
  isStarted: propIsStarted,
  onStartQuiz: propOnStartQuiz,
}) => {
  const [internalStarted, setInternalStarted] = useState(false);
  const isStarted = propIsStarted !== undefined ? propIsStarted : internalStarted;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);

  const currentQuestion: MuseumQuizItem = museumQuiz10[currentIndex];
  const totalQuestions = museumQuiz10.length; // 10
  const progressPercent = Math.round(((currentIndex + (isAnswered ? 1 : 0)) / totalQuestions) * 100);

  const handleStart = () => {
    if (propOnStartQuiz) {
      propOnStartQuiz();
    } else {
      setInternalStarted(true);
    }
  };

  const handleSelectOption = (index: number) => {
    if (isAnswered) return; // Prevent changing answer

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQuestion.correctAnswer;
    if (isCorrect) {
      setCorrectCount((prev) => prev + 1);
      victoryAudio.playCorrectSound();
    } else {
      victoryAudio.playWrongSound();
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      // Completed question 10
      const finalWrong = totalQuestions - correctCount;
      onFinishQuiz(correctCount, correctCount, finalWrong);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setCorrectCount(0);
  };

  const isCurrentCorrect = selectedOption === currentQuestion.correctAnswer;

  return (
    <section id="trac-nghiem" className="py-24 bg-[#14100E] text-[#FAF8F5] relative border-t-2 border-[#C5A059]/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#FFD700] mb-3">
            <Award size={15} />
            <span>Thử Thách Lịch Sử Tương Tác</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-serif text-[#FAF8F5] tracking-tight mb-3">
            BÀI KIỂM TRA KIẾN THỨC <span className="text-[#C5A059]">(10 CÂU)</span>
          </h2>

          <p className="text-xs sm:text-sm text-gray-300 font-sans">
            5 câu về Kháng chiến chống Pháp (1945–1954) & 5 câu về Kháng chiến chống Mỹ (1954–1975)
            dựa trên các tư liệu trưng bày trong bảo tàng.
          </p>
        </div>

        {/* CONDITION: If NOT started yet -> Display Invitation Card */}
        {!isStarted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl bg-gradient-to-b from-[#1F1612] via-[#1A120E] to-[#120D0B] border-2 border-[#C5A059]/60 shadow-2xl p-8 sm:p-14 text-center relative overflow-hidden"
          >
            {/* Ambient Background Badge */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full bg-gradient-to-br from-[#800000] via-[#5C0000] to-[#2B0000] border-2 border-[#FFD700] flex items-center justify-center shadow-xl mb-6">
              <Award size={44} className="text-[#FFD700]" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-serif text-[#FAF8F5] mb-4">
              Sẵn Sàng Thử Thách Bản Thân Với 10 Câu Hỏi Lịch Sử?
            </h3>

            <p className="text-sm sm:text-base text-gray-300 max-w-xl mx-auto leading-relaxed mb-8 font-sans">
              Hoàn thành 10 câu sẽ có bất ngờ
            </p>

            {/* Feature Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-10 text-left">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                <ShieldCheck size={20} className="text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">5 Câu Chống Pháp</div>
                  <div className="text-[11px] text-gray-400">Giai đoạn 1945 – 1954</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                <ShieldCheck size={20} className="text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">5 Câu Chống Mỹ</div>
                  <div className="text-[11px] text-gray-400">Giai đoạn 1954 – 1975</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-start gap-3">
                <Sparkles size={20} className="text-[#FFD700] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Âm Nhạc & Pháo Hoa</div>
                  <div className="text-[11px] text-gray-400">Mở sau câu thứ 10</div>
                </div>
              </div>
            </div>

            {/* Big Start Button */}
            <button
              onClick={handleStart}
              className="px-10 py-4 sm:px-14 sm:py-5 rounded-2xl bg-gradient-to-r from-[#800000] via-[#A81616] to-[#800000] hover:from-[#9C1313] hover:to-[#BD1A1A] text-[#FAF8F5] text-base sm:text-lg font-serif font-black tracking-wide border-2 border-[#FFD700] shadow-2xl shadow-red-950/80 hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-3 group"
            >
              <Play size={20} className="text-[#FFD700] fill-current group-hover:scale-110 transition-transform" />
              <span>BẮT ĐẦU LÀM BÀI KIỂM TRA</span>
              <ArrowRight size={20} className="text-[#FFD700] group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        ) : (
          /* CONDITION: When started -> Show Question Interface */
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl bg-[#1A1411] border border-[#C5A059]/40 shadow-2xl p-6 sm:p-10 relative overflow-hidden"
          >
            {/* Top Progress & Stats Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#800000] text-[#FFD700] text-xs font-bold font-serif tracking-wider border border-[#C5A059]/50">
                  Câu {currentIndex + 1} / {totalQuestions}
                </span>
                <span className="text-xs text-[#C5A059] font-medium hidden sm:inline">
                  {currentQuestion.period === 'french' ? 'Kháng chiến chống Pháp' : 'Kháng chiến chống Mỹ'}
                </span>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold">
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={15} />
                  <span>Đúng: {correctCount}</span>
                </span>
                <span className="text-gray-400">
                  Điểm hiện tại: <span className="text-[#FFD700] font-bold text-sm">{correctCount}</span> / 10
                </span>
              </div>
            </div>

            {/* Progress Bar Line */}
            <div className="w-full bg-black/40 h-2 rounded-full overflow-hidden mb-8 border border-white/5">
              <motion.div
                initial={false}
                animate={{ width: `${progressPercent}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-[#800000] via-[#C5A059] to-[#FFD700]"
              />
            </div>

            {/* Question Text */}
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-8"
            >
              <h3 className="text-lg sm:text-2xl font-bold font-serif text-[#FAF8F5] leading-relaxed tracking-wide">
                {currentQuestion.question}
              </h3>
            </motion.div>

            {/* 4 Options Grid */}
            <div className="space-y-3 mb-8">
              {currentQuestion.options.map((option, optIdx) => {
                const optLetter = String.fromCharCode(65 + optIdx); // A, B, C, D
                const isSelected = selectedOption === optIdx;
                const isCorrectAnswer = optIdx === currentQuestion.correctAnswer;

                let btnStyle = 'bg-[#15100E] border-white/10 hover:border-[#C5A059] hover:bg-[#201814] text-gray-200';
                let badgeStyle = 'bg-[#291F1A] text-[#C5A059] border-white/10';

                if (isAnswered) {
                  if (isCorrectAnswer) {
                    btnStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-100 font-bold shadow-md shadow-emerald-950/50';
                    badgeStyle = 'bg-emerald-600 text-white border-emerald-400';
                  } else if (isSelected && !isCorrectAnswer) {
                    btnStyle = 'bg-red-950/70 border-red-500 text-red-100 line-through font-medium';
                    badgeStyle = 'bg-red-600 text-white border-red-400';
                  } else {
                    btnStyle = 'bg-[#120D0B] border-white/5 text-gray-500 opacity-60';
                  }
                }

                return (
                  <button
                    key={optIdx}
                    onClick={() => handleSelectOption(optIdx)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-xl border text-left transition-all duration-200 flex items-center justify-between gap-3 text-sm sm:text-base font-sans cursor-pointer disabled:cursor-default ${btnStyle}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold border shrink-0 ${badgeStyle}`}>
                        {optLetter}
                      </span>
                      <span className="leading-snug">{option}</span>
                    </div>

                    {isAnswered && (
                      <div className="shrink-0 ml-2">
                        {isCorrectAnswer && <CheckCircle2 size={20} className="text-emerald-400" />}
                        {isSelected && !isCorrectAnswer && <XCircle size={20} className="text-red-400" />}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Feedback Explanation Box */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  className={`p-5 rounded-xl border mb-6 text-sm ${
                    isCurrentCorrect
                      ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                      : 'bg-red-950/40 border-red-500/50 text-red-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold font-serif text-base mb-1.5">
                    {isCurrentCorrect ? (
                      <>
                        <CheckCircle2 size={18} className="text-emerald-400" />
                        <span className="text-emerald-300">CHÍNH XÁC!</span>
                      </>
                    ) : (
                      <>
                        <XCircle size={18} className="text-red-400" />
                        <span className="text-red-300">
                          CHƯA CHÍNH XÁC! (Đáp án đúng là:{' '}
                          {String.fromCharCode(65 + currentQuestion.correctAnswer)}. {currentQuestion.options[currentQuestion.correctAnswer]})
                        </span>
                      </>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-sans mb-2">
                    {currentQuestion.explanation}
                  </p>

                  {currentQuestion.highlightFact && (
                    <div className="inline-flex items-center gap-1.5 text-xs text-[#FFD700] font-medium pt-1 border-t border-white/10">
                      <Sparkles size={13} />
                      <span>Ghi nhớ: {currentQuestion.highlightFact}</span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Action Row */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={handleRestartQuiz}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <RotateCcw size={14} />
                <span>Bắt đầu lại bài thi</span>
              </button>

              {isAnswered ? (
                <button
                  onClick={handleNext}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#800000] to-[#A81616] hover:from-[#9C1313] hover:to-[#BD1A1A] text-[#FFD700] border border-[#FFD700]/50 font-serif font-bold text-sm flex items-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
                >
                  <span>{currentIndex + 1 === totalQuestions ? 'Xem Kết Quả & Mở Nhạc Chúc Mừng' : 'Câu Tiếp Theo'}</span>
                  <ArrowRight size={16} />
                </button>
              ) : (
                <span className="text-xs text-gray-500 italic">
                  Hãy chọn 1 trong 4 đáp án trên để xem lời giải
                </span>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
