import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/operations';

import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { Div } from './UserInfo.staled';

export const UserInfo = () => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };

  return (
    <Div>
      <h3>Helow "{user.name}"</h3>
      <Button type="button" onClick={handleLogout}>
        Log Out
      </Button>
    </Div>
  );
};
