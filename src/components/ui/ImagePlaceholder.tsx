import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ImagePlaceholderProps {
  imageUrl?: string | null;
  caption?: string;
  credit?: string;
  className?: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'wide';
}

const aspectClasses = {
  square: 'aspect-square',
  video: 'aspect-video',
  portrait: 'aspect-[3/4]',
  wide: 'aspect-[16/7]',
};

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  imageUrl,
  caption,
  credit,
  className = '',
  aspectRatio = 'video',
}) => {
  return (
    <div className={`${aspectClasses[aspectRatio]} ${className}`}>
      {imageUrl ? (
        <div className="relative h-full w-full">
          <img src={imageUrl} alt={caption ?? ''} loading="lazy" className="h-full w-full object-cover" />
          {credit && aspectRatio !== 'square' && (
            <span className="absolute inset-x-0 bottom-0 bg-black/70 px-3 py-1.5 text-[10px] text-white/80">
              Nguồn: {credit}
            </span>
          )}
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#2C1A0E]/60 to-[#1a0a00]/60 border border-[#C9922C]/20 rounded flex flex-col items-center justify-center p-4">
          <AlertCircle size={28} className="text-[#C9922C]/50 mb-2" />
          <p className="text-[#C9922C]/70 text-xs font-medium text-center">Cần bổ sung tư liệu</p>
          {caption && (
            <p className="text-gray-500 text-xs text-center mt-2 leading-relaxed">{caption}</p>
          )}
          {credit && (
            <p className="text-gray-600 text-xs text-center mt-1 italic">Nguồn: {credit}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ImagePlaceholder;
