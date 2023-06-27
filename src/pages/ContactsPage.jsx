import { Button } from 'components/Button';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Container } from 'components/Container';
import { Filter } from 'components/Filter';
import { useDispatch } from 'react-redux';
import { themeTogle } from 'redux/themeSlice';

const ContactsPage = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <Button onClick={() => dispatch(themeTogle())} text={'togle theme'} />
      </div>
      <div>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </Container>
  );
};

export default ContactsPage;
