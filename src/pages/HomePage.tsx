import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/home/HeroSection';
import OverviewSection from '../components/home/OverviewSection';
import FeaturedFigures from '../components/home/FeaturedFigures';
import { Link } from 'react-router-dom';
import { frenchWarEvents } from '../data/frenchWarEvents';
import { americanWarEvents } from '../data/americanWarEvents';
import { Calendar, MapPin, ArrowRight, Star } from 'lucide-react';

const FeaturedEvents: React.FC = () => {
  const featured = [
    frenchWarEvents.find(e => e.id === 'fwe-01')!,
    frenchWarEvents.find(e => e.id === 'fwe-08')!,
    americanWarEvents.find(e => e.id === 'awe-05')!,
    americanWarEvents.find(e => e.id === 'awe-13')!,
  ].filter(Boolean);

  return (
    <section className="py-20 bg-[#F5E8C8] dark:bg-[#0f0600]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="text-[#C9922C] text-sm font-semibold tracking-widest uppercase">Sự Kiện Nổi Bật</span>
          <h2 className="text-3xl font-black text-[#2C1A0E] dark:text-[#F5E8C8] mt-1">
            Những Mốc Son Lịch Sử
          </h2>
          <div className="w-16 h-1 bg-[#8B1A1A] mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white dark:bg-[#1a0a00] rounded-xl overflow-hidden border border-gray-100 dark:border-white/10 card-hover group"
            >
              {/* Color header */}
              <div
                className="h-2"
                style={{ backgroundColor: event.category === 'french-war' ? '#8B1A1A' : '#C9922C' }}
              />

              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Star size={12} className="text-[#C9922C]" fill="#C9922C" />
                  <span
                    className="text-xs font-semibold"
                    style={{ color: event.category === 'french-war' ? '#8B1A1A' : '#C9922C' }}
                  >
                    {event.category === 'french-war' ? 'Chống Pháp' : 'Chống Mỹ'}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 mb-2">
                  <Calendar size={12} className="text-gray-400" />
                  <span className="text-gray-500 text-xs">{event.date}</span>
                </div>

                <h4 className="text-[#2C1A0E] dark:text-gray-200 font-bold text-sm leading-tight mb-2 line-clamp-2 group-hover:text-[#8B1A1A] transition-colors">
                  {event.title}
                </h4>

                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
                  {event.shortDesc}
                </p>

                {event.location && (
                  <div className="flex items-center gap-1 text-gray-400">
                    <MapPin size={11} />
                    <span className="text-xs line-clamp-1">{event.location}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/chong-phap"
            className="inline-flex items-center gap-2 bg-[#8B1A1A] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#a52020] transition-colors"
          >
            Xem tất cả sự kiện chống Pháp <ArrowRight size={16} />
          </Link>
          <Link
            to="/chong-my"
            className="inline-flex items-center gap-2 bg-[#C9922C] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#e0a030] transition-colors"
          >
            Xem tất cả sự kiện chống Mỹ <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <OverviewSection />
      <FeaturedEvents />
      <FeaturedFigures />

      {/* Call to action */}
      <section className="py-20 bg-gradient-to-r from-[#8B1A1A] to-[#2C1A0E]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Kiểm tra kiến thức lịch sử của bạn
            </h2>
            <p className="text-gray-300 mb-8 text-lg">
              Trả lời 10 câu hỏi trắc nghiệm về hai cuộc kháng chiến
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/trac-nghiem"
                className="bg-[#C9922C] hover:bg-[#e0a030] text-white font-bold px-8 py-4 rounded-lg transition-colors text-lg"
              >
                🏆 Làm bài trắc nghiệm
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
