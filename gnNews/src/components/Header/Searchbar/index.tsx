import { Input } from 'reactstrap';
import { IoIosSearch } from 'react-icons/io';

const Searchbar = () => {
  return (
    <div className="position-relative w-25 h-100">
      <Input placeholder="Search for the article" className="w-100" />
      <IoIosSearch className="position-absolute top-50 end-0 translate-middle fs-4" role="button" />
    </div>
  );
};
export default Searchbar;
