import {
  Form,
  LabelContain,
  Label,
  LabelTitle,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { Container } from 'components/Container';
import { usePostRegisterUserMutation } from 'redux/contactsApi';

const SingUpPage = () => {
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

  const registerUser = async data => {
    await create({ ...data });
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
