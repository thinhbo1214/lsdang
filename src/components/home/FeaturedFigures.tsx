import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, ArrowRight } from 'lucide-react';
import { historicalFigures } from '../../data/historicalFigures';
import ImagePlaceholder from '../ui/ImagePlaceholder';

const FeaturedFigures: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section className="py-20 bg-[#2C1A0E] dark:bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between mb-12">
          <div>
            <span className="text-[#C9922C] text-sm font-semibold tracking-widest uppercase">Nhân Vật Lịch Sử</span>
            <h2 className="text-3xl font-black text-white mt-1">Những Con Người Làm Nên Lịch Sử</h2>
          </div>
          <Link
            to="/nhan-vat"
            className="hidden sm:flex items-center gap-2 text-[#C9922C] hover:text-white transition-colors text-sm font-medium"
          >
            Xem tất cả <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {historicalFigures.map((figure, index) => (
            <motion.div
              key={figure.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredId(figure.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="relative group cursor-pointer"
            >
              <Link to="/nhan-vat">
                <div className={`rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  hoveredId === figure.id
                    ? 'border-[#C9922C] shadow-lg shadow-[#C9922C]/20'
                    : 'border-white/10'
                }`}>
                  <ImagePlaceholder
                    imageUrl={figure.image.url}
                    caption={figure.name}
                    aspectRatio="portrait"
                    className="w-full"
                  />
                </div>

                <div className="mt-2 text-center">
                  <div className="text-white font-semibold text-xs leading-tight">{figure.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5 line-clamp-1">{figure.role.split(',')[0]}</div>
                </div>

                {/* Hover overlay */}
                {hoveredId === figure.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-[#8B1A1A]/90 rounded-xl flex items-center justify-center p-2"
                  >
                    <div className="text-center">
                      <div className="text-white font-bold text-xs">{figure.name}</div>
                      <div className="text-[#C9922C] text-xs mt-1 leading-tight">{figure.role.split(',')[0]}</div>
                    </div>
                  </motion.div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:hidden">
          <Link
            to="/nhan-vat"
            className="inline-flex items-center gap-2 text-[#C9922C] hover:text-white transition-colors text-sm font-medium"
          >
            <Users size={16} /> Xem tất cả nhân vật <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFigures;
