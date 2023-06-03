import css from './Button.module.css';
import PropTypes from 'prop-types';

export const Button = ({ onButton }) => {
  return (
    <div className={css.wrapper}>
      <button
        className={`${css.button} ${css.buttonHover} ${css.buttonFocus}`}
        type="button"
        onClick={onButton}
      >
        Load more
      </button>
    </div>
  );
};

Button.ropTypes = {
  onButton: PropTypes.func,
};
