import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getCart, createItem, updateItem, deleteItem } from "@/services/cart";
import { useAuth } from "@/hooks/use-auth";

export function useCart() {
  const userRes = useAuth();

  return useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
    enabled: userRes.isSuccess,
  });
}

export function useCreateItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
}

export function useUpdateItem() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
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
        queryKey: ["cart"],
      });
    },
  });
}
