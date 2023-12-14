import { memo } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Head from '../../components/head';
import PageLayout from '../../components/page-layout';
import Spinner from '../../components/spinner';
import UserProfileCard from '../../components/user-profile-card';
import LocaleSelect from '../../containers/locale-select';
import Navigation from '../../containers/navigation';
import UserPanel from '../../containers/user-panel';
import useSelector from '../../hooks/use-selector';
import useStore from '../../hooks/use-store';
import useTranslate from '../../hooks/use-translate';

function Profile() {
  const { t } = useTranslate();
  const { username } = useParams();
  console.log('🚀 => Profile => username:', username); // TODO: remove

  const store = useStore();

  const select = useSelector(state => ({
    user: state.user?.data,
  }));
  const fakeUser = {
    name: 'John',
    phone: '+7 999 999 99 99',
    email: 'wWJ5u@example.com',
  };

  const isUserAuth = Object.keys(select.user ?? fakeUser).length > 0;

  if (!isUserAuth) {
    return <Navigate to={'/login'} />;
  }

  return (
    <PageLayout>
      <UserPanel />
      <Head title={t('title')}>
        <LocaleSelect />
      </Head>
      <Navigation />
      <Spinner active={false}>
        <UserProfileCard user={select.user ?? fakeUser} title={t('user.profile')} t={t} />
      </Spinner>
    </PageLayout>
  );
}

export default memo(Profile);
