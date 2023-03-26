import { Input } from 'reactstrap';
import { IoIosSearch } from 'react-icons/io';

const Searchbar = () => {
  return (
    <div className="position-relative d-flex w-25 rounded justify-content-center ">
      <Input placeholder="Search for the article" className="w-100 border border-secondary" />
      <IoIosSearch className="position-absolute top-50 end-0 translate-middle fs-4" role="button" />
    </div>
  );
};
export default Searchbar;
