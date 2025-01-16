import { memo } from 'react';
import { Card, CardContent } from '../ui/card';

type LumaMainContainerProps = {
  children?: React.ReactNode;
};

export const LumaMainContainer = memo(
  ({ children }: LumaMainContainerProps) => {
    return (
      <main className="flex-1 p-2">
        <Card>
          <CardContent>{children}</CardContent>
        </Card>
      </main>
    );
  }
);

LumaMainContainer.displayName = 'LumaMainContainer';
