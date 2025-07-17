'use client'

import { SplineScene } from "@/components/ui/spline-scene";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      {/* Background Spotlight */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight">
                AI × 副業で
                <br />
                <SparklesText 
                  text="時間と夢" 
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                  colors={{ first: "#9E7AFF", second: "#FE8BBB" }}
                />
                を最速実現
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
                Udemyベストセラー講師／AI活用コンサルタント ないと
                <br />
                忙しい社会人が &quot;AI時短 → 副業収益化&quot; へ踏み出す伴走者
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                <Play className="w-5 h-5 mr-2" />
                最新講座を見る
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-3 border border-gray-600 text-white rounded-lg font-semibold transition-all hover:bg-white hover:text-black">
                コミュニティに参加
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">2000+</div>
                <div className="text-xs sm:text-sm text-gray-400">受講生</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">1000万</div>
                <div className="text-xs sm:text-sm text-gray-400">月間インプレッション</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">複数</div>
                <div className="text-xs sm:text-sm text-gray-400">Business採用講座</div>
              </div>
            </div>
          </div>
          
          {/* Right Content - 3D Scene */}
          <div className="relative">
            <Card className="h-[400px] md:h-[500px] lg:h-[600px] bg-black/50 backdrop-blur-sm border-gray-800 relative overflow-hidden">
              <SplineScene 
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}