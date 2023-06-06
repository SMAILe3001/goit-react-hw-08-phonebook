import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { addContact } from 'redux/contactsSlice';

import {
  Form,
  LabelContain,
  Label,
  Button,
  LabelTitle,
  Input,
} from './ContactForm.styled';

export function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const addContactPhonebook = e => {
    e.preventDefault();

    dispatch(addContact({ name, number, id: nanoid() }));
    alarmAddContact(name);

    setName('');
    setNumber('');
  };

  const alarmAddContact = name => {
    Notify.success(`Contact ${name} add.`);
  };

  const handelInputChange = e => {
    if (e.currentTarget.name === 'name') setName(e.currentTarget.value);
    if (e.currentTarget.name === 'number') setNumber(e.currentTarget.value);
  };

  return (
    <Form onSubmit={addContactPhonebook}>
      <LabelContain>
        <Label>
          <LabelTitle>Name</LabelTitle>
          <Input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handelInputChange}
          />
        </Label>
        <Label>
          <LabelTitle>Phonebook</LabelTitle>
          <Input
            type="tel"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handelInputChange}
          />
        </Label>
      </LabelContain>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
