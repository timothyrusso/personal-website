import { FC } from 'react';
import { DarkModeButton } from './dark-mode-button.style';

type DarkModeButtonComponentProps = {
  toggle: () => void;
  isOn: boolean;
};

export const DarkModeButtonComponent: FC<DarkModeButtonComponentProps> = ({
  toggle,
  isOn,
}) => {
  return <DarkModeButton onClick={() => toggle()} isOn={isOn} />;
};
