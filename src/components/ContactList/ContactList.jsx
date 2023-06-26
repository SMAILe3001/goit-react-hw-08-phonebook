import { useSelector } from 'react-redux';
import { getFilteredContacts } from 'redux/filter/filterSelectors';

import { ContactListItem } from 'components/ContactListItem';

import { List } from './ContactList.styled';

export function ContactList() {
  const contacts = useSelector(getFilteredContacts);

  return (
    <List>
      {contacts.map(contact => (
        <ContactListItem key={contact.id} {...contact} />
      ))}
    </List>
  );
}
