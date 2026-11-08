import React, { useEffect, useRef } from 'react';
import { victoryAudio } from '../../utils/celebrationAudio';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
  radius: number;
  decay: number;
}

interface Rocket {
  x: number;
  y: number;
  targetY: number;
  vy: number;
  color: string;
}

interface Confetti {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  width: number;
  height: number;
  color: string;
}

const FIREWORK_COLORS = [
  '#FFD700', // Gold
  '#E60000', // Revolutionary Red
  '#FF4500', // Orange Red
  '#FFA500', // Orange
  '#FFFF00', // Yellow
  '#FF69B4', // Bright Pink
  '#00FF7F', // Green
  '#00FFFF', // Cyan
  '#FFFFFF', // White Spark
];

export const CelebrationFireworks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Particle[] = [];
    const rockets: Rocket[] = [];
    const confettis: Confetti[] = [];

    // Initialize 100 confetti pieces
    for (let i = 0; i < 90; i++) {
      confettis.push({
        x: Math.random() * width,
        y: Math.random() * -height,
        vx: (Math.random() - 0.5) * 3,
        vy: Math.random() * 3 + 2,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        width: Math.random() * 8 + 6,
        height: Math.random() * 12 + 8,
        color: FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)],
      });
    }

    const createExplosion = (x: number, y: number, color: string) => {
      victoryAudio.playFireworkPop();
      const count = 70;
      for (let i = 0; i < count; i++) {
        const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.4;
        const speed = Math.random() * 6 + 2;
        particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          alpha: 1,
          color,
          radius: Math.random() * 2.5 + 1.5,
          decay: Math.random() * 0.015 + 0.01,
        });
      }
    };

    const launchRocket = () => {
      const startX = Math.random() * (width * 0.8) + width * 0.1;
      const targetY = Math.random() * (height * 0.4) + height * 0.1;
      const color = FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
      rockets.push({
        x: startX,
        y: height,
        targetY,
        vy: -(Math.random() * 4 + 10),
        color,
      });
    };

    let rocketTimer = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Launch rockets periodically
      rocketTimer++;
      if (rocketTimer % 22 === 0) {
        launchRocket();
      }

      // Update and draw rockets
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i];
        r.y += r.vy;

        // Draw rocket head & spark trail
        ctx.beginPath();
        ctx.arc(r.x, r.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = r.color;
        ctx.fill();

        // Trail spark
        ctx.beginPath();
        ctx.arc(r.x + (Math.random() - 0.5) * 4, r.y + 6, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = '#FFA500';
        ctx.fill();

        if (r.y <= r.targetY) {
          createExplosion(r.x, r.y, r.color);
          rockets.splice(i, 1);
        }
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.06; // Gravity
        p.vx *= 0.98; // Drag
        p.alpha -= p.decay;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      }

      // Update and draw confetti
      for (let i = 0; i < confettis.length; i++) {
        const c = confettis[i];
        c.y += c.vy;
        c.x += c.vx;
        c.rotation += c.rotationSpeed;

        if (c.y > height) {
          c.y = -20;
          c.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(c.x, c.y);
        ctx.rotate((c.rotation * Math.PI) / 180);
        ctx.fillStyle = c.color;
        ctx.fillRect(-c.width / 2, -c.height / 2, c.width, c.height);
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50 w-full h-full"
    />
  );
};
