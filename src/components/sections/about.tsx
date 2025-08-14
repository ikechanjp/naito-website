'use client'

import Image from "next/image";

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              🧑‍💼 <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">ないとって誰？</span>
            </h2>
          </div>
          
          {/* Profile Section with Avatar */}
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-12">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 lg:w-56 lg:h-56">
                <Image
                  src="/images/profile/avatar.jpg"
                  alt="ないと プロフィール写真"
                  fill
                  className="object-cover rounded-full border-4 border-purple-400/30 shadow-2xl"
                  sizes="(max-width: 1024px) 192px, 224px"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-400/20 to-pink-400/20"></div>
              </div>
            </div>
            
            {/* Profile Text */}
            <div className="flex-1 text-center lg:text-left space-y-4">
              <div className="text-lg md:text-xl text-gray-300 leading-relaxed space-y-3">
                <p>Udemyベストセラー＆Business講師／AI時短化でパパママを応援</p>
                <p>AIで時間短縮しながら副業収益化する実践型サポーター</p>
                <p>EverImpact主宰、Kindle著者『Midjourney超入門』</p>
              </div>
            </div>
          </div>
          
          {/* Achievement Icons */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <div className="flex items-center space-x-3 bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700">
              <span className="text-2xl">🎓</span>
              <span className="text-white font-medium">Udemyベストセラー講座</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700">
              <span className="text-2xl">🏆</span>
              <span className="text-white font-medium">Udemy Business認定</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700">
              <span className="text-2xl">📘</span>
              <span className="text-white font-medium">Kindleベストセラー作家</span>
            </div>
            <div className="flex items-center space-x-3 bg-gray-800/50 px-4 py-3 rounded-lg border border-gray-700">
              <span className="text-2xl">🌐</span>
              <span className="text-white font-medium">EverImpact主宰</span>
            </div>
          </div>
          
          {/* Mission Section */}
          <div className="text-center bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">🎯 Mission（ミッション）</h3>
            <blockquote className="text-xl md:text-2xl text-gray-200 font-medium">
              忙しくても、AIを味方に「夢へ最短で向かう力」を届ける。
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}