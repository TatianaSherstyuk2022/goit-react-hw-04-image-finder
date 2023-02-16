import { Bars } from 'react-loader-spinner';
import s from '../Loader/Loader.module.css';

export const Loader = () => {
  return (
    <div className={s.spinner}>
      <Bars
        height="80"
        width="80"
        color="blue"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
