import { Navbar, NavbarBrand } from 'reactstrap';
import Dropdown from './Dropdown';
import Popup from './Modal';
import Logo from '../../assets/logo.png';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <Navbar className="d-flex flex-grow-1  border-bottom border-secondary px-4" color="white" dark>
      <NavbarBrand href="/" className="ms-1 w-10">
        <img alt="logo" src={Logo} className="w-100" style={{ transform: 'translateY(12%)' }} />
      </NavbarBrand>

      <Searchbar></Searchbar>

      <div className="d-flex justify-content-between me-1 ">
        <Popup></Popup>
        <Dropdown></Dropdown>
      </div>
    </Navbar>
  );
};

export default Header;
