import { Separator } from '@/components/ui/separator';
import { SidebarTrigger } from '@/components/ui/sidebar';

const LumaHeader = () => {
  return (
    <header className="flex w-full h-16 px-4 py-4">
      <div id="heading-group" className="flex gap-2 items-center h-full">
        <SidebarTrigger />
        <Separator orientation="vertical" />
        <h1 className="font-bold text-2xl">Header</h1>
      </div>
    </header>
  );
};

export default LumaHeader;
