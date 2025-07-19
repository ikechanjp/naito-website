'use client'

import { useEffect, useState } from 'react';

interface Star {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
}

export function ShootingStars() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const createStar = () => {
      const star: Star = {
        id: Date.now() + Math.random(),
        startX: Math.random() * window.innerWidth,
        startY: Math.random() * (window.innerHeight * 0.3), // 上部30%から開始
        endX: Math.random() * window.innerWidth,
        endY: window.innerHeight + 100, // 画面下部まで
        duration: 1500 + Math.random() * 1000, // 1.5-2.5秒
        delay: 0,
      };
      
      setStars(prev => [...prev.slice(-2), star]); // 最大3つまで保持
      
      // アニメーション終了後に削除
      setTimeout(() => {
        setStars(prev => prev.filter(s => s.id !== star.id));
      }, star.duration + 500);
    };

    // 10秒に1回流れ星を作成
    const interval = setInterval(createStar, 10000);
    
    // 初回実行（3秒後）
    const initialTimeout = setTimeout(createStar, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(initialTimeout);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute w-1 h-1 bg-white rounded-full opacity-0 animate-shooting-star"
          style={{
            left: star.startX,
            top: star.startY,
            '--end-x': `${star.endX - star.startX}px`,
            '--end-y': `${star.endY - star.startY}px`,
            '--duration': `${star.duration}ms`,
            '--delay': `${star.delay}ms`,
            animation: `shooting-star ${star.duration}ms ease-out ${star.delay}ms forwards`,
          } as React.CSSProperties & { [key: string]: string }}
        >
          {/* 流れ星の尻尾 */}
          <div 
            className="absolute bg-gradient-to-r from-white via-blue-200 to-transparent rounded-full"
            style={{
              width: '40px',
              height: '2px',
              right: '0',
              top: '-0.5px',
              transformOrigin: 'right center',
              transform: `rotate(${Math.atan2(star.endY - star.startY, star.endX - star.startX)}rad)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}