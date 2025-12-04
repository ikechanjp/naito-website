'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function ServicesSection() {
  const courses = [
    {
      title: "Midjourney&にじジャーニー入門",
      description: "AI画像生成ツールの基礎から実践的な活用方法まで",
      link: "https://www.udemy.com/course/midjourneyai/?couponCode=202512QQQ",
      gradient: "from-rose-400 to-pink-400",
      emoji: "🎨",
      thumbnail: "/images/courses/midjourney.png"
    },
    {
      title: "サクッと作成する「伝わる図解」完全マスター講座",
      description: "Claude・Zoom・NotebookLMを使った効果的な図解作成",
      link: "https://www.udemy.com/course/claudezoomnotebooklm/?couponCode=202512QQQ",
      gradient: "from-orange-400 to-amber-400", 
      emoji: "📊",
      thumbnail: "/images/courses/zukai.png"
    },
    {
      title: "AIで超時短コンテンツ作成",
      description: "Claude・Feloなどを活用した効率的なコンテンツ制作術",
      link: "https://www.udemy.com/course/feloclaudenapkinirusiru/?couponCode=202512QQQ",
      gradient: "from-teal-400 to-cyan-400",
      emoji: "⚡",
      thumbnail: "/images/courses/content.png"
    },
    {
      title: "音声入力＆AI文字起こしで超時短術",
      description: "音声認識とAIを活用した効率的な文字起こし・文書作成術",
      link: "https://www.udemy.com/course/voice_input/?couponCode=202512QQQ",
      gradient: "from-sky-400 to-blue-400",
      emoji: "🎤",
      thumbnail: "/images/courses/voice.png"
    },
    {
      title: "GAMMAでAIスライド完全攻略！",
      description: "AIを活用したプレゼンテーション作成の完全マスター講座",
      link: "https://www.udemy.com/course/gammaai-x/?couponCode=202512QQQ",
      gradient: "from-amber-400 to-orange-400",
      emoji: "📈",
      thumbnail: "/images/courses/gamma.png"
    },
    {
      title: "副業時代の時間管理術",
      description: "忙しい社会人が効率的に時間を活用し、副業と本業を両立する実践的な時間管理術",
      link: "https://www.udemy.com/course/time-management-24/?couponCode=202512QQQ",
      gradient: "from-rose-400 to-orange-400",
      emoji: "⏰",
      thumbnail: "/images/courses/time.png",
      isNew: true
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-rose-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              🎓 <span className="text-transparent bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text">Udemy講座ラインナップ</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              AI時代の副業・スキルアップに必要な実践的な知識を学べる6つのコース
            </p>
          </div>
          
          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card 
                key={index} 
                className="bg-white border-rose-200 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden"
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
                  <CardTitle className="text-xl text-gray-800 line-clamp-2">{course.title}</CardTitle>
                  <CardDescription className="text-sm text-gray-600 line-clamp-3">
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
              className="block w-full py-12 px-8 rounded-2xl font-bold text-white transition-all duration-300 bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 hover:scale-105 hover:shadow-2xl text-3xl md:text-4xl text-center shadow-xl border-4 border-rose-200"
            >
              📚 Kindle本をチェックする 📚
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}