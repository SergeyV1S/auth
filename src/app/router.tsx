import { createBrowserRouter } from "react-router";

import { AppLayout } from "./layouts/AppLayout";

export const unAuthRouter = createBrowserRouter([
  {
    element: <AppLayout />
  }
]);

export const authRouter = createBrowserRouter([...unAuthRouter.routes]);
