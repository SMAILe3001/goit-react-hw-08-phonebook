import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/contacts/operations';

import { Item, Button } from './ContactListItem.styled';

export function ContactListItem({ name, number, id }) {
  const dispatch = useDispatch();

  return (
    <Item>
      <span>
        {name}: {number}
      </span>
      <Button type="button" onClick={() => dispatch(deleteContact(id))}>
        delete
      </Button>
    </Item>
  );
}
