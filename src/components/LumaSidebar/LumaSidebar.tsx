import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarSeparator,
} from '../ui/sidebar';
import { Button } from '../ui/button';
import { LumaNavMenu } from '../LumaNavMenu/LumaNavMenu';
import { LumaThemeSwitcher } from '../LumaThemeSwitcher';

export const LumaSidebar = () => {
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
          <Button className='w-full'>Sign In</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

LumaSidebar.displayName = 'LumaSidebar';
