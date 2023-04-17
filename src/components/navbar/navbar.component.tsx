import { TitleComponent } from '../title/title.component';
import { DarkModeButtonComponent } from '../dark-mode-button/dark-mode-button.component';
import { Navbar } from './navbar.style';
import GitHubLogo from '../../assets/github.svg';
import GitHubLogoDark from '../../assets/github-blue.svg';
import { IconLink } from '../projects/projects.style';
import { useContext } from 'react';
import { DarkModeContext } from '../../contexts/dark-mode-context';

export const NavbarComponent = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Navbar>
      <TitleComponent />
      <DarkModeButtonComponent />
      <IconLink href="https://github.com/timothyrusso" target="_blank">
        <img src={darkMode ? GitHubLogoDark : GitHubLogo} alt="GitHub logo" />
      </IconLink>
    </Navbar>
  );
};
