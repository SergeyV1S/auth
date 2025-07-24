import { toast } from "sonner";

import { queryClient } from "@shared/constants";

import { useDeleteUserMutation, useGetUsersQuery } from "../api";

export const useIndexPage = () => {
  const { data, isLoading } = useGetUsersQuery();
  const { mutateAsync } = useDeleteUserMutation({
    options: {
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["getUsers"] });
        toast.success("User delete sucessfully");
      }
    }
  });

  const deleteUser = async (userId: string) =>
    mutateAsync({
      params: {
        userId
      }
    });

  return { state: { data: data?.data, isLoading }, functions: { deleteUser } };
};
