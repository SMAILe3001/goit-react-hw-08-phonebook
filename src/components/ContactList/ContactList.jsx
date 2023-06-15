import { useSelector, useDispatch } from 'react-redux';
import { Notify } from 'notiflix';

import { getContacts, removeContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import { List, Item, Button } from './ContactList.styled';
// import { useEffect } from 'react';
// import { getContactsServer } from 'components/api/servise';

export function ContactList() {
  const { contacts, isLoading, error } = useSelector(state => state.contacts);
  const contactList = useSelector(getContacts);
  const filter = useSelector(getFilter).trim();
  const dispatch = useDispatch();

  // useEffect(() => {
  // dispatch(getContactsServer());
  //   getContactsServer();
  //   console.log(getContactsServer());
  // }, [dispatch]);

  const deleteContact = (id, name) => {
    dispatch(removeContact(id));
    alarmdeleteContact(name);
  };

  const alarmdeleteContact = name => {
    Notify.info(`Contact ${name} delit.`);
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  console.log(contacts);
  console.log(isLoading);
  console.log(error);

  return (
    <List>
      {getVisibleContact().map(({ id, name, number }) => (
        <Item key={id}>
          <span>
            {name}: {number}
          </span>
          <Button type="button" onClick={() => deleteContact(id, name)}>
            delete
          </Button>
        </Item>
      ))}
    </List>
  );
}
