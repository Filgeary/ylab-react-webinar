import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/use-auth';
import useTranslate from '../../hooks/use-translate';
import './style.css';

const UserPanel = () => {
  const { isUserAuth, user, logout } = useAuth();
  const { t } = useTranslate();
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className='UserPanel'>
      {isUserAuth && (
        <Link to={'/profile'} className='UserPanel-link'>
          {user.profile?.name}
        </Link>
      )}

      {isUserAuth && <button onClick={handleLogout}>{t('user.logout')}</button>}
      {!isUserAuth && <button onClick={handleLogin}>{t('user.login')}</button>}
    </div>
  );
};

export default React.memo(UserPanel);
