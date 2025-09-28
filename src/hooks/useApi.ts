import axios, { AxiosRequestConfig } from 'axios';
import { useTranslation } from 'react-i18next';

const options: AxiosRequestConfig = {
  baseURL: 'http://localhost:8080',
};

export const useApi = () => {
  const {
    i18n: { language },
  } = useTranslation();

  const apiPublic = axios.create(options);

  apiPublic.interceptors.request.use(
    function (config: any) {
      config.headers = {
        'Accept-Language': language,
        'Content-Type': 'application/json',
      };

      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  return { apiPublic };
};
