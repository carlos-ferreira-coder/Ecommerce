import { api } from "@/api";
import {
  WishlistDTO,
  CreateItemReqDTO,
  CreateItemResDTO,
  DeleteItemReqDTO,
  DeleteItemResDTO,
} from "@/types/dto/wishlist";

export async function getWishlist(): Promise<WishlistDTO> {
  return await api("/wishlist", {
    method: "GET",
  });
}

export async function createItem(
  data: CreateItemReqDTO,
): Promise<CreateItemResDTO> {
  return await api("/wishlist/add-item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteItem(
  data: DeleteItemReqDTO,
): Promise<DeleteItemResDTO> {
  return await api("/wishlist/remove-item", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
