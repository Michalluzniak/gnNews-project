import countryList from '../mocks/countryList.json';

interface GetCountryFromUrl {
  id: number;
  name: string;
  iso2: string;
  emoji: string;
}

export const getCountryFromUrl = (country: string): GetCountryFromUrl[] => {
  return countryList.filter((item) => item.name === country && item.iso2);
};
