import { createBrowserRouter } from "react-router";

import { createUserRoute } from "@pages/create-user";
import { indexRoute } from "@pages/home";
import { loginRoute } from "@pages/login";
import { updateUserRoute } from "@pages/update-user";

import { PATHS } from "@shared/constants";

import { AppLayout } from "./layouts/AppLayout";

const unAuthRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [indexRoute]
  },
  loginRoute
]);

const authRouter = createBrowserRouter([
  ...unAuthRouter.routes.filter((route) => route.path !== PATHS.LOGIN),
  createUserRoute,
  updateUserRoute
]);

export { authRouter, unAuthRouter };
