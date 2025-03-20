"use client";

import Converter from "@/components/Converter"; // ✅ 正しいパスでインポート

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Converter />
    </div>
  );
}
