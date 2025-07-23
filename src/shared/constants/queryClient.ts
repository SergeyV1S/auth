import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

export const queryClient = new QueryClient({
  defaultOptions: { queries: { refetchOnWindowFocus: false } },
  queryCache: new QueryCache({
    onError: (error) => {
      const { message } = error as AxiosError;
      toast.error(message ?? "Something went wrong");
    }
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      const { message } = error as AxiosError;
      toast.error(message ?? "Something went wrong");
    }
  })
});
