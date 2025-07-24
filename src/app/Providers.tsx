import type { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";

import { ThemeProvider } from "@shared/theme";
import { TooltipProvider } from "@shared/ui/tooltip";

import { AuthProvider } from "./context";
import { authRouter, unAuthRouter } from "./router";

export interface IProvidersProps {
  client: QueryClient;
  isAuth?: boolean;
}

export const Providers = ({ client, isAuth }: IProvidersProps) => (
  <AuthProvider defaultValue={isAuth}>
    <QueryClientProvider client={client}>
      <ThemeProvider>
        <TooltipProvider>
          <RouterProvider router={isAuth ? authRouter : unAuthRouter} />
          <Toaster position='top-center' richColors closeButton />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </AuthProvider>
);
