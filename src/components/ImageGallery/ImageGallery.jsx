import React, { Component } from 'react';
import { toast } from 'react-toastify';
import Loader from 'react-loader-spinner';
import apiService from '../../apiService/apiService';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Button from '../Button/Button';
import Modal from '../Modal/Modal';

class ImageGallery extends Component {
  state = {
    images: [],
    error: null,
    page: 1,
    isModalOpen: false,
    onImgClick: '',
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImg = prevProps.searchRequest;
    const nextImg = this.props.searchRequest;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImg !== nextImg) {
      this.setState({ images: [], page: 1, status: 'pending' });
      setTimeout(() => {
        this.loadImages();
      }, 100);
    }

    if (prevPage !== nextPage) {
      this.loadMoreImages();
    }
  }

  async loadImages() {
    await apiService(this.props.searchRequest, this.state.page).then(images =>
      this.setState({ images: images.hits, status: 'resolved' }),
    );
    this.autoScroll();
  }

  async loadMoreImages() {
    await apiService(this.props.searchRequest, this.state.page).then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images.hits],
        status: 'resolved',
      }));
    });
    this.autoScroll();
  }

  onLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  autoScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  onModalOpen = image => {
    this.setState({ isModalOpen: true, onImgClick: image });
  };

  onModalClose = event => {
    if (event.code === 'Escape' || event.currentTarget === event.target) {
      this.setState({ isModalOpen: false });
    }
  };

  render() {
    if (this.state.status === 'idle') {
      return (
        <div className="Conteiner">
          <p>Please enter search request</p>
        </div>
      );
    }

    if (this.state.status === 'pending') {
      return <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />;
    }

    if (this.state.status === 'resolved') {
      return (
        <div>
          <ul className="ImageGallery">
            <ImageGalleryItem
              images={this.state.images}
              onClick={this.onModalOpen}
            />
          </ul>
          {this.state.images.length !== 0 ? (
            <Button onClick={this.onLoadMore} />
          ) : (
            ''
          )}
          {this.state.isModalOpen && (
            <Modal
              showImg={this.state.onImgClick}
              onClick={this.onModalClose}
            />
          )}
        </div>
      );
    }
  }
}

export default ImageGallery;
