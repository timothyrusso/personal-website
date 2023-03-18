import { TitleComponent } from '../title/title.component';
import { DarkModeButtonComponent } from '../dark-mode-button/dark-mode-button.component';
import { Navbar } from './navbar.style';

export const NavbarComponent = () => {
  return (
    <Navbar>
      <TitleComponent />
      <DarkModeButtonComponent />
    </Navbar>
  );
};
