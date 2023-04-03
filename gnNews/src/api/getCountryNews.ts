import { apiCall } from './apiCallHandler';

interface GetCountryNewsProps {
  query?: string;
  countryIso: string;
  page: number;
  pageSize: number;
  controller?: any;
}

export const getCountryNews = ({ query, countryIso, page, pageSize, controller }: GetCountryNewsProps) => {
  return apiCall('GET', 'https://newsapi.org/v2/top-headlines', {
    params: {
      apiKey: '1c91dda609754965a265e4b4cd39b4a3',
      //  process.env.REACT_APP_NEWS_API_KEY,
      q: query,
      country: countryIso,
      page,
      pageSize,
    },
    signal: controller.signal,
  });
};
