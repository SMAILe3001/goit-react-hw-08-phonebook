import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';
import { Notify } from 'notiflix';

import { getContactsThunk, removeContact } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

import { List, Item, Button } from './ContactList.styled';

export function ContactList() {
  const { contacts, isLoading, error } = useSelector(state => state.contacts);
  const filter = useSelector(getFilter).trim();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const deleteContact = (id, name) => {
    dispatch(removeContact(id));
    alarmdeleteContact(name);
  };

  const alarmdeleteContact = name => {
    Notify.info(`Contact ${name} delit.`);
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {error !== '' && <p>{error}</p>}
      {isLoading && <InfinitySpin width="200" color="#4fa94d" />}
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
    </>
  );
}
