import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  handleToggleModal = () => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const { item } = this.props;
    const { webformatURL } = item;

    return (
      <li onClick={this.handleToggleModal}>
        <img src={webformatURL} alt="img" />
        {this.state.isOpenModal && <Modal data={this.props.info} />}
      </li>
    );
  }
}
