import { areas } from '@/data/real-estate-data';
import Header from '@/app/components/Header';
import type { IArea, IProject } from '@/types';
import Marker from '@/app/components/Marker';

export default async function Project({
  params,
}: {
  params: Promise<{ area: string; project: string }>;
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
      <svg
        viewBox="0 0 2048 2048"
        width="100vw"
        height="100vh"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <image href={project.background} width="2048" height="2048" />
        {project.buildings.map((building) => (
          <Marker key={project.id} location={building} />
        ))}
      </svg>
    </>
  );
}
