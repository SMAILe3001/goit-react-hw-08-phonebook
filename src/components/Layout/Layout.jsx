import { Container } from 'components/Container';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Nav, Title } from './Layout.staled';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { UserInfo } from 'components/UserInfo/UserInfo';

const Leyout = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <>
      <header>
        <Container>
          <Nav>
            <NavLink to="/">
              <Title>Phonebook</Title>
            </NavLink>
            <NavLink to="/contacts">
              <Title>Contacts</Title>
            </NavLink>
          </Nav>

          {user?.name ? <UserInfo /> : <UserMenu />}
        </Container>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Leyout;
