import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUserCartItem } from "../api/cart/api";

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();
  const deleteCartItem = useMutation({
    mutationFn: ({ id }: { id: number }) => deleteUserCartItem(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
  
  const handleDeleteCartItem = (id: number) => {
    deleteCartItem.mutate({ id });
  };

  return {handleDeleteCartItem, loading: deleteCartItem.isPending};
};
