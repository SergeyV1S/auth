import { api } from "@shared/api/instance";

export type TGetMeConfig = TRequestConfig;

export const getMe = async ({ config }: TGetMeConfig) => api.get("/auth/me", config);
