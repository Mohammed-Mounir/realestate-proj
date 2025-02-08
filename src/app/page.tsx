import type { Metadata } from 'next';
import Header from './components/Header';
import Marker from './components/Marker';
import { getCities } from '@/lib/api';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Real Estate Listings | Find Your Dream Home',
    description:
      'Explore our wide range of real estate listings across multiple cities. Find your perfect home or investment property today.',
    openGraph: {
      title: 'Real Estate Listings | Find Your Dream Home',
      description:
        'Explore our wide range of real estate listings across multiple cities. Find your perfect home or investment property today.',
      images: ['/images/logo.png'],
    },
  };
}

export default async function Home() {
  const cities = await getCities();

  return (
    <main className="min-h-screen relative">
      <Header />
      <svg
        viewBox="0 0 2048 2048"
        width="100vw"
        height="100vh"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image href="/images/main.jpg" width="2048" height="2048" />
        {cities.map((city) => (
          <Marker key={city.id} location={city} />
        ))}
      </svg>
    </main>
  );
}
