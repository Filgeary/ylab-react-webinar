import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import React from 'react';
import { COUNT_GOODS_PLURAL_FORMS } from '../../const';
import { formatPrice, plural } from '../../utils';
import Controls from '../controls';
import './style.css';

function CartInfo({ cart, totalPrice, onGoTo }) {
  const cn = bem('CartInfo');

  const amountOfUniqueItems = cart.length;
  // prettier-ignore
  const cartSummary = cart.length
    ? `${amountOfUniqueItems} ${plural(amountOfUniqueItems, COUNT_GOODS_PLURAL_FORMS)} / ${formatPrice(totalPrice)}`
    : 'пусто';

  return (
    <section className={cn()}>
      <h2 className='visually-hidden'>Текущая информация корзины</h2>

      <span className={cn('info')}>В корзине:</span>
      <strong className={cn('summary')}>{cartSummary}</strong>
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
  totalPrice: PropTypes.number.isRequired,
  onGoTo: PropTypes.func.isRequired,
};

export default React.memo(CartInfo);
