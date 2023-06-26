import { useSelector } from 'react-redux';

import { Container } from 'components/Container';

const Home = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <Container>
      <h2>Welcome to the phone book application</h2>
      {user?.name ? (
        <p>Helow {user.name}, now you can go to contacts</p>
      ) : (
        <p>to continue, register or login</p>
      )}
    </Container>
  );
};

export default Home;
