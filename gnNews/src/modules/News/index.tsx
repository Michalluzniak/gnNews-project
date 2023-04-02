import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../hooks/reduxTypes';
import { useNewsList } from './hooks/useNewsList';
import NewsList from './NewsList';
import NewsModal from './NewsModal';
import NewsTiles from './NewsTiles';

const News = () => {
  const [newsList, isLoading, isError, setCountry] = useNewsList();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [dataForModal, setDataForModal] = useState<{} | null>(null);

  const modalHandler = (singleNewsData: {}) => {
    setIsModalOpen((prev) => !prev);
    setDataForModal(singleNewsData);
  };

  const newsDisplayOption = useAppSelector((state) => state.newsDisplay.value);

  useEffect(() => {
    setCountry('us');
  }, [setCountry]);

  console.log(newsList);

  return (
    <div>
      {newsDisplayOption === 'List' ? (
        <NewsList data={newsList} modalHandler={modalHandler} />
      ) : (
        <NewsTiles data={newsList} modalHandler={modalHandler} />
      )}
      {dataForModal && <NewsModal isModalOpen={isModalOpen} modalToggleHandler={modalHandler} data={dataForModal} />}
    </div>
  );
};

export default News;
