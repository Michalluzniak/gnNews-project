import { useEffect, useState } from 'react';
import { getCountryNews } from '../../../api/getCountryNews';

export const useNewsList = () => {
  const [country, setCountry] = useState('pl');
  const [newsList, setNewsList] = useState<any>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const page = 1;
  const pageSize = 10;
  const numberOfPages = newsList && newsList.totalResults / pageSize;

  useEffect(() => {
    //
    const getNews = async () => {
      try {
        setIsLoading(true);
        const response = await getCountryNews(country, page, pageSize);
        setNewsList(response);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
    };

    getNews();
  }, [page, country]);

  return [newsList, isLoading, isError, setCountry];
};
