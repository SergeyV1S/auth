import { LogInIcon, LogOutIcon } from "lucide-react";
import { Link } from "react-router";

import { useAuthState } from "@pages/login/models/AuthContext";

import { PATHS } from "@shared/constants";
import { LogoIcon } from "@shared/icons";
import { cn } from "@shared/lib";
import { ThemeToggle } from "@shared/theme";
import { Button, buttonVariants } from "@shared/ui";

export const Header = () => {
  const { isAuth } = useAuthState();

  return (
    <header className='border-b-border w-full border-b py-5'>
      <div className='flex w-full items-center justify-between gap-6'>
        <Link to={PATHS.INDEX}>
          <LogoIcon />
        </Link>
        <div className='flex items-center gap-2 sm:gap-6'>
          <ThemeToggle />
          {!isAuth && (
            <Link to={PATHS.LOGIN} className={cn(buttonVariants(), "flex items-center")}>
              <LogInIcon />
              Login
            </Link>
          )}
          {isAuth && (
            <Button className='flex items-center'>
              <LogOutIcon />
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};
