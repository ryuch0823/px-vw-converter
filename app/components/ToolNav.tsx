// app/components/ToolNav.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const tools = [
  { href: "/", label: "px → vw" },
  { href: "/px-to-rem", label: "px → rem" },
  { href: "/rem-to-vw", label: "rem → vw" },
];

export default function ToolNav() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-center gap-2 mb-6">
      {tools.map((t) => (
        <Link
          key={t.href}
          href={t.href}
          className={`px-3 py-2 rounded ${
            pathname === t.href
              ? "bg-blue-500 text-white"
              : "bg-gray-200 hover:bg-blue-400 hover:text-white"
          }`}
        >
          {t.label}
        </Link>
      ))}
    </nav>
  );
}
