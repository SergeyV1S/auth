import { lazy } from "react";

import { PATHS } from "@shared/constants";
import { createRoute } from "@shared/lib";

const LoginScreen = lazy(() => import("./page"));

export const loginRoute = createRoute(PATHS.LOGIN, <LoginScreen />);
