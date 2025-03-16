
export type Region = 'saudi-arabia' | 'pakistan' | 'usa' | 'europe';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  details: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  description: string;
  image: string;
  region: Region;
  challenge: string;
  solution: string;
  results: string[];
}

export interface Technology {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface RegionInfo {
  id: Region;
  name: string;
  flag: string;
  description: string;
  address: string;
  phone: string;
  email: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
  region: Region;
}
