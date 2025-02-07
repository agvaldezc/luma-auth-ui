import LumaNavLink from '@/components/LumaNavLink';
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
} from '@/components/ui/sidebar';

import { ROUTES } from '@/constants/routes';

const LumaNavMenu = () => {
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
};

export default LumaNavMenu;
