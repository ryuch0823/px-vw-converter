// app/px-to-rem/page.tsx
import PxToRemConverter from "../components/PxToRemConverter";

export const metadata = {
  title: "px → rem Converter | px-vw-converter",
  description: "Convert px to rem with a custom root font-size (default 16px).",
};

export default function Page() {
  return (
    <div className="bg-indigo-50 min-h-screen flex items-center justify-center">
      <PxToRemConverter />
      </div>
  );
}
