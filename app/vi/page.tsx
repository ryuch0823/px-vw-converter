import Converter from '../components/Converter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Công cụ chuyển PX sang VW',
  description: 'Chuyển đổi px sang vw một cách dễ dàng cho thiết kế responsive.',
};

export default function ViPage() {
  return <Converter lang="vi" />;
}
