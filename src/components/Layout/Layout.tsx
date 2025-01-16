import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { LumaMainContainer } from '../LumaMainContainer';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { LumaSidebar } from '../LumaSidebar';

export const Layout = memo(() => {
  return (
    <SidebarProvider>
      <LumaSidebar />
      <LumaMainContainer>
        <SidebarTrigger />
        <Outlet />
      </LumaMainContainer>
    </SidebarProvider>
  );
});

Layout.displayName = 'Layout';
