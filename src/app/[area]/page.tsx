import { areas } from '@/data/real-estate-data';
import Header from '@/app/components/Header';
import Marker from '../components/Marker';

export default async function Area({
  params,
}: {
  params: Promise<{ area: string }>;
}) {
  const { area: areaName } = await params;
  const area = areas.find((a) => a.slug === areaName);

  if (!area) return null;

  const breadcrumbs = [{ label: area.name, href: `/${area}` }];

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
        <image href={area.background} width="2048" height="2048" />
        {area.projects.map((project) => (
          <Marker key={project.id} location={project} />
        ))}
      </svg>
    </>
  );
}
