import { EditIcon } from "lucide-react";
import { Link } from "react-router";

import { PATHS } from "@shared/constants";
import { cn } from "@shared/lib";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  buttonVariants
} from "@shared/ui";

import { useIndexPage } from "./hooks";

const IndexPage = () => {
  const { state } = useIndexPage();

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Id</TableHead>
          <TableHead>Fullname</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Employment</TableHead>
          <TableCell>Birth Date</TableCell>
        </TableRow>
      </TableHeader>
      {state.data && !state.isLoading && (
        <TableBody>
          {state.data.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.fullName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.employment ?? "Unspecified"}</TableCell>
              <TableCell>{user.birthDate?.getDate() ?? "Unspecified"}</TableCell>
              <TableCell>
                <Link
                  to={PATHS.USER_UPDATE}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "hover:text-destructive hover:bg-transparent"
                  )}
                >
                  <EditIcon />
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      )}
    </Table>
  );
};

export default IndexPage;
