"use client";

import { useMemo, useState } from "react";
import ToolNav from "./ToolNav";
import Footer from "./Footer";

export default function RemToVwConverter() {
  const [rootPx, setRootPx] = useState(16);
  const [viewport, setViewport] = useState(1280);
  const [decimals, setDecimals] = useState(3);
  const [input, setInput] = useState("");

  const [copied, setCopied] = useState(false);            // ▼ 追加
  const [error, setError] = useState<string | null>(null); // ▼ 追加

  const presets = [375, 414, 750, 768, 1440, 1920];

  const output = useMemo(() => {
    if (!input) return "";
    return input
      .split("\n")
      .map((line) =>
        line.replace(/(\d*\.?\d+)rem\b/g, (_m, remVal) => {
          const rem = parseFloat(remVal);
          if (!Number.isFinite(rem) || rootPx <= 0 || viewport <= 0) return _m;
          const vw = ((rem * rootPx) / viewport) * 100;
          return `${vw.toFixed(decimals)}vw`;
        })
      )
      .join("\n");
  }, [input, rootPx, viewport, decimals]);

  // ▼ 追加：コピー処理
  const handleCopy = () => {
    navigator.clipboard.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    }).catch(() => {
      setError("Copy failed.");
      setTimeout(() => setError(null), 2000);
    });
  };

  return (
    <div className="w-[90vw] mx-auto pt-[2vh] pb-[4vh] h-[100vh] flex flex-col">
      <ToolNav />

      <div className="flex flex-col items-center mb-4 shrink-0">
        <h1 className="text-3xl font-bold text-center">REM to VW Converter</h1>
        <p className="text-center text-gray-700 mt-2 max-w-2xl">
          Convert <code>rem</code> units into <code>vw</code> based on root font-size and viewport width.
        </p>
      </div>

      <div className="mb-2 text-center shrink-0 flex flex-wrap justify-center gap-4">
        <label className="inline-flex items-center gap-2">
          <span>Root font-size (px)</span>
          <input
            type="number"
            value={rootPx}
            onChange={(e) => setRootPx(Number(e.target.value) || 16)}
            className="border p-1 w-24 text-center bg-white"
          />
        </label>

        <label className="inline-flex items-center gap-2">
          <span>Viewport width (px)</span>
          <input
            type="number"
            value={viewport}
            onChange={(e) => setViewport(Number(e.target.value) || 1280)}
            className="border p-1 w-28 text-center bg-white"
          />
        </label>

        <label className="inline-flex items-center gap-2">
          <span>Decimals</span>
          <input
            type="number"
            min={1}
            max={6}
            value={decimals}
            onChange={(e) =>
              setDecimals(Math.max(1, Math.min(6, Number(e.target.value))))
            }
            className="border p-1 w-20 text-center bg-white"
          />
        </label>
      </div>

      <div className="mb-4 text-center shrink-0">
        <div className="flex flex-wrap justify-center gap-2">
          {presets.map((w) => (
            <button
              key={w}
              onClick={() => setViewport(w)}
              className={`px-3 py-1 rounded ${
                viewport === w
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 hover:bg-blue-400 hover:text-white"
              }`}
            >
              {w}
            </button>
          ))}
        </div>
      </div>

      {/* 左：入力 / 右：結果 + Copy */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 flex-1 min-h-0">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="example: font-size: 2rem; margin: 1.25rem;"
          className="w-full md:w-1/2 h-[50vh] md:h-full p-2 border rounded resize-none font-mono text-sm leading-5 bg-white"
        />

        <div className="w-full md:w-1/2 flex flex-col h-[50vh] md:h-full relative">
          <textarea
            readOnly
            value={output}
            className="flex-1 p-2 border rounded resize-none font-mono text-sm leading-5 bg-gray-100"
          />
          <button
            onClick={handleCopy}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shrink-0 relative z-10"
            aria-live="polite"
          >
            {copied ? "Copied!" : "Copy All"}
          </button>

          {error && (
            <div className="text-red-500 text-sm mt-1" aria-live="polite">
              {error}
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
