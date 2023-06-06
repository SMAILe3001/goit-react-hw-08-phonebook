import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from '@emotion/react';

import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Button } from 'components/Button';
import { getTheme, themeTogle } from 'redux/themeSlice';
import { theme } from 'theme';

import { Container } from './App.styled';

export const App = () => {
  const dispatch = useDispatch();
  const activeTheme = useSelector(getTheme);
  
  return (
    <ThemeProvider theme={theme[activeTheme]}>
      <Container>
        <div>
          <Button onClick={() => dispatch(themeTogle())} text={'togle theme'} />
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
