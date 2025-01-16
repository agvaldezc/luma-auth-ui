import { LumaNavigationItem } from '@/types/navigation';
import {
  LucideBookUser,
  LucideBuilding,
  LucideChartGantt,
  LucideClipboardCheck,
  LucideDatabase,
  LucideHouse,
  LucideUsers,
} from 'lucide-react';

export const ROUTES: LumaNavigationItem[] = [
  { title: 'Home', href: '', icon: LucideHouse, showOnSidebar: false },
  { title: 'Roles', href: '/roles', icon: LucideBookUser, showOnSidebar: true },
  {
    title: 'Permissions',
    href: '/permissions',
    icon: LucideClipboardCheck,
    showOnSidebar: true,
  },
  {
    title: 'Organizations',
    href: '/organizations',
    icon: LucideBuilding,
    showOnSidebar: true,
  },
  {
    title: 'Projects',
    href: '/projects',
    icon: LucideChartGantt,
    showOnSidebar: true,
  },
  {
    title: 'Resources',
    href: '/resources',
    icon: LucideDatabase,
    showOnSidebar: true,
  },
  { title: 'Users', href: '/users', icon: LucideUsers, showOnSidebar: true },
] as const;
