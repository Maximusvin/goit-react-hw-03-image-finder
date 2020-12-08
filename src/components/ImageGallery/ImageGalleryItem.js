import s from './ImageGallery.module.css';

const ImageGalleryItem = ({ webformatURL }) => {
  return (
    <li className={s.imageGalleryItem}>
      <img src={webformatURL} alt="" className={s.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
