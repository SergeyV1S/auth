import { api } from "@shared/api/instance";

export type TPostLogoutConfig = TRequestConfig;

export const postLogout = async ({ config }: TPostLogoutConfig) => api.post("/auth/logout", config);
