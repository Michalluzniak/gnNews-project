import { MdKeyboardArrowLeft } from 'react-icons/md';

interface CollapseButtonProps {
  isOpen: boolean;
  isHovered: boolean;
  isOpenHandler: () => void;
  isHoveredHandler: (value: boolean) => void;
}

export const CollapseButton = ({ isOpen, isHovered, isOpenHandler, isHoveredHandler }: CollapseButtonProps) => {
  return (
    <div
      className={`sidebar-button d-flex align-items-center justify-content-center position-absolute sticky-top top-90 start-100 translate-middle-x cursor-pointer rounded-button bg-success ${
        !isHovered && isOpen && 'd-none'
      }`}
      onClick={isOpenHandler}
      onMouseEnter={() => isHoveredHandler(!(!isOpen && !isHovered))}
    >
      <MdKeyboardArrowLeft className={`fs-3  ${!isOpen && 'rotate-180'}`} />
    </div>
  );
};