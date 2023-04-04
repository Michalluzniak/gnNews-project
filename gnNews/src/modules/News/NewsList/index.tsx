import { LegacyRef } from 'react';
import { SingleElement } from './SingleElement';

export interface NewsListElements {
  author: string;
  content: string | null;
  description: string | null;
  publishedAt: string;
  source: {
    id: string | null;
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string | null;
}

export interface NewsListProps {
  data: NewsListElements[];
  modalHandler: (item: NewsListElements) => void;
  lastElementRef?: LegacyRef<HTMLLIElement>;
}

const NewsList = ({ data, modalHandler, lastElementRef }: NewsListProps) => {
  return (
    <div>
      <ul className="list-unstyled p-3">
        {data &&
          data.map((article, index) => {
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
