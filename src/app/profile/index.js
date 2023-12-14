import { memo } from 'react';
import Head from '../../components/head';
import PageLayout from '../../components/page-layout';
import Spinner from '../../components/spinner';
import UserProfileCard from '../../components/user-profile-card';
import LocaleSelect from '../../containers/locale-select';
import Navigation from '../../containers/navigation';
import UserPanel from '../../containers/user-panel';
import { useAuth } from '../../hooks/use-auth';
import useTranslate from '../../hooks/use-translate';

function Profile() {
  const { user, isPending } = useAuth();
  const { t } = useTranslate();

  return (
    <PageLayout>
      <UserPanel />
      <Head title={t('title')}>
        <LocaleSelect />
      </Head>
      <Navigation />

      <Spinner active={isPending}>
        <UserProfileCard user={user} title={t('user.profile')} t={t} />
      </Spinner>
    </PageLayout>
  );
}

export default memo(Profile);
