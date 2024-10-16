export enum LoyaltyUser {
  GOLD_USER = "GOLD_USER",
  SILVER_USER = "SILVER_USER",
  BRONZE_USER = "BRONZE_USER",
}

export enum Permissions {
  ADMIN = "ADMIN",
  READ_ONLY = "READ_ONLY",
}

export interface Review {
  name: string;
  stars: number;
  loyaltyUser: LoyaltyUser;
  date: string;
  description?: string;
}

export interface User {
  firstName: string;
  lastName: string;
  isReturning: boolean;
  permissions: Permissions;
  age: number;
  stayedAt: string[];
}

export type Price = 45 | 30 | 25;

export interface Property {
  image: string;
  title: string;
  price: Price;
  location: {
    firstLine: string;
    city: string;
    code: number;
    country: string;
  };
  contact: [number, string];
  isAvailable: boolean;
}
