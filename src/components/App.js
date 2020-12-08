import { Component } from 'react';
import fetchImg from '../services/fetchAPI';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
// import Loader from './Loader/Loader';
import Button from './Button/Button';
// import Modal from './Modal/Modal';

import './App.css';

export default class App extends Component {
  state = {
    images: [],
    query: '',
    currentPage: 1,
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.fetchImages();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  newQuery = query => {
    this.setState({ query, currentPage: 1, images: [], error: null });
  };

  newPerPage = perPage => {
    this.setState({ perPage });
  };

  fetchImages = () => {
    const { query, currentPage } = this.state;

    const options = {
      query,
      currentPage,
    };

    this.setState({ isLoading: true });

    fetchImg(options)
      .then(images =>
        this.setState(prevState => ({
          images: [...prevState.images, ...images],
          currentPage: prevState.currentPage + 1,
        })),
      )
      .catch(err => this.setState({ err }))
      .finally(() => this.setState({ isLoading: false }));
  };

  render() {
    const { images, isLoading, error } = this.state;
    return (
      <>
        {error && <h2>{error}</h2>}
        <Searchbar onSubmit={this.newQuery} />

        <ImageGallery images={images} />
        {images.length > 0 && (
          <Button onClick={this.fetchImages} isLoading={isLoading} />
        )}
      </>
    );
  }
}
