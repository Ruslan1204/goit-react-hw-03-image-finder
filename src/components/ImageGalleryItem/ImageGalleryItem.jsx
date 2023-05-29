export const ImageGalleryItem = ({ webformat, largeImage }) => {
  return (
    <li className="gallery-item">
      <img src={webformat} alt="" width={200} />
    </li>
  );
};
