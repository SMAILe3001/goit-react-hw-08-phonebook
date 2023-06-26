import {
  Form,
  LabelContain,
  Label,
  LabelTitle,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { Container } from 'components/Container';
import Notiflix from 'notiflix';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const SingUpPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    const newUser = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
    };

    dispatch(register(newUser))
      .then(() => {
        Notiflix.Notify.success(`the user ${newUser.name} has been created`);
        dispatch(register(newUser));
      })
      .catch(error => Notiflix.Notify.warning(error.message));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
