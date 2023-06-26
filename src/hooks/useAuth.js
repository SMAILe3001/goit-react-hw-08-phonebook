import { useSelector } from 'react-redux';
import { selectLogin, selectRefreshing } from 'redux/auth/authSelector';

export const useAuth = () => {
  const isLogin = useSelector(selectLogin);
  const isRefreshing = useSelector(selectRefreshing);

  return {
    isLogin,
    isRefreshing,
  };
};
