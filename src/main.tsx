import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@/App';
import { SWRConfig } from 'swr';
import LumaThemeProvider from '@/providers/LumaThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      <LumaThemeProvider>
        <App />
      </LumaThemeProvider>
    </SWRConfig>
  </StrictMode>
);
