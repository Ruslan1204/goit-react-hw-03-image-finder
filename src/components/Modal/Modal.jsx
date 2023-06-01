import css from './Modal.module.css';

export const Modal = ({ largeImage }) => {
  console.log(largeImage);
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};
