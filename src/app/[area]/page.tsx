import Image from 'next/image';

import { areas } from '@/data/real-estate-data';
import Header from '@/app/components/Header';
import Nav from './nav';

export default async function Area({ params }: { params: { area: string } }) {
  const { area: areaName } = await params;
  const area = areas.find((a) => a.slug === areaName);

  if (!area) return null;

  const breadcrumbs = [{ label: area.name, href: `/${area}` }];

  return (
    <>
      <Header breadcrumbs={breadcrumbs} />
      <div className="relative w-full h-screen">
        <Image
          src={area.background}
          alt={area.name}
          fill
          className="object-cover"
        />
        {area.projects.map((project) => (
          <Nav key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
