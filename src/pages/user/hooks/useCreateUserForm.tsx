import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";

import { zodResolver } from "@hookform/resolvers/zod";

import { PATHS } from "@shared/constants";

import { usePostCreateUserMutation } from "../api";
import { userFormSchema } from "../lib";
import type { TUserFormSchema } from "../lib";

export const useCreateUserForm = () => {
  const updateUserForm = useForm<TUserFormSchema>({
    resolver: zodResolver(userFormSchema)
  });
  const navigate = useNavigate();

  const { isPending, mutateAsync } = usePostCreateUserMutation({
    options: {
      onSuccess: () => {
        toast.success("User succesfully created!");
        navigate(PATHS.INDEX);
      }
    }
  });

  const createUser = async (userData: TUserFormSchema) => {
    const createData = userData;

    await mutateAsync({
      params: createData
    });
  };

  return { state: { isPending }, form: updateUserForm, functions: { createUser } };
};
