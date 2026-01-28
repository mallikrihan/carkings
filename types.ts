
export interface Service {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  benefits: string[];
  priceRange: string;
  timeRequired: string;
  image: string;
  beforeImage?: string;
  afterImage?: string;
  category: string;
}

export interface Review {
  id: string;
  name: string;
  carModel: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
  avatar: string;
}

export interface Package {
  id: string;
  name: string;
  price: string;
  duration: string;
  features: string[];
  isPopular?: boolean;
}

export interface GalleryItem {
  id: string;
  image: string;
  category: string;
  title: string;
}
