import { useEffect, useState } from 'react';
import logo from '../../../assets/logo-white.png';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Button from '../Button';
import FormDialog from '../FormDialog';
import ContactForm from '../ContactForm';

const cx = classNames.bind(styles);

function Header() {
  const [activeTab, setActiveTab] = useState('Home');
  const [open, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleScroll = () => {
    const sections = ['Home', 'About me', 'Skills', 'Project'];
    for (let i = sections.length - 1; i >= 0; i--) {
      const element = document.getElementById(sections[i].toLowerCase().replace(' ', '-'));
      if (element.getBoundingClientRect().top <= window.innerHeight / 2) {
        setActiveTab(sections[i]);
        break;
      }
    }
  };

  const handleMenuClick = (event) => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(isMenuOpen);
  }, [isMenuOpen]);

  return (
    <div className={cx('header')}>
      <a href="#" className={cx('hoangca')}>
        <img src={logo} className={cx('logo')} alt="logo" />
        <div>
          <h2 className={cx('first')}>H</h2>
          <h2>oang</h2>
          <h2 className={cx('first')}>C</h2>
          <h2>a</h2>
        </div>
      </a>
      <ul className={cx('navbar', { opennav: isMenuOpen })}>
        {['Home', 'About me', 'Skills', 'Project'].map((tab, index) => (
          <li key={index} className={cx({ active: activeTab === tab })} onClick={() => setActiveTab(tab)}>
            <a href={`#${tab.toLowerCase().replace(' ', '-')}`}>{tab}</a>
          </li>
        ))}
      </ul>
      <Button onClick={() => setOpen(true)}>Contact me</Button>

      <label className={cx('burger')} htmlFor="burger">
        <input onClick={handleMenuClick} type="checkbox" id="burger" />
        <span></span>
        <span></span>
        <span></span>
      </label>
      <FormDialog open={open} onClose={handleClose}>
        <ContactForm />
      </FormDialog>
    </div>
  );
}

export default Header;
