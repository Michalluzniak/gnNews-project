import { Navbar, NavbarBrand } from 'reactstrap';
import Dropdown from './Dropdown';
import Popup from './Modal';
import Logo from '../../assets/logo.png';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <Navbar className="d-flex  border-bottom border-secondary px-3 py-3" color="white" dark>
      <NavbarBrand href="/" className="">
        <img alt="logo" src={Logo} className="w-30" style={{ transform: 'translateY(12%)' }} />
      </NavbarBrand>
      <div className="w-50 d-flex justify-content-center">
        <Searchbar></Searchbar>
      </div>

      <div className="d-flex justify-content-between align-items-center w-25">
        <Popup></Popup>
        <Dropdown></Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
