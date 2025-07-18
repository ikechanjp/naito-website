import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ないと — AI × 副業ハイブリッドで時間と夢を最速実現",
  description: "Udemyベストセラー講師・AI活用コンサルタントないと氏のオフィシャルサイト。AI × 副業で忙しい社会人の時間と夢を最速実現する伴走者。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans bg-black text-white`}
      >
        {children}
      </body>
    </html>
  );
}
