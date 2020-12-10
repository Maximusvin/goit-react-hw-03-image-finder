import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, showModal, onToggleModal }) => {
  return (
    <>
      <ul className={s.imageGallery}>
        {images.map(({ id, webformatURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            onToggleModal={onToggleModal}
          />
        ))}
      </ul>
      {showModal && (
        <Modal onCloseModal={onToggleModal}>
          <img
            src={images.webformatURL}
            alt=""
            className={s.imageGalleryItemImage}
          />
        </Modal>
      )}
    </>
  );
};

export default ImageGallery;
