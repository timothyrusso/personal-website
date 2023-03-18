import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/dark-mode-context';
import { DarkModeButton } from './dark-mode-button.style';

export const DarkModeButtonComponent = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

  return (
    <DarkModeButton onClick={() => toggleDarkMode()} darkMode={darkMode} />
  );
};
