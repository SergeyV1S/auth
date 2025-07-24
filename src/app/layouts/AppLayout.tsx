import { Outlet } from "react-router";

import { SidebarProvider, SidebarTrigger } from "@shared/ui";

import { AppSidebar } from "./AppSidebar";
import { Header } from "./Header";

export const AppLayout = () => (
  <SidebarProvider>
    <AppSidebar />

    <SidebarTrigger />
    <main className='container ml-2 min-h-screen w-full space-y-5'>
      <Header />
      <Outlet />
    </main>
  </SidebarProvider>
);
