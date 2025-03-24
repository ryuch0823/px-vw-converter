import Converter from '../components/Converter';
import { Metadata } from 'next';

type Props = {
    params: { lang: string };
  };


export function generateStaticParams() {
    return [
      { lang: 'ja' },
      { lang: 'fr' },
      { lang: 'es' },
      { lang: 'de' },
      { lang: 'zh' },
      { lang: 'vi' },
    ];
  }

 
  
  export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const metaByLang: Record<string, Metadata> = {
      ja: {
        title: 'PXからVWへの変換ツール',
        description: 'レスポンシブ単位vwへの変換を簡単に行えるツールです。',
      },
      fr: {
        title: 'Convertisseur PX vers VW',
        description: 'Convertissez facilement les px en vw pour un design réactif.',
      },
      es: {
        title: 'Convertidor de PX a VW',
        description: 'Convierte píxeles a vw fácilmente para diseños responsivos.',
      },
      de: {
        title: 'PX-zu-VW-Konverter',
        description: 'Konvertiere px in vw für responsives Webdesign.',
      },
      zh: {
        title: 'PX转VW转换工具',
        description: '轻松将px转换为vw，用于响应式设计。',
      },
      vi: {
        title: 'Công cụ chuyển PX sang VW',
        description: 'Chuyển đổi px sang vw một cách dễ dàng cho thiết kế responsive.',
      },
    };
  
    return metaByLang[params.lang] ?? metaByLang['ja'];
  }
  
  export default function LangHomePage({ params }: { params: { lang: string } }) {
    return <Converter lang={params.lang} />;
  }
  