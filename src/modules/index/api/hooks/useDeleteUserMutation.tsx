import { useMutation } from "@tanstack/react-query";

import type { TDeleteUserByIdConfig } from "@shared/api/users";
import { deleteUserById } from "@shared/api/users";

export const useDeleteUserMutation = (
  settings?: IMutationSettings<TDeleteUserByIdConfig, typeof deleteUserById>
) =>
  useMutation({
    mutationKey: ["deleteUserById", settings?.config?.params.userUid],
    mutationFn: ({ params, config }) =>
      deleteUserById({ params, config: { ...settings?.config, ...config } }),
    ...settings?.options
  });
