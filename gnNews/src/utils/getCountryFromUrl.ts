import countryList from '../mocks/countryList.json';
export const getCountryFromUrl = (country: string): any => {
  return countryList.filter((item) => item.name === country && item.iso2);
};
