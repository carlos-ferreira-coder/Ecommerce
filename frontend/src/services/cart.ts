import { api } from "@/api";
import {
  CartDTO,
  CreateItemReqDTO,
  CreateItemResDTO,
  UpdateItemReqDTO,
  UpdateItemResDTO,
  DeleteItemReqDTO,
  DeleteItemResDTO,
} from "@/types/dto/cart";

export async function getCart(): Promise<CartDTO> {
  return await api("/cart", {
    method: "GET",
  });
}

export async function createItem(
  data: CreateItemReqDTO,
): Promise<CreateItemResDTO> {
  return await api("/cart/add-item", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function updateItem(
  data: UpdateItemReqDTO,
): Promise<UpdateItemResDTO> {
  return await api("/cart/change-quantity", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function deleteItem(
  data: DeleteItemReqDTO,
): Promise<DeleteItemResDTO> {
  return await api("/cart/remove-item", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
