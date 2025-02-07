import { LumaThemeContext } from '@/contexts/LumaThemeContext';
import { useContext } from 'react';

export const useTheme = () => {
  const context = useContext(LumaThemeContext);

  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider');

  return context;
};