"use client";

import "./globals.css"; // ✅ `app/globals.css` が `app/` 内にある場合

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
