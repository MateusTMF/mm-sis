export interface Segment {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  services: string[];
  differentials: string[];
  valueProposition: string;
  href: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  segment: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  segment: string;
  message: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}
