'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Contact & <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">Newsletter</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              お気軽にお問い合わせください。最新情報をお届けします。
            </p>
          </div>
          
          {/* Contact and Newsletter */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Contact */}
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Mail className="w-8 h-8 text-pink-400" />
                  <CardTitle className="text-2xl text-white">お問い合わせ</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-gray-300 font-medium">info@nikdclub.com</div>
                  <div className="text-sm text-gray-400">講演・コンサル依頼はこちら</div>
                </div>
                <button 
                  onClick={() => window.open('mailto:info@nikdclub.com', '_blank')}
                  className="w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 hover:shadow-lg"
                >
                  メールを送る
                </button>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Newsletter 登録</CardTitle>
                <p className="text-gray-300">AI最新情報 + 限定クーポンを定期配信</p>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    placeholder="メールアドレス"
                    className="px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <button className="py-3 px-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg">
                    登録する
                  </button>
                </div>
                <p className="text-center text-sm text-gray-400 mt-4">
                  無料登録で有益トピックを定期配信します
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}