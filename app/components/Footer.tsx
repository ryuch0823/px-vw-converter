// app/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="pt-[3vh] text-xs text-center text-gray-500">
      <Link href="/terms" className="underline mx-2 hover:text-blue-600">Terms</Link>
      <Link href="/privacy" className="underline mx-2 hover:text-blue-600">Privacy Policy</Link>
      <Link href="/contact" className="underline ml-2 mr-4 hover:text-blue-600">Contact</Link>
      ©2025 <Link href="/" className="underline ml-1 hover:text-blue-600">PX-VW CONVERTER</Link>　
    </footer>
  );
}
