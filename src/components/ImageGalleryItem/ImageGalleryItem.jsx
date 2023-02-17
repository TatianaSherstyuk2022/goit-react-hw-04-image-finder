import React, { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

export function ImageGalleryItem({ item }) {
  const [isOpenModal, setModalIsOpen] = useState(false);

  const handleToggleModal = () => {
    setModalIsOpen(!isOpenModal);
  };

  const { webformatURL } = item;

  return (
    <li className={s.imageGalleryItem}>
      <img
        src={webformatURL}
        alt="img"
        className={s.imageGalleryItemImage}
        onClick={handleToggleModal}
      />
      {isOpenModal && <Modal data={item} closeModal={handleToggleModal} />}
    </li>
  );
}

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }),
};
