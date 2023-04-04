import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryNews } from '../../../api/getCountryNews';
import { useAppSelector } from '../../../hooks/reduxTypes';
import { getCountryFromUrl } from '../../../utils/getCountryFromUrl';

interface NewsList {
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

export const useNewsList = () => {
  const { country } = useParams();
  const [countryIso, setCountryIso] = useState<string>('pl');
  const [newsList, setNewsList] = useState<NewsList[]>([]);
  const [newsListTotalResults, setNewsListTotalResults] = useState<number>(0);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');

  const [page, setPage] = useState<number>(1);

  const pageSize = 20;

  const numberOfPages = newsListTotalResults && Math.round(newsListTotalResults / pageSize);

  const query = useAppSelector((state) => state.inputValueSlice.value);

  console.log(newsList);

  useEffect(() => {
    setNewsList([]);
    setPage(1);
  }, [country]);

  useEffect(() => {
    const countryIsoFromUrl = getCountryFromUrl(country!)[0].iso2;
    setCountryIso(countryIsoFromUrl);
    //
    const controller = new AbortController();

    const getNews = async () => {
      //
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await getCountryNews({
          query,
          countryIso,
          page,
          pageSize,
          controller,
        });

        setNewsListTotalResults(response.totalResults);
        console.log(response);

        setNewsList((prev) => {
          return [...prev, ...response.articles];
          //
        });
        setIsLoading(false);
      } catch (error: any) {
        //
        setIsLoading(false);
        if (axios.isCancel(error)) {
          console.log('error from abort');
        } else {
          setErrorMsg(error.response.data.message);
          setIsError(true);
          console.log(error);
        }
      }
    };
    getNews();

    return () => controller.abort();
  }, [page, query, country, countryIso]);

  return [newsList, numberOfPages, page, setPage, isLoading, isError, errorMsg] as const;
};
