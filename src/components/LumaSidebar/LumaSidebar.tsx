import { memo } from 'react';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '../ui/sidebar';
import { Button } from '../ui/button';
import { LumaNavMenu } from '../LumaNavMenu/LumaNavMenu';

export const LumaSidebar = memo(() => {
  return (
    <Sidebar>
      <SidebarHeader>Luma Auth UI</SidebarHeader>
      <SidebarContent>
        <LumaNavMenu />
      </SidebarContent>
      <SidebarFooter>
        <Button>Sign In</Button>
      </SidebarFooter>
    </Sidebar>
  );
});
