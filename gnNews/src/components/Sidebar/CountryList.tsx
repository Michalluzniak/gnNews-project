import React from 'react';
import { Link } from 'react-router-dom';
import countryList from '../../mocks/countryList.json';

export const CountryList = () => {
  return (
    <ul className="sidebar-list d-flex flex-column list-unstyled  overflow-auto">
      {countryList.map((country) => {
        return (
          <Link key={country.id} to={`/country/${country.name}`} className="text-decoration-none">
            <li
              className={`d-flex align-items-center text-primary py-3 ps-1 pe-3 cursor-pointer border-bottom border-light hover-light text-sm`}
            >
              <div className=" w-25">{country.emoji}</div>
              <div className="text-start w-75 ">{country.name}</div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
