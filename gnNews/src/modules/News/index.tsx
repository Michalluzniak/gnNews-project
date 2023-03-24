import React, { useEffect } from 'react';
import { useNewsList } from './hooks/useNewsList';
import NewsList from './NewsList';

const News = () => {
  const [newsList, isLoading, isError, setCountry] = useNewsList();

  useEffect(() => {
    setCountry('pl');
  }, []);

  return (
    <div>
      <NewsList data={newsList}></NewsList>
    </div>
  );
};

export default News;
