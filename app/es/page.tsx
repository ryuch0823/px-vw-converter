import Converter from '../components/Converter';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Convertidor de PX a VW',
  description: 'Convierte píxeles a vw fácilmente para diseños responsivos.',
};

export default function EsPage() {
  return <Converter lang="es" />;
}
