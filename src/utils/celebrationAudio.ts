// Web Audio API Synthesizer & Audio File Player for Revolutionary Victory Celebration
// Features the uploaded anthem: "Như Có Bác Trong Ngày Đại Thắng" (Nhạc sĩ Phạm Tuyên)
// Location: /audio/congratulations.mp3 and /audio/nhu-co-bac-trong-ngay-dai-thang.mp3

type AudioListener = (isPlaying: boolean, isMuted: boolean) => void;

class VictoryAudioPlayer {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isPlaying: boolean = false;
  private activeOscillators: OscillatorNode[] = [];
  private htmlAudio: HTMLAudioElement | null = null;
  private stopTimeout: number | null = null;
  private listeners: Set<AudioListener> = new Set();

  public readonly songTitle = 'Như Có Bác Trong Ngày Đại Thắng';
  public readonly songAuthor = 'Nhạc sĩ Phạm Tuyên';
  public readonly audioSrc = '/audio/congratulations.mp3';

  constructor() {
    if (typeof window !== 'undefined') {
      this.initHtmlAudio();
    }
  }

  private initHtmlAudio() {
    if (typeof Audio === 'undefined') return;
    if (!this.htmlAudio) {
      const audio = new Audio(this.audioSrc);
      audio.preload = 'auto';
      audio.volume = 0.85;
      audio.muted = this.isMuted;

      audio.onplay = () => {
        this.isPlaying = true;
        this.notify();
      };

      audio.onpause = () => {
        this.isPlaying = false;
        this.notify();
      };

      audio.onended = () => {
        this.isPlaying = false;
        this.notify();
      };

      audio.onerror = () => {
        // Fallback gracefully without throwing
        this.isPlaying = false;
        this.notify();
      };

      this.htmlAudio = audio;
    }
  }

  public subscribe(listener: AudioListener): () => void {
    this.listeners.add(listener);
    listener(this.isPlaying, this.isMuted);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify() {
    this.listeners.forEach((fn) => fn(this.isPlaying, this.isMuted));
  }

  private getAudioContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (this.htmlAudio) {
      this.htmlAudio.muted = muted;
    }
    if (muted) {
      this.stopCelebrationSong();
    }
    this.notify();
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public toggleMute(): boolean {
    this.setMuted(!this.isMuted);
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  // Play sound for correct answer
  public playCorrectSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6 (Major arpeggio)
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + idx * 0.08);

        gain.gain.setValueAtTime(0.18, now + idx * 0.08);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.35);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.08);
        osc.stop(now + idx * 0.08 + 0.4);
      });
    } catch {
      // Ignore
    }
  }

  // Play sound for incorrect answer
  public playWrongSound() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const notes = [311.13, 293.66]; // D#4, D4
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(freq, now + idx * 0.15);

        gain.gain.setValueAtTime(0.12, now + idx * 0.15);
        gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.15 + 0.3);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + idx * 0.15);
        osc.stop(now + idx * 0.15 + 0.35);
      });
    } catch {
      // Ignore
    }
  }

  // Play firework pop sound effect
  public playFireworkPop() {
    if (this.isMuted) return;
    const ctx = this.getAudioContext();
    if (!ctx) return;

    try {
      const now = ctx.currentTime;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(160, now);
      osc.frequency.exponentialRampToValueAtTime(35, now + 0.3);

      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + 0.4);
    } catch {
      // Ignore
    }
  }

  // Play "Như Có Bác Trong Ngày Đại Thắng"
  public playCelebrationSong(): Promise<boolean> {
    if (this.isMuted) return Promise.resolve(false);
    this.stopCelebrationSong();

    return new Promise((resolve) => {
      this.initHtmlAudio();

      if (this.htmlAudio) {
        this.htmlAudio.currentTime = 0;
        this.htmlAudio.muted = false;
        this.isMuted = false;

        const playPromise = this.htmlAudio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              this.isPlaying = true;
              this.notify();
              resolve(true);
            })
            .catch(() => {
              // Browser autoplay blocked or error: fallback to synthesis
              this.playSynthesizedFanfare();
              resolve(false);
            });
          return;
        }
      }

      this.playSynthesizedFanfare();
      resolve(true);
    });
  }

  // Toggle Play / Pause for the song
  public togglePlayCelebrationSong(): Promise<boolean> {
    if (this.isPlaying) {
      this.stopCelebrationSong();
      return Promise.resolve(false);
    } else {
      return this.playCelebrationSong();
    }
  }

  // Web Audio API Synthesized Brass Victory Fanfare (Fallback)
  private playSynthesizedFanfare() {
    const ctx = this.getAudioContext();
    if (!ctx) return;

    this.isPlaying = true;
    this.notify();

    const G4 = 392.0;
    const C5 = 523.25;
    const D5 = 587.33;
    const E5 = 659.25;
    const G5 = 783.99;
    const A5 = 880.0;
    const C6 = 1046.5;

    const melody: Array<[number, number, number, boolean]> = [
      [G4, 0.2, 0.05, true],
      [C5, 0.4, 0.05, true],
      [E5, 0.4, 0.05, true],
      [G5, 0.7, 0.15, true],
      [E5, 0.25, 0.05, false],
      [G5, 0.25, 0.05, false],
      [C6, 0.8, 0.25, true],
      [C5, 0.3, 0.05, false],
      [D5, 0.3, 0.05, false],
      [E5, 0.5, 0.05, true],
      [E5, 0.25, 0.05, false],
      [D5, 0.25, 0.05, false],
      [C5, 0.5, 0.1, true],
      [D5, 0.3, 0.05, false],
      [E5, 0.3, 0.05, false],
      [G5, 0.6, 0.1, true],
      [E5, 0.3, 0.05, false],
      [D5, 0.6, 0.2, true],
      [G4, 0.25, 0.05, false],
      [C5, 0.3, 0.05, false],
      [D5, 0.3, 0.05, false],
      [E5, 0.5, 0.05, true],
      [G5, 0.4, 0.05, true],
      [A5, 0.6, 0.1, true],
      [G5, 0.3, 0.05, false],
      [E5, 0.3, 0.05, false],
      [D5, 0.4, 0.05, false],
      [C5, 0.9, 0.3, true],
      [C6, 0.4, 0.05, true],
      [G5, 0.3, 0.05, true],
      [A5, 0.4, 0.05, true],
      [G5, 0.6, 0.15, true],
      [E5, 0.3, 0.05, false],
      [D5, 0.3, 0.05, false],
      [C5, 0.4, 0.05, false],
      [D5, 0.6, 0.15, false],
      [G4, 0.25, 0.05, false],
      [C5, 0.4, 0.05, true],
      [E5, 0.4, 0.05, true],
      [G5, 0.5, 0.05, true],
      [C6, 1.3, 0.5, true],
    ];

    let startTime = ctx.currentTime + 0.1;

    melody.forEach(([freq, dur, pause, accented]) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = accented ? 'sawtooth' : 'triangle';
      osc.frequency.setValueAtTime(freq, startTime);

      const vol = accented ? 0.22 : 0.15;
      gain.gain.setValueAtTime(0.001, startTime);
      gain.gain.linearRampToValueAtTime(vol, startTime + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + dur);

      const subOsc = ctx.createOscillator();
      const subGain = ctx.createGain();
      subOsc.type = 'sine';
      subOsc.frequency.setValueAtTime(freq / 2, startTime);
      subGain.gain.setValueAtTime(vol * 0.35, startTime);
      subGain.gain.exponentialRampToValueAtTime(0.001, startTime + dur);

      osc.connect(gain);
      gain.connect(ctx.destination);

      subOsc.connect(subGain);
      subGain.connect(ctx.destination);

      try {
        osc.start(startTime);
        osc.stop(startTime + dur + 0.05);

        subOsc.start(startTime);
        subOsc.stop(startTime + dur + 0.05);

        this.activeOscillators.push(osc, subOsc);
      } catch {
        // Ignore
      }

      startTime += dur + pause;
    });

    const totalDuration = (startTime - ctx.currentTime) * 1000;
    if (this.stopTimeout) clearTimeout(this.stopTimeout);
    this.stopTimeout = window.setTimeout(() => {
      this.isPlaying = false;
      this.notify();
    }, Math.max(1000, totalDuration));
  }

  public stopCelebrationSong() {
    this.isPlaying = false;
    if (this.stopTimeout) {
      clearTimeout(this.stopTimeout);
      this.stopTimeout = null;
    }
    if (this.htmlAudio) {
      try {
        this.htmlAudio.pause();
        this.htmlAudio.currentTime = 0;
      } catch {
        // Ignore
      }
    }
    this.activeOscillators.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // Ignore
      }
    });
    this.activeOscillators = [];
    this.notify();
  }
}

export const victoryAudio = new VictoryAudioPlayer();
