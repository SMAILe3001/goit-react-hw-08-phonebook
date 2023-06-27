import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';

import UserMenu from 'components/UserMenu/UserMenu';
import { tokenUser } from 'redux/tokenSlice';
import UserInfo from 'components/UserInfo/UserInfo';

import { Container } from 'components/Container';
import { Nav, Title } from './Layout.staled';

const Leyout = () => {
  const authUser = useSelector(tokenUser);

  return (
    <>
      <header>
        <Container>
          <Nav>
            <NavLink to="/">
              <Title>Home</Title>
            </NavLink>
            <NavLink to="/contacts">
              <Title>Contacts</Title>
            </NavLink>
            {authUser ? <UserInfo /> : <UserMenu />}
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
