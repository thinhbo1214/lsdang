import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { historicalFigures } from '../data/historicalFigures';
import ImagePlaceholder from '../components/ui/ImagePlaceholder';
import Modal from '../components/ui/Modal';
import type { HistoricalFigure } from '../types';
import { Calendar, Award, ChevronRight } from 'lucide-react';

const FigureCard: React.FC<{ figure: HistoricalFigure; onClick: () => void }> = ({ figure, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    onClick={onClick}
    className="bg-white dark:bg-[#1a0a00] rounded-xl overflow-hidden border border-gray-100 dark:border-white/10 card-hover cursor-pointer group"
  >
    <div className={`h-1.5 ${figure.warPeriod === 'french' ? 'bg-[#8B1A1A]' : figure.warPeriod === 'american' ? 'bg-[#C9922C]' : 'bg-gradient-to-r from-[#8B1A1A] to-[#C9922C]'}`} />

    <div className="p-5">
      <div className="flex gap-4">
        <div className="w-20 h-20 flex-shrink-0">
          <ImagePlaceholder
            imageUrl={figure.image.url}
            caption={figure.name}
            aspectRatio="square"
            className="rounded-lg overflow-hidden"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-black text-[#2C1A0E] dark:text-white text-base group-hover:text-[#8B1A1A] transition-colors">
            {figure.name}
          </h3>
          <div className="flex items-center gap-1 mt-1">
            <Calendar size={11} className="text-gray-400" />
            <span className="text-gray-400 text-xs">{figure.born.split(' – ')[0]}</span>
          </div>
          <span className={`inline-block mt-2 text-xs px-2 py-0.5 rounded text-white ${
            figure.warPeriod === 'french' ? 'bg-[#8B1A1A]' :
            figure.warPeriod === 'american' ? 'bg-[#C9922C]' : 'bg-gradient-to-r from-[#8B1A1A] to-[#C9922C]'
          }`}>
            {figure.warPeriod === 'french' ? 'Chống Pháp' : figure.warPeriod === 'american' ? 'Chống Mỹ' : 'Cả hai cuộc KC'}
          </span>
        </div>
      </div>

      <p className="text-gray-500 text-xs mt-3 line-clamp-2 leading-relaxed">{figure.role}</p>

      <button className="mt-3 text-[#8B1A1A] text-xs font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
        Xem tiểu sử <ChevronRight size={12} />
      </button>
    </div>
  </motion.div>
);

const FiguresPage: React.FC = () => {
  const [selected, setSelected] = useState<HistoricalFigure | null>(null);
  const [filter, setFilter] = useState<'all' | 'french' | 'american' | 'both'>('all');

  const filtered = filter === 'all'
    ? historicalFigures
    : historicalFigures.filter(f => f.warPeriod === filter || (filter === 'both' && f.warPeriod === 'both'));

  return (
    <div className="min-h-screen bg-[#FDFAF4] dark:bg-[#0A0A0A] pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-br from-[#0A0A0A] via-[#1a0a00] to-[#2C1A0E] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#C9922C] text-sm font-semibold tracking-widest uppercase">Nhân Vật Lịch Sử</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-4">
              Những Người Làm Nên<br />
              <span className="text-[#C9922C]">Lịch Sử Việt Nam</span>
            </h1>
            <p className="text-gray-400 max-w-2xl">
              Tiểu sử và đóng góp của những nhân vật lịch sử tiêu biểu trong hai cuộc kháng chiến 1945–1975.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {[
            { value: 'all', label: 'Tất cả' },
            { value: 'both', label: 'Cả hai cuộc KC' },
            { value: 'french', label: 'Chống Pháp' },
            { value: 'american', label: 'Chống Mỹ' },
          ].map(opt => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value as typeof filter)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === opt.value
                  ? 'bg-[#8B1A1A] text-white shadow-md'
                  : 'bg-white dark:bg-white/10 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/20'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(figure => (
            <FigureCard
              key={figure.id}
              figure={figure}
              onClick={() => setSelected(figure)}
            />
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <Modal
        isOpen={!!selected}
        onClose={() => setSelected(null)}
        title={selected?.name}
        size="lg"
      >
        {selected && (
          <div className="p-6 space-y-6">
            {/* Top section */}
            <div className="flex gap-5">
              <div className="w-28 h-28 flex-shrink-0">
                <ImagePlaceholder
                  imageUrl={selected.image.url}
                  caption={selected.name}
                  aspectRatio="square"
                  className="rounded-xl overflow-hidden"
                />
              </div>
              <div>
                <div className="text-[#2C1A0E] dark:text-gray-200 font-black text-xl">{selected.name}</div>
                {selected.fullName && (
                  <div className="text-gray-500 text-sm mt-0.5">{selected.fullName}</div>
                )}
                <div className="text-[#C9922C] text-sm mt-2 font-semibold">{selected.role}</div>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Calendar size={12} />
                    <span>Sinh: {selected.born}</span>
                  </div>
                  {selected.died && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Calendar size={12} />
                      <span>Mất: {selected.died}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h4 className="text-[#8B1A1A] font-bold mb-2 flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[#8B1A1A]" /> Tiểu Sử
              </h4>
              <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed">{selected.bio}</p>
            </div>

            {/* Contributions */}
            <div>
              <h4 className="text-[#8B1A1A] font-bold mb-3 flex items-center gap-2">
                <Award size={16} className="text-[#C9922C]" /> Đóng Góp Lịch Sử
              </h4>
              <ul className="space-y-2">
                {selected.contributions.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-[#8B1A1A]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[#8B1A1A] text-xs font-bold">{i + 1}</span>
                    </div>
                    <span className="text-sm text-gray-700 dark:text-gray-400">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FiguresPage;
