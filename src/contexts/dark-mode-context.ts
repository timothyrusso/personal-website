import { createContext } from 'react';

type DarkModeContextType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const defaultDarkModeContext: DarkModeContextType = {
  darkMode: false,
  toggleDarkMode: () => {},
};

export const DarkModeContext = createContext<DarkModeContextType>(
  defaultDarkModeContext
);
