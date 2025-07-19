'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Users, Mail, BookOpen, ExternalLink } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Play className="w-8 h-8 text-purple-400" />,
      title: "Udemy講座",
      description: "AI時短术・Midjourney・Gammaなど実践的講座群",
      link: "https://www.udemy.com/user/chi-tian-xian-liang/",
      gradient: "from-blue-500 to-purple-600",
      emoji: "🎓"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "EverImpact",
      description: "Udemy講師デビュー支援コミュニティ",
      link: "#",
      gradient: "from-pink-500 to-red-500",
      emoji: "🚀"
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      title: "Kindle書籍",
      description: "『Midjourney超入門』ベストセラー",
      link: "https://www.amazon.co.jp/stores/ないと/author/B0912GFJ41?ref=ap_rdr&isDramIntegrated=true&shoppingPortalEnabled=true",
      gradient: "from-green-500 to-blue-500",
      emoji: "📘"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      title: "コンサルタント",
      description: "AI活用・副業收益化の個別相談サポート",
      link: "#",
      gradient: "from-purple-500 to-pink-500",
      emoji: "💡"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              📦 <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">AI × 副業で成果を出す4つのサービス</span>
            </h2>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group cursor-pointer"
                onClick={() => window.open(service.link, '_blank')}
              >
                <CardHeader className="pb-6">
                  <div className="text-center space-y-4">
                    <div className="text-5xl">{service.emoji}</div>
                    <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                    <CardDescription className="text-lg text-gray-300">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <button className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${service.gradient} hover:scale-105 hover:shadow-lg`}>
                    詳細を見る
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