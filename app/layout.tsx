"use client";

import "./globals.css";
import Footer from "./components/Footer"; // フッターを読み込み

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
