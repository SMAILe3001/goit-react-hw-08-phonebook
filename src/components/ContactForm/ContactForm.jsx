import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addContact } from '../../redux/contacts/operations';

import {
  Form,
  LabelContain,
  Label,
  Button,
  LabelTitle,
  Input,
} from './ContactForm.styled';

export function ContactForm() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: '',
    number: '',
  });

  function handleInputChange(event) {
    const { name, value } = event.currentTarget;
    setState(state => ({ ...state, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addContact(state));
    setState({ name: '', number: '' });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <LabelContain>
        <Label>
          <LabelTitle>Name</LabelTitle>
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={state.name}
            onChange={handleInputChange}
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
            value={state.number}
            onChange={handleInputChange}
          />
        </Label>
      </LabelContain>
      <Button type="submit">Add contact</Button>
    </Form>
  );
}
