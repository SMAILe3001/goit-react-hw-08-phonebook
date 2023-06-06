import { useDispatch } from 'react-redux';

import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Button } from 'components/Button';

import { Container } from './App.styled';
import { themeTogle } from 'redux/themeSlice';

export const App = () => {
  const dispatch = useDispatch();
  return (
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
  );
};
