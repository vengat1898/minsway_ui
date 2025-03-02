import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Details = () => {
  return (
    <div className='details-container'>
      <div className='details-body'>
        <h1>Get in touch with our <span className='expert-text'>expert</span></h1>
        <p>
          As a mobile app development company, We<br />
          take pride in innovative mobile<br />
          experience that drives engagement and growth.
        </p>
        <div className='contact-info'>
          <div className='contact-item'>
            <FaPhone className='icon' />
            <span>+91 819000 9005</span>
          </div>
          <div className='contact-item'>
            <FaWhatsapp className='icon' />
            <span>+91 819000 9005</span>
          </div>
          <div className='contact-item'>
            <FaEnvelope className='icon' />
            <span>minswayolutions@gmail.com</span>
          </div>
        </div>
      </div>
      <div className='form-body'>
        <input type='text' placeholder='Full Name' className='form-input' />
        <input type='email' placeholder='E-mail' className='form-input' />
        <input type='tel' placeholder='Mobile Number' className='form-input' />
        <div className="input-group">
        <select className="form-input1">
          <option>Select Your Service</option>
          <option>Mobile App Development</option>
          <option>Web Development</option>
          <option>UI/UX Design</option>
        </select>
  <     select className="form-input2">
           <option>Select Project Budget</option>
           <option>Below </option>
           <option>moderate</option>
           <option>Above</option>
        </select>
      </div>
        <select className='form-input3'>
          <option>When to Start?</option>
          <option>Immediately</option>
          <option>Within a Month</option>
          <option>Not Sure</option>
        </select>
        <textarea placeholder='Message' className='form-input message-box'></textarea>
        <button className='send-button'>Send Message</button>
      </div>
    </div>
  );
};

export default Details;


