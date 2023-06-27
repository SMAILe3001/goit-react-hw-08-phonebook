import { useSelector } from 'react-redux';
import { InfinitySpin } from 'react-loader-spinner';

import { getFilter } from 'redux/filterSlice';
import { useGetContactsQuery } from 'redux/contactsApi';
import { ContactListItem } from 'components/ContactListItem';

import { List } from './ContactList.styled';

export function ContactList() {
  const { data: contacts = [], isLoading, error } = useGetContactsQuery();
  const filter = useSelector(getFilter).trim();

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <>
      {error !== '' && <p>{error?.data?.message}</p>}
      {isLoading && <InfinitySpin width="500" color="#4fa94d" />}
      <List>
        {getVisibleContact().map(contact => (
          <ContactListItem key={contact.id} {...contact} />
        ))}
      </List>
    </>
  );
}
