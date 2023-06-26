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
import { logIn } from 'redux/auth/operations';

const LogIn = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
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
