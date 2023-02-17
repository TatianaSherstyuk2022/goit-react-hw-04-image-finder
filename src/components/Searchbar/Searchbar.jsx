import s from './Searchbar.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
    currentPage: 1,
  };

  onChangeInput = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.handleSubmit(this.state.query);
    this.setState({ currentPage: 1 });
  };

  render() {
    const { query } = this.state.query;

    return (
      <header className={s.searchbar}>
        <form className={s.searchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.searchFormButton}>
            <span className={s.label}>Search</span>
          </button>

          <input
            className={s.searchFormInput}
            type="text"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChangeInput}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propType = {
  onSubmit: PropTypes.func.isRequired,
};
