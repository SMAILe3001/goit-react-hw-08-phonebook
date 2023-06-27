import { Button } from 'components/ContactListItem/ContactListItem.styled';
import { Title } from 'components/Layout/Layout.staled';
import { useDispatch } from 'react-redux';
import { useGetAuthUserQuery, usePostLogOutMutation } from 'redux/contactsApi';
import { newTokenUser } from 'redux/tokenSlice';

const UserInfo = () => {
  const dispatch = useDispatch();
  const [logUotUser] = usePostLogOutMutation();

  const { data } = useGetAuthUserQuery();

  const handelClick = () => {
    logUotUser();
    dispatch(newTokenUser(''));
  };

  return (
    <>
      <Title>{data?.name}</Title>
      <Button type="button" onClick={() => handelClick()}>
        Log Out
      </Button>
    </>
  );
};

export default UserInfo;
