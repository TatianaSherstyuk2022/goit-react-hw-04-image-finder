import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import s from './Modal.module.css';

export class Modal extends Component {
  onEscapePress = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscapePress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapePress);
  }

  onOverlayClose = e => {
    if (e.currentTarget !== e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL } = this.props.data;

    return createPortal(
      <div className={s.overlay} onClick={this.onOverlayClose}>
        <div className={s.modal}>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}

Modal.propTypes = {
  data: PropTypes.object,
  closeModal: PropTypes.func,
};
