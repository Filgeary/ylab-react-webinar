import PropTypes from 'prop-types';
import React from 'react';
import Item from '../item';
import './style.css';

function List({ list }) {
  return (
    <div className='List'>
      {list.map(item => (
        <div
          key={item.code}
          className='List-item'
        >
          <Item item={item} />
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
};

export default React.memo(List);
