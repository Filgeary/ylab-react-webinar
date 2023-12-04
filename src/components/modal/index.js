/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { cn as bem } from '@bem-react/classname';
import FocusTrap from 'focus-trap-react';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import Controls from '../controls';
import Portal from '../portal';
import './style.css';

function Modal({ title, isOpen, onClose, children }) {
  const cn = bem('Modal');
  const outsideRef = React.useRef(null);

  const handleOutsideClick = e => {
    if (e.target === outsideRef.current) {
      onClose();
    }
  };

  const handleEscapeKeyDown = evt => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  useEffect(() => {
    document.addEventListener('keydown', handleEscapeKeyDown);

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyDown);
    };
  });

  return isOpen ? (
    <Portal>
      <FocusTrap>
        <div
          ref={outsideRef}
          className={cn()}
          onClick={handleOutsideClick}
        >
          <div className={cn('content')}>
            <header className={cn('header')}>
              <h2 className={cn('title')}>{title}</h2>
              <Controls onClose={onClose} />
            </header>

            {children}
          </div>
        </div>
      </FocusTrap>
    </Portal>
  ) : null;
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default React.memo(Modal);
