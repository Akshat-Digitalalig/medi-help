
interface AboutSection {
    title: string;
    items: Array<{
      content: string;
      isHighlighted?: boolean;
      link?: string;
      subItems?: string[]; 
    }>;
  }
  interface Address {
    fullAddress: string;
    city: string;
    country: string;
    pinCode: string;
    location: {
        lat: number;
        lng: number;
    };
}

interface Location {
    title: string;
    items: Array<{
      content: string;
      subItems?: string[]; 
    }>;
}
  
export interface Hospital {
    id: string;
    name: string;
    mainImage: string;
    images: string[];
    about: AboutSection;
    established: number;
    numberOfBeds: number;
    specialties: string[];
    teamSpecialties: string[];
    facilities: string[];
    infrastructure: string[];
    address:Address;
    location: Location;
    departments: string[];
    doctors: Array<{
        id: string;
        name: string;
        designation: string;
        image: string;
    }>;
    reviews: Array<{
        name: string;
        date: string;
        rating: number;
        content: string;
    }>;
}