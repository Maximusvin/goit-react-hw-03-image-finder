import s from './ImageGallery.module.css';

const ImageGalleryItem = ({ webformatURL, onToggleModal }) => {
  return (
    <li className={s.imageGalleryItem} onClick={onToggleModal}>
      <img src={webformatURL} alt="" className={s.imageGalleryItemImage} />
    </li>
  );
};

export default ImageGalleryItem;
