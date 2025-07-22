import { HomeIcon, UserRoundPlusIcon } from "lucide-react";
import { NavLink } from "react-router";

import { PATHS } from "@shared/constants";
import {
  Sidebar,
  SidebarContent,
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
                <NavLink to={PATHS.INDEX}>
                  <HomeIcon className='h-4 w-4' />
                  <span className={typographyVariants()}>Home</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton tooltip='Create User' asChild>
                <NavLink to={PATHS.USER_CREATE}>
                  <UserRoundPlusIcon className='h-4 w-4' />
                  <span className={typographyVariants()}>Create User</span>
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  </Sidebar>
);
