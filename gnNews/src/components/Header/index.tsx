import { Navbar, NavbarBrand } from 'reactstrap';
import Dropdown from './Dropdown';
import Popup from './Modal';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <Navbar className="d-flex justify-content-between flex-grow-1  px-4" color="dark" dark>
      <NavbarBrand href="/" className="me-5" style={{ width: '10%' }}>
        <img alt="logo" src={Logo} className="w-50" style={{ transform: 'translateY(12%)' }} />
      </NavbarBrand>
      <div className="d-flex justify-content-between ">
        <Popup></Popup>
        <Dropdown></Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
