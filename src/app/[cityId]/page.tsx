import Header from '@/app/components/Header';
import Marker from '../components/Marker';
import { notFound } from 'next/navigation';
import { getCities, getCity, getCityProjects } from '@/lib/api';
import type { Metadata } from 'next';
import Image from 'next/image';

export async function generateStaticParams() {
  const cities = await getCities();
  return cities.map((city) => ({ city: city.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cityId: string }>;
}): Promise<Metadata> {
  const { cityId } = await params;
  const city = await getCity(cityId);

  return {
    title: `${city.name} Real Estate Listings | Find Your Dream Home`,
    description: `Explore real estate listings in ${city.name}. ${city.description}`,
    openGraph: {
      title: `${city.name} Real Estate Listings | Find Your Dream Home`,
      description: `Explore real estate listings in ${city.name}. ${city.description}`,
      images: [city.images.background || ''],
    },
  };
}

interface CityParams {
  params: Promise<{
    cityId: string;
  }>;
}

export default async function City({ params }: CityParams) {
  const { cityId } = await params;
  const [city, cityProjects] = await Promise.all([
    getCity(cityId),
    getCityProjects(cityId),
  ]);

  if (!city) return notFound();

  const breadcrumbs = [{ label: city.name, href: `/${city.id}` }];

  return (
    <>
      <Header breadcrumbs={breadcrumbs} />
      <Image
        src={city.images.background!}
        alt={city.name}
        layout="fill"
        priority
        className="fixed -z-10 object-cover"
      />
      <svg
        viewBox="0 0 2048 2048"
        width="100vw"
        height="100vh"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {cityProjects.map((project) => (
          <Marker key={project.id} location={project} />
        ))}
      </svg>
    </>
  );
}
