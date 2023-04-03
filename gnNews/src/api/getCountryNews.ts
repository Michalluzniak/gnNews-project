import { apiCall } from './apiCallHandler';

interface GetCountryNewsProps {
  query?: string;
  countryIso: string;
  page: number;
  pageSize: number;
  controller?: any;
}

export const getCountryNews = ({ query, countryIso, page, pageSize, controller }: GetCountryNewsProps) => {
  console.log(countryIso);
  return apiCall('GET', 'https://newsapi.org/v2/top-headlines', {
    params: {
      apiKey: process.env.REACT_APP_NEWS_API_KEY,
      // '1c91dda609754965a265e4b4cd39b4a3',
      q: query,
      country: countryIso,
      page,
      pageSize,
    },
    signal: controller.signal,
  });
};
