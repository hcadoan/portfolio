import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ title_tooltip, text_tooltip }) {
  return (
    <div className={cx(['one-div', 'text', 'tooltip-container'])}>
      <span className={cx('tooltip')}>
        <p className={cx('title')}>{title_tooltip}</p>
        <p className={cx('content')}>{text_tooltip}</p>
      </span>
    </div>
  );
}

export default Card;
