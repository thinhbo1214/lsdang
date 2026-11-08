import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Film, Landmark } from 'lucide-react';

interface VideoPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string | null;
  title: string;
  caption?: string;
  source?: string;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  isOpen,
  onClose,
  videoUrl,
  title,
  caption,
  source,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !videoUrl) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full flex flex-col bg-[#141210] border border-[#C5A059]/40 rounded-xl overflow-hidden shadow-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-[#2A0808] via-[#1F1610] to-[#141210] border-b border-[#C5A059]/30">
            <div className="flex items-center gap-2">
              <Film size={16} className="text-[#C5A059]" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                Phim tư liệu lịch sử – Chiếu trực tuyến
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              title="Đóng (ESC)"
            >
              <X size={20} />
            </button>
          </div>

          {/* HTML5 Video Player */}
          <div className="relative aspect-video bg-black flex items-center justify-center">
            <video
              src={videoUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              Trình duyệt của bạn không hỗ trợ phát định dạng video này.
            </video>
          </div>

          {/* Info Footer */}
          <div className="p-4 sm:p-5 bg-[#181512] border-t border-[#C5A059]/20">
            <h3 className="text-base sm:text-lg font-bold text-white font-serif tracking-wide mb-1.5">
              {title}
            </h3>

            {caption && (
              <p className="text-sm text-gray-300 leading-relaxed mb-2 font-sans">
                {caption}
              </p>
            )}

            {source && (
              <div className="flex items-center gap-1.5 text-xs text-[#C5A059] font-medium pt-1 border-t border-white/5">
                <Landmark size={13} />
                <span>Nguồn lưu trữ: {source}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
