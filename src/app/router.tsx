import { createBrowserRouter } from "react-router";

import { createUserRoute } from "@pages/create-user";
import { indexRoute } from "@pages/home";
import { loginRoute } from "@pages/login";
import { updateUserRoute } from "@pages/update-user";

import { AppLayout } from "./layouts/AppLayout";

const baseRoute = [indexRoute];

const unAuthRouter = createBrowserRouter([
  {
    element: <AppLayout />,
    children: baseRoute
  },
  loginRoute
]);

const authRouter = createBrowserRouter([...baseRoute, createUserRoute, updateUserRoute]);

export { authRouter, unAuthRouter };
