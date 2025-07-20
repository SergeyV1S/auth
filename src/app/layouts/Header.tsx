import { Link } from "react-router";

import { PATHS } from "@shared/constants";
import { LogoIcon } from "@shared/icons";
import { ThemeToggle } from "@shared/theme";

export const Header = () => (
  <header className='border-b-border container border-b py-2'>
    <div className='flex w-full items-center justify-between gap-6'>
      <Link to={PATHS.HOME}>
        <LogoIcon />
      </Link>
      <div className='flex items-center gap-2 sm:gap-6'>
        <ThemeToggle />
      </div>
    </div>
  </header>
);
