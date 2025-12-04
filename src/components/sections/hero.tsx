'use client'

import { Card } from "@/components/ui/card";
import { FloatingElements } from "@/components/ui/floating-elements";
import { SparkleText } from "@/components/ui/sparkle-text";

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      {/* Background Spotlight */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/30 via-transparent to-amber-100/30"></div>
      
      {/* Main Content - Centered */}
      <div className="container mx-auto px-4 min-h-screen flex items-center justify-center">
        <div className="text-center space-y-8 max-w-4xl w-full">
          {/* Main Title */}
          <div className="space-y-8">
            {/* Name prominently displayed */}
            <div className="text-center">
              <SparkleText 
                text="ないと" 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-rose-500 via-orange-400 to-amber-500 bg-clip-text text-transparent"
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              <SparkleText 
                text="AI × 副業" 
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent"
              />
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl">パパママに<span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">「時短」</span>と<span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">「収益」</span>を</span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              🎯 Udemyベストセラー＆Business講師
              <br />
              💡 AI時短化でパパママを応援する実践型サポーター
            </p>
          </div>
          
          
          {/* Stats - Centered */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-12 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-base sm:text-lg font-semibold text-gray-800">Udemy受講者</div>
              <div className="text-base sm:text-lg font-semibold text-rose-600">3,000名以上</div>
            </div>
            <div className="text-center">
              <div className="text-base sm:text-lg font-semibold text-gray-800">Udemy Business</div>
              <div className="text-base sm:text-lg font-semibold text-rose-600">2講座採用</div>
            </div>
            <div className="text-center">
              <div className="text-base sm:text-lg font-semibold text-gray-800">EverImpact</div>
              <div className="text-base sm:text-lg font-semibold text-rose-600">主宰</div>
            </div>
            <div className="text-center">
              <div className="text-base sm:text-lg font-semibold text-gray-800">Kindleベストセラー</div>
              <div className="text-base sm:text-lg font-semibold text-rose-600">作家</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Horizontal Card Below Hero */}
      <div className="container mx-auto px-4 pb-20">
        <Card className="max-w-6xl mx-auto bg-white/90 backdrop-blur-sm border-rose-200 relative overflow-hidden shadow-lg">
          <FloatingElements />
          
          {/* Content */}
          <div className="p-8 md:p-12 lg:p-16 flex items-center justify-center relative z-10">
            <div className="text-center space-y-6">
              <div className="text-5xl md:text-6xl lg:text-7xl">🚀</div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
                AI × 副業で<br />
                <span className="text-transparent bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text">
                  未来を創造
                </span>
              </h3>
              <p className="text-gray-700 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
                最新技術と実践的なノウハウで、あなたの可能性を最大限に引き出します
              </p>
            </div>
          </div>
          
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-rose-50/30 via-transparent to-transparent pointer-events-none" />
        </Card>
      </div>
    </section>
  );
}