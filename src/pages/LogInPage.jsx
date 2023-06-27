import { useDispatch } from 'react-redux';

import { usePostLoginUserMutation } from 'redux/contactsApi';
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

const LogInPage = () => {
  const dispatch = useDispatch();
  const [create] = usePostLoginUserMutation();

  const sabmitForm = e => {
    e.preventDefault();

    const form = e.currentTarget.elements;
    const formData = {
      email: form.email.value,
      password: form.password.value,
    };

    logInUser(formData);
  };

  const logInUser = async formData => {
    const { data } = await create(formData);
    dispatch(newTokenUser(data.token));
  };

  return (
    <Container>
      <Form onSubmit={sabmitForm}>
        <LabelContain>
          <Label>
            <LabelTitle>Email</LabelTitle>
            <Input type="email" name="email" />
          </Label>
          <Label>
            <LabelTitle>Password</LabelTitle>
            <Input type="password" name="password" />
          </Label>
          <Button type="submit">LogIn</Button>
        </LabelContain>
      </Form>
    </Container>
  );
};

export default LogInPage;
