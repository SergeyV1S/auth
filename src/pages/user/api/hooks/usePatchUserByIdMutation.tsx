import { useMutation } from "@tanstack/react-query";

import { patchUserById } from "@shared/api/users";
import type { TPatchUserByIdConfig } from "@shared/api/users";

export const usePatchUserByIdMutation = (
  settings?: IMutationSettings<TPatchUserByIdConfig, typeof patchUserById>
) =>
  useMutation({
    mutationKey: ["patchUserById"],
    mutationFn: ({ params, config }) =>
      patchUserById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
