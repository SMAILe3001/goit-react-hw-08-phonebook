import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import { InfinitySpin } from 'react-loader-spinner';

import UserMenu from 'components/UserMenu/UserMenu';
import { tokenUser } from 'redux/tokenSlice';
import UserInfo from 'components/UserInfo/UserInfo';

import { Container } from 'components/Container';
import { Div, Nav, Title } from './Layout.staled';
import { TogleTheme } from 'components/TogleTheme/TogleTheme';

const Leyout = () => {
  const authUser = useSelector(tokenUser);

  return (
    <>
      <header>
        <Container>
          <Div>
            <Nav>
              <NavLink to="/">
                <Title>Home</Title>
              </NavLink>
              <NavLink to="/contacts">
                <Title>Contacts</Title>
              </NavLink>
            </Nav>
            <TogleTheme />
            {authUser ? <UserInfo /> : <UserMenu />}
          </Div>
        </Container>
      </header>
      <main>
        <Suspense
          fallback={
            <Container>
              <InfinitySpin width="1000" color="#4fa94d" />
            </Container>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <footer>
        <Container>
          <Title>Copyright © 2023.</Title>
        </Container>
      </footer>
    </>
  );
};

export default Leyout;
