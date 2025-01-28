import { Outlet } from 'react-router-dom';
import { LumaMainContainer } from '../LumaMainContainer';
import { SidebarProvider } from '../ui/sidebar';
import { LumaSidebar } from '../LumaSidebar';

export const Layout = () => {
  return (
    <SidebarProvider>
      <LumaSidebar />
      <LumaMainContainer>
        <Outlet />
      </LumaMainContainer>
    </SidebarProvider>
  );
};

Layout.displayName = 'Layout';
