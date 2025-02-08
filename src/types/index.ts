export interface MapPosition {
  top: string;
  left: string;
}

export interface BaseLocation {
  id: string;
  name: string;
  mapPosition: {
    top: string;
    left: string;
  };
  images: {
    background?: string;
    logo?: string;
    gallery?: string[];
  };
  description?: string;
  meta?: {
    title?: string;
    description?: string;
  };
  // [key: string]: unknown;
}

export interface ICity extends BaseLocation {
  type: 'city';
  projects?: string[];
}

export interface IProject extends BaseLocation {
  type: 'project';
  cityId: string;
  buildings?: string[];
}

export interface IBuilding extends BaseLocation {
  type: 'building';
  projectId: string;
  units?: Unit[];
  floors?: number;
}

export interface Unit {
  id: string;
  number: string;
  type: string;
  floor: number;
  area: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  status: 'available' | 'sold' | 'reserved';
  features?: string[];
}
