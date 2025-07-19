'use client'

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const newStar: Star = {
        id: Date.now() + Math.random(),
        x: -100,
        y: Math.random() * window.innerHeight * 0.6,
        size: Math.random() * 3 + 1,
        speed: Math.random() * 3 + 2,
        opacity: Math.random() * 0.8 + 0.2,
      };
      
      setStars(prev => [...prev, newStar]);
      
      // 5秒後に削除
      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== newStar.id));
      }, 5000);
    };

    // テスト用：最初に1つ作成
    createStar();
    
    // 5秒間隔でテスト（後で10秒に変更）
    const interval = setInterval(createStar, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    const animateStars = () => {
      setStars(prev => 
        prev.map(star => ({
          ...star,
          x: star.x + star.speed,
          y: star.y + star.speed * 0.5,
        })).filter(star => star.x < window.innerWidth + 200)
      );
    };

    const animationInterval = setInterval(animateStars, 16); // 60fps

    return () => {
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute"
          style={{
            left: star.x,
            top: star.y,
            opacity: star.opacity,
          }}
        >
          {/* 流れ星本体 */}
          <div 
            className="bg-white rounded-full shadow-lg"
            style={{
              width: star.size,
              height: star.size,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
            }}
          />
          {/* 流れ星の尻尾 */}
          <div 
            className="absolute bg-gradient-to-r from-white via-blue-200 to-transparent"
            style={{
              width: star.size * 20,
              height: star.size * 0.5,
              left: -star.size * 20,
              top: star.size * 0.25,
              transform: 'rotate(15deg)',
              opacity: 0.6,
            }}
          />
        </div>
      ))}
    </div>
  );
}