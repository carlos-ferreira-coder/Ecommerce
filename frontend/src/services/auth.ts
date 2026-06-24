import { api } from "@/api";
import {
  AuthDTO,
  LoginResDTO,
  LoginReqDTO,
  LogoutResDTO,
  RegisterReqDTO,
  RegisterResDTO,
} from "@/types/dto/auth";

export async function getAuth(): Promise<AuthDTO> {
  return await api("/auth", {
    method: "GET",
  });
}

export async function login(data: LoginReqDTO): Promise<LoginResDTO> {
  return await api("/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}

export async function logout(): Promise<LogoutResDTO> {
  return await api("/auth/logout", {
    method: "POST",
  });
}

export async function register(data: RegisterReqDTO): Promise<RegisterResDTO> {
  return await api("/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
