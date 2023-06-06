import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { Notify } from 'notiflix';

import { addContact, getContacts } from 'redux/contactsSlice';

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

  const handelInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const contactList = useSelector(getContacts);
  const dispatch = useDispatch();

  const sabmitForm = e => {
    e.preventDefault();

    const normalizedFilter = name.toLowerCase();
    const contactСheck = contactList.every(
      contact => contact.name.toLowerCase() !== normalizedFilter
    );

    contactСheck ? addContactPhonebook() : alarmDuplicatioContact(name);

    setName('');
    setNumber('');
  };

  const addContactPhonebook = () => {
    dispatch(addContact({ name, number, id: nanoid() }));
    alarmAddContact(name);
  };

  const alarmAddContact = name => {
    Notify.success(`Contact ${name} add.`);
  };

  const alarmDuplicatioContact = name => {
    Notify.warning(`${name} is already in contacts.`);
  };

  return (
    <Form onSubmit={sabmitForm}>
      <LabelContain>
        <Label>
          <LabelTitle>Name</LabelTitle>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
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
