import { Badge } from 'reactstrap';

export const NewsFrom = () => {
  return (
    <div className="d-flex flex-column justify-content-around align-items-start h-25 ps-3 pe-3 border-bottom border-light ">
      <div className="d-flex flex-column align-items-start w-100">
        <p className="m-0 text-primary mb-3 text-sm">News From:</p>
        <Badge className=" w-75  d-flex align-items-center py-2 px-2 bg-white text-black ">
          🇵🇱 Poland
          <Badge className="d-flex ms-3 justify-content-center align-items-center bg-dark  square-button">PL</Badge>
        </Badge>
      </div>
      <p className="m-0 text-white text-sm">Change Country:</p>
    </div>
  );
};
