import { Separator } from '../ui/separator';
import { SidebarTrigger } from '../ui/sidebar';

export const LumaHeader = () => {
  return (
    <header className="flex h-16 px-4 py-4 items-center">
      <div id="heading-group" className="flex gap-2 items-center h-full">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <h1 className="font-bold text-2xl">Header</h1>
      </div>
    </header>
  );
};
