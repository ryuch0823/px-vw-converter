import Converter from "./components/Converter";

export const metadata = {
  title: "px → vw Converter | px-vw-converter",
  description:
    "Free online px to vw converter. Convert pixel values into responsive vw units based on viewport width. Essential for fluid web design and responsive CSS.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Converter />
    </div>
  );
}
