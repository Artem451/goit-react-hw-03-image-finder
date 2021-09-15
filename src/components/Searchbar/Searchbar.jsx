import React from 'react';
import { Component } from 'react';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    imgName: '',
  };

  handleImgNameChange = event => {
    this.setState({ imgName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.imgName.trim() === '') {
      toast.error('Enter search request');
      return;
    }

    this.props.onSearch(this.state.imgName);
    this.setState({ imgName: '' });
  };

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm">
          <button
            type="submit"
            className="SearchForm-button"
            onClick={this.handleSubmit}
          >
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleImgNameChange}
            value={this.state.imgName}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
