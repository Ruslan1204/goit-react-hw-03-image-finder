// import css from './Searchbar.module.css';
import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    searc: '',
  };

  handleChangeSearc = evt => {
    const { name, value } = evt.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { searc } = this.state; 

    this.props.onSubmit(searc)

    this.setState({ searc: '' });
  };

  render() {
    const { searc } = this.state;

    return ( 
      <header className="searchbar">
        <form className="form" onSubmit={this.handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleChangeSearc}
            type="text"
            className="input"
            name="searc"
            value={searc}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
