import { ICity, IProject, IBuilding } from '@/types';

export const cities: ICity[] = [
  {
    id: 'new-cairo',
    name: 'New Cairo',
    type: 'city',
    projects: ['the-lark'],
    mapPosition: { top: '1000', left: '900' },
    images: {
      background: '/images/cities/new-cairo/bg.jpg',
      logo: '/images/cities/new-cairo/logo.png',
    },
  },
];

export const projects: IProject[] = [
  {
    id: 'the-lark',
    name: 'The Lark',
    type: 'project',
    cityId: 'new-cairo',
    buildings: ['building-a'],
    mapPosition: { top: '1000', left: '900' },
    images: {
      background: '/images/projects/the-lark/bg.jpg',
      logo: '/images/cities/new-cairo/logo.png',
    },
  },
];

export const buildings: IBuilding[] = [
  {
    id: 'building-a',
    name: 'Building A',
    type: 'building',
    projectId: 'the-lark',
    mapPosition: { top: '1000', left: '900' },
    images: {
      background: undefined,
      logo: undefined,
    },
  },
];
