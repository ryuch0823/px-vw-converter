import Converter from '../components/Converter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PXからVWへの変換ツール',
  description: 'レスポンシブ単位vwへの変換を簡単に行えるツールです。',
};

export default function JaPage() {
  return <Converter lang="ja" />;
}
