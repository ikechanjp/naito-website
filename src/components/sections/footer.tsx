'use client'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">ないと</h3>
              <p className="text-gray-400 text-sm">
                AI × 副業ハイブリッドで &quot;時間と夢&quot; を最速実現
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
                <li><a href="#community" className="hover:text-white transition-colors">Community</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Udemy講座</a></li>
                <li><a href="#" className="hover:text-white transition-colors">EverImpact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletter</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kindle書籍</a></li>
              </ul>
            </div>
            
            {/* Contact */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:info@nikdclub.com" className="hover:text-white transition-colors">お問い合わせ</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">SNS・メディア</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Newsletter登録</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ないと. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}