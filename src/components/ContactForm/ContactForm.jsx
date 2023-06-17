import { useState } from 'react';
import { Notify } from 'notiflix';

import {
  useGetContactsQuery,
  usePostContactsMutation,
} from 'redux/contactsApi';

import {
  Form,
  LabelContain,
  Label,
  Button,
  LabelTitle,
  Input,
} from './ContactForm.styled';

export function ContactForm() {
  const [create] = usePostContactsMutation();
  const { data: contactList = [] } = useGetContactsQuery();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handelInputChange = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
  };

  const sabmitForm = e => {
    e.preventDefault();

    const normalizedFilter = name.toLowerCase();
    const contactСheck = contactList.every(
      contact => contact.name.toLowerCase() !== normalizedFilter
    );

    contactСheck ? addContactPhonebook() : alarmDuplicatioContact(name);

    setName('');
    setPhone('');
  };

  const addContactPhonebook = async () => {
    await create({ name, phone });
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={phone}
            onChange={handelInputChange}
          />
        </Label>
      </LabelContain>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
