import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <header className='p-2'>
      <img src={logo} alt='logo' />
      <nav>
        <ul className='nav-links'>
          <li>Home</li>
          <li>Recharge & Bill Payment</li>
          <li>Booking</li>
          <li>Features</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>Login</li>
          <button className='btn btn-primary'>Sign Up</button>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
