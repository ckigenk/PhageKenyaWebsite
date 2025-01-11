export interface CommitteeMember {
  id: number;
  name: string;
  role: string;
  institution: string;
  bio: string;
  imageUrl: string;
}

export interface Publication {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi: string;
  abstract: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  imageUrl?: string;
}

export interface LabLocation {
  id: number;
  name: string;
  institution: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
}