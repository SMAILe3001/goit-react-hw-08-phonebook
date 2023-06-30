import { Title } from 'components/Layout/Layout.staled';
import { Div } from 'components/UserInfo/UserInfo.styled';
import { NavLink } from 'react-router-dom';

const UserMenu = () => {
  return (
    <Div>
      <NavLink to="/register">
        <Title>Register</Title>
      </NavLink>
      <NavLink to="/login">
        <Title>Log In</Title>
      </NavLink>
    </Div>
  );
};

export default UserMenu;
