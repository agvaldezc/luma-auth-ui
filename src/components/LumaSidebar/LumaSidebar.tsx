import { memo } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '../ui/sidebar';
import { Button } from '../ui/button';
import { LumaNavMenu } from '../LumaNavMenu/LumaNavMenu';
import { LumaThemeSwitcher } from '../LumaThemeSwitcher';

export const LumaSidebar = memo(() => {
  return (
    <Sidebar>
      <SidebarHeader>Luma Auth UI</SidebarHeader>
      <SidebarContent>
        <LumaNavMenu />
      </SidebarContent>
      <SidebarFooter>
        <Button>Sign In</Button>
        <LumaThemeSwitcher />
      </SidebarFooter>
    </Sidebar>
  );
});

LumaSidebar.displayName = 'LumaSidebar';
