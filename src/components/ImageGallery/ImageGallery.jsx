import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ onImages }) => {
  return (
    <ul className="gallery">
      {onImages?.map(({ id, webformatURL, largeImageURL }) => {
        return <ImageGalleryItem
          key={id}
          webformat={webformatURL}
          largeImage={largeImageURL}
        />;
      })}
    </ul>
  );
};
