// Types for the Vietnamese History Website

export interface HistoricalEvent {
  id: string;
  date: string;         // e.g. "02/09/1945"
  year: number;
  month?: number;
  day?: number;
  title: string;
  shortDesc: string;
  background: string;   // Bối cảnh / Nguyên nhân
  development: string;  // Diễn biến
  result: string;       // Kết quả & Ý nghĩa
  category: 'french-war' | 'american-war';
  tags: string[];
  images: MediaItem[];
  videos: VideoItem[];
  location?: string;
  significance: 'major' | 'moderate' | 'minor';
  source: string;       // Nguồn tham khảo
}

export interface MediaItem {
  id: string;
  url: string | null;   // null = placeholder
  thumbnailUrl?: string | null;
  caption: string;
  credit: string;       // Nguồn/Tác giả
  year?: number;
  category: 'battlefield' | 'portrait' | 'document' | 'ceremony' | 'landmark' | 'other';
  eventId?: string;
  warPeriod: 'french' | 'american' | 'both';
  needsMedia?: boolean; // true = placeholder
}

export interface VideoItem {
  id: string;
  embedUrl: string | null; // null = placeholder
  title: string;
  source: string;
  duration?: string;
  eventId?: string;
  needsMedia?: boolean;
}

export interface HistoricalFigure {
  id: string;
  name: string;
  fullName?: string;
  born: string;
  died?: string;
  role: string;
  bio: string;
  contributions: string[];
  image: MediaItem;
  relatedEvents: string[]; // event IDs
  warPeriod: 'french' | 'american' | 'both';
}

export interface MapLocation {
  id: string;
  name: string;
  region: string;
  coordinates: { lat: number; lng: number };
  events: string[]; // event IDs
  description: string;
  image: MediaItem | null;
  significance: 'major' | 'moderate';
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index 0-3
  explanation: string;
  difficulty: 'easy' | 'medium' | 'hard';
  period: 'french' | 'american' | 'general';
  eventId?: string;
}

export type ThemeMode = 'light' | 'dark';

export interface FilterState {
  year?: number;
  period?: 'french' | 'american' | 'all';
  category?: string;
  significance?: string;
}
