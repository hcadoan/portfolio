import classNames from 'classnames/bind';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, className, onClick }) {
  const classes = cx('wrapper', {
    [className]: className,
  });

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

export default Button;
