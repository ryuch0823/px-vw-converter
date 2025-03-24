"use client";

import "./globals.css";
import Footer from "./components/Footer"; // フッターを読み込み

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7371198572486794"
     crossOrigin="anonymous"></script>
      </head>
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
