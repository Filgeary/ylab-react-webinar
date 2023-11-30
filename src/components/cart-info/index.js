import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import React from 'react';
import { COUNT_GOODS_PLURAL_FORMS } from '../../const';
import { formatPrice, groupBy, plural } from '../../utils';
import Controls from '../controls';
import './style.css';

function CartInfo({ cart, onGoTo }) {
  const cn = bem('CartInfo');

  const amountOfUniqueItems = Object.keys(groupBy(cart, 'code')).length;
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  // prettier-ignore
  const cartSummary = cart.length
    ? `${amountOfUniqueItems} ${plural(amountOfUniqueItems, COUNT_GOODS_PLURAL_FORMS)} / ${formatPrice(totalPrice)}`
    : 'пусто';

  return (
    <section className={cn()}>
      <h2 className='visually-hidden'>Текущая информация корзины</h2>

      <span>В корзине:</span>
      <strong>{cartSummary}</strong>
      <Controls onGoTo={onGoTo} />
    </section>
  );
}

CartInfo.propTypes = {
  cart: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }),
  ).isRequired,
  onGoTo: PropTypes.func.isRequired,
};

export default React.memo(CartInfo);
