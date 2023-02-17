import '../Button/Button.module.css';
import PropTypes from 'prop-types';
import s from '../Button/Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <>
      <button className={s.button} onClick={onClick}>
        Load more
      </button>
    </>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};
