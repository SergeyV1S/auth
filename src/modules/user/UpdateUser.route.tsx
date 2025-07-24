import { lazy } from "react";

import { PATHS } from "@shared/constants";
import { createRoute } from "@shared/lib";

const UpdateUserScreen = lazy(() => import("./UpdateUserPage"));

export const updateUserRoute = createRoute(PATHS.USER_UPDATE, <UpdateUserScreen />);
