import { api } from "@/api";
import { AppDTO } from "@/types/dto/app";

export async function getApp(): Promise<AppDTO> {
  return await api("/", {
    method: "GET",
  });
}
