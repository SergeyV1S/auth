import { lazy } from "react";

import { PATHS } from "@shared/constants";
import { createRoute } from "@shared/lib";

const IndexScreen = lazy(() => import("./page"));

export const indexRoute = createRoute(PATHS.INDEX, <IndexScreen />);
