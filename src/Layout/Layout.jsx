import { Container } from 'components/Container';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Leyout = () => {
  return (
    <>
      <header>
        <Container>
          <h1>Phonebook</h1>
        </Container>
        <nav>
          <Container>
            <NavLink to="/">
              <h2>Contacts</h2>
            </NavLink>
            <NavLink to="/register">
              <h2>SingUp</h2>
            </NavLink>
            <NavLink to="/login">
              <h2>LogIn</h2>
            </NavLink>
          </Container>
        </nav>
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
