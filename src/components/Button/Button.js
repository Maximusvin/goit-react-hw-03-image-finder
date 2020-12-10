import Loader from 'react-loader-spinner';
import s from './Button.module.css';

const Button = ({ onClick, isLoading }) => {
  return (
    <button className={s.button} type="button" onClick={onClick}>
      <Loader
        className={s.loader}
        type="TailSpin"
        color="#00BFFF"
        height={20}
        width={20}
        visible={isLoading}
      />
      {isLoading ? '' : 'Load more'}
    </button>
  );
};

export default Button;
