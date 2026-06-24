import { ProductDTO } from "@/types/dto/product";

export interface WishlistDTO {
  id: string;
  items: ProductDTO[];
}

export interface CreateItemReqDTO {
  productId: string;
}

export interface CreateItemResDTO {
  message: string;
}

export interface DeleteItemReqDTO {
  productId: string;
}

export interface DeleteItemResDTO {
  message: string;
}
