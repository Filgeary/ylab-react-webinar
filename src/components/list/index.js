import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice, groupBy } from '../../utils';
import Item from '../item';
import './style.css';

function List({ list, onAddItem, onRemoveItem, isCartMode }) {
  const cn = bem('List');
  let visibleList;

  if (isCartMode) {
    visibleList = Object.entries(groupBy(list, 'code')).map(([code, items]) => ({
      code: Number(code),
      title: items[0].title,
      price: items[0].price,
      quantity: items.length,
    }));
  } else {
    visibleList = list;
  }

  return (
    <div className={cn()}>
      {visibleList?.map(item => (
        <div
          key={item.code}
          className={cn('item')}
        >
          <Item
            item={item}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
            isCartMode={isCartMode}
          />
        </div>
      ))}

      {isCartMode && visibleList.length > 0 && (
        <div className={cn('total')}>
          <strong>Итого</strong>
          <strong>
            {formatPrice(visibleList.reduce((acc, item) => acc + item.price * item.quantity, 0))}
          </strong>
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
};

export default React.memo(List);
