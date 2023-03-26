import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/reduxTypes';
import { useNewsList } from './hooks/useNewsList';
import NewsList from './NewsList';

const News = () => {
  const [newsList, isLoading, isError, setCountry] = useNewsList();

  const newsDisplayOption = useAppSelector((state) => state.newsDisplay.value);

  console.log(newsDisplayOption);

  useEffect(() => {
    setCountry('pl');
  }, []);

  return (
    <div className="">
      <NewsList data={newsList}></NewsList>
    </div>
  );
};

export default News;
