export interface Artist {
  id: number;
  name: string;
  instagram: string;
  image: string;
  specialties: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
}

export interface TattooWork {
  id: number;
  image: string;
  category: string;
  title: string;
  artist: string;
}