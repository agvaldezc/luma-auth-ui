import { memo } from 'react';
import { Outlet } from 'react-router-dom';
import { MainContainer } from '../MainContainer';
import { SidebarProvider, SidebarTrigger } from '../ui/sidebar';
import { LumaSidebar } from '../LumaSidebar/LumaSidebar';

export const Layout = memo(() => {
  return (
    <SidebarProvider>
      <LumaSidebar />
      <MainContainer>
        <SidebarTrigger />
        <Outlet />
      </MainContainer>
    </SidebarProvider>
  );
});

Layout.displayName = 'Layout';
