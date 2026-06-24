import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getAuth, login, logout } from "@/services/auth";

export function useAuth() {
  return useQuery({
    queryKey: ["auth"],
    queryFn: getAuth,
    staleTime: Infinity,
    gcTime: Infinity,
    retry: false,
  });
}

export function useLogin() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["auth"],
      });

      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
}

export function useLogout() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.removeQueries({
        queryKey: ["auth"],
      });

      queryClient.removeQueries({
        queryKey: ["cart"],
      });
    },
  });
}
