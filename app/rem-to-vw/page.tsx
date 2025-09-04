import RemToVwConverter from "../components/RemToVwConverter";

export const metadata = {
  title: "rem → vw Converter | px-vw-converter",
  description:
    "Free online rem to vw converter. Convert rem values into vw units based on root font-size and viewport width. Perfect for responsive layouts and fluid design.",
};

// ✅ default export は関数で、必ず JSX を return
export default function Page() {
  return(
  <div className="bg-teal-50 min-h-screen flex items-center justify-center">
    <RemToVwConverter />;
  </div>
  )
}
