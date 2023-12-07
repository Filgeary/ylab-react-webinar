import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import { memo } from 'react';
import { useIntl } from '../../context/intl-context';
import { numberFormat } from '../../utils';
import './style.css';

function BasketTotal({ sum }) {
  const cn = bem('BasketTotal');
  const { t } = useIntl();

  return (
    <div className={cn()}>
      <span className={cn('cell')}>{t('Total')}</span>
      <span className={cn('cell')}> {numberFormat(sum)} ₽</span>
      <span className={cn('cell')}></span>
    </div>
  );
}

BasketTotal.propTypes = {
  sum: PropTypes.number,
};

BasketTotal.defaultProps = {
  sum: 0,
};

export default memo(BasketTotal);
