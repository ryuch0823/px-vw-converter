// app/about/page.tsx
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <main className="p-8 max-w-3xl mx-auto pt-[5vh] pb-[4vh]">
      <h1 className="text-3xl font-bold font-emblema mb-4">About This Tool</h1>

      <section className="space-y-4 text-gray-700">
        <h2 className="text-2xl font-bold">🛠 Why I Created This Tool</h2>
        <p>
          As a web designer and front-end developer, I often work on responsive designs that need to
          adapt across multiple devices—smartphones, tablets, and desktops.
        </p>
        <p>
          However, maintaining consistent visual appearance across screen sizes can be tricky. Fixed
          pixel (px) values often result in unwanted line breaks or layout shifts on smaller screens.
        </p>
        <p>
          To address this, I started using <code>vw</code> (viewport width) units to make elements
          scale fluidly with the screen size, especially for mobile devices.
        </p>
        <p>
          That said, on large screens (like desktops), using <code>vw</code> can lead to oversized
          text or spacing. In such cases, I prefer using <code>rem</code> or fixed <code>px</code>{' '}
          units for better stability.
        </p>
        <p>
          But constantly converting between <code>px</code>, <code>vw</code>, and <code>rem</code>{' '}
          was becoming a hassle. I thought: “What if I had a quick and easy tool that did the math
          for me?” That’s why I built this tool—to streamline my workflow and boost efficiency.
        </p>

        <h2 className="text-2xl font-bold pt-6">📐 How to Use</h2>

        <h3 className="text-xl font-semibold mt-2">PX → VW Converter</h3>
        <ul className="list-disc pl-6">
          <li>Set your target viewport width (e.g., 375px or 414px for mobile).</li>
          <li>Enter the pixel value you want to convert (e.g., 14px font size).</li>
          <li>The result in vw will be calculated in real time.</li>
          <li>
            Formula: <code>vw = (px ÷ viewport width) × 100</code>
          </li>
          <li>Copy the result and paste it directly into your CSS.</li>
        </ul>
        <p>
          👉 Try it here:{' '}
          <a href="/" className="text-blue-600 underline">
            PX → VW Converter Tool
          </a>
        </p>

        <h3 className="text-xl font-semibold mt-4">PX → REM Converter</h3>
        <ul className="list-disc pl-6">
          <li>Set the root font size (commonly 16px).</li>
          <li>Input your desired pixel value.</li>
          <li>
            Formula: <code>rem = px ÷ root font size</code>
          </li>
        </ul>
        <p>
          👉 Try it here:{' '}
          <a href="/px-to-rem" className="text-blue-600 underline">
            PX → REM Converter Tool
          </a>
        </p>

        <h3 className="text-xl font-semibold mt-4">REM → VW Converter</h3>
        <ul className="list-disc pl-6">
          <li>Set both the viewport width and the root font size.</li>
          <li>Enter a rem value, and it will be converted to vw.</li>
        </ul>
        <p>
          👉 Try it here:{' '}
          <a href="/rem-to-vw" className="text-blue-600 underline">
            REM → VW Converter Tool
          </a>
        </p>

        <h2 className="text-2xl font-bold pt-6">💡 Quick Tips</h2>
        <ul className="list-disc pl-6">
          <li>Use <code>vw</code> for mobile-friendly, fluid layouts.</li>
          <li>
            Use <code>rem</code> or <code>px</code> for desktop stability—<code>vw</code> can be too
            large on wide screens.
          </li>
          <li>Combine this tool with media queries to switch between units for different devices.</li>
        </ul>

        <h2 className="text-2xl font-bold pt-6">✨ Enjoy Coding!</h2>
        <p>
          I hope this tool helps make your responsive design work easier, faster, and more enjoyable.
          Feel free to bookmark it and share it with fellow developers!
        </p>

        
      </section>

      <Footer />
    </main>
  );
}
