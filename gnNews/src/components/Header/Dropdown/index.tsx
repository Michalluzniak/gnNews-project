import { useState } from 'react';
import { Dropdown as RSDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const dropdownToggleHandler = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <RSDropdown isOpen={dropdownOpen} toggle={dropdownToggleHandler} direction={dropdownOpen ? 'up' : 'down'}>
      <DropdownToggle caret>Widok</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Lista</DropdownItem>
        <DropdownItem>Kafelki</DropdownItem>
      </DropdownMenu>
    </RSDropdown>
  );
};

export default Dropdown;
