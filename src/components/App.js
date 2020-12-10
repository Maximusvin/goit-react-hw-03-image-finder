import { Component } from 'react';
import fetchImg from '../services/fetchAPI';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

import './App.css';

export default class App extends Component {
  state = {
    images: [],
    query: '',
    currentPage: 1,
    isLoading: false,
    error: null,
    showModal: false,
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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
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
    const { images, isLoading, error, showModal } = this.state;
    const showButton = images.length > 0;

    return (
      <>
        {error && <h2>{error}</h2>}
        <Searchbar onSubmit={this.newQuery} />
        <ImageGallery
          images={images}
          showModal={showModal}
          onToggleModal={this.toggleModal}
        />
        {showButton && (
          <Button onClick={this.fetchImages} isLoading={isLoading} />
        )}
      </>
    );
  }
}
