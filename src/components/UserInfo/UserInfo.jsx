import { useDispatch } from 'react-redux';

import { newTokenUser } from 'redux/tokenSlice';
import { useGetAuthUserQuery, usePostLogOutMutation } from 'redux/authApi';

import { Title } from 'components/Layout/Layout.staled';
import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { Div } from './UserInfo.styled';

const UserInfo = () => {
  const dispatch = useDispatch();
  const [logUotUser] = usePostLogOutMutation();

  const { data } = useGetAuthUserQuery();

  const handelClick = () => {
    logUotUser();
    dispatch(newTokenUser(''));
  };

  return (
    <Div>
      <Title>{data?.name}</Title>
      <Button type="button" onClick={() => handelClick()}>
        Log Out
      </Button>
    </Div>
  );
};

export default UserInfo;
