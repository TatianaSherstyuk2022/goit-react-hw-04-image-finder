import { React } from "react";
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import s from '../ImageGallery/ImageGallery.module.css'

export function ImageGallery({ items }) {
  return (
      <ul className={s.imageGallery}>
          {items?.map(item => (
              <ImageGalleryItem key={item.id} item={item} className={s.imageGalleryItem } />
        ))}
      </ul>
  );
}
