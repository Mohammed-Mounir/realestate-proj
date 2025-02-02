import Image from 'next/image';

import { areas } from '@/data/real-estate-data';
import Header from '@/app/components/Header';
import { IArea, IProject } from '@/types';
import Nav from './nav';

export default async function Project({
  params,
}: {
  params: { area: string; project: string };
}) {
  const { area: areaName, project: projectName } = await params;
  const area: IArea | undefined = areas.find((a: IArea) => a.slug === areaName);
  const project: IProject | undefined = area?.projects.find(
    (p) => p.slug === projectName
  );

  if (!area || !project) return null;

  const breadcrumbs = [
    { label: area.name, href: `/${area.slug}` },
    { label: project.name, href: `/${area.slug}/${project.slug}` },
  ];

  return (
    <>
      <Header breadcrumbs={breadcrumbs} />
      <div className="relative w-full h-screen">
        <Image
          src={project.background}
          alt={project.name}
          fill
          className="object-cover"
        />

        {project.buildings.map((building) => (
          <Nav key={building.name} building={building} />
        ))}
      </div>
    </>
  );
}
