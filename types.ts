// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Cosmic file metafield shape
export interface CosmicImage {
  url: string;
  imgix_url: string;
}

// Menu Category
export interface MenuCategory extends CosmicObject {
  type: 'menu-categories';
  metadata: {
    name?: string;
    description?: string;
    category_image?: CosmicImage;
    display_order?: number;
  };
}

// Menu Item
export interface MenuItem extends CosmicObject {
  type: 'menu-items';
  metadata: {
    name?: string;
    description?: string;
    price?: number;
    featured_image?: CosmicImage;
    dietary_info?: string[];
    spice_level?: string;
    chefs_special?: boolean;
    category?: MenuCategory;
  };
}

// Location
export interface Location extends CosmicObject {
  type: 'locations';
  metadata: {
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    opening_hours?: string;
    reservation_phone?: string;
    reservation_link?: string;
    latitude?: number;
    longitude?: number;
    photo_gallery?: CosmicImage[];
  };
}

// Review
export interface Review extends CosmicObject {
  type: 'reviews';
  metadata: {
    customer_name?: string;
    rating?: number;
    review_text?: string;
    review_date?: string;
    location?: Location;
  };
}

// API response types
export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}

// Simple error helper for Cosmic SDK
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}