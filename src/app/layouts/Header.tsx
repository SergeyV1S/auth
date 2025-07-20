import { LogInIcon } from "lucide-react";
import { Link } from "react-router";

import { PATHS } from "@shared/constants";
import { LogoIcon } from "@shared/icons";
import { cn } from "@shared/lib";
import { ThemeToggle } from "@shared/theme";
import { buttonVariants } from "@shared/ui";

export const Header = () => (
  <header className='border-b-border container border-b p-6'>
    <div className='flex w-full items-center justify-between gap-6'>
      <Link to={PATHS.INDEX}>
        <LogoIcon />
      </Link>
      <div className='flex items-center gap-2 sm:gap-6'>
        <ThemeToggle />
        <Link to={PATHS.LOGIN} className={cn(buttonVariants(), "flex items-center")}>
          <LogInIcon />
          Login
        </Link>
      </div>
    </div>
  </header>
);
