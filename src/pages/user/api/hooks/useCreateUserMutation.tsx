import { useMutation } from "@tanstack/react-query";

import { postUsers } from "@shared/api/users";
import type { TPostUsersConfig } from "@shared/api/users";

export const usePostCreateUserMutation = (
  settings?: IMutationSettings<TPostUsersConfig, typeof postUsers>
) =>
  useMutation({
    mutationKey: ["postUsers"],
    mutationFn: ({ params, config }) =>
      postUsers({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
