import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

import { zodResolver } from "@hookform/resolvers/zod";

import { PATHS } from "@shared/constants";

import { usePostLoginMutation } from "../api";
import type { TLoginFormSchema } from "../lib";
import { loginFormSchema } from "../lib";

export const useLoginForm = () => {
  const navigate = useNavigate();

  const { isPending, mutateAsync } = usePostLoginMutation({
    options: {
      onSuccess: () => {
        navigate(PATHS.INDEX);
        navigate(0);
      }
    }
  });

  const loginForm = useForm<TLoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const login = async (loginData: TLoginFormSchema) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword, ...necessaryLoginData } = loginData;
    await mutateAsync({ params: necessaryLoginData });
  };

  return { state: { isPending }, form: loginForm, functions: { login } };
};
