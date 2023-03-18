import { useState, ReactNode } from 'react';
import { DarkModeContext } from './dark-mode-context';

type DarkModeProviderProps = {
  children: ReactNode;
};

export const DarkModeProvider = (props: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </DarkModeContext.Provider>
  );
};
