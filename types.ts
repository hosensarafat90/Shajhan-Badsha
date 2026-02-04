
export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: string;
  name: string;
  category: 'Rod' | 'Cement';
  description: string;
  image: string;
  productImages: string[];
  brand: string;
  reviews?: Review[];
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  image: string;
  materials: string[];
  status: 'সম্পন্ন' | 'চলমান';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}
