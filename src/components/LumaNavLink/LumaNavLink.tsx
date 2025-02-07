import { LumaNavigationItem } from '@/types/navigation';
import { NavLink, useLocation } from 'react-router';
import { SidebarMenuItem, SidebarMenuButton } from '../ui/sidebar';

type LumaNavLinkProps = {
  navItem: LumaNavigationItem;
};

const LumaNavLink = ({ navItem }: LumaNavLinkProps) => {
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
};

export default LumaNavLink;
