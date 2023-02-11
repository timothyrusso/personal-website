import React from 'react';
import { GlobalStyle } from './global.style';
import { Title } from './components/title/title.component';
import { Spacer } from './components/spacer/spacer.component';
import { Description } from './components/description/description.component';
import { Projects } from './components/projects/projects.component';
import { Contacts } from './components/contacts/contacts.component';

function App() {
  return (
    <>
      <GlobalStyle />
      <Title />
      <Spacer />
      <Description />
      <Projects />
      <Contacts />
    </>

  );
}

export default App;
