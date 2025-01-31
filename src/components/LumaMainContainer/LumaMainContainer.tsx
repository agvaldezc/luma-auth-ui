import { LumaHeader } from '../LumaHeader';
import { Separator } from '../ui/separator';

type LumaMainContainerProps = {
  children?: React.ReactNode;
};

export const LumaMainContainer = ({ children }: LumaMainContainerProps) => {
  return (
    <div className="flex flex-col flex-grow">
      <LumaHeader />
      <Separator />
      <main>{children}</main>
    </div>
  );
};

LumaMainContainer.displayName = 'LumaMainContainer';
