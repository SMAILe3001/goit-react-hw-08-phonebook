import { Container } from 'components/Container';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Nav, Title } from './Layout.staled';
import UserMenu from 'components/UserMenu/UserMenu';

const Leyout = () => {
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
            <UserMenu />
          </Nav>
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
