import { TitleComponent } from '../title/title.component';
import { DarkModeButtonComponent } from '../dark-mode-button/dark-mode-button.component';
import { Navbar } from './navbar.style';
import { FC } from 'react';

type NavbarComponentProps = {
  toggle: () => void;
  isOn: boolean;
};

export const NavbarComponent: FC<NavbarComponentProps> = ({ toggle, isOn }) => {
  return (
    <Navbar>
      <TitleComponent />
      <DarkModeButtonComponent toggle={toggle} isOn={isOn} />
    </Navbar>
  );
};
