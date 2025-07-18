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
              AI × 副業で
              <br />
              <SparkleText 
                text="時間と夢" 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              />
              を最速実現
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Udemyベストセラー講師／AI活用コンサルタント ないと
              <br />
              忙しい社会人が &quot;AI時短 → 副業収益化&quot; へ踏み出す伴走者
            </p>
          </div>
          
          {/* CTA Buttons - Centered */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-lg">
              <Play className="w-5 h-5 mr-2" />
              最新講座を見る
            </button>
            
            <button className="inline-flex items-center justify-center px-8 py-4 border border-gray-600 text-white rounded-lg font-semibold transition-all hover:bg-white hover:text-black text-lg">
              コミュニティに参加
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
          
          {/* Stats - Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">2000+</div>
              <div className="text-sm sm:text-base text-gray-400">受講生</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">1000万</div>
              <div className="text-sm sm:text-base text-gray-400">月間インプレッション</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">複数</div>
              <div className="text-sm sm:text-base text-gray-400">Business採用講座</div>
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