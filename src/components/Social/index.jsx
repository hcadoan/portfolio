import classNames from 'classnames/bind';
import styles from './Social.module.scss';

const cx = classNames.bind(styles);

function Social() {
  return (
    <div className={cx('social')}>
      <span>Doan Hoang Ca</span>
      <div className={cx('socials-container')}>
        <a href="https://www.facebook.com/hoangca09/" className={cx('item')}>
          <i className="fi fi-brands-facebook"></i>
        </a>
        <a href="https://twitter.com/Hongca05036047" className={cx('item')}>
          <i className="fi fi-brands-twitter-alt-circle"></i>
        </a>
        <a href="https://www.instagram.com/hoangca09/" className={cx('item')}>
          <i className="fi fi-brands-instagram"></i>
        </a>
        <a href="https://www.youtube.com/@hoangca309" className={cx('item')}>
          <i className="fi fi-brands-youtube"></i>
        </a>
        <a href="https://github.com/hcadoan" className={cx('item')}>
          <i className="fi fi-brands-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Social;
