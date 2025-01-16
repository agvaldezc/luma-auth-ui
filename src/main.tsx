import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from '@/App';
import { LumaThemeProvider } from './providers/LumaThemeProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LumaThemeProvider>
      <App />
    </LumaThemeProvider>
  </StrictMode>
);
