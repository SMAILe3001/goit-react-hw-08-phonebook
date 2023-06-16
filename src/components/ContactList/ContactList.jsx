import { useSelector, useDispatch } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';
import { Notify } from 'notiflix';

import { removeContact } from 'redux/contacts';
import { getFilter } from 'redux/filterSlice';

import { List, Item, Button } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contactsApi';

export function ContactList() {
  const { data: contacts = [], isLoading, error } = useGetContactsQuery();
  const filter = useSelector(getFilter).trim();
  const dispatch = useDispatch();

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
      {isLoading && <InfinitySpin width="500" color="#4fa94d" />}
      <List>
        {getVisibleContact().map(({ id, name, phone }) => (
          <Item key={id}>
            <span>
              {name}: {phone}
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
