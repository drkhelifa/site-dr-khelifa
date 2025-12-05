import { LucideIcon } from 'lucide-react';

export type Language = 'fr' | 'ar';

export interface LocalizedString {
  fr: string;
  ar: string;
}

export interface NavItem {
  label: LocalizedString;
  path: string;
}

export interface Service {
  title: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
  details: LocalizedString[];
}

export interface BlogPost {
  id: number;
  title: LocalizedString;
  excerpt: LocalizedString;
  date: LocalizedString;
  content: LocalizedString;
  tags: LocalizedString[];
  image: string;
}

export interface ContactInfo {
  phone: string;
  whatsappFull: string;
  address: LocalizedString;
  mapsLink: string;
  city: LocalizedString;
}

export interface ScheduleItem {
  day: LocalizedString;
  hours: LocalizedString;
}

export interface Tip {
  id: number;
  category: 'general' | 'stress' | 'sleep' | 'social' | 'habits';
  content: LocalizedString;
}