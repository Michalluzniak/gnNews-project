import { Input } from 'reactstrap';
import { IoIosSearch } from 'react-icons/io';

const Searchbar = () => {
  return (
    <div className="d-flex w-25 me-5 position-relative">
      <Input placeholder="Search for the article" className="h-100 w-100 " />

      <IoIosSearch className="position-absolute top-50 end-0 translate-middle fs-4" role="button" />
    </div>
  );
};
export default Searchbar;
