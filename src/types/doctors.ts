interface AboutSection {
  title: string;
  items: Array<{
    content: string;
    isHighlighted?: boolean;
    link?: string;
  }>;
}
export interface Doctor {
    id: string;
    name: string;
    yearsOfExperience: number;
    designation: string;
    image: string;
    workingAt: string;
    hospitalId: string;
    about: AboutSection;
    specialties: string[];
    skilledAt: string[];
    specialInterests: string[];
    education: string[];
    experience: string[];
    awards: string[];
    reviews: Array<{
        name: string;
        date: string;
        rating: number;
        content: string;
    }>;
    tags?: string[];
 }
