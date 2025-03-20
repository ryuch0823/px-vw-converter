"use client";

import { useState, useEffect, ChangeEvent, useCallback, Suspense } from 'react';
import { useTranslation, I18nextProvider } from 'react-i18next';
import { i18n } from 'i18next';

// i18nを動的にインポート（SSR無効化）
const i18nPromise = import('../i18n').then((module) => module.default);

// メインコンポーネントを分離
function ConverterInner({ i18nInstance }: { i18nInstance: i18n }) {
  const { t } = useTranslation(undefined, { i18n: i18nInstance });
  const [viewportWidth, setViewportWidth] = useState<number>(375);
  const [pxInput, setPxInput] = useState<string>('');
  const [vwOutput, setVwOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false); // コピー状態のフラグ

  const viewportPresets = [375, 414, 750, 768, 1440, 1920];
  const languages = [
    { code: 'en', label: 'EN' },
    { code: 'ja', label: 'JA' },
    { code: 'es', label: 'ES' },
    { code: 'fr', label: 'FR' },
    { code: 'de', label: 'DE' },
    { code: 'zh', label: 'ZH' },
    { code: 'vi', label: 'VI' },
  ];

  const convertPxToVw = useCallback((input: string, vwWidth: number): string => {
    if (!input || !vwWidth) return '';
    setError(null);
    const lines = input.split('\n');
    const converted = lines.map((line) => {
      return line.replace(/(\d*\.?\d+)px/g, (match, pxValue) => {
        const value = parseFloat(pxValue);
        if (isNaN(value)) {
          setError(t('error'));
          return match;
        }
        const vwValue = ((value / vwWidth) * 100).toFixed(2);
        return `${vwValue}vw`;
      });
    });
    return converted.join('\n');
  }, [setError, t]);

  useEffect(() => {
    setVwOutput(convertPxToVw(pxInput, viewportWidth));
  }, [pxInput, viewportWidth, convertPxToVw]);

  const handleCopy = () => {
    navigator.clipboard.writeText(vwOutput).then(() => {
      setCopied(true);
      // 2秒後にコピー状態を解除
      setTimeout(() => setCopied(false), 2000);
    }).catch(() => {
      setError(t('copyError') || 'Copy failed');
    });
  };

  const handlePresetClick = (width: number) => {
    setViewportWidth(width);
  };

  const handleLanguageChange = (lang: string) => {
    i18nInstance.changeLanguage(lang);
  };

  return (
    <div className="w-[90vw] mx-auto pt-[5vh] pb-[4vh] h-[100vh] flex flex-col">
      <div className="flex flex-col items-center mb-4 shrink-0">
        <div className="flex gap-2 mb-[3vh]">
          <div className="px-2 py-1">Languages:</div>
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`px-2 py-1 rounded ${
                i18nInstance.language === lang.code
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-blue-400 hover:text-white'
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>
        <h1 className="text-3xl font-bold text-center">{t('title')}</h1>
        <p className="text-center text-gray-700 mt-2 max-w-2xl">{t('intro')}</p>
      </div>

      <div className="mb-4 text-center shrink-0">
        <label htmlFor="viewport" className="mr-2">
          {t('viewportLabel')}
        </label>
        <input
          id="viewport"
          type="number"
          value={viewportWidth}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setViewportWidth(parseInt(e.target.value) || 375)
          }
          className="border p-1 w-24 text-center bg-white mr-2"
        />
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {viewportPresets.map((width) => (
            <button
              key={width}
              onClick={() => handlePresetClick(width)}
              className={`px-3 py-1 rounded ${
                viewportWidth === width
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 hover:bg-blue-400 hover:text-white'
              }`}
            >
              {width}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-center mb-4 shrink-0">{error}</div>
      )}

      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 flex-1 min-h-0">
        <textarea
          value={pxInput}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setPxInput(e.target.value)
          }
          placeholder="例: width: 150px;"
          className="w-full md:w-1/2 h-[50vh] md:h-full p-2 border rounded resize-none font-mono text-sm leading-5 bg-white"
        />

        <div className="w-full md:w-1/2 flex flex-col h-[50vh] md:h-full relative">
          <textarea
            value={vwOutput}
            readOnly
            className="flex-1 p-2 border rounded resize-none font-mono text-sm leading-5 bg-gray-100"
          />
          <button
  onClick={handleCopy}
  className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shrink-0 relative z-10"
>
  {copied ? t('copied') : t('copyButton')}
</button>
        </div>
      </div>
      <div className="pt-[3vh] text-xs text-center">©2025 PX-VW COMVERTER.</div>
    </div>
  );
}

// ラッパーコンポーネント
export default function Converter() {
  const [i18nInstance, setI18nInstance] = useState<i18n | null>(null);

  useEffect(() => {
    i18nPromise.then((i18n) => setI18nInstance(i18n));
  }, []);

  if (!i18nInstance) {
    return <div>Loading...</div>;
  }

  return (
    <I18nextProvider i18n={i18nInstance}>
      <Suspense fallback={<div>Loading...</div>}>
        <ConverterInner i18nInstance={i18nInstance} />
      </Suspense>
    </I18nextProvider>
  );
}
