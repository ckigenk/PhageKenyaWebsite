export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  doi: string;
  keywords: string[];
  imageUrl?: string;
}