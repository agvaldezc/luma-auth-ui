import { LumaNavigationItem } from '@/types/navigation';
import { memo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { SidebarMenuItem, SidebarMenuButton } from '../ui/sidebar';

type LumaNavLinkProps = {
  navItem: LumaNavigationItem;
};

export const LumaNavLink = memo(({ navItem }: LumaNavLinkProps) => {
  const { pathname } = useLocation();

  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={pathname === navItem.href}>
        <NavLink to={navItem.href}>
          {navItem.icon && <navItem.icon />}
          {navItem.title}
        </NavLink>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
});

LumaNavLink.displayName = 'LumaNavLink';
