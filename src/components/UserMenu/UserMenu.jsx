import { NavLink } from 'react-router-dom';

import { Title } from 'components/Layout/Layout.staled';

const UserMenu = () => {
  return (
    <>
      <NavLink to="/register">
        <Title>Register</Title>
      </NavLink>
      <NavLink to="/login">
        <Title>Log In</Title>
      </NavLink>
    </>
  );
};

export default UserMenu;
