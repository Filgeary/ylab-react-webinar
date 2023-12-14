import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';

function RequireAuth({ children }) {
  const { isUserAuth } = useAuth();
  const location = useLocation();

  if (!isUserAuth) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;
