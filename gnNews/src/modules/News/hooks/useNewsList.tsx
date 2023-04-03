import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryNews } from '../../../api/getCountryNews';
import { useAppSelector } from '../../../hooks/reduxTypes';
import { getCountryFromUrl } from '../../../utils/getCountryFromUrl';

export const useNewsList = () => {
  const { country } = useParams();
  const [countryIso, setCountryIso] = useState('pl');
  const [newsList, setNewsList] = useState<any>([]);
  const [newsListTotalResults, setNewsListTotalResults] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const [page, setPage] = useState(1);

  const pageSize = 20;

  const numberOfPages = newsListTotalResults && Math.round(newsListTotalResults / pageSize);

  const query = useAppSelector((state) => state.inputValueSlice.value);

  useEffect(() => {
    const countryIso = getCountryFromUrl(country!)[0].iso2;
    setCountryIso(countryIso);
    setNewsList([]);
  }, [country]);

  useEffect(() => {
    //
    const controller = new AbortController();

    const getNews = async () => {
      //
      try {
        setIsLoading(true);
        setIsError(false);

        const response: any = await getCountryNews({ query, countryIso, page, pageSize, controller });

        setNewsListTotalResults(response.totalResults);

        setNewsList((prev: any) => {
          return [...prev, ...response.articles];
          //
        });
        setIsLoading(false);
      } catch (error) {
        //
        if (axios.isCancel(error)) console.log('error from abort');
        setIsError(true);
        console.log(error);
      }
    };
    getNews();

    return () => controller.abort();
  }, [page, countryIso, numberOfPages, query, country]);

  return [newsList, numberOfPages, page, setPage, isLoading, isError, setCountryIso];
};