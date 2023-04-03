import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Badge } from 'reactstrap';
import { getCountryFromUrl } from '../../utils/getCountryFromUrl';

interface FilteredCountry {
  emoji: string;
  id: number;
  iso2: string;
  name: string;
}

export const NewsFrom = () => {
  const [filteredCountry, setFilteredCountry] = useState<FilteredCountry>();
  const { country } = useParams();

  useEffect(() => {
    setFilteredCountry(getCountryFromUrl(country!)[0]);
  }, [country, filteredCountry]);

  return (
    <div className="d-flex flex-column justify-content-around align-items-start h-25 ps-3 pe-3 border-bottom border-light ">
      <div className="d-flex flex-column align-items-start w-100">
        <p className="m-0 text-primary mb-3 text-sm">News From:</p>
        <Badge className=" w-75  d-flex align-items-center py-2 px-2 bg-white text-black ">
          {filteredCountry && filteredCountry.emoji} {filteredCountry && filteredCountry.name}
          <Badge className="d-flex ms-3 justify-content-center align-items-center bg-dark  square-button">
            {filteredCountry && filteredCountry.iso2}
          </Badge>
        </Badge>
      </div>
      <p className="m-0 text-white text-sm">Change Country:</p>
    </div>
  );
};
