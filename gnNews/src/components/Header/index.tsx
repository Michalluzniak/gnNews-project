import { Navbar, NavbarBrand } from 'reactstrap';
import Dropdown from './Dropdown';
import Popup from './Modal';
import Logo from '../../assets/logo.png';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <Navbar
      className="d-flex justify-content-between align-items-center border-bottom border-secondary px-4"
      color="white"
      dark
    >
      <NavbarBrand href="/" className="me-5 w-25">
        <img alt="logo" src={Logo} className="w-25" style={{ transform: 'translateY(12%)' }} />
      </NavbarBrand>

      <Searchbar></Searchbar>

      <div className="d-flex justify-content-between ">
        <Popup></Popup>
        <Dropdown></Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
