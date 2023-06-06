import { useEffect, useState } from 'react';
import { ThemeProvider } from '@emotion/react';

import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Button } from 'components/Button';
import { DARK, LIGHT } from 'constants/theme';
import { theme } from 'theme';

import { Container } from './App.styled';

export const App = () => {
  const [activeTheme, setActiveTheme] = useState(
    () => JSON.parse(window.localStorage.getItem('theme')) ?? LIGHT
  );

  const togleTheme = () => {
    setActiveTheme(activeTheme === LIGHT ? DARK : LIGHT);
  };

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(activeTheme));
  }, [activeTheme]);

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Container>
        <div>
          <Button onClick={togleTheme} text={'togle theme'} />
        </div>
        <div>
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
      </Container>
    </ThemeProvider>
  );
};
