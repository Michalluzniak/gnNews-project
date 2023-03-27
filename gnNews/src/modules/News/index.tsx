import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/reduxTypes';
import { useNewsList } from './hooks/useNewsList';
import NewsList from './NewsList';
import NewsTiles from './NewsTiles';

const News = () => {
  const [newsList, isLoading, isError, setCountry] = useNewsList();

  const newsDisplayOption = useAppSelector((state) => state.newsDisplay.value);

  useEffect(() => {
    setCountry('pl');
  }, [setCountry]);

  return <div>{newsDisplayOption === 'List' ? <NewsList data={newsList} /> : <NewsTiles data={newsList} />}</div>;
};

export default News;
