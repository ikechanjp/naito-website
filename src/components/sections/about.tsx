'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Users, BookOpen, Target } from "lucide-react";

export function AboutSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              About <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">ないと</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              AI × 副業ハイブリッドで忙しい社会人の&quot;時間と夢&quot;を最速実現する伴走者
            </p>
          </div>
          
          {/* Main Bio */}
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm mb-12">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-purple-400">肩書き</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Udemy ベストセラー講師（複数講座がUdemy Business採用）
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      AI活用オンラインコミュニティ EverImpact 主宰
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      副業 × AI 情報発信者
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      Kindle著者『画像生成AI Midjourney超入門』
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-pink-400">ミッション</h3>
                  <p className="text-gray-300 leading-relaxed">
                    忙しい社会人が &quot;AI時短 → 副業収益化&quot; へ踏み出す伴走者になること
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Achievements Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">2000+</div>
                <div className="text-gray-300 text-sm">Udemy受講生（累計）</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">2本</div>
                <div className="text-gray-300 text-sm">Udemy Business採用講座</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">1000万</div>
                <div className="text-gray-300 text-sm">月間インプレッション</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm text-center">
              <CardContent className="p-6">
                <BookOpen className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">多数</div>
                <div className="text-gray-300 text-sm">EverImpact新規講師輩出</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}