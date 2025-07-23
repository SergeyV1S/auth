import { useQuery } from "@tanstack/react-query";

import { getUserById } from "@shared/api/users";

export const useGetUserByIdQuery = (settings?: IQuerySettings<typeof getUserById>) =>
  useQuery({
    queryKey: ["getUserById", settings?.config?.params],
    queryFn: () => getUserById({ params: settings?.config?.params, config: settings?.config }),
    ...settings?.options
  });
