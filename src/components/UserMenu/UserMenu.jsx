import { Title } from 'components/Layout/Layout.staled';
import { NavLink } from 'react-router-dom';

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
