import { RouterProvider } from "react-router";
import { Toaster } from "sonner";

import { ThemeProvider } from "@shared/theme";
import type { TTheme } from "@shared/theme/ThemeProvider";

import { authRouter, unAuthRouter } from "./router";

export interface IProvidersProps {
  theme: TTheme;
  isAuth?: boolean;
}

export const Providers = ({ theme, isAuth }: IProvidersProps) => (
  <ThemeProvider defaultTheme={theme}>
    <RouterProvider router={isAuth ? authRouter : unAuthRouter} />
    <Toaster position='top-center' richColors closeButton />
  </ThemeProvider>
);
