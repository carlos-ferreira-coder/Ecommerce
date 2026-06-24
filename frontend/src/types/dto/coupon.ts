export interface CouponDTO {
  id: string;
  code: string;
  discountType: "PERCENTAGE" | "FIXED";
  discountValue: number;
  minOrderValue: number | null;
  maxDiscountValue: number | null;
  startsAt: string;
  expiresAt: string;
  isActive: boolean;
}
