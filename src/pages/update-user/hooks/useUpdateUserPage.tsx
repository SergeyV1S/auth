import { useSearchParams } from "react-router";

import { useGetUserByIdQuery } from "../api";

export const useUpdateUserPage = () => {
  const [searchParams] = useSearchParams();

  const userId = searchParams.get("userId");

  const { data, isLoading } = useGetUserByIdQuery({
    config: {
      params: { userId }
    }
  });

  return { state: { data: data?.data, isLoading } };
};
