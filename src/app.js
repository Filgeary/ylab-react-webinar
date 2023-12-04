import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import CartInfo from './components/cart-info';
import CartModal from './components/cart-modal';
import Head from './components/head';
import List from './components/list';
import PageLayout from './components/page-layout';

/**
 * Приложение
 * @param {object} store  Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const list = store.getState().list;
  const cart = store.getState().cart;
  const total = store.getState().total;

  const callbacks = {
    handleAddItem: useCallback(code => store.addItemToCart(code), [store]),
    handleRemoveItem: useCallback(code => store.removeItemFromCart(code), [store]),
    handleOpenModal: useCallback(() => setIsOpenModal(true), []),
    handleCloseModal: useCallback(() => setIsOpenModal(false), []),
  };

  return (
    <PageLayout>
      <Head title='Магазин' />
      <CartInfo
        cart={cart}
        totalPrice={total}
        onGoTo={callbacks.handleOpenModal}
      />
      <List
        list={list}
        onAddItem={callbacks.handleAddItem}
      />

      {isOpenModal && (
        <CartModal
          open={isOpenModal}
          cartData={cart}
          totalPrice={total}
          onCloseModal={callbacks.handleCloseModal}
          onRemoveItem={callbacks.handleRemoveItem}
        />
      )}
    </PageLayout>
  );
}

App.propTypes = {
  store: PropTypes.shape({
    getState: PropTypes.func.isRequired,
    setState: PropTypes.func.isRequired,
    subscribe: PropTypes.func.isRequired,
    addItemToCart: PropTypes.func.isRequired,
    removeItemFromCart: PropTypes.func.isRequired,
  }).isRequired,
};

export default App;
