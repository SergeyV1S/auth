import type { IUsersData } from "@models/user";

import { api } from "@shared/api/instance";

interface IGetUserByIdParams {
  userId: string;
}

type TGetUserByIdConfig = TRequestConfig<IGetUserByIdParams>;

type TGetUserByIdResponse = IUsersData;

export const getUserById = async ({ params, config }: TGetUserByIdConfig) =>
  api.get<TGetUserByIdResponse>(`/users/${params.userId}`, config);

interface TPatchUserByIdParams {
  dto: Partial<IUsersData>;
  userId: string;
}

type TPatchUserByIdConfig = TRequestConfig<TPatchUserByIdParams>;

export const patchUserById = async ({ params, config }: TPatchUserByIdConfig) =>
  api.patch(
    `/users/${params.userId}`,
    {
      params: {
        ...params,
        birthDate: params.dto.birthDate?.toISOString()
      }
    },
    config
  );

interface IDeleteUserByIdParams {
  userId: string;
}

export type TDeleteUserByIdConfig = TRequestConfig<IDeleteUserByIdParams>;

export const deleteUserById = async ({ params, config }: TDeleteUserByIdConfig) =>
  api.delete(`/users/${params.userId}`, config);
