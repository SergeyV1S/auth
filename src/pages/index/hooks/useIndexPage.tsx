import { useGetUsersQuery } from "../api";

export const useIndexPage = () => {
  const { data, isLoading } = useGetUsersQuery();

  return { state: { data: data?.data, isLoading } };
};
