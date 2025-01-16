import { DEFAULT_THEME, THEME_STORAGE_KEY } from '@/constants/theme';
import { LumaThemeContext } from '@/contexts/LumaThemeContext';
import { LumaThemeProviderProps, Theme } from '@/types/theme';
import { useEffect, useState } from 'react';


export const LumaThemeProvider = ({
  children,
  defaultTheme = DEFAULT_THEME,
  storageKey = THEME_STORAGE_KEY,
}: LumaThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(
    (window.localStorage.getItem(storageKey) as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = document.documentElement;

    root.classList.remove('light', 'dark');

    if (theme === 'system') {
      root.classList.add(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );

      return;
    }

    root.classList.add(theme);
  }, [theme]);

  return (
    <LumaThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </LumaThemeContext.Provider>
  );
};
