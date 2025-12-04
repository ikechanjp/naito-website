'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Twitter, FileText, GraduationCap, Mail } from "lucide-react";

export function ContactSection() {
  const contactLinks = [
    {
      icon: <Mail className="w-6 h-6 text-rose-500" />,
      title: "お問い合わせ",
      handle: "info@nikdclub.com",
      description: "講演・コンサル依頼はこちら",
      url: "mailto:info@nikdclub.com",
      gradient: "from-rose-400 to-pink-400"
    },
    {
      icon: <Twitter className="w-6 h-6 text-sky-500" />,
      title: "X (Twitter)",
      handle: "@nikdjapan",
      description: "AI × 副業の最新情報を発信",
      url: "https://x.com/nikdjapan",
      gradient: "from-sky-400 to-blue-400"
    },
    {
      icon: <FileText className="w-6 h-6 text-teal-500" />,
      title: "Note",
      handle: "note.com/nikd",
      description: "詳細な解説記事を投稿",
      url: "https://note.com/nikd",
      gradient: "from-teal-400 to-cyan-400"
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-orange-500" />,
      title: "Udemy",
      handle: "講師プロフィール",
      description: "AI・副業関連の実践講座",
      url: "https://www.udemy.com/user/chi-tian-xian-liang/",
      gradient: "from-orange-400 to-amber-400"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
              Contact & <span className="text-transparent bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text">Media</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
              お気軽にお問い合わせください。各種SNSでも情報発信中です。
            </p>
          </div>
          
          {/* Contact Links Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {contactLinks.map((link, index) => (
              <Card 
                key={index} 
                className="bg-white border-rose-200 backdrop-blur-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => window.open(link.url, '_blank')}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      {link.icon}
                      <CardTitle className="text-xl text-gray-800">{link.title}</CardTitle>
                    </div>
                    <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-gray-800 transition-colors" />
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="text-gray-700 font-medium">{link.handle}</div>
                  <div className="text-sm text-gray-600">{link.description}</div>
                  
                  <div className="pt-2">
                    <div className={`inline-flex items-center px-4 py-2 rounded-lg font-semibold text-white text-sm transition-all duration-300 bg-gradient-to-r ${link.gradient} group-hover:scale-105`}>
                      アクセス
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Newsletter Signup */}
          <Card className="bg-white border-2 border-rose-300 backdrop-blur-sm shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-800">メルマガ登録</CardTitle>
              <p className="text-gray-700">AI最新情報 + 限定クーポンを定期配信</p>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <button 
                  className="px-8 py-4 bg-gradient-to-r from-rose-400 to-orange-400 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg text-lg"
                  onClick={() => window.open('https://nikdclub.com/p/r/aKjODsfb', '_blank')}
                >
                  📧 メルマガ登録する
                </button>
              </div>
              <p className="text-center text-sm text-gray-600 mt-4">
                無料登録で有益トピックを定期配信します
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}