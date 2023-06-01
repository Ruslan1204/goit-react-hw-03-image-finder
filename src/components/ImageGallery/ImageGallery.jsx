import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import css from './ImageGallery.module.css';

export const ImageGallery = ({ onImages }) => {
  return (
    <ul className={css.imageGallery}>
      {onImages?.map(({ id, webformatURL, largeImageURL }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformat={webformatURL}
            largeImage={largeImageURL}
          />
        );
      })}
    </ul>
  );
};
