import PropTypes from 'prop-types';
import React from 'react';
import './style.css';

function Controls({ onAddItem, onRemoveItem, onGoTo, onClose }) {
  return (
    <div className='Controls'>
      {onAddItem && <button onClick={() => onAddItem()}>Добавить</button>}
      {onRemoveItem && <button onClick={() => onRemoveItem()}>Удалить</button>}
      {onGoTo && (
        <button
          style={{ minWidth: '80px' }}
          onClick={() => onGoTo()}
        >
          Перейти
        </button>
      )}
      {onClose && <button onClick={() => onClose()}>Закрыть</button>}
    </div>
  );
}

Controls.propTypes = {
  onAddItem: PropTypes.func,
  onRemoveItem: PropTypes.func,
  onGoTo: PropTypes.func,
  onClose: PropTypes.func,
};

export default React.memo(Controls);
