import Navbar from './Navbar';
import Footer from './Footer';
import Info from './Info';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Info />
      <Footer />
    </div>
  );
};

export default Layout;
