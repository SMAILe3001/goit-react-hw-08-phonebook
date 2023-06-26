import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Container } from 'components/Container';
import { Filter } from 'components/Filter';
import { fetchAllContacts } from 'redux/contacts/operations';

const PhoneBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllContacts());
  }, [dispatch]);

  return (
    <Container>
      <div>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
};

export default PhoneBook;
