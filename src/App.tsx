import React from 'react';
import { GlobalStyle } from './global.style';
import { TitleComponent } from './components/title/title.component';
import { SpacerComponent } from './components/spacer/spacer.component';
import { DescriptionComponent } from './components/description/description.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NavbarComponent } from './components/navbar/navbar.component';

function App() {
  return (
    <>
      <GlobalStyle />
      <NavbarComponent />
      <SpacerComponent />
      <DescriptionComponent />
      <ProjectsComponent />
      <ContactsComponent />
    </>

  );
}

export default App;
