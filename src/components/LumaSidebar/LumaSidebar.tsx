import LumaNavMenu from '@/components/LumaNavMenu';
import LumaThemeSwitcher from '@/components/LumaThemeSwitcher';
import { Button } from '@/components/ui/button';
import {
  SidebarHeader,
  SidebarContent,
  SidebarSeparator,
  SidebarFooter,
  Sidebar,
} from '@/components/ui/sidebar';

const LumaSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="p-2 flex items-center justify-between">
          <span className="text-2xl font-semibold">Luma Auth</span>
          <LumaThemeSwitcher />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <LumaNavMenu />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <div className="p-2 flex items-center grow">
          <Button className="w-full">Sign In</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default LumaSidebar;
