import React from 'react';
import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    imgName: '',
  };

  handleFormSubmit = imgName => {
    console.log(imgName);
    this.setState({ imgName });
  };

  render() {
    return (
      <>
        <ToastContainer />
        <Searchbar onSearch={this.handleFormSubmit} />
        <ImageGallery searchRequest={this.state.imgName} />
      </>
    );
  }
}
