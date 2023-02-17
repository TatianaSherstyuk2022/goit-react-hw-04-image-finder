import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export function Modal({ data, closeModal }) {
  useEffect(() => {
    const onEscapePress = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onEscapePress);
    return () => {
      window.removeEventListener('keydown', onEscapePress);
    };
  }, []);

  const onOverlayClose = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const { largeImageURL } = data;

  return createPortal(
    <div className={s.overlay} onClick={onOverlayClose}>
      <div className={s.modal}>
        <img src={largeImageURL} alt="img" />
      </div>
    </div>,
    document.getElementById('modal')
  );
}

Modal.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
  }),
  closeModal: PropTypes.func,
};
