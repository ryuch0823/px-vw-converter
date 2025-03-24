import Converter from '../components/Converter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertisseur PX vers VW',
  description: 'Convertissez facilement les px en vw pour un design réactif.',
};

export default function FrPage() {
  return <Converter lang="fr" />;
}
