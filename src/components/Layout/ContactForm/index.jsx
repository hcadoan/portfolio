import React, { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ContactForm.module.scss';

const cx = classNames.bind(styles);

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isFormValid = name !== '' && email !== '' && message !== '';

  const isFormEmpty = name === '' && email === '' && message === '';

  return (
    <div className={cx('form-container')}>
      <form method="POST" action="https://formspree.io/f/xyyrjogw" className={cx('form')}>
        <div className={cx('form-group')}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required="" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            required=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={cx('form-group')}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            rows="10"
            cols="50"
            required=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          >
            {' '}
          </textarea>
        </div>
        <button
          className={cx('form-submit-btn', { disabled: !isFormValid || isFormEmpty })}
          type="submit"
          disabled={!isFormValid || isFormEmpty}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
