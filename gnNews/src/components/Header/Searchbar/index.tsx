import { Input } from 'reactstrap';
import { IoIosSearch } from 'react-icons/io';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxTypes';
import { changeInputValue } from '../../../slices/searchbarValue';

const Searchbar = () => {
  const inputValueDispatcher = useAppDispatch();
  const inputValue = useAppSelector((state) => state.inputValueSlice.value);

  return (
    <div className="position-relative d-flex w-50 rounded justify-content-center shadow-sm">
      <Input
        disabled
        placeholder="Search for the article"
        className="w-100 border border-secondary py-2 px-2"
        value={inputValue}
        onChange={(event) => inputValueDispatcher(changeInputValue(event.target.value))}
      />
      <IoIosSearch className="position-absolute top-50 end-0 translate-middle fs-4" role="button" />
    </div>
  );
};
export default Searchbar;
