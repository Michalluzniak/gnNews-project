import { apiCall } from './apiCallHandler';

export const getGlobalNews = () => {
  const todayDate = new Date();

  return apiCall('GET', 'https://newsapi.org/v2/everything', {
    params: {
      apiKey: process.env.REACT_APP_NEWS_API_KEY,
      q: 'Global',
      from: { todayDate },
      sortBy: 'popularity',
      page: '1',
      pageSize: '10',
    },
  });
};
