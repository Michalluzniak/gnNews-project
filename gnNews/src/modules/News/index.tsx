import React, { useCallback, useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxTypes';
import Error from './Error';
import { useNewsList } from './hooks/useNewsList';
import NewsList from './NewsList';
import NewsModal from './NewsModal';
import NewsTiles from './NewsTiles';

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

const News = () => {
  const [newsList, numberOfPages, page, setPage, isLoading, isError, errorMsg] = useNewsList();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataForModal, setDataForModal] = useState<NewsListElements>();

  const observer = useRef<IntersectionObserver>();

  const lastElementRef = useCallback(
    (node: HTMLLIElement & HTMLDivElement) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && numberOfPages >= page) {
          console.log('visible');
          setPage((prev: number) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, setPage, page, numberOfPages]
  );

  const modalHandler = (singleNewsData?: NewsListElements) => {
    setIsModalOpen((prev) => !prev);
    singleNewsData && setDataForModal(singleNewsData);
  };

  const newsDisplayOption = useAppSelector((state) => state.newsDisplay.value);

  return (
    <div>
      {!isError ? (
        newsDisplayOption === 'List' ? (
          <NewsList data={newsList} modalHandler={modalHandler} lastElementRef={lastElementRef} />
        ) : (
          <NewsTiles data={newsList} modalHandler={modalHandler} lastElementRef={lastElementRef} />
        )
      ) : (
        <Error>{errorMsg}</Error>
      )}

      {dataForModal && <NewsModal isModalOpen={isModalOpen} modalToggleHandler={modalHandler} data={dataForModal} />}
      {isLoading && 'Loading...'}
    </div>
  );
};

export default News;
