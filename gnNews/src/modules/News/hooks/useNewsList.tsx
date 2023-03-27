import axios from 'axios';
import { useEffect, useState } from 'react';
import { getCountryNews } from '../../../api/getCountryNews';
import { useAppSelector } from '../../../hooks/reduxTypes';

export const useNewsList = () => {
  const [country, setCountry] = useState('pl');
  const [newsList, setNewsList] = useState<any>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const page = 1;
  const pageSize = 20;
  const numberOfPages = newsList && newsList.totalResults / pageSize;

  const query = useAppSelector((state) => state.inputValueSlice.value);

  useEffect(() => {
    //
    const controller = new AbortController();
    if (page > numberOfPages) {
      console.log('erorrrrr');
    }
    console.log(query);
    const getNews = async () => {
      try {
        setIsLoading(true);
        const response = await getCountryNews({ query, country, page, pageSize, controller });
        setNewsList(response);
        setIsLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) console.log('error from abort');
        setIsError(true);
        console.log(error);
      }
    };
    getNews();
    return () => controller.abort();
  }, [page, country, numberOfPages, query]);

  return [newsList, isLoading, isError, setCountry];
};
