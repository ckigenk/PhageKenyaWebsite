export interface SocialLinks {
  twitter?: string;
  linkedin?: string;
  googleScholar?: string;
  researchGate?: string;
}

export interface Publication {
  title: string;
  journal: string;
  year: number;
  doi: string;
}

export interface CommitteeMember {
  id: number;
  name: string;
  title: string;
  role: string;
  institution: string;
  imageUrl: string;
  bio: string;
  expertise: string[];
  publications: Publication[];
  socialLinks: SocialLinks;
}