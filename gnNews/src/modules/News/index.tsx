import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxTypes';
import { useNewsList } from './hooks/useNewsList';
import NewsList from './NewsList';
import NewsModal from './NewsModal';
import NewsTiles from './NewsTiles';

const News = () => {
  const [newsList, numberOfPages, page, setPage, isLoading, isError, setCountryIso] = useNewsList();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataForModal, setDataForModal] = useState<{} | null>(null);

  const observer = useRef<any>();

  const lastElementRef = useCallback(
    (node: any) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && numberOfPages >= page) {
          console.log('lalal');
          setPage((prev: number) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
      console.log(node);
    },
    [isLoading, setPage, page, numberOfPages]
  );

  const modalHandler = (singleNewsData: {}) => {
    setIsModalOpen((prev) => !prev);
    setDataForModal(singleNewsData);
  };

  const newsDisplayOption = useAppSelector((state) => state.newsDisplay.value);

  useEffect(() => {
    setCountryIso('us');
  }, [setCountryIso]);

  return (
    <div>
      {newsDisplayOption === 'List' ? (
        <NewsList data={newsList} modalHandler={modalHandler} lastElementRef={lastElementRef} />
      ) : (
        <NewsTiles data={newsList} modalHandler={modalHandler} lastElementRef={lastElementRef} />
      )}
      {dataForModal && <NewsModal isModalOpen={isModalOpen} modalToggleHandler={modalHandler} data={dataForModal} />}
    </div>
  );
};

export default News;
