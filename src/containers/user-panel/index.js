import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useSelector from '../../hooks/use-selector';
import useStore from '../../hooks/use-store';
import useTranslate from '../../hooks/use-translate';
import './style.css';

const UserPanel = () => {
  const { t } = useTranslate();
  const navigate = useNavigate();
  const store = useStore();

  const select = useSelector(state => ({
    user: state.user?.data,
  }));

  const handleLogin = () => {
    console.log('handleLogin');
    navigate('/login');
  };

  const handleLogout = () => {
    console.log('handleLogout');
  };

  const { user = {} } = select;
  const isUserAuth = Object.keys(user).length > 0;

  return (
    <div className='UserPanel'>
      {isUserAuth && (
        <Link to={`/profile/${user.username}`} className='UserPanel-link'>
          {user.username}
        </Link>
      )}

      {isUserAuth && <button onClick={handleLogout}>{t('user.logout')}</button>}
      {!isUserAuth && <button onClick={handleLogin}>{t('user.login')}</button>}
    </div>
  );
};

export default React.memo(UserPanel);
