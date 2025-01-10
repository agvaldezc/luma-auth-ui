import { LumaNavigationItem } from '@/types/navigation';
import { LucideHouse } from 'lucide-react';

export const ROUTES: LumaNavigationItem[] = [
  { title: 'Home', href: '/', icon: LucideHouse },
  { title: 'Roles', href: 'roles' },
  { title: 'Permissions', href: 'permissions' },
  { title: 'Organizations', href: 'organizations' },
  { title: 'Projects', href: 'projects' },
  { title: 'Resources', href: 'resources' },
  { title: 'Users', href: 'users' },
];
