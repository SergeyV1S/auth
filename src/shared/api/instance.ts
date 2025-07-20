import Axios from "axios";

export const api = Axios.create({
  baseURL: import.meta.env.BASE_API_URL,
  withCredentials: true
});
