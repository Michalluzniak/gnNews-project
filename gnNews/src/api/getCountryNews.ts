import { apiCall } from './apiCallHandler';

export const getCountryNews = (country: string, page: number, pageSize: number) => {
  return apiCall('GET', 'https://newsapi.org/v2/top-headlines', {
    params: {
      apiKey: process.env.REACT_APP_NEWS_API_KEY,
      country,
      page,
      pageSize,
    },
  });
};
