import PropTypes from 'prop-types';
import React from 'react';
import CartInfo from './components/cart-info';
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
  const cart = store.getState().cart;

  const handleAddItem = item => {
    store.addItemToCart(item);
  };

  // TODO: make handleRemoveItem
  // const handleRemoveItem = code => {
  //   console.log('handleRemoveItem', code);
  // };

  return (
    <PageLayout>
      <Head title='Магазин' />
      <CartInfo cart={cart} />
      <List
        list={list}
        onAddItem={handleAddItem}
      />
    </PageLayout>
  );
}

App.propTypes = {
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    setState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    addItemToCart: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
