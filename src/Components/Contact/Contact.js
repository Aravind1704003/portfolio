import React from 'react';
import './Contact.css';
import { Element } from 'react-scroll';

const Contact = () => {
  return (
    <Element name='contact' className='contact'>
      <div className="contact-details">
        <h2><u>Contact Details</u></h2>
        <ul>
          <li>
            <strong>Email:</strong> aravind1704003@gmail.com
          </li>
          <li>
            <strong>Phone:</strong> 8610172242 
          </li>
          <li>
            <strong>Address:</strong> 33, KamarajarNagar 1st street,
            Virupatchipuram, Vellore-632002
          </li>
        </ul>
        <div className="social-media">
          <a href="https://www.facebook.com/">
            <img src="https://img.icons8.com/?size=1x&id=uLWV5A9vXIPu&format=png" alt='facebook' />
          </a>
       
          <a href="https://www.instagram.com/">
            <img src="https://img.icons8.com/?size=1x&id=Xy10Jcu1L2Su&format=png" alt='instagram' />
          </a>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
