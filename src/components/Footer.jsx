// images
import visa from '../images/visa.png';
import discover from '../images/discover.png';
import paypal from '../images/paypal.png';
import american from '../images/american.png';
import masterCard from '../images/mastercard.png';

const Footer = () => {
  return (
    <div className='footer mt-5'>
      <div className='row'>
        <div className='col-4'>
          <h5>Payments</h5>
          <img src={visa} alt='visa' />
          <img src={discover} alt='discover' />
          <img src={paypal} alt='paypal' />
          <img src={american} alt='american' />
          <img src={masterCard} alt='master-card' />
        </div>
        <div className='col-4'>
          <h5>Subscribe</h5>
          <div class='input-group'>
            <input
              type='text'
              class='form-control'
              id='validationDefaultUsername'
              placeholder='Your Email Address'
              aria-describedby='inputGroupPrepend2'
            />
            <div class='subscribe-btn input-group-prepend'>
              <span class='input-group-text' id='inputGroupPrepend2'>
                Subscribe
              </span>
            </div>
          </div>
        </div>
        <div className='col-4'>Keep in Touch</div>
      </div>
      <hr />
      <div className='row'>
        <div className='links'>
          <ul>
            <li>About Us</li>
            <li>Faq</li>
            <li>Contact</li>
            <li>Support</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className='footer-sub'>
          Copyright © 2020 Quickai. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
