import { memo } from 'react';
import Head from '../../components/head';
import LoginForm from '../../components/login-form';
import PageLayout from '../../components/page-layout';
import LocaleSelect from '../../containers/locale-select';
import Navigation from '../../containers/navigation';
import UserPanel from '../../containers/user-panel';
import { useAuth } from '../../hooks/use-auth';
import useTranslate from '../../hooks/use-translate';

function Login() {
  const { isUserAuth, login, isPending, error, isSuccess } = useAuth();
  const { t } = useTranslate();

  return (
    <PageLayout>
      <UserPanel />
      <Head title={t('title')}>
        <LocaleSelect />
      </Head>
      <Navigation />

      {!isUserAuth ? (
        <LoginForm
          t={t}
          title={t('user.login')}
          onSubmit={login}
          isSubmitting={isPending}
          isSuccess={isSuccess}
          error={error}
        />
      ) : (
        <h2 style={{ textAlign: 'center' }}>✅ {t('user.alreadyAuth')}</h2>
      )}
    </PageLayout>
  );
}

export default memo(Login);
