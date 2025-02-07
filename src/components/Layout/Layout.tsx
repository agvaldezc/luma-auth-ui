import LumaHeader from '@/components/LumaHeader';
import LumaSidebar from '@/components/LumaSidebar';
import { Separator } from '@/components/ui/separator';
import { SidebarProvider } from '@/components/ui/sidebar';
import { Outlet } from 'react-router';

const Layout = () => {
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

export default Layout;
