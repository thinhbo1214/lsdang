import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, Calendar, Landmark } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string | null;
  title: string;
  caption?: string;
  credit?: string;
  year?: string | number;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  title,
  caption,
  credit,
  year,
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

  if (!isOpen || !imageUrl) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md">
        {/* Backdrop click to close */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0"
        />

        {/* Modal content */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative max-w-5xl w-full max-h-[92vh] flex flex-col bg-[#141210] border border-[#C5A059]/40 rounded-xl overflow-hidden shadow-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-gradient-to-r from-[#2A0808] via-[#1F1610] to-[#141210] border-b border-[#C5A059]/30">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5A059] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C5A059]">
                Tư liệu ảnh lịch sử – Bảo tàng trực tuyến
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

          {/* Image Display */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] max-h-[65vh] overflow-hidden group">
            <img
              src={imageUrl}
              alt={title}
              className="max-h-[65vh] w-auto max-w-full object-contain mx-auto select-none"
            />
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-sm text-xs text-gray-300 px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5 opacity-75 group-hover:opacity-100 transition-opacity">
              <ZoomIn size={14} className="text-[#C5A059]" />
              <span>Ảnh tư liệu bảo tàng</span>
            </div>
          </div>

          {/* Footer Caption & Credit */}
          <div className="p-4 sm:p-5 bg-[#181512] border-t border-[#C5A059]/20">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
              <h3 className="text-base sm:text-lg font-bold text-white font-serif tracking-wide">
                {title}
              </h3>
              {year && (
                <span className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full bg-[#800000]/60 text-[#F5E8C8] border border-[#C5A059]/30 font-medium">
                  <Calendar size={12} className="text-[#C5A059]" />
                  Năm {year}
                </span>
              )}
            </div>

            {caption && (
              <p className="text-sm text-gray-300 leading-relaxed mb-2 font-sans">
                {caption}
              </p>
            )}

            {credit && (
              <div className="flex items-center gap-1.5 text-xs text-[#C5A059] font-medium pt-1 border-t border-white/5">
                <Landmark size={13} />
                <span>Nguồn lưu trữ: {credit}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
