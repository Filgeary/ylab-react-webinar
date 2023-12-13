import { memo } from 'react';
import Head from '../../components/head';
import LoginForm from '../../components/login-form';
import PageLayout from '../../components/page-layout';
import Spinner from '../../components/spinner';
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
      <Spinner active={false}>
        <LoginForm
          title={t('user.login')}
          onSubmit={console.log}
          t={t}
          error={{ message: 'Текст ошибки от сервера' }}
        />
      </Spinner>
    </PageLayout>
  );
}

export default memo(Login);
