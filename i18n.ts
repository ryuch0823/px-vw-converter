import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // 外部JSONから翻訳を読み込み
  .use(LanguageDetector) // ブラウザ言語検出
  .use(initReactI18next) // React統合
  .init({
    fallbackLng: 'en', // デフォルト英語
    supportedLngs: ['en', 'ja', 'es', 'fr', 'de', 'zh', 'vi'], // 対応言語
    interpolation: {
      escapeValue: false, // ReactはXSS対策済み
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // 翻訳ファイルのパス
    },
  });

export default i18n;