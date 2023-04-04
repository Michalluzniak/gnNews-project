import { LegacyRef } from 'react';
import { NewsListElements } from '..';
import { SingleElement } from './SingleElement';

export interface NewsTilesProps {
  data: NewsListElements[];
  modalHandler: (item: NewsListElements) => void;
  lastElementRef?: LegacyRef<HTMLDivElement>;
}

const NewsTiles = ({ data, modalHandler, lastElementRef }: NewsTilesProps) => {
  return (
    <div className="d-flex flex-wrap  p-3 pe-1 ps-4">
      {data &&
        data.map((article, index) => {
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
