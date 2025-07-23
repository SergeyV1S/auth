import { HomeIcon, UserRoundPlusIcon } from "lucide-react";
import { Link } from "react-router";

import { PATHS } from "@shared/constants";
import { ThemeToggle } from "@shared/theme";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  typographyVariants
} from "@shared/ui";

export const AppSidebar = () => (
  <Sidebar variant='sidebar' collapsible='icon'>
    <SidebarHeader>
      <SidebarMenu>
        <SidebarMenuItem className='flex items-center justify-center'>
          <SidebarMenuButton className='flex h-full items-center justify-center'>
            <span className={typographyVariants({ variant: "title_h3" })}>Next Manage</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarHeader>
    <SidebarContent>
      <SidebarGroup>
        <SidebarGroupLabel>Navingation</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton tooltip='Home' asChild>
                <Link to={PATHS.INDEX}>
                  <HomeIcon className='h-4 w-4' />
                  <span className={typographyVariants()}>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton tooltip='Create User' asChild>
                <Link to={PATHS.USER_CREATE}>
                  <UserRoundPlusIcon className='h-4 w-4' />
                  <span className={typographyVariants()}>Create User</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter>
      <ThemeToggle />
    </SidebarFooter>
  </Sidebar>
);
