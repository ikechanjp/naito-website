'use client'

import { Card } from "@/components/ui/card";
import { FloatingElements } from "@/components/ui/floating-elements";
import { SparkleText } from "@/components/ui/sparkle-text";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Spotlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
      
      {/* Main Content - Centered */}
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 max-w-4xl w-full">
          {/* Main Title */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
              <SparkleText 
                text="AI × 副業" 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
              <br />
              パパママに
              <span className="bg-gradient-to-r from-blue-400 to-pink-400 bg-clip-text text-transparent">「時短」</span>
              と
              <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">「収益」</span>
              を
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              🎯 Udemyベストセラー＆Business講師
              <br />
              💡 AI時短化でパパママを応援する実践型サポーター
            </p>
          </div>
          
          {/* CTA Buttons - Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-lg">
              📚 Udemy講座を見る
            </button>
            
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-pink-500 to-red-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 text-lg">
              📧 無料メルマガ（白 or 青）
            </button>
          </div>
          
          {/* Stats - Centered */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 pt-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">2,000名以上</div>
              <div className="text-sm sm:text-base text-gray-400">受講</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">Udemy Business</div>
              <div className="text-sm sm:text-base text-gray-400">2講座採用</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">EverImpact</div>
              <div className="text-sm sm:text-base text-gray-400">主宰</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">Kindleベスト</div>
              <div className="text-sm sm:text-base text-gray-400">セラー作家</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Horizontal Card Below Hero */}
      <div className="container mx-auto px-4 pb-20">
        <Card className="max-w-6xl mx-auto bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border-gray-800 relative overflow-hidden">
          <FloatingElements />
          
          {/* Content */}
          <div className="p-8 md:p-12 lg:p-16 flex items-center justify-center relative z-10">
            <div className="text-center space-y-6">
              <div className="text-5xl md:text-6xl lg:text-7xl">🚀</div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
                AI × 副業で<br />
                <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                  未来を創造
                </span>
              </h3>
              <p className="text-gray-300 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                最新技術と実践的なノウハウで、あなたの可能性を最大限に引き出します
              </p>
            </div>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
        </Card>
      </div>
    </section>
  );
}