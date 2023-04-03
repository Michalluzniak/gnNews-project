import { SingleElement } from './SingleElement';

const NewsList = ({ data, modalHandler, lastElementRef }: any) => {
  return (
    <div>
      <ul className="list-unstyled p-3">
        {data &&
          data.map((article: any, index: number) => {
            return data.length === index + 1 ? (
              <SingleElement key={index} lastElementRef={lastElementRef} data={article} modalHandler={modalHandler} />
            ) : (
              <SingleElement key={index} data={article} modalHandler={modalHandler} />
            );
          })}
      </ul>
    </div>
  );
};

export default NewsList;
