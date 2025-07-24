import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";
import type { IUsersData } from "@models/user";

import { PATHS, queryClient } from "@shared/constants";

import { usePatchUserByIdMutation } from "../api";
import { updateUserFormSchema } from "../lib";
import type { TUpdateUserFormSchema } from "../lib";

export const useUpdateUserForm = (user: IUsersData) => {
  const updateUserForm = useForm<TUpdateUserFormSchema>({
    resolver: zodResolver(updateUserFormSchema),
    defaultValues: { ...user, birthDate: user.birthDate && new Date(user.birthDate) }
  });
  const navigate = useNavigate();

  const { isPending, mutateAsync } = usePatchUserByIdMutation({
    options: {
      onSuccess: () => {
        toast.success("Succesfull update!");
        queryClient.invalidateQueries({ queryKey: ["getUserById", user.id] });
        navigate(PATHS.INDEX);
      }
    }
  });

  const updateUser = async (userData: TUpdateUserFormSchema) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { email, password, ...updateData } = userData;

    await mutateAsync({
      params: {
        dto: updateData,
        userId: user.id
      }
    });
  };

  return { state: { isPending }, form: updateUserForm, functions: { updateUser } };
};
