import { memo } from 'react';

type MainContainerProps = {
  children?: React.ReactNode;
}

export const MainContainer = memo(({ children }: MainContainerProps) => {
  return (
    <main className='p-2 flex-grow bg-gray-100'>
      <div className='p-4 w-full h-full bg-white border border-gray-300 rounded-md shadow-md shadow-gray-300'>
        {children}
      </div>
    </main>
  );
});

MainContainer.displayName = 'MainContainer';
