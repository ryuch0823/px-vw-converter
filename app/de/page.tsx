import Converter from '../components/Converter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PX-zu-VW-Konverter',
  description: 'Konvertiere px in vw für responsives Webdesign.',
};

export default function DePage() {
  return <Converter lang="de" />;
}
