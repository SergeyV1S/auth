import { createRoot } from "react-dom/client";

import { Providers } from "@app/Providers";
import type { IProvidersProps } from "@app/Providers";

import { getMe } from "@shared/api/auth";
import { queryClient } from "@shared/constants";
import "@shared/styles/index.css";

const init = async () => {
  const rootElement = document.querySelector("#root")!;

  const defaultTheme = "light";

  const providersProps: IProvidersProps = {
    theme: defaultTheme
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
