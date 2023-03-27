import axios, { AxiosRequestConfig, Method } from 'axios';

export type ApiCallOptions = Omit<AxiosRequestConfig, 'url' | 'method'>;

export const apiCall = <T>(method: Method, url: string, options?: ApiCallOptions) => {
  return axios({ method, url, ...options }).then((response) => {
    return response.data as T;
  });
};
