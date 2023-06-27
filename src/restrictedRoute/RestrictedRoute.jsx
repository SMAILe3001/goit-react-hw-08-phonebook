import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function RestrictedRoute({ component: Component, redirectTo }) {
  const token = useSelector(state => state.token.token);
  const isLoggedIn = token !== '';
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
}
