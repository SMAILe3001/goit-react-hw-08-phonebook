import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { removeContact } from 'redux/contactsSlice';

import { List, Item, Button } from './ContactList.styled';

export function ContactList() {
  const contactList = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter).trim();
  const dispatch = useDispatch();

  const alarmDeleteContact = (id, name) => {
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
            onClick={() => alarmDeleteContact(contact.id, contact.name)}
          >
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
}
