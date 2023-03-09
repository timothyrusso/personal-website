import { GlobalStyle } from './global.style';
import { SpacerComponent } from './components/spacer/spacer.component';
import { DescriptionComponent } from './components/description/description.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { useDarkModeToggle } from './hooks/useDarkModeToggle';

const App = () => {

  const {value, toggle} = useDarkModeToggle(false);

  return (
    <>
      <GlobalStyle isOn={value} />
      <NavbarComponent toggle={toggle} />
      <SpacerComponent />
      <DescriptionComponent />
      <ProjectsComponent isOn={value} />
      <ContactsComponent isOn={value} />
    </>

  );
}

export default App;
