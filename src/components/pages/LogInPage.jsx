import {
  Form,
  LabelContain,
  Label,
  LabelTitle,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { Container } from 'components/Container';
import { usePostLoginUserMutation } from 'redux/contactsApi';

const LogIn = () => {
  const [create] = usePostLoginUserMutation();

  const sabmitForm = e => {
    e.preventDefault();

    const form = e.currentTarget.elements;
    const formData = {
      email: form.email.value,
      password: form.password.value,
    };
    registerUser(formData);
  };

  const registerUser = async data => {
    await create({ ...data }).then(({ data }) => {
      console.log(data);
    });
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

export default LogIn;
