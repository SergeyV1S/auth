import type { IUsersData } from "@models/user";

import { api } from "@shared/api/instance";

type TGetUsersConfig = TRequestConfig;

type TGetUsersResponse = IUsersData[];

export const getUsers = async ({ config }: TGetUsersConfig) =>
  api.get<TGetUsersResponse>("/users", config);

type TPostCreateUserParams = Omit<IUsersData, "id" | "password"> & {
  password?: string;
};

export type TPostUsersConfig = TRequestConfig<TPostCreateUserParams>;

interface IPostCreateUserResponse {
  id: string;
  name: string;
}

export const postUsers = async ({ params, config }: TPostUsersConfig) =>
  api.post<IPostCreateUserResponse>("/users", params, config);
