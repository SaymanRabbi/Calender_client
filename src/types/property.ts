import { Image } from './common';

export interface PropertyUser {
  name: string;
  image: string;
}

export interface GuestRules {
  arrive: string;
  depart: string;
  pets: boolean;
  kids: boolean;
  parties: boolean;
  smoking: boolean;
}

export interface AmenitiesData {
  custom: string[];
  default: string[];
}

export interface PropertyData {
  name: string;
  address: string;
  user: PropertyUser;
  images: Image[];
  guestRules: GuestRules;
  amenities: AmenitiesData;
  kidAmenities: string[];
  guestInfo: string | null;
}
