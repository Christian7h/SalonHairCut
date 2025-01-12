export interface Service {
  id: number;
  name: string;
  price: number;
  duration: number;
  description: string;
  category: 'hair' | 'color' | 'treatment' | 'styling';
}

export interface Stylist {
  id: number;
  name: string;
  role: string;
  image: string;
  specialties: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  comment: string;
  rating: number;
  date: string;
  service: string;
}

export interface Appointment {
  id: number;
  service: string;
  date: Date;
  time: string;
  location: 'salon' | 'home';
  stylist: string;
  status: 'pending' | 'confirmed' | 'completed';
}