type LumaMainContainerProps = {
  children?: React.ReactNode;
};

export const LumaMainContainer = ({ children }: LumaMainContainerProps) => {
  return (
    <main className="flex flex-grow flex-col p-2">
      {children}
    </main>
  );
};

LumaMainContainer.displayName = 'LumaMainContainer';
