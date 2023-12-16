import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../components/loader';
import { useAuth } from '../../hooks/use-auth';
import useTranslate from '../../hooks/use-translate';

function RequireAuth({ children }) {
  const { isUserAuth, isInitialAuth, error } = useAuth();
  const location = useLocation();
  const { t } = useTranslate();

  if (isInitialAuth && !error) {
    return <Loader title={t('user.loginInProgress')} />;
  }

  if (!isUserAuth || error) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
}

RequireAuth.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RequireAuth;
