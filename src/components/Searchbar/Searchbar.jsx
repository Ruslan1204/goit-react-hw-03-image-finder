import css from './Searchbar.module.css';
import PropTypes from 'prop-types';
// import { BsSearch } from 'react-icons/fa/BsSearch';

// import { Component } from 'react';
// import { ImageGallery } from '../ImageGallery/ImageGallery';
// import { Button } from '../Button/Button';

export const Searchbar = ({ onSearch, onSubmit, onChange,omDisabled }) => {
  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmit}>
        <button
          disabled={omDisabled !== 1}
          type="submit"
          className={`${css.searchFormButton} ${css.searchFormButtonHover}`}
        >
          <span>Search</span>
        </button>

        <input
          onChange={onChange}
          type="text"
          className={`${css.searchFormInput} ${css.searchFormInputPlaceholder}`}
          name="search"
          value={onSearch}
          // autocomplete="off"
          // autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};


Searchbar.propTypes = {
  onSearch:PropTypes.string.isRequired, 
  onSubmit:PropTypes.func, 
  onChange:PropTypes.func,
  omDisabled:PropTypes.number.isRequired,
}









// export class Searchbar extends Component {
//   state = {
//     searc: '',
//     page: 2,
//   };

//   handleChangeSearc = evt => {
//     const { name, value } = evt.target;

//     this.setState({ [name]: value });
//   };

//   handleSubmit = evt => {
//     evt.preventDefault();
//     const { searc } = this.state;
//     const trim = searc.trim();

//     if (!trim) {
//       return;
//     } else {
//       this.setState({ searc });
//     }

//     this.props.onSubmit(searc);
//   };

//   handleChangePage = () => {
//     const { searc, page } = this.state;
//     this.setState(prevState => {
//       return { page: prevState.page + 1 };
//     });

//     this.props.onButton(searc, page);
//   };

//   render() {
//     const { searc } = this.state;
//     const { onImages } = this.props;

//     return (
//       <>
//         <header className={css.searchbar}>
//           <form className={css.searchForm} onSubmit={this.handleSubmit}>
//             <button
//               type="submit"
//               className={`${css.searchFormButton} ${css.searchFormButtonHover}`}
//             >
//               <span>Search</span>
//             </button>

//             <input
//               onChange={this.handleChangeSearc}
//               type="text"
//               className={`${css.searchFormInput} ${css.searchFormInputPlaceholder}`}
//               name="searc"
//               value={searc}
//               // autocomplete="off"
//               // autofocus
//               placeholder="Search images and photos"
//             />
//           </form>
//         </header>
//         <ImageGallery onImages={onImages} />

//         {onImages.length !== 0 && <Button onButton={this.handleChangePage} />}
//       </>
//     );
//   }
// }
