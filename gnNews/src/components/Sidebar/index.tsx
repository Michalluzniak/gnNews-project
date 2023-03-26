import { useState } from 'react';
import { CollapseButton } from './CollapseButton';
import { CountryList } from './CountryList';
import { NewsFrom } from './NewsFrom';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const isHoveredHandler = (value: boolean) => {
    setIsHovered(value);
  };

  const isOpenHandler = () => {
    setIsOpen((prev) => !prev);
    isOpen ? setIsHovered(false) : setIsHovered(true);
  };

  return (
    <aside
      className={` align-items-center bg-dark  transition-all duration-300 `}
      style={isOpen ? { width: '200px' } : { width: '20px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`sticky-top bg-dark h-100 transition-all duration-300   position-relative`}
        style={
          isOpen ? { width: '200px' } : isHovered ? { width: '200px', transitionDelay: '300ms' } : { width: '20px' }
        }
      >
        <div
          className={`text-center h-100 w-100 overflow-hidden ${
            isOpen ? 'opacity-1 ' : !isHovered ? 'opacity-0' : 'opacity-1 delay-300'
          } `}
        >
          <div className="d-flex flex-column overflow-hidden  h-100" style={{ width: '200px' }}>
            <NewsFrom />
            <CountryList />
          </div>
        </div>
        <CollapseButton
          isOpen={isOpen}
          isHovered={isHovered}
          isOpenHandler={isOpenHandler}
          isHoveredHandler={isHoveredHandler}
        />
      </div>
    </aside>
  );
};

export default Sidebar;
