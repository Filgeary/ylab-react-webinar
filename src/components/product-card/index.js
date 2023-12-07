import { cn as bem } from '@bem-react/classname';
import PropTypes from 'prop-types';
import React from 'react';
import { numberFormat } from '../../utils';
import './style.css';

const ProductCard = ({ item, onAddProduct }) => {
  const cn = bem('ProductCard');
  const { _id, description, price, madeIn, edition, category } = item ?? {};
  const { title: madeInTitle, code } = madeIn ?? {};
  const { title: categoryTitle } = category ?? {};

  return (
    <article className={cn()}>
      <p>{description}</p>
      <p>
        Страна производитель:{' '}
        <strong>
          {madeInTitle} ({code})
        </strong>
      </p>
      <p>
        Категория: <strong>{categoryTitle}</strong>
      </p>
      <p>
        Год выпуска: <strong>{edition}</strong>
      </p>
      <p className={cn('price')}>
        <strong>Цена: {numberFormat(price)} ₽</strong>
      </p>

      <button
        className={cn('button')}
        onClick={() => onAddProduct(_id)}
      >
        Добавить
      </button>
    </article>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired,
  onAddProduct: PropTypes.func.isRequired,
};

export default React.memo(ProductCard);
