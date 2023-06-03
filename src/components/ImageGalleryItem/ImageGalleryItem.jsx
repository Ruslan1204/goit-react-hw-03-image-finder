import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';

// export const ImageGalleryItem = ({ webformat,largeImage }) => {
//   return (
//     <>
//       <li className={css.imageGalleryItem}>
//         <img className={`${css.imageGalleryItemImage} ${css.imageGalleryItemImage}`}
//         src={webformat} alt="" width={200} />
//       </li>
//       <Modal largeImage={largeImage} />
//     </>
//   );
// };

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = evt => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { isModalOpen } = this.state;
    const { webformat, largeImage } = this.props;
    return (
      <>
        <li className={css.imageGalleryItem} onClick={this.openModal}>
          <img
            className={`${css.imageGalleryItemImage} ${css.imageGalleryItemImage}`}
            src={webformat}
            alt=""
            width={200}
          />
        </li>
        {isModalOpen && (
          <Modal largeImage={largeImage} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformat:PropTypes.string.isRequired, 
  largeImage:PropTypes.string.isRequired,
}