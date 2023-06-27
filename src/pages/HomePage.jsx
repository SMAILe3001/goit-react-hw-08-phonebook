import { useDispatch } from 'react-redux';

import { themeTogle } from 'redux/themeSlice';

import { Button } from 'components/Button';
import { Container } from 'components/Container';

const HomePage = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <div>
        <Button onClick={() => dispatch(themeTogle())} text={'togle theme'} />
      </div>
      <div>
        <h1>Welcome to the phonebook application</h1>
      </div>
    </Container>
  );
};

export default HomePage;
