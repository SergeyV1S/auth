import { api } from "@shared/api/instance";

interface IGetUserByIdParams {
  userId: string;
}

export type TGetUserByIdConfig = TRequestConfig<IGetUserByIdParams>;

export const getUserById = async ({ params, config }: TGetUserByIdConfig) =>
  api.get(`/users/${params.userId}`, config);

interface TPatchUserByIdParams {
  dto: Partial<{
    name: string;
    surName: string;
    fullName: string;
    birthDate: Date;
    telephone: string;
    employment: string;
    userAgreement: boolean;
  }>;
  userId: string;
}

export type TPatchUserByIdConfig = TRequestConfig<TPatchUserByIdParams>;

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
