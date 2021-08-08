import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ children, onClose }) => {
  // Вешает слушатели (mount)
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    // Убирает слушатети (unmount)
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  // Наблюдает на Escape и закрывает модалку
  const handleKeyDown = event => {
    if (event.code === 'Escape') {
      onClose();
    }
  };

  // Наблюдает за бекдропом и закрывает модалку
  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    modalRoot,
  );
};

Modal.defaultProps = {
  children: null,
};

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default Modal;