'use client'


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
          
          {/* 3-line Profile */}
          <div className="text-center space-y-4 mb-12">
            <div className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed space-y-2">
              <p>Udemyベストセラー＆Business講師／AI時短化でパパママを応援</p>
              <p>AIで時間短縮しながら副業収益化する実践型サポーター</p>
              <p>EverImpact主宰、Kindle著者『Midjourney超入門』</p>
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