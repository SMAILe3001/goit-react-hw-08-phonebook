import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { getContacts, removeContact } from 'redux/contactsSlice';

import { List, Item, Button } from './ContactList.styled';
import { getFilter } from 'redux/filterSlice';

export function ContactList() {
  const contactList = useSelector(getContacts);
  const filter = useSelector(getFilter).trim();
  const dispatch = useDispatch();

  const deleteContact = (id, name) => {
    dispatch(removeContact(id));

    Notify.info(`Contact ${name} delit.`);
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <List>
      {getVisibleContact().map(contact => (
        <Item key={contact.id}>
          <span>
            {contact.name}: {contact.number}
          </span>
          <Button
            type="button"
            onClick={() => deleteContact(contact.id, contact.name)}
          >
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
}
