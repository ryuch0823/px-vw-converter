
import Converter from "./components/Converter";

export const metadata = {
  title: 'PX to VW Converter Tool',
  description: 'Convert px to vw easily with this responsive unit converter.',
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      
      <Converter />
      
    </div>
  );
}
