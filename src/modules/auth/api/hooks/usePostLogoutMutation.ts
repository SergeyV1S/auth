import { useMutation } from "@tanstack/react-query";

import type { TPostLogoutConfig } from "@shared/api/auth";
import { postLogout } from "@shared/api/auth";

export const usePostLogoutMutation = (
  settings?: IMutationSettings<TPostLogoutConfig, typeof postLogout>
) =>
  useMutation({
    mutationKey: ["postLogout"],
    mutationFn: ({ config }) => postLogout({ config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
