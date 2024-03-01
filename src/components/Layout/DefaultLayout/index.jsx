import { useState } from 'react';
import classNames from 'classnames/bind';
import Header from '../Header';
import styles from './DefaultLayout.module.scss';
import Button from '../Button';
import Card from '../Card';
import avatar from '../../../assets/avatar.jpg';
import Social from '../../Social';
import images from '../../../assets';
import ProjectItem from '../../ProjectItem';
import testImageproject from '../../../assets/Screenshot.png';
import farmstay_image from '../../../assets/farmstay-image.png';
import logo from '../../../assets/logo-white.png';
import shopee_image from '../../../assets/shopee-image.png';
import trebig_image from '../../../assets/trebig-image.png';
import web3_band_image from '../../../assets/web3_band-image.png';
import suitcase_image from '../../../assets/suitcase-image.png';

const cx = classNames.bind(styles);

function DefaultLayout() {
  const projects = [
    {
      img: trebig_image,
      title: 'Trebig Desktop app',
      description:
        'Desktop app for admin to manage applications that users use in Android apps on cars, manage users, create code, set up banners',
      techs: ['ReactJS', 'Electron', 'JavaScript'],
      linkCode: 'https://github.com/hcadoan/react-electron',
    },
    {
      img: farmstay_image,
      title: 'Farmstay',
      description:
        'Android and web application for users to manage rented Farmstay areas - Receive sensor values and issue warnings when values exceed thresholds - Control smart devices in the rented area - User authentication, account security',
      techs: ['Java', 'XML', 'ReactJS'],
      linkCode: 'https://github.com/hcadoan/farmstay',
    },
    {
      img: shopee_image,
      title: 'Shoppe Interface',
      description: 'Shopee interface with homepage, login and registration pages written in HTML, CSS',
      techs: ['HTML', 'CSS', 'JavaScript'],
      linkPreview: 'https://hcadoan.github.io/shoppe_f8/',
      linkCode: 'https://github.com/hcadoan/shoppe_f8',
    },
    {
      img: web3_band_image,
      title: 'Web3 Band Interface ',
      description: 'The band website interface is written in HTML and CSS',
      techs: ['HTML', 'CSS', 'JavaScript'],
      linkPreview: 'https://hcadoan.github.io/w3_band/',
      linkCode: 'https://github.com/hcadoan/w3_band',
    },
    {
      img: suitcase_image,
      title: 'Suitcase luggage management',
      description:
        'Luggage management, allowing adding, deleting and editing - Determine the coordinates of your luggage to prevent theft',
      techs: ['Java', 'XML'],
      linkCode: 'https://github.com/',
    },
  ];

  return (
    <div id="home" className={cx('layout')}>
      <div className={cx('header')}>
        <Header />
      </div>

      <div className={cx('under-header')}></div>
      <div className={cx('container')}>
        <div className={cx('content')}>
          <div className={cx('home') + ' row'}>
            <div className={cx('home-left') + ' col-12 col-md-6'}>
              <h2>Hi, I'm</h2>
              <h1>Hoang Ca,</h1>
              <p className={cx('main-description')}>
                <span>{'<Front-end Developer />'}</span> Have experience building frontend for user websites with
                ReactJS
              </p>
              <Button className={cx('small-btn')}>
                <a href="tel:+84339659447">Book a call</a>
              </Button>
            </div>
            <div className={cx('home-right') + ' col-12 col-md-6'}>
              <Card title_tooltip="Hello" />
            </div>
          </div>
          {/* about me */}
          <div id="about-me" className={cx('about-me')}>
            <div className={cx('main-title')}>About me</div>
            <div className={cx('about-content') + ' row'}>
              <div className={cx('about-image') + ' col-12 col-md-4'}>
                <div className={cx('avatar-border')}>
                  <img className={cx('avatar')} src={avatar} />
                </div>
                <div className={cx('social')}>
                  <div className={cx('social-backdrop')}></div>
                  <Social />
                </div>
              </div>
              <div className={cx('info') + ' col-12 col-md-8'}>
                <h2 className={cx('main-children-title')}>Front-end developer</h2>
                <p className={cx('main-description')}>
                  Final year student, with programming experience, ability to learn quickly and passion for learning new
                  technology. - Strengths: Front-end technology in web and app development - Proficiency in HTML, CSS,
                  JavaScript - Understanding of React.js and its scoring principles - Familiarity with RESTful APIs -
                  Strong Experience in: JavaScript (ReactJS), Java (Android Application) - Proficient use of source code
                  management tools: GIT, Github - Proficiency in operating systems: Linux (Ubuntu), Windows - Ability to
                  learn and apply new technology quickly
                </p>
              </div>
            </div>
          </div>
          {/* skills */}
          <div id="skills" className={cx('skill')}>
            <div className={cx('main-title')}>Skills</div>
            <div className={cx('skill-content')}>
              <h2 className={cx('main-children-title')}>The skills, tools and technologies</h2>
              <h2 className={cx('main-children-title')}>I am really good at:</h2>

              <ul className={cx('skill-items')}>
                <li>
                  <img src={images.react} alt="html" />
                  <span>ReactJS</span>
                </li>
                <li>
                  <img src={images.electron} alt="html" />
                  <span>Electron</span>
                </li>
                <li>
                  <img src={images.javascript} alt="html" />
                  <span>JavaScript</span>
                </li>
                <li>
                  <img src={images.bootstrap} alt="html" />
                  <span>Bootstrap</span>
                </li>
                <li>
                  <img src={images.html} alt="html" />
                  <span>HTML</span>
                </li>
                <li>
                  <img src={images.css} alt="html" />
                  <span>CSS</span>
                </li>
              </ul>
              <ul className={cx('skill-items')}>
                <li>
                  <img src={images.scss} alt="html" />
                  <span>SCSS</span>
                </li>
                <li>
                  <img src={images.vite} alt="html" />
                  <span>Vite</span>
                </li>
                <li>
                  <img src={images.java} alt="html" />
                  <span>Java</span>
                </li>
                <li>
                  <img src={images.npm} alt="html" />
                  <span>NPM</span>
                </li>
                <li>
                  <img src={images.git} alt="html" />
                  <span>Git</span>
                </li>
              </ul>
            </div>
          </div>
          {/* project */}
          <div id="project" className={cx('project')}>
            <div className={cx('main-title')}>Project</div>
            <h2 className={cx('main-children-title')}>Project built</h2>
            <div className={cx('project-content')}>
              <div className={cx('project-list') + ' row'}>
                {projects.map((project, index) => (
                  <div key={index} className={cx('project-item') + ' col-12 col-md-4'}>
                    <ProjectItem
                      img={project.img}
                      title={project.title}
                      description={project.description}
                      techs={project.techs}
                      linkPreview={project.linkPreview}
                      linkCode={project.linkCode}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className={cx('footer') + ' row'}>
            <a href="#" className={cx('hoangca') + ' col-12 col-md-5'}>
              <img src={logo} className={cx('logo')} alt="logo" />
              <div>
                <h2 className={cx('first')}>H</h2>
                <h2>oang</h2>
                <h2 className={cx('first')}>C</h2>
                <h2>a</h2>
              </div>
            </a>
            <div className={cx('footer-right') + ' col-12 col-md-7 row'}>
              <div className={cx('sdt') + ' col-12 col-md-3'}>
                <a href="tel:+84339659447">+84 339 659 447</a>
              </div>
              <div className={cx('email') + ' col-12 col-md-5'}>
                <a href="mailto:hoangcadoan01@gmail.com">hoangcadoan01@gmail.com</a>
              </div>
              <div className={cx('social-footer') + ' col-12 col-md-4'}>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default DefaultLayout;
