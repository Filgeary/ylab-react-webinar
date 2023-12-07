import PropTypes from 'prop-types';
import { memo } from 'react';
import { useIntl } from '../../context/intl-context';
import './style.css';

function Controls({ onAdd }) {
  const { t } = useIntl();

  return (
    <div className='Controls'>
      <button onClick={() => onAdd()}>{t('Add')}</button>
    </div>
  );
}

Controls.propTypes = {
  onAdd: PropTypes.func,
};

Controls.defaultProps = {
  onAdd: () => {},
};

export default memo(Controls);
