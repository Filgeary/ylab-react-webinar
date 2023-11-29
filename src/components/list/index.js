import PropTypes from 'prop-types';
import React from 'react';
import Item from '../item';
import './style.css';

function List({ list, onAddItem, onRemoveItem }) {
  return (
    <div className='List'>
      {list.map(item => (
        <div
          key={item.code}
          className='List-item'
        >
          <Item
            item={item}
            onAddItem={onAddItem}
            onRemoveItem={onRemoveItem}
          />
        </div>
      ))}
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
};

export default React.memo(List);
