import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import React from 'react';
import List from '../list';
import Modal from '../modal';
import './style.css';

function CartModal({ open, cartData, totalPrice, onCloseModal, onRemoveItem }) {
  const cn = bem('CartModal');

  return (
    <Modal
      title='Корзина'
      isOpen={open}
      onClose={onCloseModal}
    >
      <div className={cn('info')}>
        <p className={cn('description')}>{!cartData.length ? 'Корзина пуста' : ''}</p>
      </div>

      <List
        list={cartData}
        totalPrice={totalPrice}
        onRemoveItem={onRemoveItem}
        isCartMode={true}
      />
    </Modal>
  );
}

CartModal.propTypes = {
  open: PropTypes.bool.isRequired,
  cartData: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  totalPrice: PropTypes.number.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default React.memo(CartModal);
