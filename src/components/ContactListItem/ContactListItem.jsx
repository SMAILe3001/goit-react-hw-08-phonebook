import { Item, Button } from './ContactListItem.styled';
import { useDeleteContactsMutation } from 'redux/contactsApi';
import { Notify } from 'notiflix';

import { ProgressBar } from 'react-loader-spinner';

export function ContactListItem({ name, phone, id }) {
  const [deleteContactServer, { isLoading: isLoadingDelet }] =
    useDeleteContactsMutation();

  const handelClick = async (id, name) => {
    await deleteContactServer(id);
    alarmdeleteContact(name);
  };

  const alarmdeleteContact = name => {
    Notify.info(`Contact ${name} delit.`);
  };

  return (
    <Item>
      <span>
        {name}: {phone}
      </span>
      <Button
        type="button"
        onClick={() => handelClick(id, name)}
        disabled={isLoadingDelet}
      >
        {isLoadingDelet ? (
          <ProgressBar
            height="20"
            width="50"
            borderColor="#F4442E"
            barColor="#51E5FF"
          />
        ) : (
          'delete'
        )}
      </Button>
    </Item>
  );
}
