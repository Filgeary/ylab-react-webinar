import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { memo, useEffect, useState } from 'react';
import './style.css';

const LoginForm = ({ title, onSubmit, isSubmitting, error, isSuccess, t }) => {
  const cn = bem('LoginForm');
  const [formState, setFormState] = useState({
    username: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value.trim() });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(formState);
  };

  useEffect(() => {
    if (isSuccess) {
      setFormState({ username: '', password: '' });
    }
  }, [isSuccess]);

  return (
    <section className={cn()}>
      <h2 className={cn('title')}>{title}</h2>

      <form onSubmit={handleSubmit} className={cn('form')}>
        <div className={cn('field')}>
          <label htmlFor='username' className={cn('label')}>
            Логин
          </label>
          <input
            type='text'
            id='username'
            name='username'
            className={cn('input')}
            autoComplete='username'
            onChange={handleChange}
            value={formState.username}
            required
          />
        </div>

        <div className={cn('field')}>
          <label htmlFor='password' className={cn('label')}>
            Пароль
          </label>
          <input
            type='password'
            id='password'
            name='password'
            className={cn('input')}
            autoComplete='current-password'
            onChange={handleChange}
            value={formState.password}
            required
          />
        </div>

        {error && <div className={cn('error')}>{error.message}</div>}
        {isSuccess && <div className={cn('success')}>{t('user.successLogin')}</div>}

        <div className={cn('field')}>
          <button type='submit' className={cn('button')} disabled={isSubmitting}>
            {t('user.toLogin')}
          </button>
        </div>
      </form>
    </section>
  );
};

LoginForm.propTypes = {
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  isSuccess: PropTypes.bool.isRequired,
};

export default memo(LoginForm);
