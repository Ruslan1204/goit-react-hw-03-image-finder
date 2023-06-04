import css from './Searchbar.module.css';
// import PropTypes from 'prop-types';
// import { BsSearch } from 'react-icons/fa/BsSearch';

import { Component } from 'react';
// import { ImageGallery } from '../ImageGallery/ImageGallery';
// import { Button } from '../Button/Button';

// export const Searchbar = ({ onSearch, onSubmit, onChange,omDisabled }) => {

export class Searchbar extends Component {
  state = {
    search: '',
  };

  handleChangeSearc = evt => {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();

    const { search } = this.state;

    this.props.onSearch(search);

    this.props.onReset()
  };



  render() {
    const { search } = this.state;
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <button
            // disabled={omDisabled !== 1}
            type="submit"
            className={`${css.searchFormButton} ${css.searchFormButtonHover}`}
          >
            <span>Search</span>
          </button>

          <input
            onChange={this.handleChangeSearc}
            type="text"
            className={`${css.searchFormInput} ${css.searchFormInputPlaceholder}`}
            name="search"
            value={search}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

