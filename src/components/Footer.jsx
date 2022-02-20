// images
import visa from '../images/visa.png';
import discover from '../images/discover.png';
import paypal from '../images/paypal.png';
import american from '../images/american.png';
import masterCard from '../images/mastercard.png';

const Footer = () => {
  return (
    <div className='footer p-5'>
      <div className='container'>
        <div className='row '>
          <div className='payemnts col-sm-12 col-md-4 p-3 '>
            <h5>Payments</h5>
            <img className='p-1' src={visa} alt='visa' />
            <img className='p-1' src={discover} alt='discover' />
            <img className='p-1' src={paypal} alt='paypal' />
            <img className='p-1' src={american} alt='american' />
            <img className='p-1' src={masterCard} alt='master-card' />
          </div>
          <div className='col-md-4 col-sm-12 p-3 '>
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
          <div className='col-md-4 col-sm-12 footer-socials p-3 '>
            <h5>Keep in Touch</h5>
            <i className='lab la-facebook footer-facebook la-2x' />
            <i className='lab la-twitter footer-twitter la-2x' />
            <i className='lab la-google footer-google la-2x' />
            <i className='lab la-linkedin footer-linkedin la-2x' />
            <i className='lab la-youtube footer-youtube la-2x' />
            <i className='lab la-instagram footer-instagram la-2x' />
          </div>
        </div>
        <hr className='' />
        <div className='row'>
          <div className='links'>
            <ul className='d-flex justify-content-center flex-wrap'>
              <a>
                <li>About Us</li>
              </a>
              <a>
                <li>Faq</li>
              </a>
              <a>
                <li>Contact</li>
              </a>
              <a>
                <li>Support</li>
              </a>
              <a>
                <li>Terms of Use</li>
              </a>
              <a>
                <li>Privacy Policy</li>
              </a>
            </ul>
          </div>
          <div className='footer-sub text-center '>
            Copyright © 2020 <a>Quickai.</a> All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
