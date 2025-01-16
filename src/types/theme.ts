export type Theme = 'light' | 'dark' | 'system';

export type LumaThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
};

export type LumaThemeState = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
