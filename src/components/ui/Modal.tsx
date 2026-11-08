import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizeClasses = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-3xl',
  xl: 'max-w-5xl',
  full: 'max-w-7xl',
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title, size = 'lg' }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', duration: 0.4 }}
              onClick={e => e.stopPropagation()}
              className={`w-full ${sizeClasses[size]} bg-[#F5E8C8] dark:bg-[#1a0a00] rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col`}
            >
              {/* Header */}
              {title && (
                <div className="flex items-center justify-between p-4 border-b border-[#C9922C]/30 bg-[#8B1A1A] flex-shrink-0">
                  <h3 className="text-white font-bold text-lg pr-4">{title}</h3>
                  <button
                    onClick={onClose}
                    className="text-white/70 hover:text-white p-1 rounded transition-colors flex-shrink-0"
                  >
                    <X size={20} />
                  </button>
                </div>
              )}

              {/* Close button (no title) */}
              {!title && (
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={onClose}
                    className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>
              )}

              {/* Content */}
              <div className="overflow-y-auto flex-1 scrollbar-thin">
                {children}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
