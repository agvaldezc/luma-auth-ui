import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@/App';
import { LumaThemeProvider } from './providers/LumaThemeProvider';
import { SWRConfig } from 'swr';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SWRConfig
      value={{
        revalidateOnFocus: false,
      }}
    >
      <LumaThemeProvider>
        <App />
      </LumaThemeProvider>
    </SWRConfig>
  </StrictMode>
);
