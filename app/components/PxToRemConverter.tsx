"use client";

import { useState, useEffect, useCallback } from "react";
import Footer from "./Footer";
import ToolNav from "./ToolNav";

export default function PxToRemConverter() {
  // 既定16px（任意変更可）
  const [rootPx, setRootPx] = useState<number>(16);

  // 左入力・右出力・状態
  const [pxInput, setPxInput] = useState<string>("");
  const [remOutput, setRemOutput] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // 小数桁（UIはシンプルに英語のみ）
  const [decimals, setDecimals] = useState<number>(3);

  // 置換：CSS文字列の中の 123px → (123 / rootPx)rem
  const convertPxToRem = useCallback(
    (input: string, base: number, dec: number): string => {
      if (!input) return "";
      if (!base || base <= 0) {
        setError("Root font-size must be greater than 0.");
        return "";
      }
      setError(null);

      // 複数行をまるっと置換（pxの前に小数もOK）
      const lines = input.split("\n");
      const converted = lines.map((line) =>
        line.replace(/(\d*\.?\d+)px\b/g, (_m, pxVal) => {
          const v = parseFloat(pxVal);
          if (!Number.isFinite(v)) return _m;
          const rem = (v / base).toFixed(dec);
          return `${rem}rem`;
        })
      );
      return converted.join("\n");
    },
    []
  );

  useEffect(() => {
    setRemOutput(convertPxToRem(pxInput, rootPx, decimals));
  }, [pxInput, rootPx, decimals, convertPxToRem]);

  const handleCopy = () => {
    navigator.clipboard
      .writeText(remOutput)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1600);
      })
      .catch(() => setError("Copy failed."));
  };

  return (
    <div className="w-[90vw] mx-auto pt-[2vh] pb-[4vh] h-[100vh] flex flex-col">
         <ToolNav /> 
      {/* Header */}
      <div className="flex flex-col items-center mb-4 shrink-0">
        <h1 className="text-3xl font-bold text-center">PX to REM Converter</h1>
        <p className="text-center text-gray-700 mt-2 max-w-2xl">
          Convert any “px” values in your CSS into “rem”. Set your root font-size below.
        </p>
      </div>

      {/* Controls */}
      <div className="mb-4 text-center shrink-0">
        <label htmlFor="root" className="mr-2">
          Root font-size (px)
        </label>
        <input
          id="root"
          type="number"
          value={rootPx}
          onChange={(e) => setRootPx(parseInt(e.target.value || "16", 10))}
          className="border p-1 w-28 text-center bg-white mr-4"
        />

        <label htmlFor="dec" className="mr-2">
          Decimals
        </label>
        <input
          id="dec"
          type="number"
          min={0}
          max={6}
          value={decimals}
          onChange={(e) => setDecimals(Math.max(0, Math.min(6, Number(e.target.value))))}
          className="border p-1 w-24 text-center bg-white"
        />
      </div>

      {error && <div className="text-red-500 text-center mb-4 shrink-0">{error}</div>}

      {/* Left / Right panes */}
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 flex-1 min-h-0">
        <textarea
          value={pxInput}
          onChange={(e) => setPxInput(e.target.value)}
          placeholder="example: font-size: 24px; margin: 32px 16px;"
          className="w-full md:w-1/2 h-[50vh] md:h-full p-2 border rounded resize-none font-mono text-sm leading-5 bg-white"
        />

        <div className="w-full md:w-1/2 flex flex-col h-[50vh] md:h-full relative">
          <textarea
            value={remOutput}
            readOnly
            className="flex-1 p-2 border rounded resize-none font-mono text-sm leading-5 bg-gray-100"
          />
          <button
            onClick={handleCopy}
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shrink-0 relative z-10"
          >
            {copied ? "Copied!" : "Copy All"}
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
