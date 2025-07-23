import { MoonIcon, PcCaseIcon, SunIcon } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger
} from "@shared/ui";

import { useTheme } from "./ThemeProvider";
import type { TTheme } from "./ThemeProvider";

export const ThemeToggle = () => {
  const { theme, setNewTheme } = useTheme();

  return (
    <Select value={theme} onValueChange={(value) => setNewTheme(value as TTheme)}>
      <SelectTrigger arrow={false} className='w-full border-none p-0'>
        {theme === "light" && (
          <SunIcon className='scale-100 rotate-0 transition-all dark:-rotate-90' />
        )}
        {theme === "dark" && (
          <MoonIcon className='scale-100 rotate-0 transition-all dark:-rotate-90' />
        )}
        {theme === "system" && (
          <PcCaseIcon className='scale-100 rotate-0 transition-all dark:-rotate-90' />
        )}
      </SelectTrigger>

      <SelectContent>
        <SelectGroup>
          <SelectLabel>Priority</SelectLabel>
          <SelectItem value='light'>Light</SelectItem>
          <SelectItem value='dark'>Dark</SelectItem>
          <SelectItem value='system'>System</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
