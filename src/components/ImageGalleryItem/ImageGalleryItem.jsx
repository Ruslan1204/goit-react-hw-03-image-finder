import { Component } from 'react';
import css from './ImageGalleryItem.module.css';
// import { Modal } from '../Modal/Modal';

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

  openModal = () => {
    this.setState({ isModalOpen: true });
  };
  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    // const { isModalOpen } = this.state;
    const { webformat } = this.props;
    return (
      <>
        <li className={css.imageGalleryItem}>
          <img
            className={`${css.imageGalleryItemImage} ${css.imageGalleryItemImage}`}
            src={webformat}
            alt=""
            width={200}
          />
        </li>
        {/* <Modal largeImage={largeImage} onClick={this.openModal}/> */}
      </>
    );
  }
}
