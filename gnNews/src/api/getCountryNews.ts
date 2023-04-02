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
      apiKey: '1c91dda609754965a265e4b4cd39b4a3',
      //  process.env.REACT_APP_NEWS_API_KEY,
      q: query,
      country,
      page,
      pageSize,
    },
    signal: controller.signal,
  });
};
