import React from 'react';
import countryList from '../../mocks/countryList.json';

export const CountryList = () => {
  return (
    <ul className="sidebar-list d-flex flex-column list-unstyled  overflow-auto">
      {countryList.map((country: any) => {
        return (
          <li
            key={country.id}
            className={`d-flex align-items-center text-primary py-3 ps-1 pe-3 cursor-pointer border-bottom border-light hover-light text-sm`}
          >
            <div className=" w-25">{country.emoji}</div>
            <div className="text-start w-75 ">{country.name}</div>
          </li>
        );
      })}
    </ul>
  );
};
