import { api } from "@shared/api/instance";

export type TGetUsersConfig = TRequestConfig;

export const getUsers = async ({ config }: TGetUsersConfig) => api.get("/users", config);

interface IPostCreateUserParams {
  name: string;
  surName: string;
  password: string;
  fullName: string;
  email: string;
  birthDate: Date;
  telephone: string;
  employment: string;
  userAgreement: boolean;
}

export type TPostUsersConfig = TRequestConfig<IPostCreateUserParams>;

export const postUsers = async ({ params, config }: TPostUsersConfig) =>
  api.post(
    "/users",
    {
      params: {
        ...params,
        birthDate: params.birthDate.toISOString()
      }
    },
    config
  );
