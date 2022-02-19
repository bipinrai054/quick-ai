import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <img className='img' src={logo} />
      </div>
    </nav>
  );
};

export default Navbar;
