'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Play, Users, Mail, BookOpen, ExternalLink } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: <Play className="w-8 h-8 text-purple-400" />,
      title: "Udemy講座群",
      description: "画像生成AI・Gamma・AI時短術など",
      target: "AI・副業初中級者",
      features: "実践的・短時間・月次割引あり",
      gradient: "from-purple-500 to-purple-600",
      link: "https://www.udemy.com/user/chi-tian-xian-liang/"
    },
    {
      icon: <Users className="w-8 h-8 text-pink-400" />,
      title: "EverImpact",
      description: "Udemy講師デビュー支援コミュニティ",
      target: "忙しい社会人・主婦",
      features: "&quot;伴走型&quot;サポートで新規講師輩出",
      gradient: "from-pink-500 to-pink-600",
      link: "#"
    },
    {
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      title: "Newsletter",
      description: "AI最新情報 + 限定クーポン",
      target: "フォロワー／受講生",
      features: "無料登録で有益トピックを定期配信",
      gradient: "from-blue-500 to-blue-600",
      link: "#"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-400" />,
      title: "Kindle書籍",
      description: "Midjourney完全入門",
      target: "画像生成AI初学者",
      features: "図解豊富・SNS連動特典あり",
      gradient: "from-green-500 to-green-600",
      link: "#"
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Products & <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Services</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              AI × 副業で成果を出すための厳選されたサービス
            </p>
          </div>
          
          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 group"
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {service.icon}
                      <CardTitle className="text-2xl text-white">{service.title}</CardTitle>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <CardDescription className="text-lg text-gray-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-sm font-medium text-purple-400 mr-2">対象:</span>
                      <span className="text-sm text-gray-300">{service.target}</span>
                    </div>
                    
                    <div className="flex items-start">
                      <span className="text-sm font-medium text-pink-400 mr-2">特徴:</span>
                      <span className="text-sm text-gray-300">{service.features}</span>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className={`w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${service.gradient} hover:scale-105 hover:shadow-lg`}>
                      詳細を見る
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Service Table */}
          <div className="mt-16">
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white text-center">サービス一覧</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="py-3 px-4 text-white font-semibold">サービス</th>
                        <th className="py-3 px-4 text-white font-semibold">概要</th>
                        <th className="py-3 px-4 text-white font-semibold">対象</th>
                        <th className="py-3 px-4 text-white font-semibold">特徴</th>
                      </tr>
                    </thead>
                    <tbody>
                      {services.map((service, index) => (
                        <tr key={index} className="border-b border-gray-700/50 hover:bg-gray-700/20 transition-colors">
                          <td className="py-4 px-4 text-purple-400 font-medium">{service.title}</td>
                          <td className="py-4 px-4 text-gray-300">{service.description}</td>
                          <td className="py-4 px-4 text-gray-300">{service.target}</td>
                          <td className="py-4 px-4 text-gray-300">{service.features}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}