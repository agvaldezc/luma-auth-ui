import { memo } from 'react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
} from '../ui/sidebar';
import { ROUTES } from '@/constants/routes';
import { LumaNavLink } from '../LumaNavLink';

export const LumaNavMenu = memo(() => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {ROUTES.map((navItem) => {
            return navItem.showOnSidebar ? (
              <LumaNavLink navItem={navItem} key={navItem.href} />
            ) : null;
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
});

LumaNavMenu.displayName = 'LumaNavMenu';
