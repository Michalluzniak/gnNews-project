import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';

export const SingleElement = ({ data }: any) => {
  const cardImage = data.urlToImage
    ? data.urlToImage
    : 'https://images.unsplash.com/photo-1478940020726-e9e191651f1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';

  return (
    <div className={`d-flex flex-wrap basis-32 m-2 shadow rounded overflow-hidden `}>
      <Card className="w-100 h-100">
        {/* <img alt="Sample" src={data.urlToImage} className="rounded-top w-100" style={{ filter: ' brightness(60%)' }} /> */}
        <CardImg
          alt="Card image cap"
          src={cardImage}
          style={{
            height: '18rem',
            filter: ' brightness(60%)',
            objectFit: 'cover',
            width: '100%',
          }}
        />
        <CardImgOverlay>
          <CardTitle className="p-3 text-white" tag="h4">
            {data.title}
          </CardTitle>
        </CardImgOverlay>
        <CardBody className="d-flex flex-column justify-content-between px-2 pb-2 w-100">
          <CardText className="my-3">{data.description ? data.description : data.title}</CardText>
          <div>
            <CardText className="text-sm">Source: {data.source.name}</CardText>
            <CardText className="text-sm">Published: {data.publishedAt.split('T')[0]}</CardText>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
