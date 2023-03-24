import countryList from '../../mocks/countryList.json';

const CoutriesSidebar = () => {
  return (
    <div className="sidebar d-flex flex-column align-items-center bg-white w-20  pb-3 me-3">
      <div className="d-flex  justify-content-center align-item-center py-3 pb-2">
        <p className="fs-5 m-0">News From</p>
      </div>
      <div className={`text-center sidebar w-100 h-100  overflow-auto`}>
        <ul className="d-flex flex-row flex-wrap justify-content-center list-unstyled">
          {countryList.map((country: any, index: number) => {
            return (
              <li className={`mb-2 py-3 d-flex bg-light ${index % 2 === 0 && 'me-2'}  w-45 hover-dark`}>
                <div className=" w-25">{country.emoji}</div>
                <div className="text-start w-75 ">{country.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default CoutriesSidebar;
