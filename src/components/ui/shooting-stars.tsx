'use client'

import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  life: number;
  maxLife: number;
}

export function MouseStarDust() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // マウス移動時に星屑を生成
      const newParticles: Particle[] = [];
      const particleCount = Math.random() * 3 + 2; // 2-5個の粒子

      for (let i = 0; i < particleCount; i++) {
        const particle: Particle = {
          id: Date.now() + Math.random() + i,
          x: e.clientX + (Math.random() - 0.5) * 20,
          y: e.clientY + (Math.random() - 0.5) * 20,
          vx: (Math.random() - 0.5) * 4,
          vy: (Math.random() - 0.5) * 4,
          size: Math.random() * 4 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          life: 0,
          maxLife: Math.random() * 60 + 40, // 40-100フレーム
        };
        newParticles.push(particle);
      }

      setParticles(prev => [...prev, ...newParticles]);
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vx: particle.vx * 0.98, // 摩擦
          vy: particle.vy * 0.98,
          life: particle.life + 1,
          opacity: particle.opacity * (1 - particle.life / particle.maxLife),
        })).filter(particle => particle.life < particle.maxLife)
      );
    };

    const animationInterval = setInterval(animateParticles, 16); // 60fps

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x,
            top: particle.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* 星屑 */}
          <div 
            className="bg-gradient-to-r from-white via-yellow-200 to-pink-200 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 2}px rgba(255, 255, 255, ${particle.opacity * 0.5})`,
            }}
          />
        </div>
      ))}
    </div>
  );
}