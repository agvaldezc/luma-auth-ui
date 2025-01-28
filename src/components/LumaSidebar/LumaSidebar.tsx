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
          <h1 className="text-lg font-semibold">Luma Auth</h1>
          <LumaThemeSwitcher />
        </div>
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <LumaNavMenu />
      </SidebarContent>
      <SidebarSeparator />
      <SidebarFooter>
        <div className="p-2 flex items-center flex-grow">
          <Button className='w-full'>Sign In</Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

LumaSidebar.displayName = 'LumaSidebar';
