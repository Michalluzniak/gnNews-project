import { apiCall } from './apiCallHandler';

interface GetCountryNewsProps {
  query?: string;
  countryIso: string;
  page: number;
  pageSize: number;
  controller?: any;
}

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

interface ResponseData {
  articles: NewsList[];
  status: string;
  totalResults: number;
}

export const getCountryNews = ({
  query,
  countryIso,
  page,
  pageSize,
  controller,
}: GetCountryNewsProps): Promise<ResponseData> => {
  console.log(countryIso);
  return apiCall('GET', 'https://newsapi.org/v2/top-headlines', {
    params: {
      apiKey: process.env.REACT_APP_NEWS_API_KEY,
      // process.env.REACT_APP_NEWS_API_KEY,
      // '1c91dda609754965a265e4b4cd39b4a3',
      q: query,
      country: countryIso,
      page,
      pageSize,
    },
    signal: controller.signal,
  });
};
