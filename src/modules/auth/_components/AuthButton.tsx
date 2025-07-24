import { LogInIcon, LogOutIcon } from "lucide-react";
import { Link, useNavigate } from "react-router";

import { PATHS } from "@shared/constants";
import { cn } from "@shared/lib";
import { Button, buttonVariants } from "@shared/ui";

import { usePostLogoutMutation } from "../api";
import { useAuthState } from "../context";

export const AuthButton = () => {
  const { isAuth } = useAuthState();

  const navigate = useNavigate();

  const { isPending, mutateAsync } = usePostLogoutMutation({
    options: {
      onSuccess: () => {
        navigate(0);
      }
    }
  });

  return (
    <>
      {isAuth && (
        <Button
          className='flex items-center'
          onClick={async () => mutateAsync({})}
          disabled={isPending}
        >
          <LogOutIcon />
          Logout
        </Button>
      )}
      {!isAuth && (
        <Link to={PATHS.LOGIN} className={cn(buttonVariants(), "flex items-center")}>
          <LogInIcon />
          Login
        </Link>
      )}
    </>
  );
};
