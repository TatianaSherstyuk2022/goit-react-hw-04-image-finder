import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

export class Modal extends Component {
  onEscapePress = e => {
    console.log(e.code === 'Escape');
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

  render() {
    const { largeImageURL } = this.props.data;
    console.log(largeImageURL);

    return createPortal(
      <div>
        <div>
          <img src={largeImageURL} alt="img" />
        </div>
      </div>,
      document.getElementById('modal')
    );
  }
}

Modal.propTypes = {
  image: PropTypes.object,
  onClose: PropTypes.func,
};