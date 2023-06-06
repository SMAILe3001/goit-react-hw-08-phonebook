import { useEffect, useState } from 'react';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ThemeProvider } from '@emotion/react';

import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Button } from 'components/Button';
import { DARK, LIGHT } from 'constants/theme';
import { theme } from 'theme';
import contactListDemo from '../../data/contactsList';

import { Container } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );
  const [activeTheme, setActiveTheme] = useState(
    () => JSON.parse(window.localStorage.getItem('theme')) ?? LIGHT
  );

  const addDemoContact = () => {
    setContacts(() => [...contactListDemo]);
  };

  const togleTheme = () => {
    setActiveTheme(activeTheme === LIGHT ? DARK : LIGHT);
  };

  // const alarmDuplicatioContact = name => {
  //   Notify.warning(`${name} is already in contacts.`);
  // };

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(activeTheme));
  }, [activeTheme]);

  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Container>
        <div>
          <Button onClick={addDemoContact} text={'demo contacts'} />
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
