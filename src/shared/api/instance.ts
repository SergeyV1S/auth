import Axios from "axios";

import { PATHS } from "@shared/constants";

export const api = Axios.create({
  baseURL: import.meta.env.BASE_API_URL,
  withCredentials: true
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.status === 401 && window.location.pathname !== PATHS.LOGIN) {
      window.location.pathname = PATHS.LOGIN;
    }
    return Promise.reject(error);
  }
);
