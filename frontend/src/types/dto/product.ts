import { PaginationDTO } from "./pagination";
import { ReviewDTO } from "./reviews";

export interface ProductImageDTO {
  id: string;
  url: string;
  alt: string;
}

export interface ProductCategoryDTO {
  id: string;
  name: string;
  slug: string;
}

export interface ProductBrandDTO {
  id: string;
  name: string;
  slug: string;
}

export interface ProductVariantAttributeDTO {
  name: string;
  value: string;
}

export interface ProductVariantDTO {
  id: string;
  sku: string;
  stock: number;
  price: number;
  discount: number;
  finalPrice: number;
  attributes: ProductVariantAttributeDTO[];
}

export interface ProductDTO {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ProductCategoryDTO;
  brand: ProductBrandDTO;
  ratingValue: number;
  ratingCount: number;
  reviews: ReviewDTO[];
  reviewCount: number;
  images: ProductImageDTO[];
  variants: ProductVariantDTO[];
}

export interface ProductsDTO {
  pagination: PaginationDTO;
  products: ProductDTO;
}
