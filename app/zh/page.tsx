import Converter from '../components/Converter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PX转VW转换工具',
  description: '轻松将px转换为vw，用于响应式设计。',
};

export default function ZhPage() {
  return <Converter lang="zh" />;
}
