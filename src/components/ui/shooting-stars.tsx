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
    let lastX = 0;
    let lastY = 0;
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const currentX = e.clientX;
      const currentY = e.clientY;
      
      // マウスが移動している場合のみ星屑を生成
      if (Math.abs(currentX - lastX) > 5 || Math.abs(currentY - lastY) > 5) {
        const newParticles: Particle[] = [];
        const particleCount = 2; // 常に2個

        for (let i = 0; i < particleCount; i++) {
          const particle: Particle = {
            id: Date.now() + Math.random() + i,
            x: currentX + (Math.random() - 0.5) * 10,
            y: currentY + (Math.random() - 0.5) * 10,
            vx: (lastX - currentX) * 0.1 + (Math.random() - 0.5) * 2, // マウスの逆方向に移動
            vy: (lastY - currentY) * 0.1 + (Math.random() - 0.5) * 2,
            size: Math.random() * 3 + 1,
            opacity: 1,
            life: 0,
            maxLife: 30 + Math.random() * 20, // 30-50フレーム
          };
          newParticles.push(particle);
        }

        setParticles(prev => [...prev.slice(-20), ...newParticles]); // 最大22個まで保持
        
        lastX = currentX;
        lastY = currentY;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          x: particle.x + particle.vx,
          y: particle.y + particle.vy,
          vx: particle.vx * 0.95, // より強い摩擦
          vy: particle.vy * 0.95,
          life: particle.life + 1,
          opacity: Math.max(0, 1 - (particle.life / particle.maxLife)), // 線形フェード
        })).filter(particle => particle.life < particle.maxLife && particle.opacity > 0.01)
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
            className="bg-gradient-to-r from-white via-blue-200 to-purple-300 rounded-full"
            style={{
              width: particle.size,
              height: particle.size,
              opacity: particle.opacity,
              boxShadow: `0 0 ${particle.size * 3}px rgba(255, 255, 255, ${particle.opacity * 0.8})`,
              transform: `scale(${1 - particle.life / particle.maxLife * 0.5})`, // 徐々に小さくなる
            }}
          />
        </div>
      ))}
    </div>
  );
}