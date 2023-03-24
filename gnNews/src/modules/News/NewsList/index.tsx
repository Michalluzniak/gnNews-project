import { SingleElement } from './SingleElement';

const NewsList = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <ul className="list-unstyled">
        {data &&
          data.articles.map((article: any) => {
            return <SingleElement data={article} />;
          })}
      </ul>
    </div>
  );
};

export default NewsList;
