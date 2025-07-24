import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache({
    onError: (error) => {
      const { response } = error as AxiosError<{ message: string }>;
      toast.error(response?.data?.message ?? "Something went wrong");
    }
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      const { response } = error as AxiosError<{ message: string }>;
      toast.error(response?.data?.message ?? "Something went wrong");
    }
  })
});
