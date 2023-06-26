import { useAuth } from 'hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo }) => {
  const { isLogin } = useAuth();

  return !isLogin ? <Navigate to={redirectTo} /> : Component;
};
