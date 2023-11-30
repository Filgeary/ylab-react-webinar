import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

function Portal({ children }) {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return ReactDOM.createPortal(children, document.body);
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Portal;
