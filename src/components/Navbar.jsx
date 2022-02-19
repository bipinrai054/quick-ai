import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <header className='p-1'>
      <img src={logo} alt='logo' />
      <nav>
        <ul className='nav-links'>
          <li>
            Home <i className='las la-angle-down'></i>
          </li>
          <li>
            Recharge & Bill Payment <i className='las la-angle-down'></i>
          </li>
          <li>
            Booking <i className='las la-angle-down'></i>
          </li>
          <li>
            Features <i className='las la-angle-down'></i>
          </li>
          <li>
            Blog <i className='las la-angle-down'></i>
          </li>
          <li>
            Pages <i className='las la-angle-down'></i>
          </li>
          <li>Login</li>
          <button className='btn'>Sign Up</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
