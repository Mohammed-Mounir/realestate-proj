export interface IBuilding {
  id: number;
  name: string;
  position: {
    top: string;
    left: string;
  };
  background: string;
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
}
