import { memo } from 'react';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '../ui/sidebar';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

export const LumaNavMenu = memo(() => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Navigation</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {ROUTES.map((navItem) => {
            return (
              <SidebarMenuItem key={navItem.href}>
                <SidebarMenuButton asChild>
                  <NavLink to={navItem.href}>
                    {navItem.icon && <navItem.icon />}
                    {navItem.title}
                  </NavLink>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
});
