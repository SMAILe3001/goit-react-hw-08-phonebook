import { useDispatch } from 'react-redux';
import Notiflix from 'notiflix';
import { logIn } from 'redux/auth/operations';

import { Container } from 'components/Container';

import {
  Form,
  LabelContain,
  Label,
  LabelTitle,
  Input,
} from 'components/ContactForm/ContactForm.styled';
import { Button } from 'components/ContactListItem/ContactListItem.styled';

const LogIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    dispatch(
      logIn({
        email: data.get('email'),
        password: data.get('password'),
      })
    )
      .unwrap()
      .then(res => {
        Notiflix.Notify.success(`Hello, ${res.user.name}`);
      })
      .catch(error => {
        Notiflix.Notify.warning(error.message);
      });
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
