import { Navbar, NavbarBrand } from 'reactstrap';
import Dropdown from './Dropdown';
import Popup from './Modal';

const Header = () => {
  return (
    <Navbar className="" color="dark" dark>
      <NavbarBrand href="/">gnNews</NavbarBrand>
      <div className="">
        <Dropdown></Dropdown>
        <Popup></Popup>
      </div>
    </Navbar>
  );
};

export default Header;
