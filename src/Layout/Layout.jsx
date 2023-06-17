import { Container } from 'components/Container';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Leyout = () => {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">
            <Container>
              <h1>Phonebook</h1>
            </Container>
          </NavLink>
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
