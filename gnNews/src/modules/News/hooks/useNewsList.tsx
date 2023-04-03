import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCountryNews } from '../../../api/getCountryNews';
import { useAppSelector } from '../../../hooks/reduxTypes';
import { getCountryFromUrl } from '../../../utils/getCountryFromUrl';

export const useNewsList = () => {
  const { country } = useParams();
  const [countryIso, setCountryIso] = useState('pl');
  const [newsList, setNewsList] = useState<any>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const page = 1;
  const pageSize = 20;
  const numberOfPages = newsList && newsList.totalResults / pageSize;

  const query = useAppSelector((state) => state.inputValueSlice.value);

  useEffect(() => {
    const countryIso = getCountryFromUrl(country!)[0].iso2;
    console.log(countryIso, 'clg');
    setCountryIso(countryIso);
  }, [country]);

  useEffect(() => {
    //
    const controller = new AbortController();
    // if (page > numberOfPages) {
    //   console.log('erorrrrr');
    // }
    // console.log(query);
    const getNews = async () => {
      try {
        setIsLoading(true);
        const response = await getCountryNews({ query, countryIso, page, pageSize, controller });
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
  }, [page, countryIso, numberOfPages, query]);

  return [newsList, isLoading, isError, setCountryIso];
};
