import { apiCall } from './apiCallHandler';

interface GetCountryNewsProps {
  query?: string;
  country: string;
  page: number;
  pageSize: number;
  controller?: any;
}

export const getCountryNews = ({ query, country, page, pageSize, controller }: GetCountryNewsProps) => {
  return apiCall('GET', 'https://newsapi.org/v2/top-headlines', {
    params: {
      apiKey: process.env.REACT_APP_NEWS_API_KEY,
      q: query,
      country,
      page,
      pageSize,
    },
    signal: controller.signal,
  });
};
