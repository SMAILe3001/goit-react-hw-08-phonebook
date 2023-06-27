import { useDispatch } from 'react-redux';

import { usePostRegisterUserMutation } from 'redux/authApi';
import { newTokenUser } from 'redux/tokenSlice';

import {
  Form,
  LabelContain,
  Label,
  LabelTitle,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { Container } from 'components/Container';

const SingUpPage = () => {
  const dispatch = useDispatch();
  const [create] = usePostRegisterUserMutation();

  const sabmitForm = e => {
    e.preventDefault();

    const form = e.currentTarget.elements;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };
    registerUser(formData);
  };

  const registerUser = async formData => {
    const { data } = await create(formData);
    dispatch(newTokenUser(data.token));
  };

  return (
    <Container>
      <Form onSubmit={sabmitForm}>
        <LabelContain>
          <Label>
            <LabelTitle>Name</LabelTitle>
            <Input type="text" name="name" />
          </Label>
          <Label>
            <LabelTitle>Email</LabelTitle>
            <Input type="email" name="email" />
          </Label>
          <Label>
            <LabelTitle>Password</LabelTitle>
            <Input type="password" name="password" />
          </Label>
          <Button type="submit">Register</Button>
        </LabelContain>
      </Form>
    </Container>
  );
};

export default SingUpPage;
