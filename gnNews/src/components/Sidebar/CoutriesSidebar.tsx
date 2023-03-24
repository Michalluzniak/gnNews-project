import { useState } from 'react';
import countryList from '../../mocks/countryList.json';

const CoutriesSidebar = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const isHoveredHandler = () => {
    setIsHovered((prev) => !prev);
  };

  const isOpenHandler = () => {
    setIsOpen((prev) => !prev);
    setIsHovered((prev) => !prev);
  };

  return (
    <aside
      className={` align-items-center bg-dark transition-300  `}
      style={isOpen ? { width: '200px' } : { width: '10px' }}
      onClick={isOpenHandler}
    >
      <div
        className={` sticky-top start-0 bg-dark h-100 transition-300  overflow-hidden `}
        style={isHovered || isOpen ? { width: '200px' } : { width: '10px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* <div className="d-flex justify-content-center align-item-center py-3 pb-2 ">
        <p className="fs-5 m-0 text-white">News From</p>
      </div> */}
        <div className={`text-center  bg-dark  px-3  h-100 overflow-scroll w-100`} style={{ width: '140px' }}>
          <div>
            <ul className="d-flex flex-column  list-unstyled " style={{ width: '140px' }}>
              {countryList.map((country: any) => {
                return (
                  <li className={`d-flex mb-2 py-3 text-white  hover-dark`}>
                    <div className=" w-25">{country.emoji}</div>
                    <div className="text-start w-75 ">{country.name}</div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default CoutriesSidebar;
