import { SingleElement } from './SingleElement';

const NewsTiles = ({ data, modalHandler }: any) => {
  return (
    <div className="d-flex flex-wrap  p-3 pe-1 ps-4">
      {data &&
        data.articles.map((article: any, index: number) => {
          return <SingleElement key={index} data={article} modalHandler={modalHandler} />;
        })}
    </div>
  );
};

export default NewsTiles;
