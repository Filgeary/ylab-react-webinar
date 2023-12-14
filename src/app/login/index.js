import { memo } from 'react';
import Head from '../../components/head';
import LoginForm from '../../components/login-form';
import PageLayout from '../../components/page-layout';
import LocaleSelect from '../../containers/locale-select';
import Navigation from '../../containers/navigation';
import UserPanel from '../../containers/user-panel';
import useStore from '../../hooks/use-store';
import useTranslate from '../../hooks/use-translate';

function Login() {
  const store = useStore();

  const { t } = useTranslate();

  return (
    <PageLayout>
      <UserPanel />
      <Head title={t('title')}>
        <LocaleSelect />
      </Head>
      <Navigation />
      <LoginForm
        t={t}
        title={t('user.login')}
        onSubmit={console.log}
        isSubmitting={false}
        isSuccess={false}
        error={{ message: 'Текст ошибки от сервера' }}
      />
    </PageLayout>
  );
}

export default memo(Login);
