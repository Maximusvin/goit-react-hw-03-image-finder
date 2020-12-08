import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  return (
    <ul className={s.imageGallery}>
      {images.map(({ id, webformatURL }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} />
      ))}
    </ul>
  );
};

export default ImageGallery;
