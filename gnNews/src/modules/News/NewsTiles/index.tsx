import { SingleElement } from './SingleElement';

const NewsTiles = ({ data, modalHandler, lastElementRef }: any) => {
  return (
    <div className="d-flex flex-wrap  p-3 pe-1 ps-4">
      {data &&
        data.map((article: any, index: number) => {
          return data.length === index + 1 ? (
            <SingleElement key={index} lastElementRef={lastElementRef} data={article} modalHandler={modalHandler} />
          ) : (
            <SingleElement key={index} data={article} modalHandler={modalHandler} />
          );
        })}
    </div>
  );
};

export default NewsTiles;
