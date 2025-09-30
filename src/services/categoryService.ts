import { useApi } from '../hooks/useApi';
import { CategoryInterfaces } from '../interfaces';

export const useCategoryService = () => {
  const { apiPublic } = useApi();

  const getCategories = async () => {
    const { data } = await apiPublic.get<CategoryInterfaces[]>('/categories');

    return data;
  };

  return {
    getCategories,
  };
};
