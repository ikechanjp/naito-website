'use client'

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="space-y-6">
          {/* Footer Links */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <a 
              href="https://nikdclub.com/p/r/BqMj7GEL" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              お問い合わせ
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="https://sites.google.com/view/nikdclub-privacypolicy/%E3%83%97%E3%83%A9%E3%82%A4%E3%83%90%E3%82%B7%E3%83%BC%E3%83%9D%E3%83%AA%E3%82%B7%E3%83%BC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              プライバシーポリシー
            </a>
            <span className="text-gray-600">|</span>
            <a 
              href="https://sites.google.com/view/nikdclub-commercial-code/%E7%89%B9%E5%95%86%E6%B3%95%E3%81%AB%E5%9F%BA%E3%81%A5%E3%81%8F%E8%A1%A8%E8%A8%98" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              特定商取引法に基づく表記
            </a>
          </div>
          
          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} ないと. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}