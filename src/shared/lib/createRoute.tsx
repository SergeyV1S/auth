import type { JSX } from "react";
import { Suspense } from "react";
import type { RouteObject } from "react-router";

import type { PATHS } from "@shared/constants";
import { Spinner } from "@shared/ui";

// Паттерн фабрика
export const createRoute = (
  path: keyof typeof PATHS | string,
  component: JSX.Element,
  config?: RouteObject
): RouteObject => ({
  path,
  element: <Suspense fallback={<Spinner />}>{component}</Suspense>,
  errorElement: <div className=''>Error</div>,
  ...config
});
