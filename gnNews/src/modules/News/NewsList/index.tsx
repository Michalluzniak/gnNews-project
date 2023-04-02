import { SingleElement } from './SingleElement';

const NewsList = ({ data, modalHandler }: any) => {
  return (
    <div>
      <ul className="list-unstyled p-3">
        {data &&
          data.articles.map((article: any, index: number) => {
            return <SingleElement key={index} data={article} modalHandler={modalHandler} />;
          })}
      </ul>
    </div>
  );
};

export default NewsList;
