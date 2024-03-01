import classNames from 'classnames/bind';
import styles from './ProjectItem.module.scss';

const cx = classNames.bind(styles);

function ProjectItem({ img, title, description, techs, linkPreview, linkCode }) {
  return (
    <div className={cx('wrapper')}>
      <img src={img} alt="projectImage" />
      <div className={cx('content')}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('description')}>{description}</div>
        <div className={cx('tech')}>
          {techs.map((tech, index) => (
            <div key={index} className={cx('tech-item')}>
              {tech}
            </div>
          ))}
        </div>
        <div className={cx('source')}>
          {linkPreview && (
            <div className={cx('live-preview')}>
              <i className="fi fi-rr-link-alt"></i>
              <a href={linkPreview}>Live Preview</a>
            </div>
          )}
          {linkCode && (
            <div className={cx('code')}>
              <i className="fi fi-brands-github"></i>
              <a href={linkCode}>View code</a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
