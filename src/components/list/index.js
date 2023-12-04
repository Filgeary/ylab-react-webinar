import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from '../../utils';
import Item from '../item';
import './style.css';

function List({ list, onAddItem, onRemoveItem, isCartMode, totalPrice }) {
  const cn = bem('List');

  return (
    <div className={cn()}>
      {list?.map(item => (
        <div
          key={item?.code}
          className={cn('item')}
        >
          <Item
            item={item}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        </div>
      ))}

      {isCartMode && list.length > 0 && (
        <div className={cn('total')}>
          <strong>Итого</strong>
          <strong>{formatPrice(totalPrice)}</strong>
        </div>
      )}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  isCartMode: PropTypes.bool,
  totalPrice: PropTypes.number,
};

export default React.memo(List);
