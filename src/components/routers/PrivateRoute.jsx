import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsAuth } from '../../redux/slices/authSlice/auth';

const PrivateRoute = ({ children }) => {
  const isAuth = useSelector(selectIsAuth);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
