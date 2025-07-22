import { createBrowserRouter } from "react-router";

import { createUserRoute } from "@pages/create-user";
import { indexRoute } from "@pages/index";
import { loginRoute } from "@pages/login";
import { updateUserRoute } from "@pages/update-user";

import { AppLayout } from "./layouts/AppLayout";

const baseRoutes = [indexRoute];

const unAuthRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: baseRoutes
  },
  loginRoute
]);

const authRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [...baseRoutes, createUserRoute, updateUserRoute]
  }
]);

export { authRouter, unAuthRouter };
