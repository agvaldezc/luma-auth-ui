import { Outlet } from 'react-router';
import { SidebarProvider } from '../ui/sidebar';
import { LumaSidebar } from '../LumaSidebar';
import { LumaHeader } from '../LumaHeader';
import { Separator } from '../ui/separator';

export const Layout = () => {
  return (
    <SidebarProvider>
      <LumaSidebar />
      <div className="flex flex-col grow">
        <LumaHeader />
        <Separator />
        <main className="p-4 m-auto w-full min-h-full">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};

Layout.displayName = 'Layout';
