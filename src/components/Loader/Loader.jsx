import { Audio } from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.spinner}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};
