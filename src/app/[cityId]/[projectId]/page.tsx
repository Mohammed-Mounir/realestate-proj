import {
  getProject,
  getProjects,
  getProjectBuildings,
  getCity,
} from '@/lib/api';
import Header from '@/app/components/Header';
import Marker from '@/app/components/Marker';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({
    cityId: project.cityId,
    projectId: project.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ cityId: string; projectId: string }>;
}): Promise<Metadata> {
  const { projectId } = await params;
  const project = await getProject(projectId);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.name} | Real Estate Listing`,
    description: `${project.description}.`,
    openGraph: {
      title: `${project.name} | Real Estate Listing`,
      description: `${project.description}.`,
      images: [project.images.background || ''],
    },
  };
}

interface ProjectParams {
  params: Promise<{
    cityId: string;
    projectId: string;
  }>;
}

export default async function Project({ params }: ProjectParams) {
  const { cityId, projectId } = await params;
  const [city, project, buildings] = await Promise.all([
    getCity(cityId),
    getProject(projectId),
    getProjectBuildings(projectId),
  ]);

  if (!project) return notFound();

  const breadcrumbs = [
    { label: city.name, href: `/${city.id}` },
    { label: project.name, href: `/${project.cityId}/${project.id}` },
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
        <image href={project.images.background} width="2048" height="2048" />
        {buildings.map((building) => (
          <Marker key={building.id} location={building} />
        ))}
      </svg>
    </>
  );
}
