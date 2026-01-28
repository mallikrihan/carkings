
import { Service, Review, Package, GalleryItem } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ppf',
    title: 'Paint Protection Film (PPF)',
    description: 'Protect your car’s paint from scratches, chips, and environment damage with our premium self-healing film.',
    longDescription: 'Our high-grade PPF provides an invisible shield for your vehicle. It features self-healing technology that removes minor scratches with heat, ensuring your car stays in showroom condition.',
    benefits: ['Self-healing property', 'UV protection', 'Anti-yellowing', 'Enhanced gloss finish'],
    priceRange: '₹45,000 - ₹1,20,000',
    timeRequired: '3 - 5 Days',
    image: 'https://picsum.photos/id/1071/800/600',
    beforeImage: 'https://picsum.photos/id/111/800/600',
    afterImage: 'https://picsum.photos/id/1072/800/600',
    category: 'Protection'
  },
  {
    id: 'lighting',
    title: 'LED & Projector Headlights',
    description: 'Upgrade your visibility and style with custom LED and HID projector setups.',
    longDescription: 'Safety meets style. Our custom lighting solutions improve night vision by up to 300% while giving your car a modern, aggressive look.',
    benefits: ['High intensity output', 'Wide beam pattern', 'Modern aesthetics', 'Plug & play installation'],
    priceRange: '₹8,000 - ₹25,000',
    timeRequired: '4 - 6 Hours',
    image: 'https://picsum.photos/id/1070/800/600',
    category: 'Exterior'
  },
  {
    id: 'audio',
    title: 'Car Audio Systems',
    description: 'High-fidelity audio systems featuring premium brands like Focal, Hertz, and Pioneer.',
    longDescription: 'Transform your commute into a concert. From stealth subwoofers to complete soundstage tuning, we deliver crystalline audio quality tailored to your car.',
    benefits: ['DSP tuning', 'Sound deadening included', 'Component speaker upgrades', 'Touchscreen Android units'],
    priceRange: '₹15,000 - ₹2,50,000',
    timeRequired: '1 - 2 Days',
    image: 'https://picsum.photos/id/101/800/600',
    category: 'Interior'
  },
  {
    id: 'interior',
    title: 'Custom Seat Covers',
    description: 'Premium Napa leather and bucket fit seat covers for ultimate comfort and luxury.',
    longDescription: 'Experience luxury at its finest. Our artisans handcraft interior upgrades using premium materials, offering limitless customization in patterns and colors.',
    benefits: ['Airbag compatible', 'Breathable materials', 'Custom stitching', 'OEM fitment'],
    priceRange: '₹12,000 - ₹65,000',
    timeRequired: '2 - 3 Days',
    image: 'https://picsum.photos/id/12/800/600',
    category: 'Interior'
  },
  {
    id: 'detailing',
    title: 'Ceramic Coating & Detailing',
    description: 'Multi-stage paint correction followed by 9H/10H ceramic shield for deep shine.',
    longDescription: 'A meticulous process that removes swirls and oxidation, followed by a chemical bonding ceramic layer that repels dirt and water for years.',
    benefits: ['Hydrophobic surface', 'Chemical resistance', 'Mirror-like shine', 'Easier maintenance'],
    priceRange: '₹10,000 - ₹35,000',
    timeRequired: '1 - 2 Days',
    image: 'https://picsum.photos/id/1075/800/600',
    category: 'Detailing'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    name: 'Rahul Sharma',
    carModel: 'BMW 3 Series',
    rating: 5,
    comment: 'Best PPF work in Bangalore. The finish is so clean you can barely tell the film is on. Highly recommended for premium cars.',
    service: 'Paint Protection Film',
    date: '2 weeks ago',
    avatar: 'https://i.pravatar.cc/150?u=rahul'
  },
  {
    id: 'r2',
    name: 'Ananya Iyer',
    carModel: 'Hyundai Creta',
    rating: 5,
    comment: 'Got my audio system upgraded here. The sound tuning is perfect. These guys really know their acoustics!',
    service: 'Car Audio Systems',
    date: '1 month ago',
    avatar: 'https://i.pravatar.cc/150?u=ananya'
  },
  {
    id: 'r3',
    name: 'Vikram Singh',
    carModel: 'Toyota Fortuner',
    rating: 4,
    comment: 'Excellent LED headlight upgrade. Night driving is much safer now. Very professional staff.',
    service: 'LED Headlights',
    date: '3 months ago',
    avatar: 'https://i.pravatar.cc/150?u=vikram'
  }
];

export const PACKAGES: Package[] = [
  {
    id: 'p1',
    name: 'Essential Spark',
    price: '₹14,999',
    duration: '1 Day',
    features: ['Single Step Polishing', 'Interior Deep Clean', 'Engine Bay Dressing', 'LED Cabin Light Upgrade', 'Wash & Wax']
  },
  {
    id: 'p2',
    name: 'Premium Shield',
    price: '₹34,999',
    duration: '2 Days',
    isPopular: true,
    features: ['3-Stage Paint Correction', '9H Ceramic Coating (3 Years)', 'Premium Seat Covers', 'Full Interior Detailing', 'Rain Repellent Glass Coating']
  },
  {
    id: 'p3',
    name: 'The King’s Choice',
    price: '₹89,999',
    duration: '4 Days',
    features: ['TPU Paint Protection Film', 'High-Fidelity Audio Setup', '7D Floor Mats', 'Custom Ambient Lighting', 'Wheel Ceramic Coating']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: 'g1', image: 'https://picsum.photos/id/1071/800/600', category: 'PPF', title: 'Audi A6 PPF Installation' },
  { id: 'g2', image: 'https://picsum.photos/id/1072/800/600', category: 'Interior', title: 'Custom Tan Leather Interior' },
  { id: 'g3', image: 'https://picsum.photos/id/1073/800/600', category: 'Audio', title: 'Hi-Fi Audio Setup' },
  { id: 'g4', image: 'https://picsum.photos/id/1074/800/600', category: 'Detailing', title: 'Ceramic Coating Finish' },
  { id: 'g5', image: 'https://picsum.photos/id/1075/800/600', category: 'Exterior', title: 'Custom Projector Setup' },
  { id: 'g6', image: 'https://picsum.photos/id/1076/800/600', category: 'Interior', title: 'Ambient Lighting Install' }
];

export const CAR_BRANDS = ['Toyota', 'Honda', 'Hyundai', 'Tata', 'Mahindra', 'Kia', 'BMW', 'Mercedes', 'Audi', 'Volkswagen'];
export const CAR_MODELS: Record<string, string[]> = {
  Toyota: ['Fortuner', 'Innova Crysta', 'Glanza', 'Urban Cruiser'],
  Honda: ['City', 'Amaze', 'Civic'],
  Hyundai: ['Creta', 'Verna', 'i20', 'Venue'],
  BMW: ['3 Series', '5 Series', 'X1', 'X5'],
  // Simplified for demo
};
