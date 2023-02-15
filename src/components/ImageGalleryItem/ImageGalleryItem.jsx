import React, { Component } from 'react';
import { Modal } from 'components/Modal/Modal';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css'

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
      <li onClick={this.handleToggleModal} className={s.imageGalleryItem }>
        <img src={webformatURL} alt="img" className={s.imageGalleryItemImage } />
        {this.state.isOpenModal && <Modal data={item} closeModal={this.hanldeToggleModal}/>}
      </li>
    );
  }
}
