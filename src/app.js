import PropTypes from 'prop-types';
import React from 'react';
import Head from './components/head';
import List from './components/list';
import PageLayout from './components/page-layout';

/**
 * Приложение
 * @param {object} store  Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;

  return (
    <PageLayout>
      <Head title='Магазин' />
      <List list={list} />
    </PageLayout>
  );
}

App.propTypes = {
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    setState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
