'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function ServicesSection() {
  const courses = [
    {
      title: "Midjourney&にじジャーニー入門",
      description: "AI画像生成ツールの基礎から実践的な活用方法まで",
      link: "https://www.udemy.com/course/midjourneyai/?couponCode=202509BBB",
      gradient: "from-purple-500 to-pink-600",
      emoji: "🎨",
      thumbnail: "/images/courses/midjourney.png"
    },
    {
      title: "サクッと作成する「伝わる図解」完全マスター講座",
      description: "Claude・Zoom・NotebookLMを使った効果的な図解作成",
      link: "https://www.udemy.com/course/claudezoomnotebooklm/?couponCode=202509BBB",
      gradient: "from-pink-500 to-red-500", 
      emoji: "📊",
      thumbnail: "/images/courses/zukai.png"
    },
    {
      title: "AIで超時短コンテンツ作成",
      description: "Claude・Feloなどを活用した効率的なコンテンツ制作術",
      link: "https://www.udemy.com/course/feloclaudenapkinirusiru/?couponCode=202509BBB",
      gradient: "from-green-500 to-blue-500",
      emoji: "⚡",
      thumbnail: "/images/courses/content.png"
    },
    {
      title: "音声入力＆AI文字起こしで超時短術",
      description: "音声認識とAIを活用した効率的な文字起こし・文書作成術",
      link: "https://www.udemy.com/course/voice_input/?couponCode=202509BBB",
      gradient: "from-blue-500 to-purple-600",
      emoji: "🎤",
      thumbnail: "/images/courses/voice.png"
    },
    {
      title: "GAMMAでAIスライド完全攻略！",
      description: "AIを活用したプレゼンテーション作成の完全マスター講座",
      link: "https://www.udemy.com/course/gammaai-x/?couponCode=202509DDD",
      gradient: "from-orange-500 to-yellow-500",
      emoji: "📈",
      thumbnail: "/images/courses/gamma.png",
      isNew: true
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
              AI時代の副業・スキルアップに必要な実践的な知識を学べる5つのコース
            </p>
          </div>
          
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer overflow-hidden"
                onClick={() => window.open(course.link, '_blank')}
              >
                {/* Thumbnail Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-700">
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {course.isNew && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                      NEW
                    </div>
                  )}
                </div>

                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-white line-clamp-2">{course.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-300 line-clamp-3">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${course.gradient} hover:scale-105 hover:shadow-lg`}>
                    講座詳細を見る
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Kindle Button */}
          <div className="mt-16">
            <a
              href="https://www.amazon.co.jp/stores/author/B0912GFJ41?ingress=0&visitId=89cc3f9e-b944-47b7-808a-f9ee582014a6&ref_=ap_rdr"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-12 px-8 rounded-2xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:scale-105 hover:shadow-2xl text-3xl md:text-4xl text-center shadow-xl border-4 border-purple-400/30"
            >
              📚 Kindle本をチェックする 📚
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}