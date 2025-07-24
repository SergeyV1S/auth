import { createBrowserRouter } from "react-router";

import { loginRoute } from "@modules/auth";
import { indexRoute } from "@modules/index";
import { createUserRoute, updateUserRoute } from "@modules/user";

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
