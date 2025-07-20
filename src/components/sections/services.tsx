'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Clock, Users } from "lucide-react";

export function ServicesSection() {
  const courses = [
    {
      title: "音声入力＆AI文字起こしで超時短術",
      description: "音声認識とAIを活用した効率的な文字起こし・文書作成術",
      link: "https://www.udemy.com/course/voice_input/?couponCode=202506EFR",
      gradient: "from-blue-500 to-purple-600",
      emoji: "🎤",
      duration: "3時間",
      students: "500+",
      rating: "4.8"
    },
    {
      title: "Midjourney&にじジャーニー入門",
      description: "AI画像生成ツールの基礎から実践的な活用方法まで",
      link: "https://www.udemy.com/course/midjourneyai/?couponCode=202506AZX",
      gradient: "from-purple-500 to-pink-600",
      emoji: "🎨",
      duration: "4時間",
      students: "1200+", 
      rating: "4.9"
    },
    {
      title: "AIで超時短コンテンツ作成",
      description: "Claude・Felixなどを活用した効率的なコンテンツ制作術",
      link: "https://www.udemy.com/course/feloclaudenapkinirusiru/?couponCode=202506PKG",
      gradient: "from-green-500 to-blue-500",
      emoji: "⚡",
      duration: "3.5時間",
      students: "800+",
      rating: "4.7"
    },
    {
      title: "サクッと作成する「伝わる図解」完全マスター講座",
      description: "Claude・Zoom・NotebookLMを使った効果的な図解作成",
      link: "https://www.udemy.com/course/claudezoomnotebooklm/?couponCode=202506FVD",
      gradient: "from-pink-500 to-red-500", 
      emoji: "📊",
      duration: "4.5時間",
      students: "600+",
      rating: "4.6"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              🎓 <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Udemy講座ラインナップ</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AI時代の副業・スキルアップに必要な実践的な知識を学べる4つのコース
            </p>
          </div>
          
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer"
                onClick={() => window.open(course.link, '_blank')}
              >
                <CardHeader className="pb-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-4xl">{course.emoji}</div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-yellow-400 font-semibold">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-white">{course.title}</CardTitle>
                    <CardDescription className="text-gray-300">
                      {course.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}人受講</span>
                    </div>
                  </div>
                  
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${course.gradient} hover:scale-105 hover:shadow-lg`}>
                    講座詳細を見る
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}