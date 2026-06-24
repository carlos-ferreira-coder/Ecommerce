import { AuthDTO } from "./auth";

export interface ReviewDTO {
  id: string;
  user: AuthDTO;
  rating: number;
  title: string | null;
  comment: string;
  createdAt: string;
  likes: number;
}
