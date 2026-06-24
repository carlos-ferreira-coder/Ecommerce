import { CouponDTO } from "./coupon";
import { ProductImageDTO, ProductVariantDTO } from "./product";

export interface CartProductDTO {
  id: string;
  slug: string;
  name: string;
  images: ProductImageDTO;
  variant: ProductVariantDTO;
}

export interface CartItemDTO {
  quantity: number;
  discount: number;
  subtotal: number;
  item: CartProductDTO;
}

export interface SummaryDTO {
  items: number;
  quantity: number;
  shipping: number;
  discount: number;
  subtotal: number;
  total: number;
}

export interface CartDTO {
  id: string;
  items: CartItemDTO[];
  summary: SummaryDTO;
  coupon: CouponDTO | null;
}

export interface CreateItemReqDTO {
  productId: string;
}

export interface CreateItemResDTO {
  message: string;
}

export interface UpdateItemReqDTO {
  productId: string;
  quantity: number;
}

export interface UpdateItemResDTO {
  message: string;
}

export interface DeleteItemReqDTO {
  productId: string;
}

export interface DeleteItemResDTO {
  message: string;
}
