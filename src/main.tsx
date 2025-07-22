import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import type { AxiosError } from "axios";
import { toast } from "sonner";

import { createRoot } from "react-dom/client";

import { Providers } from "@app/Providers";
import type { IProvidersProps } from "@app/Providers";

import { getMe } from "@shared/api/auth";
import "@shared/styles/index.css";

const init = async () => {
  const rootElement = document.querySelector("#root")!;

  const defaultTheme = "light";

  const queryClient = new QueryClient({
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

  const providersProps: IProvidersProps = {
    theme: defaultTheme,
    client: queryClient
  };

  const getMeQuery = await queryClient
    .fetchQuery({
      queryKey: ["getMe"],
      queryFn: () => getMe({})
    })
    .catch(() => ({ data: null }));

  providersProps.isAuth = !!getMeQuery.data;

  createRoot(rootElement).render(<Providers {...providersProps} />);
};

init();
