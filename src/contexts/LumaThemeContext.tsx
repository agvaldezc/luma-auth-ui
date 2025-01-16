import { LumaThemeState } from '@/types/theme';
import { createContext } from 'react';

const initialState: LumaThemeState = {
  theme: 'system',
  setTheme: () => {},
};

export const LumaThemeContext = createContext<LumaThemeState>(initialState);
