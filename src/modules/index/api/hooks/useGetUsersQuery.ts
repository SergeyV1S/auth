import { useQuery } from "@tanstack/react-query";

import { getUsers } from "@shared/api/users";

export const useGetUsersQuery = (settings?: IQuerySettings<typeof getUsers>) =>
  useQuery({
    queryKey: ["getUsers"],
    queryFn: () => getUsers({ config: settings?.config }),
    ...settings?.options
  });
