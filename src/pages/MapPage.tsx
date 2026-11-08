import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CircleMarker, GeoJSON, MapContainer, TileLayer, Tooltip } from 'react-leaflet';
import type { Feature, MultiPolygon } from 'geojson';
import 'leaflet/dist/leaflet.css';
import { mapLocations } from '../data/mapLocations';
import vietnamBoundary from '../data/vietnamBoundary.json';
import { frenchWarEvents } from '../data/frenchWarEvents';
import { americanWarEvents } from '../data/americanWarEvents';
import type { MapLocation } from '../types';
import { MapPin, Calendar, X } from 'lucide-react';

const allEvents = [...frenchWarEvents, ...americanWarEvents];
const vietnamBoundaryFeature = vietnamBoundary as Feature<MultiPolygon>;

const MapPage: React.FC = () => {
  const [selected, setSelected] = useState<MapLocation | null>(null);

  const getEventsForLocation = (loc: MapLocation) => {
    return loc.events
      .map(id => allEvents.find(e => e.id === id))
      .filter(Boolean);
  };

  return (
    <div className="min-h-screen bg-[#FDFAF4] dark:bg-[#0A0A0A] pt-16">
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0A0A0A] via-[#1a0a00] to-[#2C1A0E] py-14 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#C9922C] text-sm font-semibold tracking-widest uppercase">Bản Đồ Lịch Sử</span>
            <h1 className="text-4xl sm:text-5xl font-black text-white mt-2 mb-3">
              Bản Đồ Việt Nam <span className="text-[#C9922C]">Tương Tác</span>
            </h1>
            <p className="text-gray-400">Nhấn vào các địa danh để xem sự kiện lịch sử diễn ra tại đó</p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Real geographic map */}
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10">
            <h3 className="bg-[#1a0a00] text-white font-bold text-sm px-5 py-4 text-center">Bản Đồ Các Địa Danh Lịch Sử</h3>
            <MapContainer
              center={[16.5, 106.2]}
              zoom={5}
              scrollWheelZoom
              className="w-full"
              style={{ height: '560px' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <GeoJSON
                data={vietnamBoundaryFeature}
                style={{ color: '#8B1A1A', weight: 3, fillColor: '#8B1A1A', fillOpacity: 0.12 }}
              />
              {mapLocations.map(loc => (
                <CircleMarker
                  key={loc.id}
                  center={[loc.coordinates.lat, loc.coordinates.lng]}
                  radius={selected?.id === loc.id ? 10 : 8}
                  pathOptions={{
                    color: '#ffffff',
                    weight: 2,
                    fillColor: selected?.id === loc.id ? '#C9922C' : '#8B1A1A',
                    fillOpacity: 0.95,
                  }}
                  eventHandlers={{
                    click: () => setSelected(selected?.id === loc.id ? null : loc),
                  }}
                >
                  <Tooltip>{loc.name}</Tooltip>
                </CircleMarker>
              ))}
            </MapContainer>

            {/* Legend */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 bg-[#1a0a00] px-4 py-3 text-xs text-gray-300">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#8B1A1A] ring-1 ring-white" />
                <span>Địa danh lịch sử</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-0.5 w-5 bg-[#8B1A1A]" />
                <span>Ranh giới Việt Nam</span>
              </div>
            </div>
          </div>

          {/* Location list + detail */}
          <div>
            {!selected ? (
              <div className="space-y-3">
                <h3 className="text-[#2C1A0E] dark:text-white font-black text-lg mb-4">
                  Các Địa Danh Lịch Sử
                </h3>
                {mapLocations.map((loc, idx) => (
                  <motion.button
                    key={loc.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setSelected(loc)}
                    className="w-full bg-white dark:bg-[#1a0a00] rounded-xl p-4 border border-gray-100 dark:border-white/10 hover:border-[#C9922C]/50 text-left card-hover group"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        loc.significance === 'major' ? 'bg-[#8B1A1A]' : 'bg-[#C9922C]/30'
                      }`}>
                        <MapPin size={14} className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-sm text-[#2C1A0E] dark:text-white group-hover:text-[#8B1A1A] transition-colors">
                          {loc.name}
                        </div>
                        <div className="text-gray-400 text-xs mt-0.5">{loc.region}</div>
                        <p className="text-gray-500 text-xs mt-1 line-clamp-2">{loc.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white dark:bg-[#1a0a00] rounded-2xl border border-gray-100 dark:border-white/10 overflow-hidden"
              >
                {/* Detail header */}
                <div className="bg-[#8B1A1A] p-5 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <MapPin size={14} className="text-[#C9922C]" />
                      <span className="text-[#C9922C] text-xs">{selected.region}</span>
                    </div>
                    <h3 className="text-white font-black text-xl">{selected.name}</h3>
                  </div>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-white/70 hover:text-white p-1"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="p-5">
                  <p className="text-gray-700 dark:text-gray-400 text-sm leading-relaxed mb-5">
                    {selected.description}
                  </p>

                  {/* Related events */}
                  <h4 className="text-[#8B1A1A] font-bold text-sm mb-3">Sự kiện tại địa danh này:</h4>
                  <div className="space-y-3">
                    {getEventsForLocation(selected).map(event => event && (
                      <div key={event.id} className="bg-[#F5E8C8] dark:bg-[#2C1A0E]/50 rounded-lg p-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Calendar size={12} className="text-[#C9922C]" />
                          <span className="text-[#C9922C] text-xs font-bold">{event.date}</span>
                          <span className={`text-white text-xs px-1.5 py-0.5 rounded ${
                            event.category === 'french-war' ? 'bg-[#8B1A1A]' : 'bg-[#C9922C]'
                          }`}>
                            {event.category === 'french-war' ? 'Chống Pháp' : 'Chống Mỹ'}
                          </span>
                        </div>
                        <p className="text-sm font-semibold text-[#2C1A0E] dark:text-gray-200 leading-tight">
                          {event.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-1 line-clamp-2">{event.shortDesc}</p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelected(null)}
                    className="mt-4 w-full border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-400 hover:border-[#8B1A1A] hover:text-[#8B1A1A] text-sm py-2 rounded-lg transition-colors"
                  >
                    ← Quay lại danh sách
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapPage;
