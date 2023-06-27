import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Container } from 'components/Container';
import { Filter } from 'components/Filter';

const ContactsPage = () => {
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

export default ContactsPage;
