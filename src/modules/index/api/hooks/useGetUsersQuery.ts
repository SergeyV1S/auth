import { useQuery } from "@tanstack/react-query";

import { getUsers } from "@shared/api/users";

export const useGetUsersQuery = (settings?: IQuerySettings<typeof getUsers>) =>
  useQuery({
    queryKey: ["getUsers", settings?.config],
    queryFn: () => getUsers({ config: settings?.config }),
    ...settings?.options
  });
