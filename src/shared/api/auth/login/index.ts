import { api } from "@shared/api/instance";

interface IPostLoginParams {
  password: string;
  email: string;
}

export type TPostLoginConfig = TRequestConfig<IPostLoginParams>;

export const postLogin = async ({ params, config }: TPostLoginConfig) =>
  api.post("/auth/login", params, config);
