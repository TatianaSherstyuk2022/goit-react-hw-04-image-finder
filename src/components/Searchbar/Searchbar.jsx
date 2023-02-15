import s from './Searchbar.module.css'
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Searchbar extends Component {
  state = {
    query: '',
    // perPage: 12,
    // currentPage: 1,
 }

  onChangeInput = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() })
  }

  handleSubmit = e => { 
    e.preventDefault();
    // console.log(this.state.query);
    
    this.props.handleSubmit(this.state.query);

    // this.setState({ query: '' });
  }


  render() {
    const { query } = this.state.query;
    
  return (
    <header className={s.header}>
      <form className={s.form} onSubmit={this.handleSubmit}>
        <button type="submit" className={s.btn}>
          <span className={s.label}>Search</span>
        </button>

        <input
          className={s.input}
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
