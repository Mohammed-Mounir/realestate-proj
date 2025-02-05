export interface IBuilding {
  id: number;
  name: string;
  slug: string;
  mapPosition: {
    top: string;
    left: string;
  };
  logo: string;
  background: string;
  [key: string]: unknown;
}

export interface IProject {
  id: number;
  name: string;
  slug: string;
  mapPosition: {
    top: string;
    left: string;
  };
  logo: string;
  background: string;
  buildings: IBuilding[];
  [key: string]: unknown;
}

export interface IArea {
  id: number;
  name: string;
  slug: string;
  mapPosition: {
    top: string;
    left: string;
  };
  background: string;
  logo: string;
  projects: IProject[];
  [key: string]: unknown;
}

export interface ILocation {
  id: number;
  name: string;
  slug: string;
  mapPosition: {
    top: string;
    left: string;
  };
  logo: string;
  [key: string]: unknown;
}
