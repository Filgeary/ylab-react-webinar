import { cn as bem } from '@bem-react/classname';
import { default as PropTypes, default as propTypes } from 'prop-types';
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useIntl } from '../../context/intl-context';
import { numberFormat } from '../../utils';
import './style.css';

function ItemBasket(props) {
  const { t } = useIntl();
  const cn = bem('ItemBasket');

  const callbacks = {
    onRemove: () => props.onRemove(props.item._id),
  };

  return (
    <div className={cn()}>
      <div className={cn('title')}>
        <Link
          to={`/product/${props.item._id}`}
          onClick={() => props.onCloseModal()}
        >
          {props.item.title}
        </Link>
      </div>
      <div className={cn('right')}>
        <div className={cn('cell')}>{numberFormat(props.item.price)} ₽</div>
        <div className={cn('cell')}>{numberFormat(props.item.amount || 0)} шт</div>
        <div className={cn('cell')}>
          <button onClick={callbacks.onRemove}>{t('Remove')}</button>
        </div>
      </div>
    </div>
  );
}

ItemBasket.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    price: PropTypes.number,
    amount: PropTypes.number,
  }).isRequired,
  onRemove: propTypes.func,
  onCloseModal: propTypes.func,
};

ItemBasket.defaultProps = {
  onRemove: () => {},
  onCloseModal: () => {},
};

export default memo(ItemBasket);
