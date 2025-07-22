import { useMutation } from "@tanstack/react-query";

import type { TPostLoginConfig } from "@shared/api/auth";
import { postLogin } from "@shared/api/auth";

export const usePostLoginMutation = (
  settings?: IMutationSettings<TPostLoginConfig, typeof postLogin>
) =>
  useMutation({
    mutationKey: ["postLogin"],
    mutationFn: ({ params, config }) =>
      postLogin({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
