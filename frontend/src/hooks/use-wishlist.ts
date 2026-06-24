import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getWishlist, createItem, deleteItem } from "@/services/wishlist";
import { useAuth } from "@/hooks/use-auth";

export function useWishlist() {
  const userRes = useAuth();

  return useQuery({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
    enabled: userRes.isSuccess,
  });
}

export function useCreateItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });
}

export function useDeleteItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["wishlist"],
      });
    },
  });
}
