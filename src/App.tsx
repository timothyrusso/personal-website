import { useContext } from 'react';
import { DarkModeContext } from './contexts/dark-mode-context';
import { GlobalStyle } from './global.style';
import { SpacerComponent } from './components/spacer/spacer.component';
import { DescriptionComponent } from './components/description/description.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <GlobalStyle darkMode={darkMode} />
      <NavbarComponent />
      <SpacerComponent />
      <DescriptionComponent />
      <ProjectsComponent />
      <ContactsComponent />
    </>
  );
};

export default App;
