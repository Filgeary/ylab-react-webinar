import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from '../../utils';
import Controls from '../controls';
import './style.css';

function Item(props) {
  const cn = bem('Item');

  return (
    <div className={cn()}>
      <div className={cn('code')}>{props.item.code}</div>
      <div className={cn('title')}>{props.item.title}</div>
      <span className={cn('price')}>{formatPrice(props.item.price)}</span>
      {props.isCartMode && <span className={cn('quantity')}>{props.item.quantity} шт</span>}

      {
        <Controls
          onAddItem={props.onAddItem && (() => props.onAddItem(props.item))}
          onRemoveItem={props.onRemoveItem && (() => props.onRemoveItem(props.item.code))}
        />
      }
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number,
  }).isRequired,
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  isCartMode: PropTypes.bool,
};

export default React.memo(Item);
