import { buildings, cities, projects } from '@/data';
import { IBuilding, ICity, IProject } from '@/types';

export async function getCities() {
  return await new Promise<ICity[]>((resolve) => resolve(cities));
}

export async function getCity(id: string) {
  return await new Promise<ICity>((resolve, reject) => {
    const city = cities.find((city) => city.id === id);
    if (city) {
      resolve(city);
    } else {
      reject(new Error(`City with name ${name} not found`));
    }
  });
}

export async function getCityProjects(cityId: string) {
  return await new Promise<IProject[]>((resolve) =>
    resolve(projects.filter((project) => project.cityId === cityId))
  );
}

export async function getProjects() {
  return await new Promise<IProject[]>((resolve) => resolve(projects));
}

export async function getProject(id: string) {
  return await new Promise<IProject>((resolve, reject) => {
    const project = projects.find((project) => project.id === id);
    if (project) {
      resolve(project);
    } else {
      reject(new Error(`Project with id ${id} not found`));
    }
  });
}

export async function getProjectBuildings(projectId: string) {
  return await new Promise<IBuilding[]>((resolve) =>
    resolve(buildings.filter((building) => building.projectId === projectId))
  );
}
