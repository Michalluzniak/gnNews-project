import { useState } from 'react';
import { Dropdown as RSDropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

const Dropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  const dropdownToggleHandler = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <RSDropdown
      isOpen={dropdownOpen}
      toggle={dropdownToggleHandler}
      direction={dropdownOpen ? 'up' : 'down'}
      className="ms-5"
    >
      <DropdownToggle caret color="light">
        Display as
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>List</DropdownItem>
        <DropdownItem>Tiles</DropdownItem>
      </DropdownMenu>
    </RSDropdown>
  );
};

export default Dropdown;
