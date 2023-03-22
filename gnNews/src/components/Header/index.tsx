import { Navbar, NavbarBrand } from 'reactstrap';
import Dropdown from './Dropdown';
import Popup from './Modal';
import Logo from '../../assets/logo.png';
import Searchbar from './Searchbar';

const Header = () => {
  return (
    <Navbar className="px-4" color="dark" dark>
      <NavbarBrand href="/" className="me-5" style={{ width: '10%' }}>
        <img alt="logo" src={Logo} className="w-100" style={{ transform: 'translateY(12%)' }} />
      </NavbarBrand>
      <div className="flex-grow-1 d-flex justify-content-between ">
        <Searchbar></Searchbar>
        <div className="d-flex">
          <Popup></Popup>
          <Dropdown></Dropdown>
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
