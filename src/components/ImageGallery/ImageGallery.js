import { Component } from 'react';
import fetchImg from '../../services/fetchAPI';

import Button from '../Button/Button';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';
import s from './ImageGallery.module.css';

class ImageGallery extends Component {
  state = {
    images: [],
    currentPage: 1,
    isLoading: false,
    error: null,
    showModal: false,
    largeImageURL: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.query !== this.props.query) {
      this.setState({ currentPage: 1, images: [], error: null });
      this.fetchImages();
    }

    if (prevState.currentPage !== this.state.currentPage) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  fetchImages = () => {
    const { currentPage } = this.state;
    const { query } = this.props;

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

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
    this.setState({ largeImageURL: null });
  };

  handleModalImage = url => {
    this.toggleModal();
    this.setState({ largeImageURL: url });
  };

  render() {
    const {
      showModal,
      images,
      error,
      isLoading,
      largeImageURL,
      status,
    } = this.state;
    const showButton = images.length > 0;

    return (
      <>
        {error && <h2>{error}</h2>}
        <ul className={s.imageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              onToggleModal={this.handleModalImage}
              largeImageURL={largeImageURL}
            />
          ))}
        </ul>

        {showButton && (
          <Button onClick={this.fetchImages} isLoading={isLoading} />
        )}

        {showModal && (
          <Modal onCloseModal={this.toggleModal}>
            <img src={largeImageURL} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;
