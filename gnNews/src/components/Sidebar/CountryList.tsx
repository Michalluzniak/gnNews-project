import React from 'react';
import countryList from '../../mocks/countryList.json';

export const CountryList = () => {
  return (
    <ul className="sidebar-list d-flex flex-column list-unstyled pe-3 ps-1 overflow-auto">
      {countryList.map((country: any) => {
        return (
          <li className={`d-flex text-white my-2 py-2 cursor-pointer`}>
            <div className=" w-25">{country.emoji}</div>
            <div className="text-start w-75 ">{country.name}</div>
          </li>
        );
      })}
    </ul>
  );
};
