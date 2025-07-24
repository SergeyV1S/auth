import { lazy } from "react";

import { PATHS } from "@shared/constants";
import { createRoute } from "@shared/lib";

const LoginScreen = lazy(() => import("./CreateUserPage"));

export const createUserRoute = createRoute(PATHS.USER_CREATE, <LoginScreen />);
